// UI 
const addBookBtn = document.getElementById('addBookBtn');
const addBookModal = document.getElementById('addBookModal');
const addBookForm = document.getElementById('addBookForm');

const booksGrid = document.getElementById('booksGrid');
const overlay = document.getElementById('overlay');
const loadingRing = document.getElementById('loadingRing');


// object constructor
class Book {
constructor(
    title = 'Unknown',
    author = 'Unknown',
    pages = '0',
    readStatus = false
    ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    }
};

// empty array for library + store new object into array
class Library {
    constructor() {
        this.books = []
    }

    addBookToLibrary(newBook) {
        if (!this.isInLibrary(newBook)) {
            this.books.push(newBook)
        }
    }

    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title)
      }
    
    getBook(title) {
        return this.books.find((book) => book.title === title)
      }
    
    isInLibrary(newBook) {
        return this.books.some((book) => book.title === newBook.title)
      }
};

const library = new Library();

// add user input-new object into array




// function that loops through array and displays books on page


// 'new book' button, with a form / event.preventDefault documentation //


// remove button on each book card, associate dom elements w/ book objects //
/* giving them a data-attribute that corresponds to the index of the library array. */


// add button to change read status 
/* create the function that toggles a book’s read status 
on your Book prototype instance. */

//function to display bookshelf
