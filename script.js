// User interface
const addBookBtn = document.getElementById('addBookBtn');
const addBookModal = document.getElementById('addBookModal');
const addBookForm = document.getElementById('addBookForm');

const booksGrid = document.getElementById('booksGrid');
const overlay = document.getElementById('overlay');
const loadingRing = document.getElementById('loadingRing');

const myLibrary = [];

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

function addBookToLibrary() {

}

/* add a function to the script (not the constructor) that can take user’s input 
and store the new book objects into an array. */

/* a function that loops through the array and displays each book on the page. 
You can display them in some sort of table, or each on their own “card”.*/


/* “NEW BOOK” button that brings up a form allowing users to input the details for the new book:
 author, title, number of pages, whether it’s been read */


/* Add a button on each book’s display to remove the book from the library.
  You will need to associate your DOM elements with the actual book objects in some way. 
  One easy solution is giving them a data-attribute that corresponds to the index of the 
  library array.
 */


/* Add a button on each book’s display to change its read status.
  To facilitate this you will want to create the function that toggles a book’s read status
  on your Book prototype instance.
*/