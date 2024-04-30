let obj = {
    word: "world"
}

function sayHello(arg1, arg2) {
    console.log(arg1 + " " + this.word)
    console.log(arg2 + " " + this.word)
}

let boundSayHello = sayHello.bind(obj)
boundSayHello('hello', 'goodbye');
