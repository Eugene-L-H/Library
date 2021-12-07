// These are the Book objects that will populate the shelf on loading of
// website.
const cleanCode = new Book(
  'Clean Code',
  'Robert C Martin',
  432,
  '#eee',
  '#000'
);
const codeComplete = new Book(
  'Code Complete',
  'Steve McConnell',
  914,
  '#444',
  '#eee'
);
const philSoft = new Book(
  'A Philosophy of Software Design',
  'John Osterhout',
  179,
  '#96b0c2',
  '#fff'
);
const htmlCSS = new Book(
  'HTML & CSS',
  'Jon Duckett',
  500,
  '#1a1a1a',
  '#ff6600'
);
const JSforWD = new Book(
  'JavaScript for Web Developers',
  'Matt Frisbie',
  1135,
  '#c00',
  '#fff200'
);
const PHPmySQL = new Book(
  'PHP and MySQL for Web Development',
  'Laura Thompson',
  970,
  '#5c2e8a',
  '#eee'
);
const PHPcook = new Book(
  'PHP Cookbook',
  'Sklar Trachtenberg',
  796,
  '#0d9996',
  '#eee'
);
const automate = new Book(
  'Automate the Boring Stuff with Python',
  'Al Sweigart',
  547,
  '#fefd98',
  '#000'
);
const bubishi = new Book('Bubishi', 'Patrick McCarthy', 319, '#aaa', '#660000');
const motobu = new Book(
  "Motobu Choki's: Karate, my Art",
  'Patrick McCarthy',
  181,
  '#111111',
  '#fce205'
);
const kyohan = new Book(
  'Karate-Do Kyohan',
  'Funakoshi Gichin',
  375,
  '#000',
  '#f00'
);

function starterShelf(bookshelf) {
  for (let i = 0; i < bookshelf.length; i++) {
    let currentBook = bookshelf[i];
    let width = getWidth(currentBook.pages);

    currentBook.author = initials(currentBook);

    addToShelf(width);
    bookHtml(currentBook, width);
  }
}
