// Question.7 :- You are building a simple shopping list app. You have the items name in an array. Write a program that uses a for loop to print all the items in the shopping list array.

const shoppingList = [
  // shoppingList - 1
  { list: 1, cloths: "blue-Shirt", watch: "Apple", personalUses: "Conditioner" },
  // shoppingList - 2
  { list: 2, cloths: "black-Shirt", watch: "Samsung", personalUses: "HairOil" },
  // shoppingList - 3
  { list: 3, cloths: "Red-Shirt", watch: "One+", personalUses: "Perfume" },
];

function printShoppingList(shoppingList) {
  // "FOR" loop run:
  for (let i = 0; i < shoppingList.length; i++) {
    console.log(`Shopping list - ${shoppingList[i].list}`);
    console.log(`Cloths - ${shoppingList[i].cloths}`);
    console.log(`Watch Brand - ${shoppingList[i].watch}`);
    console.log(`Personal Uses - ${shoppingList[i].personalUses}`);
    console.log(); // Add an empty line for separation
  }
}
printShoppingList(shoppingList);

// When you run this code, it will output:

// *********************************** //
//                                     //
// Shopping list - 1                   //
// Cloths - blue-Shirt                 //
// Watch Brand - Apple                 //
// Personal Uses - Conditioner         //
//                                     //
// Shopping list - 2                   //
// Cloths - black-Shirt                //
// Watch Brand - Samsung               //
// Personal Uses - HairOil             //
//                                     //
// Shopping list - 3                   //
// Cloths - Red-Shirt                  //
// Watch Brand - One+                  //
// Personal Uses - Perfume             //
//                                     //
// *********************************** //
