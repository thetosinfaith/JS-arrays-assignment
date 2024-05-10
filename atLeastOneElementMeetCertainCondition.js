/* Question 5:

Write a function that uses the some() method to check if at least one element in an array meets a certain condition. */

const atLeastOneElementMeetsCertainCondition = (oneElement) => {

    return oneElement.some(checkCondition => checkCondition > 100)
    
}

let input = [7, 9, 10, 19, 22, 127]

let output = atLeastOneElementMeetsCertainCondition(input);

console.log(output)







