/* Question 10:

Write a function that given an array of strings and a string containing one letter e.g 'a', returns a new array with only 
the strings that contain the letter 'a'. */


const filterStringsByLetter = (strings, letter) => {

    return strings.filter(str => str.includes(letter));

}

let arrayOfStrings = ["tosin", "oluwatola", "tega", "Michael", "moses"];

let result = filterStringsByLetter(arrayOfStrings, 'a');

console.log(result);



