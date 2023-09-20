// Question-5 :- Let’s say you are working for an event management company. You have a list of guest names as an array of strings. Your task is to return a sentence that has all the guest names, separated by commas.

// Given Array of Guest Name : >>>
const guestList = ["Ashu", "Deepak", "Jatin", "Nikhil", "Mohit"];

function separatedComma(guestList) {
  let newGuestList = ``;
  for (let i = 0; i < guestList.length; i++) {
    if (i === guestList.length - 1) {
      newGuestList += guestList[i];
    } else {
      newGuestList += guestList[i] + ", ";
    }
  }
  return newGuestList;
}
let result = separatedComma(guestList);
console.log(result);

// When we run this function, we will have the following information printed/output : >>>

// **************************************** //
//                                          //
// Ashu, Deepak, Jatin, Nikhil, Mohit       //
//                                          //
// **************************************** //
