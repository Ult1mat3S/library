let myLibrary = [];
const cards = document.querySelector(".card");
const table = document.querySelector("table");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const read = document.querySelector(".read");
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
const form = document.querySelector(".my-form");

// const submit = document.querySelector(".submit").addEventListener("submit", (e) => {
//   e.preventDefault();
// });

const submit = document.querySelector(".submit");
submit.addEventListener("click", () => {
  e.preventDefault();
  if (title.value.length === 0 || author.value.length === 0) {
    alert("Fields not filled");
    return;
  }
  console.log("clicked");
  console.log(`${title.value}`);
  addBookToLibrary();
});

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary() {
  const addBook = new Book(`${title.value}`, `${author.value}`, `${pages.value}`, `${read.value}`); //
  myLibrary.push(addBook);
  myLibrary.forEach((book) => {
    const bookElement = `
      <div>
        <h2>Title: ${book.title}</h2>
        <p> Author: ${book.author}</p>
        <p> # of pages:${book.pages} </p>
        <p> Read: <button class="status-button"> ${book.read}</button></p>
        <p><button class="delete">delete</button></p>
      </div>
      `;
    cards.insertAdjacentHTML("afterbegin", bookElement);
  });
}

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
