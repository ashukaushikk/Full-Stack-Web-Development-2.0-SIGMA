// <!-- Question-4 :-  Write a program that takes a list of books, including their authors and publication years as input. The program should then filter out all books that were published before 2010 and create a new array with the remaining books, but with their author names capitalized.

// #Filtering and Capitalizing: Books Published After 2010 with Author Names: =>>>

const createBook = (bookName, bookAuthor, bookPubYear) => {
  return {
    title: bookName,
    author: bookAuthor,
    publicationYear: bookPubYear,
  };
};

// Create a list of BookName, Author & PublicationYear: =>>>
const bookList = [
  createBook("Pride and Prejudice", "Jane Austen", 1813),
  createBook("The Lord of the Rings", "J.R.R. Tolkien", 1954),
  createBook("To Kill a Mockingbird", "Harper lee", 1960),
  createBook("The Hunger Games", "Suzanne Collins", 2012),
  createBook("The Great Gatsby", "F. Scott Fitzgerald", 2015),
];

// Main Operation Function: =>>>
const bookAfterYear = (list, year) => {
  const filteredBooks = list.filter((book) => {
    return book.publicationYear >= year;
  });

  filteredBooks.map((book) => {
    book.author = book.author.toUpperCase();
  });

  return filteredBooks;
};

// Test-Case: =>>>
console.log(bookAfterYear(bookList, 2010));

// When we run this function, we will have the following information printed/output : >>>

// *************************************//
// [                                    //
//   {                                  //
//     Title: 'The Hunger Games',       //
//     Author: 'SUZANNE COLLINS',       //
//     PublicationYear: 2012            //
//   },                                 //
//   {                                  //
//     Title: 'The Great Gatsby',       //
//     Author: 'F. SCOTT FITZGERALD',   //
//     PublicationYear: 2015            //
//   }                                  //
// ]                                    //
// *************************************//
