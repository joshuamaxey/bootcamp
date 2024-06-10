function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// eat(); // ?

//^ I think that (because we're not invoking this method on any object) the function will be called on the globalThis context by default. Since the global object has no .name() property, I think that this will return undefined here.

//* Yep, 'undefined eats fish food'

/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // ?

//^ So first we assign nemo.eat to the .eat() method. Nemo has a .name property, so calling nemo.eat should return 'Nemo eats fish food'

//* Yep, 'Nemo eats fish food'

/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // ?

//^ We're still not calling the .eat() function on any object, so undefined? Unles our assignment to nemo.eat() above changes the context of the function itself. But I don't think that's the case.

//* Yep, 'undefined eats fish food.' setting nemo.eat = eat does NOT change the context of the function itself, so invoking .eat() without a context still returns undefined.

/********************************* Scenario 4 *********************************/
// nemo.swim(); // ?

//^ Here we're just calling the .swim() method on an instance of the Fish class (nemo). This should print 'Nemo swimming in the water'

//* Yep, returns 'Nemo is swimming in the water'

/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
swim(); // ?

//^ Here, we'll throw a TypeError because we'll lose the context of the function call when we try to save the call to a variable without using the .bind() method.

//* Yep, TypeError
