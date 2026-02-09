const myLibrary = []; 

function Book(title, author, noPages, alreadyRead) {
    const id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.noPages = noPages;
    this.alreadyRead = alreadyRead;
}
Book.prototype.toString = function() {
    return "Title: " + this.title + "\nAuthor:" + this.author + "\nNo. Pages: " + this.noPages + "\nAlready Read?: " + this.alreadyRead + "\n";
}

/* grabs dialog, newBookBtn. Adds Event Listener that shows form dialog */
const formDialog = document.getElementById("form-dialog");
const newBookBtn = document.getElementById("newBookBtn");
newBookBtn.addEventListener("click", () => {
    formDialog.showModal();
});

/*Creates a new book and pushes it to library array -- DO THIS ON FORM SUBMISSION */ 
function addBookToLibrary(){
    const bookTitle = document.getElementById('book-title');
    const bookAuthor = document.getElementById('book-author');
    const bookPages = document.getElementById('book-noPages');
    const bookRead = document.getElementById('book-alreadyRead');
    const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
    myLibrary.push(book); /* Use .value of property to get the actual value from form input*/
};
/*Grabs form and prevents data submission*/
const form = document.getElementById("book-form");
form.addEventListener('submit', addBookToLibrary);
 
/* prints lib w/ button */
const printLibBtn = document.getElementById("print-library");
const libraryContainer = document.getElementById("library-container");
function printLibrary(){
    libraryContainer.innerHTML = "";
    libraryContainer.classList.add("unhidden");
    // libraryContainer.classList.toggle("is-visible");
    for(let i = 0; i < myLibrary.length; i++){
        const bookCardDiv = document.createElement('div');
        bookCardDiv.classList.add("bookCard");
        const bookCardInnerDiv = document.createElement('div');
        bookCardInnerDiv.classList.add("bookCardInnerDiv");
        // generates h2 element with book title
        const bookCardTitle = document.createElement('h2');
        bookCardTitle.textContent = "Title: " + myLibrary[i].title;
        bookCardInnerDiv.appendChild(bookCardTitle);

        // generates h3 element with book author
        const bookCardAuthor = document.createElement('h3');
        bookCardAuthor.textContent = "Author: " + myLibrary[i].author;
        bookCardInnerDiv.appendChild(bookCardAuthor);

        // generates h3 element stating number of pages in book
        const bookCardPages = document.createElement('h3');
        bookCardPages.textContent = "No. Pages: " + myLibrary[i].noPages;
        bookCardInnerDiv.appendChild(bookCardPages);

        // generates h3 element stating if book has been read or not
        const bookCardRead = document.createElement('h3');
        bookCardRead.textContent = "Already Read?: " + myLibrary[i].alreadyRead.toUpperCase();
        bookCardInnerDiv.appendChild(bookCardRead);
        // remove book button
        const bookRemoveBtn = document.createElement('button');
        bookRemoveBtn.textContent = "Remove Book";

        // add event listener to remove book from library array and reprint library
        bookRemoveBtn.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            printLibrary();
        }); 
        
        bookCardDiv.appendChild(bookCardInnerDiv);
        bookCardDiv.appendChild(bookRemoveBtn);
        libraryContainer.appendChild(bookCardDiv);
        document.body.append(libraryContainer);
    }
};
printLibBtn.addEventListener('click', printLibrary);



