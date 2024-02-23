/* 
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

class Group {

  constructor() {
    this.newArray = [];//hi there
  }

  static from(array) {
    this.newArray = array;
    return this;
  }
  static has(numbers) { // or use includes :D
    for (let item of this.newArray) {
      if (item == numbers) {
        return true;
      }
    }
    return false;
  }
  static add(number) {
    if (!this.newArray.includes(number)) {
      this.newArray.push(number);
    }
  }
  static delete(number) {
    this.newArray = this.newArray.filter((num) => num != number);
  }
  static [Symbol.iterator]() {
    let index = 0;
    let newArray = this.newArray;
    return {
      next() {
        if (index == newArray.length) {
          return { done: true };
        }
        let value = newArray[index];
        index++;
        return { value: value, done: false };
      }
    }
  }
}

// class GroupIterator extends Group{
//   constructor(GroupArray) {
//     super(GroupArray);
//   }

//   next(){
//     let index = 0;
//     if(index == this.newArray.length){
//       return {done: true};
//     }
//     let value = {value:this.newArray[index]}
//     index ++;
//     return {value, done:false};
//   }
// }

// Group.prototype[Symbol.iterator] = function() {
//   return new GroupIterator(this);
// };

// console.log(new GroupIterator(["a", "b", "c"]))
console.log(Group.from(["a", "b", "c"]))

// Tests:
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c