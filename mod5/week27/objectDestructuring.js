const { a: x, b: y } = { a: 1, b: 2 }

// Here we set a = x and b = y
// Then we set a = 1 and b = 2
// Therefore x = 1 and y = 2

//* Note that 'a' and 'b' are not defined here, so the code directly below causes us to throw an error
// console.log(a);
// console.log(b);

//* 'x' and 'y', however, return their specified values
console.log(x); // 1
console.log(y); // 2

//* We can also set the values of variables in this way:
const { c, d } = { c: 3, d: 4 };

console.log(c); // 3
console.log(d); // 4

// Destructuring also works with nested objects
const { a } = { a: { b } } = { a: { b: 2 } };

console.log(a); // { b: 2 }
console.log(b); // 2

// And it works with functions too
const multiply = n => ({
    one: n,
    two: n * 2,
    three: n * 3
});

let { one, two, three } = multiply(10);

console.log(one); // 10
console.log(two); // 20
console.log(three); //30

console.log(multiply(5)); // { one: 5, two: 10, three: 15 }
console.log(multiply(20)); // { one: 20, two: 40, three: 60 }

//* In some cases, we can make the properties of an object available directly as variables, which is much more convenient than having to directly key into the object each time we want to access those properties:

this.properties = {
    userId: 1,
    user: {
        fName: 'Ned',
        lName: 'Ruggeri'
    }
};

const { userId, user: { fName, lName } } = this.properties;

console.log(userId); // 1
console.log(fName); // 'Ned'
console.log(lName); // 'Ruggeri'

//* This is even more useful when we want to pass objects around into different functions. Each function can pull whatever it needs from the object directly:

const review = {
    id: 1,
    userId: 2,
    movie: 'Star Trek',
    comment: 'It was excellent!',
    rating: 5
};

const user = {
    id: 2,
    fName: 'Ned',
    lName: 'Ruggeri'
};

//! --------

const printReviewUser = ({ userId: id }) => {
    const user = fetchUserById(id);
    console.log(`${user.fName} ${user.lName}`);
};

const printReview = ({ movie, comment, rating }) => {
    console.log(`Watched ${movie}`);
    console.log(`Gave it ${rating} stars`);
    console.log(`${comment}`);
};

printReviewUser(review);

printReview(review);
