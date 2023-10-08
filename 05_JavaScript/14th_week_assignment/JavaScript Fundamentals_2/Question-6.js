// Question-6 :- You are working for an e-commerce company, and you are given an object containing product-related information Your task is to print the product-related information details as shown in the image below.

// Create a Function for generate the product-related information details : >>>

function productDetails(productList) {
    //return the value
    return `Below are the products details:   

Name     : ${productList.name}
price    : ${productList.price}
color    : ${productList.color}
hardDisk : ${productList.hardDisk}
`

}

// Given Array of Product related information : >>>
const productList = {
    name: `Apple 2020 MacBook Air Laptop`,
    price: 82000,
    color: `Gray`,
    hardDisk: `256 GB`
};

console.log(productDetails(productList));

// When we run this function, we will have the following information printed/output  : >>>

// ****************************************** //
// Below are the product details:           //
//                                           //
// name: `Apple 2020 MacBook Air Laptop`    //
// price: 82000                             //
// color: `Gray`                            //
// hardDisk: `256 GB`                       //
// ****************************************** //




// 2nd way ----------------------------------------->

// const productDetails = (details) => (
// `Below are the products details:

// Name     : ${details.name}
// Price    : ${details.price}
// Color    : ${details.color}
// HardDisk : ${details.hardDisk}
// `
// )

// productList = {
//     name: `Apple 2020 MacBook Air Laptop`,
//     price: 82000,
//     color: `Gray`,
//     hardDisk: `256 GB` 
// };

// console.log(productDetails(productList));

