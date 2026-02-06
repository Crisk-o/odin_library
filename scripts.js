const myLibrary = []; 

function Book(title, author, noPages, alreadyRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.noPages = noPages;
    this.alreadyRead = alreadyRead;
    this.toString() = function() {
        return this.title + ", " + this.author + ", " + this.noPages + ", " + this.alreadyRead;
    }
};

/*Creates a new book and pushes it to library array*/ 
function addBookToLibrary(title, author, noPages, alreadyRead){
    let book = new Book(title, author, noPages, alreadyRead);
    myLibrary.push(book);
};

function printLibrary(myLibrary){
    if(myLibrary.length == 0){
        alert("Library is empty");
    }
    for(let i = 0; i < myLibrary.length; i++)
        print(myLibrary[i]);
}

const newBookBtn = document.getElementById("newBookBtn")
newBookBtn.addEventListener("click", () => {
    
    
});