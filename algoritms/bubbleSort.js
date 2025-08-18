import {RandomNums, arr} from "./RandomNums.mjs"

RandomNums(1024)
let count = 0


// const arr = [2,5,3,-1,3-7,21,-11,2]
function bubbleSort(array){

    let newObject = Object.assign([], array)

    for(let i = 0; i < newObject.length; i++){
        for(let j = 0; j < newObject.length; j++){
            if(newObject[j+1] < newObject[j]){
                let tmp = newObject[j]
                newObject[j] = newObject[j+1]
                newObject[j+1] = tmp
            }
            count += 1
        }
    }
    return newObject
}

console.log(bubbleSort(arr))
console.log(`count: ${count}`)