let myLibrary = [];
var cards = document.querySelector(".card");
let table = document.querySelector("table");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet"); //

myLibrary.push(theHobbit);

function addBookToLibrary() {
  // for (let i = 0; i < myLibrary.length; i++) {
  //   cards[i].textContent = myLibrary[i];
  // }

  myLibrary.forEach((book) => {
    const htmlBook = `
      <div>
        <h2>Title: ${book.title}</h2>
        <p> Author: ${book.author}</p>
         <p> # of pages:${book.pages} </p>
        <p> Read: <button class="status-button"> ${book.read}</button></p>
        <p><button class="delete">delete</button></p>
      </div>
      `;
    cards.insertAdjacentHTML("afterbegin", htmlBook);
  });
}

addBookToLibrary();

console.log(myLibrary);
