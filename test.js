// Run node test.js to test functions

const {map, filter, find, head, reverse, tail, sort, findLast} = require('./index.js')

let testArray = [2, 5, 9, 3, 10, 19, 7, 35, 90, 4];

// Double each number
console.log(map(testArray, x => x * 2)); 
// expected output: [ 4, 10, 18, 6, 0, 18, 14, 70, 180, 8 ]

// filter even numbers only
console.log(filter(testArray, x => x % 2 === 0));
//expected output: [ 2, 10, 90, 4 ]

// find number larger than 15
console.log(find(testArray, x => x > 15));
// expected output: 19

console.log(findLast(testArray));
// expected output: 4

console.log(head(testArray));
// expected output: 2

console.log(reverse(testArray));
// expected output: [ 4, 90, 35, 7, 19, 10, 3, 9, 5 ]

console.log(tail(testArray));
// expected output: [ 5, 9, 3, 10, 19, 7, 35, 90 ]

console.log(sort(testArray));
// expected output: [ 2, 3, 4, 5, 7, 9, 10, 19, 35, 90 ]
