// User Interface
const addBookBtn = document.getElementById('addBookBtn');
const addBookModal = document.getElementById('addBookModal');
const addBookForm = document.getElementById('addBookForm');
const errorMsg = document.getElementById('errorMsg');
const booksGrid = document.getElementById('booksGrid');
const overlay = document.getElementById('overlay');

let myLibrary = [];

// constructor
class Book {
  constructor(
    title = 'Unknown',
    author = 'Unknown',
    pages = 0,
    readStatus = false
    ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    }
};

// hardcode books 
const aliceBook = new Book('Alice in Wonderland', 'Lewis Carroll', 52, true); 
const lotrBook = new Book('Lord of the Rings', 'J. R. R. Tolkien', 1178, false);

/* function to the script (not the constructor) that can take user’s input 
and store the new book objects into an array */
// Add new book to myLibrary array 

function addBookToLibrary() {
  let book = new Book(title, author, pages, readStatus);
  myLibrary.push(book);

	localStorage.setItem('library', JSON.stringify(myLibrary));

};
/* function that loops through the array and displays each book on the page.
 You can display them in some sort of table, or each on their own “card”.  */

const renderBooks = () => {

};
/* “NEW BOOK” button that brings up a form allowing users to input
 the details for the new book. event.preventDefault();*/

/* 
Add a button on each book’s display to remove the book from the library.
You will need to associate your DOM elements with the actual book 
objects in some way. One easy solution is giving them a 
data-attribute that corresponds to the index of the library array.
*/

const removeBook = () => {

};
/*
Add a button on each book’s display to change its read status.
To facilitate this you will want to create the function that
 toggles a book’s read status on your Book prototype instance.
*/

const toggleStatus = () => {

};

const openAddBookModal = () => {
  addBookForm.reset()
  addBookModal.classList.add('active')
  overlay.classList.add('active')
}

const closeAddBookModal = () => {
  addBookModal.classList.remove('active')
  overlay.classList.remove('active')
  errorMsg.classList.remove('active')
  errorMsg.textContent = ''
}

const handleKeyboardInput = (e) => {
  if (e.key === 'Escape') closeAddBookModal()
}