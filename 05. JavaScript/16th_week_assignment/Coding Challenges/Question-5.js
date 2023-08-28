// <!-- Question-5 :-  Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://, followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters. Print a message indicating if the input matches the conditions or not.

// #URL validation: =>>>

const isValid = (url) => {
  let regex = new RegExp(/^(http|https):\/\/[\w\d\s\S]+?\.[\w]+$/i);

  return regex.test(url) ? 'Valid URL' : 'Not a valid URL';
};

// Test-Case: =>>>
[
  'www.example.com',
  'http://invalid_url',
  'http://www.openai.com',
  'ftp://ftp.example.net',
  'https://my-site123.net',
  'http://www.example.com',
  'https://invalid@url.com',
  'https://en.wikipedia.org',
  'https://stackoverflow.com',
].map((url) => {
  console.log(isValid(url));
});

// When we run this function, we will have the following information printed/output : >>>

// ***********************//
// Not a valid URL        //
// Not a valid URL        //
// Valid URL              //
// Not a valid URL        //
// Valid URL              //
// Valid URL              //
// Valid URL              //
// Valid URL              //
// Valid URL              //
// ***********************//