/* Question 7:

Write a function that when given an array of strings, returns a new array with only the strings that start with a vowel. */


const stringsElementsThatStartWithVowel = (stringArray) => {
    const result = [];
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    stringArray.forEach(element => {
        if (vowels.includes(element.charAt(0).toLowerCase())) {
            result.push(element);
        }
    });

    return result;
}


const input = ['pear', 'orange', 'grape', 'apple', 'banana',];
const check = stringsElementsThatStartWithVowel(input);
console.log(check); 
