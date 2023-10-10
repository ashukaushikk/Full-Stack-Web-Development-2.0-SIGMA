// <!-- Question-6 :-  As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
// The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs that do not follow this format or contain invalid characters. The program should provide clear output messages indicating whether each input is a valid LinkedIn profile URL or not.


// #LinkedIn Profile URL Validator: =>>>

const isValidURL = (url) => {
  const urlPattern = new RegExp(/^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/);

  return urlPattern.test(url)
    ? `"${url}" is a valid LinkedIn profile URL.`
    : `"${url}" is not a valid LinkedIn profile URL.`;
};

let URL = ["https://www.linkedin.com/in/johndoe123","https://www.linkedin.com/in/short",];

// Test-Case: =>>>
URL.map((url) => {console.log(isValidURL(url))});

// When we run this function, we will have the following information printed/output : >>>

// *************************************************************************** //
//                                                                             //
// "https://www.linkedin.com/in/johndoe123" is a valid LinkedIn profile URL.   //
// "https://www.linkedin.com/in/short" is not a valid LinkedIn profile URL.    //
//                                                                             //
// *************************************************************************** //