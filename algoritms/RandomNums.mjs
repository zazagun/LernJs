const arr = []

function RandomNums(quantity){
    for(let i=0; i < quantity; i++){
        let num = Math.floor(Math.random() * 100 + 1)
        arr.push(num)
    }
    return arr
}

export{RandomNums, arr}