class Component{
    constructor(selector){
        this.element = document.querySelector(selector)
    }

    hide(){
        this.element.style.display = "none"
        return console.log("Спрятано")
    }

    show(){
        this.element.style.display = "block"
        return console.log("Показано")
    }
}


class Box extends Component{
    constructor(options){
        super(options.selector)

        this.element.style.width = this.element.style.height = options.size + 'px'
        this.element.style.background = options.color
    }
}

class Circle extends Component{
    constructor(options){
        super(options.selector)

        this.element.style.width = this.element.style.height = options.size + 'px'
        this.element.style.background = options.color
        this.element.style.borderRadius = options.borderRadius + '%'
    }
}

const box1 = new Box({
    selector: '#box1',
    size:100,
    color:"red"
})
const box2 = new Box({
    selector: '#box2',
    size:130,
    color:"blue"
})

const circle1 = new Circle({
    selector: '#circle1',
    size:80,
    color:"green",
    borderRadius: 50
})