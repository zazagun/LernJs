const arr = [2,5,3,-1,3-7,21,-11,2]
let count = 0

function selectionSoart(array){
    for(let i = 0; i < array.length; i++){
        let minIndex = i
        for(let j = i+1; j<array.length; j++){
            if(array[j] < array[minIndex]){
                minIndex = j
            }
            count += 1
        }
        let tmp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = tmp
    }
    return array
}

console.log(selectionSoart(arr))
console.log(`count: ${count}`)