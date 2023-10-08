// Question-10 :- As a web developer, your task is to build a function that examines a sentence and counts how many times each unique word appears in it. Using a map, the function efficiently keeps track of the occurrence of each word in the sentence.

// This question solve through Map() constructor : >>>


function countWords(sentence) {
  const words = sentence.split(/\s+/);      // <<< : Split the sentence into words using whitespace as separator.
  const wordCountMap = new Map();           // <<< : Create a map to store word counts.
  for (const word of words) {
    // <<< : Count the occurrences of each word.
    if (wordCountMap.has(word)) {
      wordCountMap.set(word, wordCountMap.get(word) + 1);
    } else {
      wordCountMap.set(word, 1);
    }
  }
  return wordCountMap;
}

const sentence = `please please submit your assignment on time your assignments are important`;
const wordCounts = countWords(sentence);
console.log(wordCounts);

// When we run this function, we will have the following information printed/output : >>>

// ************************ //
// * Map(8) {             * //
// * 'please' => 2,       * //
// * 'submit' => 1,       * //
// * 'your' => 2,         * //
// * 'assignment' => 2,   * //
// * 'on' => 1,           * //
// * 'time,' => 1,        * //
// * 'are' => 1,          * //
// * 'important' => 1     * //
// * }                    * //
// ************************ //