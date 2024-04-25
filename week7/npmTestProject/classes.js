//! This classes module defines the classes for a simple library catalog application. It is used to track a catalog of books and movies.

class CatalogItem { // class
    constructor(title, series) { //constructor
        this.title = title;
        this.series = series;
    }

    getInformation() { //method
        if (this.series) {
            return `${this.title} (${this.series})`;
        } else {
            return this.title;
        }
    }
}

class Book extends CatalogItem {
    constructor(title, series, author) {
        super(title, series);
        this.author = author;
    }

    getInformation() {
        let result = super.getInformation();

        if (this.author) {
            result += ` [written by ${this.author}]`;
        }
        return result;
    }
}

class Movie extends CatalogItem {
    constructor(title, series, director) {
        super(title, series);
        this.director = director;
    }

    getInformation() {
        let result = super.getInformation();

        if (this.director) {
            result += ` [directed by ${this.director}]`;
        }
        return result;
    }
}

// To make the Book and Movie classes accessible to other momdules, export them.

// Every module has access to a 'module' object which represents the current module. Including this module (file).

// The module object contains properties that provide information about the current module.

// One of those properties is called module.exports, and is used to export items from the module.

// One way to export an item is to define that item as a property of the module.exports object. Like this:

//^=============
// module.exports.Book = Book;
// module.exports.Movie = Movie;
//^============

// Note that the module.exports property names don't need to match the class names. Most of the time it makes sense to keep them consistent, though.
// The code below is just as effective as the code above (for example).

//^===========
// module.exports.BOOKS = Book;
// module.exports.MOVIES = Movie;
//^============

// There are other ways to export a module. For example, you can assign a new object that contains a property for each item that you want to export:

module.exports = {
    Book,
    Movie
}

// This is my preferred method.

// You can also use a built-in 'exports' variable without the 'module' keyword. Like this:

//^ ==============
// exports.Book = Book;
// exports.MOVIES = Movie;
//^ ==============

// Now lets say that you want to import these classes for use in your aplication. The application's entry point will be the index.js file, so lets say that you want to use these classes within your index.js file.

//! See index.js
