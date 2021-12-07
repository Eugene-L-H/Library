const blur = document.querySelector('.blur');
const clearShelf = document.querySelector('.clear-shelf');
const addBook = document.querySelector('.add-book');
const popup = document.querySelector('.popup');
const pageAlert = document.querySelector('.page-alert');
const fieldAlert = document.querySelector('.field-alert');
const close = document.querySelector('.close');
// Form inputs.
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const coverColor = document.querySelector('#cover-color');
const textColor = document.querySelector('#text-color');
const submitBook = document.querySelector('#submit-book');
// On-screen bookshelf.
const htmlBookshelf = document.querySelector('#bookshelf');

// Array that will store book-objects.
let bookshelf = [
  cleanCode,
  codeComplete,
  philSoft,
  htmlCSS,
  JSforWD,
  PHPmySQL,
  PHPcook,
  automate,
  motobu,
  bubishi,
  kyohan,
];

let shelfSpace = 0;

starterShelf(bookshelf); // Add place-holder library to shelf.

// Clears shelf of all books when triggered.
clearShelf.addEventListener('click', () => {
  htmlBookshelf.innerHTML = '';
  shelfSpace = 0;
});

// Add listener to "Add Book" button in headerbar.
addBook.addEventListener('click', () => {
  togglePopup();
});

// Close button on popup form.
close.addEventListener('click', () => {
  togglePopup();
});

// Add listener to "Add Book to Shelf" button on popup form
submitBook.addEventListener('click', () => {
  subButton();
});
