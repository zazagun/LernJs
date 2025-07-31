"use strict";
let myNumber = 11;
let age = "age: ";
console.log(age + myNumber);
const nums = [1, 2, 3, 4];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 2) {
        console.log("тут етсь двойка");
        break;
    }
    console.log(nums[i]);
}
const func = (num) => {
    console.log(num);
};
func(12);
console.log('Boobs');
