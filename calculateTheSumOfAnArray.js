/* Question 3:

Write a function that uses the reduce() method to calculate the sum of an array of numbers. */

const calculateTheSumOfAnArrayOfNumbers = (arrayOfNumbers) => {

    let totalSum = arrayOfNumbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);

    return totalSum;

}


const numbers = [2, 9, 14, 55, 13, 71]
const total = calculateTheSumOfAnArrayOfNumbers(numbers)
console.log(total)


