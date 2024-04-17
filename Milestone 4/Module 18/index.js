// (index)..

// array value start with "0" index
var numbers = [10, 20, 30, 40, 50];
console.log(numbers[2]) //ans : 30
var ans = numbers[4];
console.log(ans) //ans : 50

// array index value change
numbers[3] = 70;
console.log(numbers)
// ans : [ 10, 20, 30, 70, 50 ]

// find index of an array
var position = numbers.indexOf(20);
console.log(position) // ans : 1