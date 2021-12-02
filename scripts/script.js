const addBook = document.querySelector('.add-book');
const popup = document.querySelector('.popup');
const submitBook = document.querySelector('#submit-book');

class book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// Add listener to "Add Book" button in headerbar.
addBook.addEventListener('click', () => {
  // Popup form becomes visble.
  popup.classList.toggle('hide');
  // While popup is active "addBook" is not clickable.
  addBook.classList.toggle('no-click');
});

// Add listener to button on popup form
submitBook.addEventListener('click', () => {
  // Hide form after submitting book.
  popup.classList.toggle('hide');
  // Restore functionality to title bar button.
  addBook.classList.toggle('no-click');
});
