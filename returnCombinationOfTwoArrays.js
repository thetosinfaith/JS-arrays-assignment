/* Question 9:

Write a function that uses the takes to arrays as input and returns the combination of the two arrays. */


const combineArrays = (array1, array2) => array1.concat(array2);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatArray = combineArrays(array1, array2);
console.log(concatArray);
