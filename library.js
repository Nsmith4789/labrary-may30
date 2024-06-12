"use strict";
//Book class

class Book {
    constructor(title, author, isbin, availableCopies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.availableCopies = availableCopies;
    }

    //borrow book
    borrowBook() {
        if (this.availableCopies > 0) {
            this.availableCopies--;
            console.log("This book is out");
        } else {
            console.log("Book Unavailable");
        }
    }
    //return book
    returnBook() {
        this.availableCopies++;
        console.log("Book returned");
    }
}

//creating library class
class library {
    constructor(name) {
        this.name = name;
        this.Book = [];
    }

    // adding book 
    addBook(book) {
        this.books.push(book);
        console.log("Book added");
    }

    removeBook(isbn) {
        const index = this.books.findIndex((book) => book.isbn === isbn);
        if (index !== -1) {
            const removeBook = this.books.splice(index, 1)[0];
            console.log(`Book ${isbn} removed`);
        } else {
            console.log(`Book ${books.title} Not Found`);
        }
    }

    //lookup book by title
    findBookByTitle(title) {
        const findTitle = this.books.find((book) => book.title === title);
        if (findTitle) {
            console.log(`${findTitle.title} book title is available`);
        } else {
            console.log("can not find title");
        }
    }


    //listing books
    listAllBooks() {
        console.log(`Books in ${this.name} library:`);
        this.books.forEach((book) => {
            console.log(
                `${book.title} by ${book.author} - isbn: ${book.isbn} - Available`
            );
        });
    }
}

const book1 = new Book(
    "To kill A Mockingbird",
    "Harper Lee",
    "978-0-06-112008-4",
    1
);

const book2 = new Book("1984", "George Orwell", "978-0-452-28423-4", 1);

const book3 = new Book(
    "The Great Gatsby",
    "F Scott Fitzgerald",
    "978-0-7432-7356-5",
    1
);

const book4 = new Book(
    "Harry Potter and the Philosopher's Stone",
    "J K Rowling",
    "9978-1-4088-5564-6",
    1
);


const book5 = new Book("The Hobbit", "J R Tolkien", "978-0-2611-0253-7", 1)

const library = new library("Nick");

//adding books
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.listAllBooks()