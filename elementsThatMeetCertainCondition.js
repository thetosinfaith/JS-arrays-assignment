/* Question 4:

Use the find() method to find the first object in an array that meets a certain condition. */

const frontendStudents = [
    { name: 'Tosin Faith', age: 15},
    { name: 'Kosisochukwu Emmanuel', age: 27},
    { name: 'Ben Henry', age: 55},
    { name: 'Elechi Jude', age: 10 }
]

const theCurveStudents = frontendStudents.find(student => student.age > 50)

console.log(theCurveStudents)