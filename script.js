// User Interface
const addBookBtn = document.getElementById('addBookBtn');
const addBookModal = document.getElementById('addBookModal');
const addBookForm = document.getElementById('addBookForm');
const errorMsg = document.getElementById('errorMsg');
const booksGrid = document.getElementById('booksGrid');
const overlay = document.getElementById('overlay');

// Object constructors
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
};

class myLibrary {
  constructor() {
    this.books = []
  }

  addBook(newBook) {
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

const library = new myLibrary();

// Hardcoded books 
const aliceBook = new Book('Alice in Wonderland', 'Lewis Carroll', 52, true); 
const lotrBook = new Book('Lord of the Rings', 'J. R. R. Tolkien', 1178, false);


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

// Function that loops through the array and displays each book 
const renderBooks = () => {
  const bookCard = document.createElement('div')
  const title = document.createElement('p')
  const author = document.createElement('p')
  const pages = document.createElement('p')
  const buttonGroup = document.createElement('div')
  const readBtn = document.createElement('button')
  const removeBtn = document.createElement('button')

  bookCard.classList.add('bookCard')
  buttonGroup.classList.add('buttonGroup')
  readBtn.classList.add('btn')
  removeBtn.classList.add('btn')
  readBtn.onclick = toggleRead
  removeBtn.onclick = removeBook

  title.textContent = `"${book.title}"`
  author.textContent = book.author
  pages.textContent = `${book.pages} pages`
  removeBtn.textContent = 'Remove'

  if (book.isRead) {
    readBtn.textContent = 'Read'
    readBtn.classList.add('btn-light-green')
  } else {
    readBtn.textContent = 'Not read'
    readBtn.classList.add('btn-light-red')
  }

  bookCard.appendChild(title)
  bookCard.appendChild(author)
  bookCard.appendChild(pages)
  buttonGroup.appendChild(readBtn)
  buttonGroup.appendChild(removeBtn)
  bookCard.appendChild(buttonGroup)
  booksGrid.appendChild(bookCard)
};

// Take user’s input and store new book objects into array 
const addBookToLibrary = () => {
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const isRead = document.getElementById('isRead').checked
  return new Book(title, author, pages, isRead)
}; 

addBookToLibrary('Alice in Wonderland', 'Lewis Carroll', 52, true);
addBookToLibrary('Lord of the Rings', 'J. R. R. Tolkien', 1178, false);

/* “NEW BOOK” button that brings up a form allowing users to input
 the details for the new book. event.preventDefault();
*/
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

/* 
Add a button on each book’s display to remove the book from the library.
You will need to associate your DOM elements with the actual book 
objects in some way. One easy solution is giving them a 
data-attribute that corresponds to the index of the library array.
*/
const removeBook = (e) => {
  const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
    '"',
    ''
  )

  if (auth.currentUser) {
    removeBookDB(title)
  } else {
    library.removeBook(title)
    saveLocal()
    updateBooksGrid()
  }
}; 

/*
Add a button on each book’s display to change its read status.
To facilitate this you will want to create the function that
 toggles a book’s read status on your Book prototype instance.
*/
const toggleRead = (e) => {
  const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
    '"',
    ''
  )
  const book = library.getBook(title)

  if (auth.currentUser) {
    toggleBookIsReadDB(book)
  } else {
    book.isRead = !book.isRead
    saveLocal()
    updateBooksGrid()
  }
};

// Mouse event listeners 
addBookBtn.onclick = openAddBookModal;
overlay.onclick = closeAddBookModal;
addBookForm.onsubmit = addBookToLibrary;
window.onkeydown = handleKeyboardInput;

// Save books to local storage
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
};