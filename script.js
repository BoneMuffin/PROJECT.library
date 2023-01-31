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
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
};

// hardcoded books 
const aliceBook = new Book('Alice in Wonderland', 'Lewis Carroll', 52, true); 
const lotrBook = new Book('Lord of the Rings', 'J. R. R. Tolkien', 1178, false);

// take user’s input and store new book objects into array 
function addBookToLibrary(title, author, pages, isRead) {
  let book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
  renderBooks();

	localStorage.setItem('library', JSON.stringify(myLibrary));
};

// function that loops through the array and displays each book 
const renderBooks = () => {
  const books = document.querySelector('.bookCard');

};

/* “NEW BOOK” button that brings up a form allowing users to input
 the details for the new book. event.preventDefault();
*/
const openAddBookModal = () => {
  addBookForm.reset()
  addBookModal.classList.add('active')
  overlay.classList.add('active')
}; 

const closeAddBookModal = () => {
  addBookModal.classList.remove('active')
  overlay.classList.remove('active')
  errorMsg.classList.remove('active')
  errorMsg.textContent = ''
};

const closeModal = () => {
  closeAddBookModal()
};

const handleKeyboardInput = (e) => {
  if (e.key === 'Escape') closeModal()
};

// mouse event listeners 
addBookBtn.onclick = openAddBookModal;

const addBookButton = document.querySelector('.ddBookBtn')
addBookButton.addEventListener('click', openAddBookModal)

overlay.onclick = closeModal;
addBookForm.onsubmit = addBook;
window.onkeydown = handleKeyboardInput;

/* 
Add a button on each book’s display to remove the book from the library.
You will need to associate your DOM elements with the actual book 
objects in some way. One easy solution is giving them a 
data-attribute that corresponds to the index of the library array.
*/



/*
Add a button on each book’s display to change its read status.
To facilitate this you will want to create the function that
 toggles a book’s read status on your Book prototype instance.
*/
const toggleStatus () = {};

