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


