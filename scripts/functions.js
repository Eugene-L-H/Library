class Book {
  constructor(title, author, pages, color) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.color = color;
  }
}

function clearForm() {
  title.value = '';
  author.value = '';
  pages.value = '';
  color.value = 'white';
}

// Shows or hides popup window when called.
function togglePopup() {
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

function createBook(title, author, pages, color) {
  // const stripTitle = title.replace(/[^a-zA-Z ]/g, '');
  const stripAuthor = author.replace(/[^a-zA-Z ]/g, '');
  let newBook = new Book(title, stripAuthor, pages, color);
  bookshelf.push(newBook);
}

function initials(author) {
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
    return initialsArr[0];
  }

  let initials = '';

  initials += initialsArr.slice(0, 2).join('.');

  if (initialsArr.length > 2) {
    initials += '.' + initialsArr[initialsArr.length - 1];
  }

  return initials;
}

function bookHtml(newBook, width) {
  const div = document.createElement('div');
  div.className = 'book';
  console.log(newBook.color);

  div.innerHTML = `
  <div class="book" style="width: ${width}px; background-color: ${newBook.color}">
    <span class="title">${newBook.title}</span>
    <span class="author" style="max-width: ${width}px">${newBook.author}</span>
  </div>
  `;

  htmlBookshelf.appendChild(div);
}

function populateShelf() {
  let newBook = bookshelf[bookshelf.length - 1];
  width = Math.round(newBook.pages / 6);

  if (newBook.author.length > 3) {
    newBook.author = initials(newBook.author);
  }

  // Add html to the "id='bookshelf" div.
  bookHtml(newBook, width);
}
