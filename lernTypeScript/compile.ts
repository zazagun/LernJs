let myNumber: number = 11;
let age: string = "age: "
console.log(age + myNumber);

const nums: Array<number> = [1,2,3,4]
for(let i=0; i<nums.length; i++){
    if(nums[i] === 2){
        console.log("two")
        break
    }
    console.log(nums[i])
}

const func = (num: number): void => {
    console.log(num);
};
func(12)

console.log('Boobs')