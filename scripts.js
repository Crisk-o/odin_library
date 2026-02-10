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
    printLibrary();
    formDialog.close();
};
/*Grabs form and prevents data submission*/
const form = document.getElementById("book-form");
form.addEventListener('submit', addBookToLibrary);
 
/* prints lib w/ button */
const printLibBtn = document.getElementById("print-library");
const libraryContainer = document.getElementById("library-container");
const newBookCardContainer = document.getElementById("newBookCardContainer");

function printLibrary(){
    newBookCardContainer.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        const bookCardDiv = document.createElement('div');
        bookCardDiv.classList.add("bookCard");

        const bookCardInnerDiv = document.createElement('div');
        bookCardInnerDiv.classList.add("bookCardInnerDiv");

        const bookDetailsList = document.createElement('ul');
        const bookDetailsTitle = document.createElement('li');
        bookDetailsTitle.textContent = "Title: " + myLibrary[i].title;
        const bookDetailsAuthor = document.createElement('li');
        bookDetailsAuthor.textContent = "Author: " + myLibrary[i].author;
        const bookDetailsPages = document.createElement('li');
        bookDetailsPages.textContent = "Pages: " + myLibrary[i].noPages;
        const bookDetailsRead = document.createElement('li');
        // converts alreadyRead value to "Yes" or "No" for better readability
        if(myLibrary[i].alreadyRead.toLowerCase() === 'on' || myLibrary[i].alreadyRead.toLowerCase() === 'true' || myLibrary[i].alreadyRead.toLowerCase() === 'yes'){
            myLibrary[i].alreadyRead = "Yes";
        }
        else{
            myLibrary[i].alreadyRead = "No";
        }
        bookDetailsRead.textContent = "Read: " + myLibrary[i].alreadyRead;
        bookDetailsList.append(bookDetailsTitle, bookDetailsAuthor, bookDetailsPages, bookDetailsRead);
        bookCardInnerDiv.appendChild(bookDetailsList);
    
        // remove book button
        const bookRemoveBtn = document.createElement('button');
        bookRemoveBtn.classList.add("bookCardBtns");
        bookRemoveBtn.textContent = "Remove Book";
        // add event listener to remove book from library array and reprint library
        bookRemoveBtn.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            printLibrary();
        }); 
        // button to toggle alreadyRead value
        const bookToggleReadBtn = document.createElement('button');
        bookToggleReadBtn.classList.add("bookCardBtns");
        bookToggleReadBtn.textContent = "Mark as Read";
        bookToggleReadBtn.addEventListener('click', () => {
            if(myLibrary[i].alreadyRead === "No"){
                myLibrary[i].alreadyRead = "Yes";
            }
            else{       
                myLibrary[i].alreadyRead = "No";
            }
            printLibrary();
        });
        bookCardInnerDiv.append(bookRemoveBtn, bookToggleReadBtn);
        bookCardDiv.appendChild(bookCardInnerDiv);
        newBookCardContainer.appendChild(bookCardDiv);
        libraryContainer.appendChild(newBookCardContainer);
        document.body.append(libraryContainer);
    }
};
printLibBtn.addEventListener('click', printLibrary);



