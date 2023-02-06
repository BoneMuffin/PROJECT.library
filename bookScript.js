// Book constructor
class Book {
  constructor(
    title = "Unknown",
    author = "Unknown",
    pages = "0",
    isRead = "false"
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
  if (myLibrary.some((book) => book.title === newBook.title)) return false;
  myLibrary.push(newBook);
  saveLocal();
  return true;
}

function removeFromLibrary(bookTitle) {
  this.books = this.books.filter((book) => book.title !== title)
  saveLocal();
};

function getBook(bookTitle) {
  return this.books.find((book) => book.title === title)
};

// POPUP

const addBookBtn = document.getElementById('addBookBtn')
const addBookModal = document.getElementById('addBookModal')
const overlay = document.getElementById('overlay')

addBookBtn.addEventListener("click", openAddBookModal);
overlay.addEventListener("click", closeAddBookModal);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAddBookModal();
});

function openAddBookModal() {
  addBookForm.reset();
  addBookModal.classList.add("active");
  overlay.classList.add("active");
}

function closeAddBookModal() {
  addBookModal.classList.remove("active");
  overlay.classList.remove("active");
}

// FORM

const form = document.querySelector(".js-popup-form");
form.addEventListener("submit", addBook);

function addBook(e) {
  e.preventDefault();
  if (addToLibrary(getBookFromInput())) {
    updateBooksGrid();
    closePopup();
  } else {
    alert("This book already exists in your library");
  }
}

function getBookFromInput() {
  const title = `"${document.querySelector("#title").value}"`;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#is-read").checked;
  return new Book(title, author, pages, isRead);
}

// BOOKS GRID

const booksGrid = document.querySelector(".js-books-grid");
booksGrid.addEventListener("click", checkBooksGridInput);

function checkBooksGridInput(e) {
  if (e.target.classList.contains("js-remove-button")) {
    removeFromLibrary(e.target.parentNode.firstChild.innerHTML);
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  } else if (e.target.classList.contains("js-is-read-button")) {
    if (e.target.innerHTML === "Read") {
      getBook(e.target.parentNode.firstChild.innerHTML).isRead = false;
      e.target.innerHTML = "Not read";
      e.target.classList.remove("button--light-green");
      e.target.classList.add("button--light-red");
      saveLocal();
    } else {
      getBook(e.target.parentNode.firstChild.innerHTML).isRead = true;
      e.target.innerHTML = "Read";
      e.target.classList.remove("button--light-red");
      e.target.classList.add("button--light-green");
      saveLocal();
    }
  }
}

function updateBooksGrid() {
  resetGrid();
  for (let element of myLibrary) {
    createBookCard(element);
  }
}

function resetGrid() {
  booksGrid.innerHTML = "";
}

function createBookCard(book) {
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
  buttonGroup.appendChild(readBtn)
  buttonGroup.appendChild(removeBtn)
  bookCard.appendChild(buttonGroup)
  booksGrid.appendChild(bookCard)
}

// LOCAL STORAGE

function saveLocal() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function restoreLocal() {
  myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
  if (myLibrary === null) myLibrary = [];
  updateBooksGrid();
}

restoreLocal();