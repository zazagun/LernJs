function RetName (name){
    if(name !== undefined){
        console.log(`Привет ${name}`)
    }else{
        console.log("Введите имя")
    }
}

//можно в начале функции написать export
const funcToCalc = (a,b) => {
    let respons = "Введите оба значения"
    let arr = [a,b]
    let sum = 0

    if(a === undefined || b === undefined){
        return respons
    }else{
        sum = arr.reduce((accum, plusing) => {
            return accum += plusing
        })
    }
    return sum
}

let params = 25
export {RetName, funcToCalc, params}