// UI 
const addBookBtn = document.getElementById('addBookBtn');
const addBookModal = document.getElementById('addBookModal');
const addBookForm = document.getElementById('addBookForm');

const booksGrid = document.getElementById('booksGrid');
const overlay = document.getElementById('overlay');
const loadingRing = document.getElementById('loadingRing');

// empty array for library
let myLibrary = [];


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

// add user input-new object into array
function addBookToLibrary(title, author, pages, readStatus) {
    new Book(title, author, pages, readStatus)
};


// function that loops through array and displays books on page


// 'new book' button, with a form / event.preventDefault documentation //


// remove button on each book card, associate dom elements w/ book objects //
/* giving them a data-attribute that corresponds to the index of the library array. */


// add button to change read status 
/* create the function that toggles a book’s read status 
on your Book prototype instance. */

//function to display bookshelf