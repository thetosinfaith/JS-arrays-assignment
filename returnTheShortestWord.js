/* Question 11:

Write a function that takes an array of strings and returns the shortest word. */

const shortestWord = (stringArray) => {
    if (!stringArray || stringArray.length === 0) {
        return null;
    }

    let shortest = stringArray[0];
    for (let i = 1; i < stringArray.length; i++) {
        if (stringArray[i].length < shortest.length) {
            shortest = stringArray[i];
        }
    }
    return shortest;
}
let userInput = ["apple", "banana", "orange", "mango", "grapefruit"];
console.log(shortestWord(userInput));