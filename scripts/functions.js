class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function clearForm() {
  title.value = '';
  author.value = '';
  pages.value = '';
}

// Returns true if any form-field is left empty.
function emptyFields() {
  if (title.value == '' || author.value == '' || pages.value == 0) {
    return true;
  }
}

function createBook(title, author, pages) {
  let newBook = new Book(title, author, pages);
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

  div.innerHTML = `
  <div class="book" style="width: ${width}px">
    <span class="title">${newBook.title}</span>
    <span class="author" style="max-width: ${width}px">${newBook.author}</span>
  </div>
  `;

  htmlBookshelf.appendChild(div);
}

function populateShelf() {
  let newBook = bookshelf[bookshelf.length - 1];
  width = Math.round(newBook.pages / 5);

  if (newBook.author.length > 3) {
    newBook.author = initials(newBook.author);
  }

  // Add html to the "id='bookshelf" div.
  bookHtml(newBook, width);
}
