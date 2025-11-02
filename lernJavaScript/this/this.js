function hello(){
    console.log('Hello', this)
}

const person = {
    name: "SomeName",
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(globalThis),
    logInfo: function(){
        console.log(`name is ${this.name}`)
    }
}

// person.sayHello()
// person.sayHelloWindow()
person.logInfo()