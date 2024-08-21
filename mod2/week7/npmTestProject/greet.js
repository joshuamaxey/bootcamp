class Greeting {
    constructor(hello, name, punctuation) {
        this.hello = hello;
        this.name = name;
        this.punctuation = punctuation;
    }

    sayGreeting() {
        return `${this.hello}, ${this.name}${this.punctuation}`
    }
}

let HiJoshua = new Greeting (
    "Hi",
    "Joshua",
    "!"
)

console.log(HiJoshua.sayGreeting());

let WhatsUpMan = new Greeting (
    "What's up",
    "man",
    "?"
)

console.log(WhatsUpMan.sayGreeting());

// Alright. Now that we have a class and some functions that we want to use within our index.js file, lets export them

module.exports = {
    Greeting,
    HiJoshua,
    WhatsUpMan
}
