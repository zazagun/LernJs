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

const chars = '+_-/*!&$#?=@<>abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

const ArryOfPasswords = [];
for (let n = 0; n < 5; n++) {
    let PushingToArray = '';
    for (let i = 0; i < 10; i++) {
        PushingToArray += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    ArryOfPasswords.push(PushingToArray);
}   
// console.log(ArryOfPasswords)

<<<<<<< Updated upstream
let ch = '12345'
console.log(ch.charAt(Math.floor(Math.random() * ch.length)))
=======
const myPromise = new Promise((resolve, reject) => {
    const customReject = () => console.log("bichii penis");
    const customResolve = function(num) {
        console.log(num / 2);
        if (num < 10) {
            console.log("смолл");
        } else if (num > 10) {
            customReject();
        }
    };


    resolve(customResolve);
});

console.log("никитиа съел мою какашку")
function n(nums){
    console.log(nums)
}
n(12)
>>>>>>> Stashed changes


//2.27.35
