/* Question 2:

Write a function that given an array of strings, return a new array with only the strings that have a length greater than 5. */

const findElementsWithLengthGreaterThan5 = (arrayOfStrings) => {
    let result = []

        for(let count = 0; count < arrayOfStrings.length; count++){

            if (arrayOfStrings[count].length > 5){
                result.push(arrayOfStrings[count])
    
            }
    

        }
        
        return result;
    }



    const Strings = ["Kiwi", "Yam", "Sugar", "Router", "Phone", "Strawberry", "BlackBerry"]
    let output = findElementsWithLengthGreaterThan5(Strings)
    console.log(output)



