// object constructor
class Book {
constructor(
    title = 'Unknown',
    title = 'Unknown',
    author = 'Unknown',
    pages = '0',
    readStatus = false) 
    {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    }
};

// empty array for library
class Library {
    constructor() {
        this.books = []
    }
}


// add new object into array
function addBookToLibrary(title, author, pages, status) {
   let book = new Book(title, author, pages, status);
   myLibrary.push(book);
};

var mobyDick = new Book ( 'Hamlet' , 'William Shakespeare' , 82 );

mobyDick.print()
