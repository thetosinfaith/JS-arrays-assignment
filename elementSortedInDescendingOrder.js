/* Question 8:

Write a function that when given an array of numbers, returns a new array with the elements sorted in descending order. */


const elementSortedInDescendingOrder = (check) => {
    return check.slice().sort((a, b) => b - a);
}


const numbers = [5, 2, 9, 1, 6];

const sortedNumbers = sortDescending(numbers);

console.log(sortedNumbers); 
