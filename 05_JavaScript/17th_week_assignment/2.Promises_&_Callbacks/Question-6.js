// <!-- Question-6 :-  Write a function that asynchronously fetches data from an API:
// [https://isonplaceholder.typicode.com/todos/1] ]and logs the result to the console.

// #Fetch results asynchronously: =>>>

// Fetch_Data_Function: =>>>
const fetchData = (api) => {
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
    });
};

// Test_Case: =>>>
fetchData("https://jsonplaceholder.typicode.com/todos/1");

// When we run this function, we will have the following information printed/output : >>>

// *************************************************************************//
//   { userId: 1, id: 1, title: 'delectus aut autem', completed: false }    //
// *************************************************************************//
