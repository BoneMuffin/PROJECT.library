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
const ringBook = new Book('Lord of the Rings', 'J. R. R. Tolkien', 1178, false);

/* function to the script (not the constructor) that can take user’s input 
and store the new book objects into an array */
// Add new book to myLibrary array 
function addBookToLibrary() {
  myLibrary.push(object);
};
/* function that loops through the array and displays each book on the page.
 You can display them in some sort of table, or each on their own “card”.  */

const renderBooks {

}
/* “NEW BOOK” button that brings up a form allowing users to input
 the details for the new book. event.preventDefault();*/

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










/* modal events
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


const handleKeyboardInput = (e) => {
  if (e.key === 'Escape') closeAddBookModal()
};

const updateBooksGrid = () => {
  resetBooksGrid()
  for (let book of library.books) {
    createBookCard(book)
  }
};

const resetBooksGrid = () => {
  booksGrid.innerHTML = ''
};

// a function that loops through the array and displays each book on the page.
const renderBooks = (book) => {
  const bookCard = document.createElement('div')
  const title = document.createElement('p')
  const author = document.createElement('p')
  const pages = document.createElement('p')
  const buttonGroup = document.createElement('div')
  const readBtn = document.createElement('button')
  const removeBtn = document.createElement('button')

};

// function that can take user’s input and store the new book objects into an array
const addBookToLibrary = () => {
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const readStatus = document.getElementById('readStatus').checked
  return new Book(title, author, pages, readStatus)
};

// form allowing users to input details for new book
const addBook = (e) => {
  e.preventDefault()
  const newBook = addBookToLibrary()

  if (library.isInLibrary(newBook)) {
    errorMsg.textContent = 'This book already exists in your library'
    errorMsg.classList.add('active')
    return
  }

  if (auth.currentUser) {
    addBookDB(newBook)
  } else {
    library.addBook(newBook)
    saveLocal()
    updateBooksGrid()
  }

  closeAddBookModal()
};

 // remove the book from the library.
const removeBook = document.createElement('button');
removeBook.classList.add('removeBtn');
removeBook.textContent = "Delete";

removeBook.addEventListener('click', removeBook);


// button on each book’s display to change its read status. 
const toggleRead = (e) => {
  const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
    '"',
    ''
  )
  const book = library.getBook(title)

  if (auth.currentUser) {
    toggleBookReadStatusDB(book)
  } else {
    book.readStatus = !book.readStatus
    saveLocal()
    updateBooksGrid()
  }
}

addBookBtn.onclick = openAddBookModal
overlay.onclick = closeAddBookModal
addBookForm.onsubmit = addBook
window.onkeydown = handleKeyboardInput

// Local Storage
const saveLocal = () => {
  localStorage.setItem('library', JSON.stringify(library.books))
};

const restoreLocal = () => {
  const books = JSON.parse(localStorage.getItem('library'))
  if (books) {
    library.books = books.map((book) => JSONToBook(book))
  } else {
    library.books = []
  }
}; */