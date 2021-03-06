class Book {
  constructor(title, author, pages, coverColor, textColor) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.coverColor = coverColor;
    this.textColor = textColor;
  }
}

function clearForm() {
  title.value = '';
  author.value = '';
  pages.value = '';
  coverColor.value = '#ffffff';
  textColor.value = '#000000';
}

function hideAlerts() {
  fieldAlert.classList.add('hide');
  pageAlert.classList.add('hide');
}

// Shows or hides popup window when called.
function togglePopup() {
  // Hide form errors that may have been displayed on popup form.
  hideAlerts();
  // When book is submitted or 'close" button clicked forms are refreshed.
  clearForm();

  // Popup form becomes visble + background blur.
  popup.classList.toggle('hide');
  blur.classList.toggle('hide');

  // While popup is active "Add Book" button is not clickable.
  addBook.classList.toggle('no-click');
}

// Returns true if any form-field is left empty.
function emptyFields() {
  if (title.value == '' || author.value == '' || pages.value == 0) {
    return true;
  }
}

function subButton() {
  // Block submission if form has an empty field.
  if (emptyFields()) {
    fieldAlert.classList.remove('hide');
    return;
  }

  if (pages.value > 2000) {
    pageAlert.innerHTML = 'Too many pages';
    pageAlert.classList.remove('hide');
    return;
  }

  if (((pages.value / 100) * 10) / 10 + shelfSpace > 98) {
    pageAlert.innerHTML = 'Too big for shelf!';
    pageAlert.classList.remove('hide');
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
}

function createBook(title, author, pages, coverColor, textColor) {
  // const stripTitle = title.replace(/[^a-zA-Z ]/g, '');
  const stripAuthor = author.replace(/[^a-zA-Z ]/g, '');
  let newBook = new Book(title, stripAuthor, pages, coverColor, textColor);
  bookshelf.push(newBook);
}

function initials(book) {
  // Large books don't need initials.
  if (book.pages > 230) {
    return book.author;
  }

  let author = book.author;

  let initialsArr = [];
  initialsArr.push(author[0]);

  for (let i = 0; i < author.length; i++) {
    let char = author[i];

    if (char == ' ') {
      initialsArr.push(author[i + 1]);
    }
  }

  // Return first initial if only one word present for author.
  if (initialsArr.length == 1) {
    book.author = initialsArr[0];
  }

  let initials = '';

  initials += initialsArr.slice(0, 2).join('.');

  if (initialsArr.length > 2) {
    initials += '.' + initialsArr[initialsArr.length - 1];
  }

  book.author = initials.toUpperCase();

  return book.author;
}

function bookHtml(newBook, width) {
  const div = document.createElement('div');
  div.className = 'book';

  div.innerHTML = `
  <div class="book" style="width: ${width}vw; background-color: ${newBook.coverColor}; color: ${newBook.textColor}">
    <span class="title">${newBook.title}</span>
    <span class="author" style="max-width: ${width}vw">${newBook.author}</span>
  </div>
  `;

  htmlBookshelf.appendChild(div);
}

function getWidth(pages) {
  let width = Math.round((pages / 100) * 10) / 10;
  return width;
}

// Add to shelfSpace variable equal to book's width.
function addToShelf(width) {
  shelfSpace += width;
}

function populateShelf() {
  let newBook = bookshelf[bookshelf.length - 1];
  let width = getWidth(newBook.pages);

  newBook.author = initials(newBook);

  // Add html to the "id='bookshelf" div.
  addToShelf(width);
  bookHtml(newBook, width);
}
