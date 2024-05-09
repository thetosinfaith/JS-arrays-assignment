/* Question 6:

Use the every() method to check if all elements in an array meet a certain condition. */

const allElementsMeetCertainCondition = (allElements) => {

    return allElements.every(number => number < 10)

}

let input = [7, 9, 10, 19, 22, 127]

let output = allElementsMeetCertainCondition(input);

console.log(output)
