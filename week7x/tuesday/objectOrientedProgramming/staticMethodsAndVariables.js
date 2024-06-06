//! Static Methods and Variables

//^ Now we will learn:

    // 1. What static methods and variables are
    // 2. How static methods and variables differ from their instance counterparts
    // 3. How to declare static methods and variables

//! Static Methods

// Static methods are invoked directly on a class.

// The only difference in syntax between instance and static methods is that static methods use the 'static' keyword

class Book {
    constructor(title, series, author) {
        this.title = title;
        this.series = series;
        this.author = author;
        Book.numBooks += 1; // Here we increment the numBooks static variable by 1 for each time we create an instance of the Book class.
    }

    static numBooks = 0; // This is called a STATIC VARIABLE. It is not delcared inside the constructor but outside using the static keyword, similar to static methods.

    getInformation() { // This is an instance method, invoked on invdividual books, NOT on the Book class itself

        return `${this.title} (${this.series}) by ${this.author}`; // Notice how we use the 'this' keyword to refer to a specific instance of the Book class
    }

    static getTitles(...books) { // This is a static method, invoked on the Book class itself

        let bookTitles = books.map((book) => book.title); // This static method takes any number of 'books' (instances of the book class), then returns all of their names. Notice that there is no 'this' keyword because we are not invoking this method on a specific instance of the Book class.

        return bookTitles.join(', '); // Finally, we use the 'join' method to return a string of all the book titles joined together.
    }
};

const fellowshipOfTheRing = new Book(
    'The Fellowship of the Ring',
    'The Lord of the Rings',
    'J.R.R. Tolkien'
);

const theTwoTowers = new Book(
    'The Two Towers',
    'The Lord of the Rings',
    'J.R.R. Tolkien'
);

const bookInfo = fellowshipOfTheRing.getInformation() // Here, we invoke the getInformation() instance method on an individual instance of the Book class (fellowshipOfTheRing).

console.log(bookInfo); // The Fellowship of the Ring (The Lord of the Rings) by J.R.R. Tolkien

const bookTitles = Book.getTitles(fellowshipOfTheRing, theTwoTowers); // Here, you see that we invoke the .getTitles() method on the Book class tiself, passing in the instances as arguments

console.log(bookTitles); // "The Fellowship of the Ring, The Two Towers"

console.log(Book.numBooks); // 2. Each time we created a new book, the static variable 'numBooks' was incremented by 1 according to the code within our Book's constructor.

//! Summary

// Learned about static methods and varaibles

// Learned how static and instance methods and variables differ from one another

// Learned how to declare and use static methods and variables
