// Question.7 :- You are building a simple shopping list app. You have the items name in an array. Write a program that uses a for loop to print all the items in the shopping list array.

const shoppingList = [
  // shoppingList - 1
  { list: 1, cloths: "blue-Shirt", watch: "Apple", personalUses: "Conditioner"},
  // shoppingList - 2
  { list: 2, cloths: "black-Shirt", watch: "Samsung", personalUses: "HairOil" },
  // shoppingList - 3
  { list: 3, cloths: "Red-Shirt", watch: "One+", personalUses: "Perfume" },
];
  // "FOR" loop run:
for (let i = 0; i < shoppingList.length; i++) {
        console.log(shoppingList[i])
}

// When you run this code, it will output:

// ************************************************************************************ //
//                                                                                      //
// " { list: 1, cloths: "blue-Shirt", watch: "Apple", personalUses: "Conditioner"},     //
// " { list: 2, cloths: "black-Shirt", watch: "Samsung", personalUses: "HairOil" },     //
// " { list: 3, cloths: "Red-Shirt", watch: "One+", personalUses: "Perfume" },          //
//                                                                                      //
// ************************************************************************************ //
