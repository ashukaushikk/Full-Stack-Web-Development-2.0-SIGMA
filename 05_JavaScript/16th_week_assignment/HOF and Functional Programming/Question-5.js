// <!-- Question-5 :-  Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://, followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters. Print a message indicating if the input matches the conditions or not.

// #URL validation: =>>>

const isValid = (url) => {
  const urlPattern = new RegExp(/^(http|https):\/\/[\w\d\s\S]+?\.[\w]+$/i);

  return urlPattern.test(url) ? `"${url}" is a valid URL.` : `"${url}" is not a valid URL.`;};

// Test-Case: =>>>
const URL = ["www.example.com", "http://www.openai.com"];

URL.map((url) => { console.log(isValid(url));});

// When we run this function, we will have the following information printed/output : >>>

// ******************************************* //
//                                             //
// "www.example.com" not a valid URL           //
// "http://www.openai.com" is a Valid URL      //
//                                             //
// ******************************************* //
