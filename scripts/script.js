const addBook = document.querySelector('.add-book');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
const blur = document.querySelector('.blur');
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
let bookshelf = [];

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
  // Block submission if form has an empty field.
  if (emptyFields()) {
    return;
  }

  // Add books to shelf for "bookshelf" array.
  createBook(
    title.value,
    author.value,
    pages.value,
    coverColor.value,
    textColor.value
  );
  populateShelf();

  // Hide form after submitting book. Remove blur.
  popup.classList.toggle('hide');
  blur.classList.toggle('hide');
  addBook.classList.toggle('no-click');
});
