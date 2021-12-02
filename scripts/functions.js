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

function createBook(title, author, pages) {
  let newBook = new Book(title, author, pages);
  bookshelf.push(newBook);
}

function bookHtml(newBook, width) {
  const div = document.createElement('div');
  div.className = 'book';

  div.innerHTML = `
  <div class="book" style="width: ${width}px">
    <span class="title">${newBook.title}</span>
    <span class="author">${newBook.author}</span>
  </div>
  `;

  htmlBookshelf.appendChild(div);
}

function populateShelf() {
  let newBook = bookshelf[bookshelf.length - 1];
  width = Math.round(newBook.pages / 5);

  // Add html to the "id='bookshelf" div.
  bookHtml(newBook, width);
}
