let myLibrary = [];


// constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

//
function addBookToLibrary() {
    Book.prototype.toString = function(){
        return this.title + 'by' + this.author + ', is '+ this.page + ' long.'
    };

    Book.prototype.print = function(){
        console.log(this.toString());
    };
};

var mobyDick = new Book ( 'Hamlet' , 'William Shakespeare' , 82 );

mobyDick.print()
