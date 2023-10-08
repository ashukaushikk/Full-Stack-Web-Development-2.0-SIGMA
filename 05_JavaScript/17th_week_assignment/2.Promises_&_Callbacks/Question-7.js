// <!-- Question-7 :-  Create an asynchronous function that retrieves data from two different API endpoints: "https://isonplaceholder.typicode.com/todos/1* and
// "https://jsonplaceholder.typicode.com/posts/l'. The first API returns a to-do task, while the second API provides post details. The function should combine the results from both APIs and log them as an object, where the keys are "todo and "post", and the corresponding values are the responses from the respective APIs.

// #Multiple requests: =>>>

// Main_Operator_Function : =>>>
async function fetchAndCombine(api1, api2) {
  try {
    let todoresponse = await fetch(api1);
    let postresponse = await fetch(api2);

    let todoData = await todoresponse.json();
    let postData = await postresponse.json();

    let fetchedResult = {
      todo: todoData,
      post: postData,
    };

    console.log(fetchedResult);
  } catch (err) {
    console.log(`Error occured`);
    console.log(err);
  }
}

// Test-Case: =>>>
fetchAndCombine(
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/posts/1'
);

// When we run this function, we will have the following information printed/output : >>>

// *******************************************************************************************//
//                                                                                            //
// {                                                                                          //
//   todo: { userId: 1, id: 1, title: 'delectus aut autem', completed: false },               //
//   post: {                                                                                  //
//     userId: 1,                                                                             //
//     id: 1,                                                                                 //
//     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',   //
//     body: 'quia et suscipit\n' +                                                           //
//       'suscipit recusandae consequuntur expedita et cum\n' +                               //
//       'reprehenderit molestiae ut ut quas totam\n' +                                       //
//       'nostrum rerum est autem sunt rem eveniet architecto'                                //
//   }                                                                                        //
// }                                                                                          //
//                                                                                            //
// *******************************************************************************************//