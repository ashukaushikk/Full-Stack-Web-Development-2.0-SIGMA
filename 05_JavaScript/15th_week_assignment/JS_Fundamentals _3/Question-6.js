// <!-- Question-6 :- Create a function that takes a string as input and returns the string reversed using string manipulation techniques.

const reverseString = (str) => {
  let reversedStr = ' ';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  str = reversedStr;
  console.log(str);
};

// Test-Case : =>>>
reverseString('Ashwani');
reverseString('Ashu');

// When we run this function, we will have the following information printed/output : >>>

// **************//
// inawhsA       //
// uhsA          //
// **************//