const amerika = ['nigger' , 'china', 'idiots'];

function delet(){
    for(let items = amerika.length ; items > 0; items--){
        console.log(amerika)
        amerika.pop()
    }
}
//delet()


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
const changeMassiv = function(){
    let mas = JSON.stringify({ hello: undefined, test: 1 }, (key, value) => {
    if (value === undefined) {
        return value = "undefined";
    }
    return value;
    });

    console.log(mas)
}
//changeMassiv()



//вывод последнего символа в строке
function lastChar(char){
    console.log(char.charAt(char.length - 1))
}
//lastChar("hello wot")


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


//вывод отсутствующих значений
function arrayDiff(a, b) {
    return a.filter(item => !b.includes(item))
}
//console.log(arrayDiff([1, 2], [1]))
function array_diff(a, b) {

    let arr = new Array();
    for(let i = 0; i < a.length; i++){
        if(b.indexOf(a[i])<0){
            arr.push(a[i]);
        }
    }
  
    return arr;
}
//console.log(array_diff([1,4,2,3], [1,2,3]))


//первое цифра из числа
function firstNum(chislo){
    let firstChar = String(chislo)[0]
    return parseInt(firstChar)
}
//console.log(firstNum(952))


//четное или не четное
function evenOrNot(num){
    return num % 2 === 0
} 
//console.log(evenOrNot(7))


//итерации через параметр
let path = function(score){
    for(; score > 0; score--){
        console.log("penis")
    }
}
//path(12)


//парс и распарс JSON объекта
const JsonObgectFile = require("./main.json")

function parsing(){
    const parsed = JSON.stringify(JsonObgectFile)
    console.log(parsed);

    const unParce = JSON.parse(parsed)
    console.log(unParce)
}
//parsing()


//рандомный примитив из объета 
function result(number){

const array = [1,2,15,massiv = {name: "js", let: "change"}, 'name', 14, false];
const lengthArray = array.length    

    for(i=0; i < number; i++){
        mainResult = array[(Math.floor(Math.random() * lengthArray))]
        console.log(mainResult)
    }
}
//result(5)


//првоерка на то одинаковы ли первые буквы двух слов
function fierstCharacter(word1, word2){
    if (word1.length > 0 && word2.length > 0){
        return word1[0].toLowerCase() === word2[0].toLowerCase()
    }else{
        return false
    }
}
//console.log(fierstCharacter('Maximka', "xarishke"))


//пример мутации через копирование 
function mutaithion(){
    const info = {
        name: "jon",
        age: 25
    }
    const info2 = info
    info2.name = 'maximka'
    info2.black = true

    console.log(info)
}
//mutaithion()


//как избежать мутации через Object.assign
function assign(){
    const  person = {
    name: "Maik",
    age: 36
    }

    const personTwo = Object.assign({}, person)
    personTwo.name = 'maximka'
    personTwo.black = true

    console.log(person)
}
//assign()

// как избежать мутации через оператор разделения объекта на свойства ... (spread)
// ссылки на вложенные объекты сохраняются
function tripledot(){
    const gyes = {
    one:{name: "maximka"},
    two: "nope"
}
    const gyes2 = {...gyes}
    gyes2.one.name = 25
    gyes2.one = "secs"

    console.log(gyes)
    console.log(gyes2)

//spread с массивом
    let name = 10
    let jett = [190,2,3]

    let name2 = name
    let jett2 = [...jett]


    name2 = "поменялось"
    jett2[1] = "поменялось"

    // console.log("Объект 1: " + name + " ||Объект 2: " + jett )
    // console.log("Объект 3: " + name2 + " ||Объект 4: " + jett2)
}
//tripledot()

//избегание мутации путем конвертации в строку и  распарса 
function stroca(){
    
    const cabs = {
        teacher: "sobakina",
        position: {
            floor: 18,
            trash: "PC"
        }
    }

    let cabs2 = JSON.parse(JSON.stringify(cabs))
    cabs2.position.floor = "change"

    console.log(cabs, "||",  cabs2)
}
//stroca()


//замыкание
function parent(){
    const data = 23

    function child(){
        console.log(data)
    }
    return child()
}
//parent() 


//реверс строки
function reverseString(string){
    console.log(string.split('').reverse().join(''))
}
// reverseString("Some Body")



//2.47.20
//code.mu 1.4 
