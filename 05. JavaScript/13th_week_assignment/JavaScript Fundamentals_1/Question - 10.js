// Question.10 :- You are given with an array of numbers both positive and negative. Your task is to print only the positive numbers.

let array = [1, 2, -3, 5, -9, -8, -7, 7];
for (let i=0; i <= array.length - 1; i++) {
    if (array[i] > 0) {
        console.log(array[i]);
    }
}