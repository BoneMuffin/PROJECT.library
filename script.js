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

const updateBooksGrid = () => {
    resetBooksGrid()
    for (let book of library.books) {
      createBookCard(book)
    }
};
  
const resetBooksGrid = () => {
    booksGrid.innerHTML = ''
};

// loop through array and display book cards
const displayBookshelf = (book) => {
        const bookCard = document.createElement('div')
        const title = document.createElement('p')
        const author = document.createElement('p')
        const pages = document.createElement('p')
        const bookOptions = document.createElement('div')
        const readBtn = document.createElement('button')
        const removeBtn = document.createElement('button')
    
    
        bookCard.classList.add('bookCard')
        bookOptions.classList.add('bookOptions')
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
          bookOptions.appendChild(readBtn)
          bookOptions.appendChild(removeBtn)
          bookCard.appendChild(bookOptions)
          booksGrid.appendChild(bookCard)
};

// to take user input
const getUserInput = () => {
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const readStatus = document.getElementById('isRead').checked
  return new Book(title, author, pages, readStatus)
}


// 'new book' button, with a form / event.preventDefault documentation //



// remove button on each book card, associate dom elements w/ book objects //
/* giving them a data-attribute that corresponds to the index of the library array. */
const removeBook = (e) => {
  const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll('"','')

  if (auth.currentUser) {
    removeBookDB(title)
  } else {
    library.removeBook(title)
    saveLocal()
    updateBooksGrid()
  }
}

// add button to change read status 
/* create the function that toggles a book’s read status 
on your Book prototype instance. */

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
}