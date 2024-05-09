/* Question 1:

Write a function that given two arrays, returns a new array containing elements that are present in both arrays. */

const findElementsPresentInBothArrays = (firstArray, secondArray) => {
    let result = [] 
    
    for(let counter = 0; counter < firstArray.length; counter ++){

        if (secondArray.includes(firstArray[counter])){
            result.push(firstArray[counter])
        }

    }

    return result;

    }

    let fruitTray1 = ["Beer", "Fruit", "Grape", "Pepper"]
    let fruitTray2 = ["Beer", "Fruit", "Grape", "Goat", "Baby"]

    let customerPick = findElementsPresentInBothArrays(fruitTray1, fruitTray2)

    console.log(customerPick)

   



    

    

