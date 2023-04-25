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
const body = document.querySelector("body");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read || "READ";
  }
}

const submit = document.querySelector(".submit").addEventListener("click", (e) => {
  e.preventDefault();
  if (title.value.length === 0 || author.value.length === 0 || pages.value.length === 0) {
    alert("One or more fields were left blank");
    return;
  }
  addBookToLibrary();
});

const buttonPressed = (e) => {
  e.target.classList.toggle("read");
  e.target.classList.toggle("unread");
  e.target.textContent = e.target.textContent.trim() === "UNREAD" ? "READ" : "UNREAD";
  read.value = e.target.textContent;
};
read.addEventListener("click", buttonPressed);

function addBookToLibrary() {
  const addBook = new Book(`${title.value}`, `${author.value}`, `${pages.value}`, `${read.value}`); //
  myLibrary.push(addBook);
  console.log(myLibrary);
  myLibrary.forEach((book) => {
    const bookElement = `
      <div class="card">
        <h2>Title: ${book.title}</h2>
        <p> Author: ${book.author}</p>
        <p> # of pages: ${book.pages} </p>
        <p> Read: <button  type="button" class="read"> ${book.read}</button></p>
        <p><button class="delete">delete</button></p>
      </div>
      `;

    body.insertAdjacentHTML("beforeend", bookElement);

    myLibrary = [];
  });
}

btn.onclick = () => {
  modal.style.display = "block";
};

span.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
