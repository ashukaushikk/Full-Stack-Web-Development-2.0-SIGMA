// <!-- Question-9 :- Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/123456789 to simulate an error, and then display an error message on the webpage.

// #Error Handling: =>>>

const fetchData = (api) => {
  fetch(api)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Please check your internet connection');
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log('Error occured');
      console.log(err);

      // Displays_Error_On_Web: =>>>
      let paragraph = document.createElement('p');
      paragraph.textContent =
        'An error is occuring while displaying data on web.';
      document.body.append(paragraph);
    });
};

// Test_Case: =>>>
fetchData('https://jsonplaceholder.typicode.com/posts/123456789');

// When we run this function, we will have the following information printed/output (Error) : >>>

// ******************************************************************************************************//
// Error occured                                                                                         //
// Error: Please check your internet connection                                                          //
//     at E:\tech\Full-Stack-Web-Development-2.0-SIGMA\05. JavaScript\17th_week_assignment\2.Promises_&  //
// _Callbacks\Question-9.js:9:15                                                                         //
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)                     //
// E:\tech\Full-Stack-Web-Development-2.0-SIGMA\05. JavaScript\17th_week_assignment\2.Promises_&         //
// _Callbacks\Question-9.js:22                                                                           //
//       let paragraph = document.createElement('p');                                                    //
//                       ^                                                                               //
//                                                                                                       //
// ReferenceError: document is not defined                                                               //
//     at E:\tech\Full-Stack-Web-Development-2.0-SIGMA\05. JavaScript\17th_week_assignment\2.Promises_&  //
// _Callbacks\Question-9.js:22:23                                                                        //
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)                     //
//                                                                                                       //
// Node.js v20.5.1                                                                                       //
// ******************************************************************************************************//
