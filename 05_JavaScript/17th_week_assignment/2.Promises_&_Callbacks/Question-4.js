// <!-- Question-4 :- Write a program that accepts a list of objects representing books title, author, and year] and a callback function. The program should use the map function to create a new list containing only the titles of the books, and then pass this new list to the callback function. The callback function should then log the titles to the console in alphabetical order.
// #Arrange in alphabetical order: =>>>

// Main_Function_Run: =>>>
const showBookTitles = (obj, callback) => {
  const booksTitles = obj.map((book) => {
    return callback(book);
  });
  return booksTitles.sort();
};

// Callback_Function (2nd function): =>>>
const logBooksTitle = (obj) => {
  return obj.title;
};

// Test_Case: =>>>
const books = [
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

console.log(showBookTitles(books, logBooksTitle));

// When we run this function, we will have the following information printed/output : >>>

// *************************************//
//                                      //
// [                                    //
//   '1984',                            //
//   'Pride and Prejudice',             //
//   'The Catcher in the Rye',          //
//   'The Great Gatsby',                //
//   'To Kill a Mockingbird'            //
// ]                                    //
//                                      //
// *************************************//
