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


//сложение чисел от 1 до 100
function OneToOneHangrit(){
    let n = 0;

    for(i=0; i<=100; i++){
        n += i
    }
    console.log(n)
}
// OneToOneHangrit()


//вывод последнего символа в строке
function lastChar(char){
    console.log(char.charAt(char.length - 1))
}
//lastChar("hello wot")


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
function randomObj(number){

    const array = [1,2,15,'name',14,false];
    const lengthArray = array.length
    const ArrayOfRandomobg = []    

    for(i=0; i < number; i++){
        mainResult = array[(Math.floor(Math.random() * lengthArray))]
        ArrayOfRandomobg.push(mainResult)
    }
    console.log(ArrayOfRandomobg)
}
// randomObj(5)


//Создание вложенных массивов с пересчетом
let FullArray = []

function masiivchik(){

    for(n=1; n<=4; n++){       
        masPlus = []

        for(i=1; i<=3; i++){
        masPlus.push(i)
        }
        
        FullArray.push(masPlus)
    }
    console.log(FullArray)
}
//masiivchik()


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
function Toassign(){
    const  person = {
    name: "Maik",
    age: 36
    }

    const personTwo = Object.assign({}, person)
    personTwo.name = 'maximka'
    personTwo.black = true

    console.log(person)
}
//Toassign()

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
//вложенные ссылки все равно меняются
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
//reverseString("Some Body")


//среднее значение в массиве
function SredZnach(AllNums) {
    const lengthOfMassiv = AllNums.length
    let countOfIteretions = 0;
    let sumOfNum = 0;

    for (let i = 0; i < lengthOfMassiv; i++) {
        if(typeof AllNums[i] === 'number' && !isNaN(AllNums[i])){
            sumOfNum += AllNums[i];
            countOfIteretions++;
        }
    }
    if(countOfIteretions === 0) {
        console.log(0);
    }else{
    const ResultOfFunction = sumOfNum / countOfIteretions;
    console.log(parseFloat(ResultOfFunction));
    }
}
// SredZnach(["name",9,5,5,true,3,1,"string",7,21,3,undefined]);


//Максимально значение в массиве
function MaxNum(Nums){
    let MaxValue = Nums[0]

    for(i=0; i < Nums.length; i++){
        if(Nums[i] > MaxValue){
            MaxValue = Nums[i]
        }
    }
    return console.log(MaxValue)
}
// MaxNum([10,5,21,14,42,5])


//сумма квадратов всех чисел в массиве
function sumOfSqrnum(massivOfNum){
    const lengthOfMassiv = massivOfNum.length
    let sumOfSqr = 0

    for(i=0; i < lengthOfMassiv; i++){
        sumOfSqr += massivOfNum[i]**2 
    }
    return console.log(sumOfSqr)
}
//sumOfSqrnum([1,4,2,5,2,5])


// сумма чисел больше 0 но меньше 10
function sumTen(massivWithNum){
    const lengthOfMassiv = massivWithNum.length
    sum = 0 

    for(i=0; i < lengthOfMassiv; i++){
        if(massivWithNum[i] > 0 && massivWithNum[i] < 10){
            sum += massivWithNum[i]
        }
    }
    return console.log(sum)
}
// sumTen([1,5,2,6,10,33,23,1,6,32,10])


//разбить строку на буквы в массиве
function splitOnLetter(massivWord){
    const results = String(massivWord).split('')
    console.log(results)
}
// splitOnLetter(12345)


//разница между function declaration и functiob expression
//function declaration
// SumToPlus(1,5)
function SumToPlus(a,b){
    console.log(a + b)
}
//function expression
let FuncToPlus = function(a,b){
    console.log(a + b)
} 
// FuncToPlus(5,3)
//expression нельзя использовать до объявления


//рандомное число 1 до 10
let fullmas = []
function randomNums(chars){
    for(i=0; i<chars; i++){
        let nums = Math.round(Math.random()*10)+1
            fullmas.push(nums)
    }
    return console.log(fullmas)
}
// randomNums(5)


//факториал числа
function factorial(n) {
    if (n === 0) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

// console.log(factorial(4)) 


//удаление повторов
const RepetElements = [1,2,2,3,4,4,5]
function Deletrepet(arrays){
    let unickRepeters = []
    
    for(leti=0; i<arrays.length; i++){
        let isU = true

        for(let m=0; m<unickRepeters.length; m++){

            if(arrays[i] === unickRepeters[m]){
                isU = false
                break
            }
        }
        if(isU){
                unickRepeters.push(arrays[i])
        }
    }
    return unickRepeters
}
// console.log(Deletrepet(RepetElements))

function withOutRepet(arr){
    return [...new Set(arr)];
}
// console.log(withOutRepet(RepetElements));


//пример побитового сдвига
let MinusNum = 3 << 1 //делает число болшше из 11 в 111
let PlusNum = 3 >> 1 //делает число меньше делает чсло из 11 в 1
// console.log(MinusNum, PlusNum)


//перевод из 2-ичной системы в 10-ную
function ToTenFromTwo(binaryNum) {
    let binaryString = binaryNum.toString()
    let resultOfFunc = 0

    for (let i = 0; i < binaryString.length; i++) {

        let digit = parseInt(binaryString[i], 10)
        let position = binaryString.length - 1 - i

        if (digit < 2) {
            resultOfFunc += digit * 2 ** position
        }else if(digit >= 2){
            console.log("Как минимум одно из чисел более 1")
            return NaN
        }
         else {
            console.log("Некорректное двоичное число");
            return NaN
        }
    }
    return resultOfFunc
}
// console.log(ToTenFromTwo(1001101))


//перевод из 10 системы счисления в двоичную
function toBynary(num){
    let bynaryDigits = []

    if(num === 0){
        return 0
    }
    const CopyOfNum = num

    let UnaryPlusOfNum = Math.abs(num)

    if(num > 0 || num < 0){
        while(UnaryPlusOfNum > 0){
            let remind = UnaryPlusOfNum % 2
            bynaryDigits.unshift(remind) //можно через unshift(remind)
            UnaryPlusOfNum = Math.floor(UnaryPlusOfNum / 2)
        }
        if(CopyOfNum < 0){
            bynaryDigits.unshift("-")
        }
    }
    return bynaryDigits.join('')
}
// console.log(toBynary(-10))


//Задача по скобкам более универсальнон решение
let exersise = (')))(((')
function Scobki(arr){
    let masRight = []
    let masLeft = []
    let result = false 

    for(let item of arr){
        if(item === "("){
            masLeft.push(item)
        }else if(item === ")"){
            masRight.push(item)
        }else{
            result = "Unexpected symbol: " + item
            return result
        }
    }
    if(masLeft.length === masRight.length){
        result = true
    }else{
        result = false
    }
    return result
}
// console.log(Scobki(exersise))
//второе решение менее правильно 
const exersise2 = "(())()"
function Scobki_two(arr){
    let massOfResult = []

    for(let item of arr){
        if(item === "("){
            massOfResult.push(item)
        }else if(item === ")"){
            let midleRes = massOfResult.pop()
            if(midleRes === undefined){
                massOfResult = false
                return massOfResult
            }
        }else{
            massOfResult = "Unexpected symbol: " + item
            return massOfResult
        }
    }
    if(massOfResult.length === 0){
        massOfResult = true
        return massOfResult
    }else if(massOfResult.length !== 0){
        massOfResult = false
        return massOfResult
    }
    return massOfResult
}
// console.log(Scobki_two(exersise2)) 


//поиск индекса у искомого
let mas = [1,6,4,3,2,1,4]
function findIndex(arr, find){
    let result
    
    for(let i=0; i <arr.length; i++){
        if(typeof arr[i] === 'number'){
            if(arr[i] === find){
                result = i
                return result
            }
        }
    }
    result = "Число: " + find + " не найдено"
    return result
}
// console.log(findIndex(mas, 2))


//Фильтрация массива, возвращение только четных чисел 
function onlyEven(arr){
    let result = []
    for(i=0; i<arr.length; i++){
        if(arr[i]%2 === 0 && typeof(arr[i]) === "number"){
            result.push(arr[i])
        }
    }
    return result
}
// console.log(onlyEven([1,2,1,7,6,8,9,11,12,"2"]))


//подсчет гласных в строке
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
// console.log(countVowels("Hello World"));


//Палиндром(строка читает одинаково с обоих сторон)
function polindrom(string){

    const LowerString = string.toLowerCase()
    const lengthOfStr = LowerString.length
    let result = "Эта полиндром"

    for(let i=0; i<lengthOfStr/2; i++){
        if(LowerString[i] !== LowerString[lengthOfStr -1 -i]){
            return "Это не полиндром"
        }
    }
    return result
}
// console.log(polindrom("Мадам"))


//объеденение двух объектов в один 
function joinObg(){
    const Obj_One = {
        name:"Max",
        secName:"Mad"
    }
    const Obj_Two ={
        age: 25,
        work: true
    }

    const resultObject = Object.assign({}, Obj_One, Obj_Two)
    //так же можно через spread 
    const exempleObject = {
        ... Obj_One,
        ...Obj_Two
    }

    return resultObject
}
// console.log(joinObg())


//округление до одного знака после запятой
function round(mas){
    let newMas = []

    for(i=0; i<mas.length; i++){
        // let midleRes = Math.round(mas[i] *10) /10
        let midleRes = parseFloat(mas[i].toFixed(1))
        newMas.push(midleRes)
    }   
    return newMas
}
// console.log(round([1.456, 2.125, 3.32, 4.1, 5.34]))



let respons = (a,b) => {
    return a+b
}
respons(1,5)
//разбор стрелочных функций

const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
});

const firstPost = {
    id: 1,
    author: 'Bogdan',
};

newPost(firstPost);



//4.47.50
//code.mu 1.9 №1