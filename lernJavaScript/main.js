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


//вызов анонимной функции
(function(x){
    console.log(x)
})
// (5)//для вызова написать скобки и если надо передать параметр


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
//lastChar("hello worm")


//вывод отсутствующих значений
function arrayDiff(a, b) {
    return a.filter(item => !b.includes(item))
}
// console.log(arrayDiff([1, 2], [1]))
function array_diff(a, b) {

    let arr = new Array()
    for(let i = 0; i < a.length; i++){
        if(b.indexOf(a[i])<0){
            arr.push(a[i])
        }
    }
  
    return arr;
}
// console.log(array_diff([1,4,2,3], [1,2,3]))


//парс и распарс JSON объекта
function parsing(){
    //жалуется на type: module в pockege.json
    const JsonObgectFile = require("./main.json")

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

function masiivchik(){
    let FullArray = []

    for(n=1; n<=4; n++){       
        masPlus = []

        for(i=1; i<=3; i++){
        masPlus.push(i)
        }
        
        FullArray.push(masPlus)
    }
    return FullArray
 
}
// console.log(masiivchik())


//првоерка на то одинаковы ли первые буквы двух слов
function fierstCharacter(word1, word2){
    if (word1.length > 0 && word2.length > 0){
        return word1[0].toLowerCase() === word2[0].toLowerCase()
    }
}
// console.log(fierstCharacter('Maximka', "Mxarishke"))


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

    console.log("Объект 1: " + name + " ||Объект 2: " + jett )
    console.log("Объект 3: " + name2 + " ||Объект 4: " + jett2)
}
// tripledot()

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
//или
let Func = (a,b)=>{
    console.log(a+b)
}
// Func(5,2)
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

        if (digit < 2 && digit >=0) {
            resultOfFunc += digit * 2 ** position
        }else if(digit >= 2){
            console.log("Как минимум одно из чисел более 1")
            return NaN
        }
         else{
            console.log("Некорректное двоичное число")
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

    str.split('').forEach(item =>{
        vowels.includes(item) ? count++ : null
    })

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
function polindromTwo(string){
    const toLow = string.toLowerCase()
    const reversStr = toLow.split("").reverse().join('')
    let result = false

    if(toLow === reversStr){
        result = true
    }
    return result
}
// console.log(polindromTwo("МаДАм"))


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
    //так же можно через spread (...)
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


//обработка пользовательской ошибки
function Err(){
    function notE(a){
        if(a.toLowerCase() === "e"){
            throw Error("НЕ ВВОДИ БЛЯ Е")
        }else{
            return true
        }
    }
    try{
        let result = notE("e")
        console.log(result)
    }catch (e){
        console.error(e.message)
    }
    console.log("код продолжает работать дальше....")
}
// Err()
function TryCath(){
    try{
        let obj = "это не JSON"
        let result = JSON.parse(obj)
    }catch (e){ // перменная e получает в себя саму ошибку
        console.log(e.name)
        console.log(e.message)
        // console.log(e.stack)
    }finally{
        console.log("finaly выполнится в бом случае")
    }
}
// TryCath()


//проверка на то, одинаковые ли массивы
const ArrayForCheck = [1,2,3]
const ArrayForCheck2 = new Array(1,2,3)
function ravnoOrNo(a,b){

    let result = true

    if(a.length === b.length){
        for(i=0; i<a.length; i++){
            if(a[i] === b[i]){
                break
            }else{
                return false
            }
        }
    }else{
        return false
    }
    return result
}
// console.log(ravnoOrNo(ArrayForCheck, ArrayForCheck2))


// операторы ?? и ??=
const Slianie = ()=>{
    let One = (word) =>{
        return word ?? "Это значение по умолчению"//это оператор нулевого слияния ??
        }//тут вернется правое значение т.к. левое либо null или undefiend
    console.log(One(null))

    let Two = (word)=>{
        word ??= "Это значение по умолчению"
        return word //оператор присваивания с нулевым значением ??=
    }
    console.log(Two())
}
// Slianie()


//поиск .dom & http://
function findDomain(){
    const DomainMassiv = [
    "http//pisia.com",
    "ligaOfpidors",
    "http//govno.ru",
    "http//smotru.ru",
    "piski.ru"
    ];

    let massWithWithHttp = []
    let massWithDotCom = []

    function returnFilter(){
        const filteredArrayHttp = DomainMassiv.filter(url => url.startsWith("http//"))
        massWithWithHttp.push(filteredArrayHttp)

        const filteredDotCom = DomainMassiv.filter(dot => dot.endsWith(".com"))
        massWithDotCom.push(filteredDotCom)

        absolut = []
        absolut.push("массив с .com: " + filteredDotCom,
            "массив с http: " + filteredArrayHttp)

        return absolut

    }
    console.log(returnFilter())}
// findDomain()


//map, forEach и reduce
let forEachiMapReduce = ()=>{
    let m = [1,2,3,4,5]

    const newArr = m.map((elem)=>{//создает полностью новый массив добавляя 
        return `Это число ${elem}`//значения в один и тот же массив
    })
    console.log(newArr)

    //forEach ничего не возвращает
    m.forEach((elem, index, array)=> { //сам елмент, индекс в масс, массив целиком
        console.log(`Это число ${elem}`)
    })

    //reduce для подсчета элементов
    let sumOfReduce = m.reduce((acumulator, element) => {
        return acumulator += element
    })
    console.log(sumOfReduce)
}
// forEachiMapReduce()


//использование filter в массивах js 
const MasWithNum = [5, 12, 8, 130, 44, 7];
const filterFunc = (masNums, index, array)=>{
    let respons = masNums.filter(num => num > 10 && num < 100)
    //каждое число умножается на 10
    let midle = respons.map(num => num * 10)
    return midle
}
// console.log(filterFunc(MasWithNum))


//теранырный оператор ?
const TernOper = ()=>{
    let x = 10
    let y = 5
    x > y ? console.log("x больше y") : console.log("y больше x")
}
// TernOper()


//деструктуризация для доставания свойств
const Destruct = (obg)=>{
    const DestauctObj = {
        name: "Max",
        secName: "Dilashow",
        age: 21
    }

    const {name, secName, age} = DestauctObj

    console.log(`his name ${name} i last name ${secName}`)

    if(age < 50){
        console.log(age)
    }
}
// Destruct()


//число фибоначи
function fibonachi(num){
    if(num <= 1){
        return num
    }else{
        return fibonachi(num - 1) + fibonachi(num - 2)
    }
}
// console.log(`Результат: ${fibonachi(3)}`)


//switch используется если много условий
const switсhWork = (params)=>{

    let dayName;

    switch (params) {
        case 12:
            dayName = 'Декабрь';
            break;
        case 2:
            dayName = 'Январь';
            break;
        case 3:
            dayName = 'Февраль';
            break;
        default:
            dayName = 'Это не зимний месяц';
    }
    return dayName
}
// console.log(switсhWork(3))

//взаимодействие с ключом и объектом в объекте
const forinWork = ()=>{
    const myOb = {
        x: 10,
        y: 20,
        z: 30
    }

    for(const key in myOb){
        console.log(key, myOb[key])
    }
}
// forinWork()


//вытащить ключ или значение из объекта
const ObjectKeyValue = () => {
    const myOb = {
        x: 'Name',
        y: true,
        z: 123
    }

    //достать только ключ и преобразовать в массив
    Object.keys(myOb).forEach(key =>{
        console.log(key)
    })
    //достать только значение и преобразовать в массив
    Object.values(myOb).forEach(znachenie =>{
        console.log(znachenie)
    })
    //достать ключ и значение и преобразовать в массив
    Object.entries(myOb).forEach(fullValue =>{
        console.log(fullValue)
    })
}
// ObjectKeyValue()


//все числа до 100 в которых сумма первых двух 5
function sumToFive(){
    for(i=0; i<1000; i++){
        let numStr = i.toString()
        if(numStr.length === 1){
            if(parseInt(numStr[0]) == 5){
                console.log(i)
            }
        }else{
            if(parseInt(numStr[0]) + parseInt(numStr[1]) == 5){
                console.log(i)
            }
        }
    }
}
// sumToFive()


//классы в js отдельный файл 
function workClass(){   
        class Animal{
        constructor(options){
            this.names = options.names,
            this.secName = options.secName
        }

        voice(){
            console.log("it's Animal")
        }
    }

    class Dog extends Animal{
        constructor(options){
                super(options)
                this.type = options.type
        }
    }

    const any = new Animal({
        names: "Mr",
        secName:"Penis"
    })
    console.log(any)


    const sobaca = new Dog({
        names: "Ygolek",
        secName: "Azura",
        type: "Dogich"
    })
    console.log(sobaca)
}











//допилить async await
async function qwe() {
    const {RetName, funcToCalc, params} = await Promise(import ("./toExport/export.mjs"))
    return RetName("qwe")
}
// console.log(qwe())


//9.43.10
//code.mu 2.3 №3