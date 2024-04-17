// module 21
// video 1
// var let const

/*
// var can changed the value in same variable
// but var not required to use
var team1 = 1000;
team1 = 2000;
console.log(team1);
// ans :- 2000

// let is a es6 version.let also can change the value in same variable

// required to use
let team2 = 5000;
team2 = 7000;
console.log(team2)
// ans :- 7000

// const is  es6 version .const can't change the value in same variable 

// required to use
const team3 = 8000; 
console.log(team3)
// ans :- 8000
team3 = 9000;
console.log(team3)
*/


// video 2
// unit convert

function inchToFeet(inches){
     var totalFeet = inches / 12;
     return totalFeet
}

const dadarFeet = inchToFeet(144);
console.log(dadarFeet)
// ans :- 12
const dadiFeet = inchToFeet(60);
console.log(dadiFeet)
// ans :- 5


// Mile to kilometers

function mileToKilometers(miles) {
    var totalKilometers = 1.60934 * miles;

    return totalKilometers;
}

const bazar = mileToKilometers(3);
console.log(bazar)
//  ans :- 4.82802

const school = mileToKilometers(10);
console.log(school)
//  ans :- 16.0934

const collage = mileToKilometers(5);
console.log(collage)
//  ans :- 8.0467




// module 3
// even odd

// we return true and false that's why we can't return check

function evenOddCheck(numbers) {
    const check = numbers % 2;
    if(check == 0){
        return true
    } 
    else{
        return false
    }
   
}
var even = evenOddCheck(12)
console.log(even)
//  ans :- true

var odd = evenOddCheck(11)
console.log(odd)
//  ans :- false



// video 4
// leap year

function isLeapYear(year){
     var checkYear = year % 4 == 0;
    if(checkYear == true){
    console.log(year,'is  leap year')
    }
    else{
        console.log(year,"is not leap year")

    }
}
isLeapYear(2024); // ans :- 2024 is  leap year

isLeapYear(2027); // ans :- 2027 is not leap year


function isLeapYear2(year2){
    var checkYear = year2 % 4;
   if(checkYear == 0){
    return true;
   }
   else{
       return false;
   }
}

const takeYear = isLeapYear2(2032)
console.log(takeYear) // ans :- true

const giveYear = isLeapYear2(2030);
console.log(giveYear) // ans :- false




// video 5
// sum of all numbers in array


// 
function allSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {

        const element = array[i];
        sum = sum + element;
        console.log(sum)
/* ans :-
10
22
27
34
47
66
116
*/ 

    }
    return sum
}
var numbers = [10, 12, 5, 7, 13, 19, 50]
var all = allSum(numbers)
console.log(all)
// ans :- 116



// video 6
// sum of all Odd numbers in array (interconnected with previous function)

function OddSum(array2) {
    let Oddsum = [];
    for (let i = 0; i < array2.length; i++) {

        const element = array2[i];
        if (element % 2 !== 0) {
          Oddsum.push(element)
        
        }
    }
    return Oddsum
}
var numbers = [10, 12, 5, 7, 13, 19, 50]

const result = OddSum(numbers) ;


var result2 = allSum(result)
console.log(result2)

/* ans :-
5
12
25
44
*/ 
// ans :- 44



// video 7
// factorial
// a factorial is a function that multiples a number by every numbers bellow it till 1.

function factorial(number) {
    let res = 1;
    for(var i = 1; i <= number; i++){
     res = res * i;
     console.log(i,res)
/* ans :- 
1 1
2 2
3 6
4 24
5 120
6 720
7 5040
8 40320
9 362880
10 3628800
*/ 

    }
    return res
}
let num = 10;
let totalFactorial = factorial(num);
console.log('factorial of',num,'is',totalFactorial)
//  ans :- factorial of 10 is 3628800


function factorialReverse(number2) {
    let res2 = 1;
    for(var i = number2; i >= 1; i--){
     res2 = res2 * i;
     console.log(i,res2)
/* ans :- 
8 8
7 56
6 336
5 1680
4 6720
3 20160
2 40320
1 40320
*/ 

    }
    return res2
}
let num2 = 6;
let reverseFactorial = factorialReverse(num2);
console.log('reverse factorial of',num2,'is',reverseFactorial)
//  ans :- reverse factorial of 8 is 720

// video 8
// while loop factorial

