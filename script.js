// User Interface
const addBookBtn = document.getElementById('addBookBtn');
const addBookModal = document.getElementById('addBookModal');
const addBookForm = document.getElementById('addBookForm');
const errorMsg = document.getElementById('errorMsg');
const booksGrid = document.getElementById('booksGrid');
const overlay = document.getElementById('overlay');

// Prototype
class Book {
  constructor(
    title = 'Unknown',
    author = 'Unknown',
    pages = '0',
    status = false
    ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    }
    addBookToLibrary() {
      myLibrary.push(this);
    }
};

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

  bookCard.classList.add('bookCard')
  buttonGroup.classList.add('bookOptions')
  readBtn.classList.add('btn')
  removeBtn.classList.add('btn')
  readBtn.onclick = toggleRead
  removeBtn.onclick = removeBook

  title.textContent = `"${book.title}"`
  author.textContent = book.author
  pages.textContent = `${book.pages} pages`
  removeBtn.textContent = 'Remove'

  if (book.readStatus) {
    readBtn.textContent = 'Read'
    readBtn.classList.add('readBtn')
  } else {
    readBtn.textContent = 'Not read'
    readBtn.classList.add('removeBtn')
  }

  bookCard.appendChild(title)
  bookCard.appendChild(author)
  bookCard.appendChild(pages)
  buttonGroup.appendChild(readBtn)
  buttonGroup.appendChild(removeBtn)
  bookCard.appendChild(buttonGroup)
  booksGrid.appendChild(bookCard)
};

// function that can take user’s input and store the new book objects into an array
const addBookToLibrary = () => {
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const readStatus = document.getElementById('readStatus').checked
  return new Book(title, author, pages, readStatus)
};

//form allowing users to input the details for new book
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
const removeBook = (e) => {
  const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(    '"',
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
};
