const span = document.getElementById("spanchick")
const parantOfSpan = span.parentElement

parantOfSpan.style.backgroundColor = "yellow"
parantOfSpan.style.minHeight = "100px"
parantOfSpan.style.maxWidth = "100px"


const elemOne = document.querySelectorAll('.lesson-list')
console.log(elemOne)

const findTag = document.querySelectorAll('li')
// console.log(findTag[2].innerHTML)
for(const item of findTag){
    console.log(item)
}


//querySelector работает по id, class и тегу
const elementById = document.querySelector('#myId')
const elementByClass = document.querySelector('.myClass')
const elementByTag = document.querySelector('div')


const ByTag = document.getElementsByTagName("ul")
console.log(ByTag)

const p = document.querySelector("#pishka")
const textOfP = p.innerHTML
console.log(textOfP)
p.innerHTML = `<strong>${textOfP}</strong><br>JAVA SCript`


const getFiveElement = document.querySelector('.number5')
getFiveElement.textContent = ""
const newElem = document.createElement("div")
newElem.textContent = "создан новый элемент"
getFiveElement.appendChild(newElem)


//клонирование объекта
const getSomeDiv = document.getElementById("someDiv")

const table = document.querySelector(".lesson-list")
const colneOfTable = table.cloneNode() //без дочерних элементов
const colneOfTableWithAll = table.cloneNode(true) //с дочерними элементами


//добавление, удаление и проверка на наличие класса
const PwithClass = document.querySelector(".textClass")
PwithClass.classList.add("someName") //добавить класс можно по верх существующего
PwithClass.classList.remove("someName") //удалить класс
console.log(PwithClass.classList.contains("textClass"))//проверить если данный класс


//работа с классами
PwithClass.style.color = "red"
PwithClass.style.display = "flex"
PwithClass.style.paddingLeft =  "50px"

console.log(PwithClass.style.color)//можно получить стиль
console.log(PwithClass.style.paddingLeft)
