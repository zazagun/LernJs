let myNumber: number = 42;
let Str: string = "age: "
console.log(Str + myNumber);

const nums: Array<number> = [1,2,3,4]
for(let i=0; i<nums.length; i++){
    if(nums[i] === 2){
        console.log("тут етсь двойка")
    }
}

const func = (num: number): void => {
    console.log(num);
};
func(12)

console.log("pisia")