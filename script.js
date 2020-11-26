const addBook = document.querySelector('.add-book')
const removeBook = document.querySelector('.remove-book');
const form = document.querySelector('#modal');
const form2 = document.getElementById('form2')
const span = document.querySelector('.close');
const submit = document.querySelector('.submit2');
const bookTitle = document.querySelector('.title');
const bookAuthor = document.querySelector('.author');
const bookPages = document.querySelector('.pages');
const bookRead = document.querySelector('.read');

const divOne = document.createElement('div');
const divTwo = document.createElement('div')
const heading = document.createElement('h4')
const paraTitle = document.createElement('p')
const paraPages = document.createElement('p')
const paraRead = document.createElement('p')
const para = document.createElement('p')

//const libraryContainterDiv = div.setAttribute('class', 'library-container')

const cardHeading = heading.setAttribute('class', 'card-heading')
const cardTitle = para.setAttribute('class', 'card-title')
const cardPages = para.setAttribute('class', 'card-pages')
const cardCompletion = para.setAttribute('class', 'card-completion')

let mylibrary = [];


function bookToDom() {
    const container = document.querySelector('.library-container');
  for(let i=0; i < mylibrary.length; i++) {
    //these write the attributions of the new book into a dom transferable format
    divOne.setAttribute('class', 'card')
    divTwo.setAttribute('class', 'container')
    heading.textContent = mylibrary[i].title;
    heading.setAttribute('class', 'card-heading');
    paraTitle.textContent = mylibrary[i].author;
    paraTitle.setAttribute('class', 'card-title');
    paraPages.textContent = mylibrary[i].pages + ' ' + 'pages';
    paraPages.setAttribute('class', 'card-pages')
    paraRead.textContent = mylibrary[i].read;
    paraRead.setAttribute('class', 'card-completion')


//these append the new book to the Document
    container.appendChild(divOne);
    divOne.appendChild(divTwo);
    divTwo.appendChild(heading);
    heading.appendChild(paraTitle);
    paraTitle.appendChild(paraPages);


  }
}

function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(`The title is: ${title} and it was written by ${author} the book has: ${pages} pages! have i read this book yet? ${read}`)
    }
};


let NineteenEightyFour = new Book
('Nineteen Eighty Four', "George Orwell", "244", "yes");

addBook.addEventListener("click", () => {
    form.style.display = 'block';
    

});
span.addEventListener("click", () => {
    form.style.display = "none";
});
submit.addEventListener('click', () => { 
  addBookToLibrary()
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    form.style.display = "none";       
});

function addBookToLibrary() {
    let ttl = bookTitle.value; 
    let athr = bookAuthor.value; 
    let pgs =  bookPages.value;
    let read = bookRead.checked 
    let newBook = new Book(ttl, athr, pgs, read)
    mylibrary.push(newBook);
    bookToDom()
}
//function transferBookToHTML() {

//}




//add values of that variable into a variable with 
//the same name as the title of the book

//put that variable into the mylibrary array using push