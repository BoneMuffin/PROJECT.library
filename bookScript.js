// Book constructor
class Book {
  constructor(
    title = 'Unknown',
    author = 'Unknown',
    pages = '0',
    isRead = false
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
};

// Array
let myLibrary = [];

function addBookToLibrary(newBook) {
  if (myLibrary.some((book) => book.title === newBook.title)) return false
  myLibrary.push(newBook)
  saveLocal()
  return true
};

function removeFromLibrary(bookTitle) {
  myLibrary = myLibrary.filter((book) => book.title !== bookTitle);
  saveLocal()
};

function getBook(bookTitle) {
  return myLibrary.find((book) => book.title === bookTitle)
};

// Form
const addBookBtn = document.getElementById('addBookBtn')
const addBookModal = document.getElementById('addBookModal')
const overlay = document.getElementById('overlay')

addBookBtn.addEventListener('click', openAddBookModal);
overlay.addEventListener('click', closeAddBookModal);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeAddBookModal();
});

function openAddBookModal() {
  addBookForm.reset();
  addBookModal.classList.add('active');
  overlay.classList.add('active');
}

function closeAddBookModal() {
  addBookModal.classList.remove('active');
  overlay.classList.remove('active');
}

const addBookForm = document.getElementById('addBookForm');
addBookForm.addEventListener('submit', addBook);

function addBook(e) {
  e.preventDefault();
  if (addBookToLibrary(getBookFromInput())) {
    updateBooksGrid();
    closeAddBookModal();
  } else {
    alert('This book already exists in your library');
  }
};

function getBookFromInput() {
  const title = `${document.querySelector("#title").value}`
  const author = document.querySelector("#author").value
  const pages = document.querySelector("#pages").value
  const isRead = document.querySelector("#isRead").checked
    return new Book(title, author, pages, isRead)
};

// Books grid
const booksGrid = document.getElementById('booksGrid');

function removeBook(e) {
  removeFromLibrary(e.target.parentNode.firstChild.innerHTML)
  e.target.parentNode.parentNode.removeChild(e.target.parentNode)
};

function toggleRead(e) {
  if (e.target.innerHTML === 'Read') {
      (e.target.parentNode.firstChild.innerHTML).isRead = false
      e.target.innerHTML = 'Not read'
      e.target.classList.remove('readBtn')
      e.target.classList.add('removeBtn')
      saveLocal()
  } else {
      (e.target.parentNode.firstChild.innerHTML).isRead = true
      e.target.innerHTML = 'Read'
      e.target.classList.remove('removeBtn')
      e.target.classList.add('readBtn')
      saveLocal()
  }
};

function updateBooksGrid() {
  resetGrid();
  for (let element of myLibrary) {
    renderBooks(element)
  }
};

function resetGrid() {
  booksGrid.innerHTML = ""
};

function renderBooks(book) {
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
    readBtn.classList.add('readBtn')
  } else {
    readBtn.textContent = 'Not read'
    readBtn.classList.add('removeBtn')
  }

  bookCard.appendChild(title)
  bookCard.appendChild(author)
  bookCard.appendChild(pages)
  bookCard.appendChild(readBtn)
  bookCard.appendChild(removeBtn)
  bookCard.appendChild(buttonGroup)
  booksGrid.appendChild(bookCard)
};

// Local storage
const alice = new Book('Alice in Wonderland', 'Lewis Carroll', '82', true);
const lotr = new Book('The Lord of The Rings', 'J. R. R. Tolkien', '423', false);

addBookToLibrary(alice);
addBookToLibrary(lotr);

function saveLocal() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
};

function restoreLocal() {
  myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
  if (myLibrary === null) myLibrary = [];
  updateBooksGrid();
};

restoreLocal();
