const amerika = ['nigger' , 'china', 'idiots'];

function delet(){
    for(let items = amerika.length ; items > 0; items--){
        console.log(amerika)
        amerika.pop()
    }
}
//delet()


//вывод вложенного значения из объекта
let names = {
    antoshka: {
        SecName: 'pipirkin',
        Thrname: 'zalupikin'
    },
    Maxonchik:{
        SecName: 'mushka',
        Thrname: 'mishustik'
    }
}
//console.log(names.antoshka.SecName)



//изменение типа значения на str
let mas = JSON.stringify({ hello: undefined, test: 1 }, (key, value) => {
    if (value === undefined) {
        return value = "undefined";
    }
    return value;
});
//console.log(mas)


//изменение примитива в константе
const objConst = {
  item: "foo",
};
let objLet = {
  item: "bar",
};
objConst.item = "bar";
objLet.item = "foo";
//console.log(objConst, objLet);


//итерации
let path = function(score){
    for(; score > 0; score--){
        console.log("penis")
    }
}
//path(12)


//парс и распарс JSON объекта
const parsObj = require("./main.json")

function parsing(){
    const parsed = JSON.stringify(parsObj)
    console.log(parsed);

    const unParce = JSON.parse(parsed)
    console.log(unParce)
}
//parsing()



//проверка чет или нет
function sumAndCheckEvenOdd(a, b) {
    const sum = a + b;
    if (sum % 2 === 0) {
        return "Сумма четная";
    } else {
        return "Сумма нечетная";
    }
}
// Пример использования функции
//console.log(sumAndCheckEvenOdd(2, 3)); // Сумма нечетная
//console.log(sumAndCheckEvenOdd(2, 4)); // Сумма четная



//2.27.35
