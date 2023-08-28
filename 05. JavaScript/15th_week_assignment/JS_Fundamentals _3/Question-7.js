// <!-- Question-7 :-   Build a program that utilizes a Map to store user information (name, age, email) and allows adding, updating, and deleting user records.

// // Function to Add User : =>>>
const addUser = (map, name, age, email) => {
  map.set(email, [name, age, email]);
};

// Function to Delete User : =>>>
const deleteUser = (map, email) => {
  if (map.has(email)) {
    map.delete(email);
    console.log(`User deleted successfully`);
  } else {
    console.log(`user not registered`);
  }
};

// Function to update User : =>>>
const updateUser = (map, name, age, email) => {
  if (map.has(email)) {
    let user = map.get(email);
    user[0] = name;
    user[1] = age;
    console.log(`User updated successfully`);
  } else {
    console.log(`User not registered`);
  }
};

// Display User : =>>>
const displayUser = (map) => {
  for (let [key, value] of map) {
    console.log('//**********************//');
    console.log(`${key}`);
    console.log(`Name : ${value[0]}`);
    console.log(`Age : ${value[1]}`);
    console.log(`Email : ${value[2]}`);
    console.log('//**********************//');
  }
};

let sampleMap = new Map();

// Test-Case : =>>>
addUser(sampleMap, 'ashwani', 22, 'ashwani@gmail.com');
addUser(sampleMap, 'ashu', 22, 'ashu@gmail.com');
displayUser(sampleMap);
updateUser(sampleMap, 'chetan', 20, 'chetan@gmail.com');
deleteUser(sampleMap, 'ak@gmail.com');
displayUser(sampleMap);

// When we run this function, we will have the following information printed/output : >>>

// // ********************************//
// //**********************//         //
// ashwani@gmail.com                  //
// Name : ashwani                     //
// Age : 22                           //
// Email : ashwani@gmail.com          //
// //**********************//         //
// //**********************//         //
// ashu@gmail.com                     //
// Name : ashu                        //
// Age : 22                           //
// Email : ashu@gmail.com             //
// //**********************//         //
// User not registered                //
// user not registered                //
// //**********************//         //
// ashwani@gmail.com                  //
// Name : ashwani                     //
// Age : 22                           //
// Email : ashwani@gmail.com          //
// //**********************//         //
// //**********************//         //
// ashu@gmail.com                     //
// Name : ashu                        //
// Age : 22                           //
// Email : ashu@gmail.com             //
// //**********************//         //
// // ********************************//