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
        Thrname: 'zalupikin',
        lastName: "nigritok",
        sex: "male"
    },
    Maxonchik:{
        SecName: 'mushka',
        Thrname: 'mishustik',
        lastName: "nigritok",
        sex: "female"
    }
}
//console.log(names.antoshka.SecName)


//проверка node или браузерное api
function Broze(){
    if (typeof(window) === 'undefined'){
        console.log('это nodeJS')
    }else if(typeof(window) !== 'undefined'){
        console.log('это браузерное API')
    }else{
        console.log('хз чо за среда')
    }
}
//Broze()


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


//итерации через параметр
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


//рандомное значение 
const array = [1,2,15,massiv = {name: "js", let: "change"}, 'name', 14, false];
const lengthArray = array.length 

function result(number){
    for(i=0; i < number; i++){
        mainResult = array[(Math.floor(Math.random() * lengthArray))]
        console.log(mainResult)
    }
}
//result(5)


//пример мутации через копирование 
const info = {
    name: "jon",
    age: 25
}
const info2 = info
info2.name = 'maximka'
info2.black = true

//console.log(info)


//как избежать мутации через Object.assign
const  person = {
    name: "Maik",
    age: 36
}
const personTwo = Object.assign({}, person)
personTwo.name = 'maximka'
personTwo.black = true

console.log(person)






//2.35.
