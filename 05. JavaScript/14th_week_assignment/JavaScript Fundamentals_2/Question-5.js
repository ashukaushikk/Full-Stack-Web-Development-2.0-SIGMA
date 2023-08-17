// Question-5 :- Let’s say you are working for an event management company. You have a list of guest names as an array of strings. Your task is to return a sentence that has all the guest names, separated by commas.

// Given Array of Guest Name : >>>
const guest = ["Anurag", "Mithun", "Alka", "Shivam", "Farman"];
let guestList = ``;

for (let i = 0; i < guest.length; i++) {
    if(i == guest.length-1){
        guestList += guest[i];
    }else{
        guestList += guest[i] + ', ';
    }
}
console.log(guestList);

// When we run this function, we will have the following information printed/output : >>>

// *******************************************
// " Anurag, Mithun, Alka, Shivam, Farman "  *
// *******************************************