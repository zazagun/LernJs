import {RandomNums, arr} from "./RandomNums.mjs"
RandomNums(1024)
let count = 0

//сортировка Хоара
function quickSort(array){

    if(array.length <= 1){
        return array
    }

    let midleOfArray = Math.round(array.length / 2)
    let midleNum = array[midleOfArray]
    let less = [] //меньше midleNum
    let more = [] //больше midleNum

    for(let i = 0; i < array.length; i++){
        count += 1
        if(i === midleNum){
            continue
        }else if(array[i] < midleNum){
            less.push(array[i])
        }else if(array[i] > midleNum){
            more.push(array[i])
        }
    }
    return [...quickSort(less), midleNum, ...quickSort(more)]
}

console.log(quickSort(arr))
console.log(`count: ${count}`)
