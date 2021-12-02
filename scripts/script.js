const addBook = document.querySelector('.add-book');
const popup = document.querySelector('.popup');
// Form inputs.
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const submitBook = document.querySelector('#submit-book');
// On-screen bookshelf.
const htmlBookshelf = document.querySelector('#bookshelf');

// Array that will store book-objects.
let bookshelf = [];

// Add listener to "Add Book" button in headerbar.
addBook.addEventListener('click', () => {
  // Clear form.
  clearForm();

  // Popup form becomes visble.
  popup.classList.toggle('hide');

  // While popup is active "Add Book" button is not clickable.
  addBook.classList.toggle('no-click');
});

// Add listener to button on popup form
submitBook.addEventListener('click', () => {
  // Add books to shelf for "bookshelf" array.
  createBook(title.value, author.value, pages.value);
  populateShelf();

  // Hide form after submitting book.
  popup.classList.toggle('hide');
  addBook.classList.toggle('no-click');
});
