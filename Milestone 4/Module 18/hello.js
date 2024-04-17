// Module 18
/*
// video 2
// (array)..

var friendsAge = [19, 20, 21, 18, 17]
console.log(friendsAge.length) 
// ans : 5
var friendsName = ["sabit", "susan"]



// video 3
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



// video 4
// (push , pop)..

// push = add value at the last position

// push
var nmb = [20, 40, 60, 80, 100]
nmb.push(120)
console.log(nmb)
// ans : [ 20, 40, 60, 80, 100, 120 ]

var friends = ["sabit", "susan", "isa"];
friends.push("aqib")
console.log(friends)
// ans : [ 'sabit', 'susan', 'isa', 'aqib' ]

// pop = terminate a value from the last position

// pop
var nmb = [20, 40, 60, 80, 100]
nmb.pop()
console.log(nmb)
// ans : [ 20, 40, 60, 80 ]

var friends = ["sabit", "susan", "isa"];
friends.pop()
console.log(friends)
// ans : [ 'sabit', 'susan' ]



// video 5
// (comparison)..

console.log(5 < 6);  // ans : true
console.log(5 > 6);  // ans : false
console.log(5 == 6); // ans : false
console.log(6 == 6); // ans : true
console.log(5 != 6); // ans : true
console.log(6 != 6); // ans : false

// less or equal? (less) :- 
console.log(5 <= 6); // ans : true
// less or equal? (equal) :-
console.log(6 <= 6); // ans : true
// less or equal? ( no equal, no less) :-
console.log(10 <= 6); // ans : false

// greater or equal? (greater)
console.log(10 >= 5); // ans : true
// greater or equal? (equal)
console.log(10 >= 10); // ans : true
// greater or equal? (no greater no equal)
console.log(10 >= 15); // ans : false

// 40000 = 40000 && 10000 = 10000 ans : true 
// 20000 >= 40000 && 10000 >= 10000 ans : false
// 20000 > 40000 && 20000 < 10000 ans : false
// 20000 > 40000 || 50000 < 10000 ans : true
// 20000 <= 40000 || 50000 < 10000 ans : true



// video 6 
// conditions

var chickenPrice = 500;
var porotaPrice = 10 ;
if(chickenPrice > porotaPrice){
    console.log("ami porota khabo")
}
else{
    console.log("ami chicken e khabo")
}
// ans: ami porota khabo

var chickenPrice = 500;
var porotaPrice = 10 ;

if(chickenPrice < porotaPrice){
    console.log("ami porota khabo")
}
else{
    console.log("ami chicken e khabo")
}
// ans : ami chicken e khabo



// video 7
// (multiple conditions)

// &&

var isGraduated = true;
var salary = 30000;
var cars = 1;
if (isGraduated == true && salary > 20000) {
    console.log("aso tomar biye dei")
} else {
    console.log("tomar biye dea jabe na")
}
//  ans : aso tomar biye dei

var isGraduated = true;
var salary = 30000;
var cars = 1;
if (isGraduated == true && salary >= 50000) {
    console.log("aso tomar biye dei")
} else {
    console.log("tomar biye dea jabe na")
}
//  ans : tomar biye dea jabe na

var isGraduated = true;
var salary = 30000;
var cars = 1;
if (isGraduated == true && salary > 20000 && cars  >= 1) {

    console.log("aso tomar biye dei")
} else {
    console.log("tomar biye dea jabe na")
}
//  ans : aso tomar biye dei

var isGraduated = true;
var salary = 30000;
var cars = 1;
if (isGraduated = true && salary >= 50000 && cars == 1) {

    console.log("aso tomar biye dei")
} else {
    console.log("tomar biye dea jabe na")
}
//  ans : tomar biye dea jabe na


// (||)
var schoolFee = true;
var privet = 1000;

if (schoolFee == true || privet > 500) {
    console.log("school e jau ")
} else {
    console.log("tomar school e jaua lagbe na")

}
// ans : school e jau

var schoolFee = true;
var privet = 1000;

if (schoolFee == false || privet > 500) {
    console.log("school e jau ")
} else {
    console.log("tomar school e jaua lagbe na")

}
//  ans : school e jau

var schoolFee = true;
var privet = 1000;

if (schoolFee == false || privet < 500) {
    console.log("school e jau ")
} else {
    console.log("tomar school e jaua lagbe na")
    
}
// ans : tomar school e jaua lagbe na


// (&& , ||)
var i = 1000;
var c = 2000;
var e = 3000;

if((i == 1000 && c == 1500) || e >=2500 ){
    console.log("you are pass")
}
else{
    console.log("you are not pass")
}
// ans : you are pass



// video 8
// (multi-stage condition)..

var biscuit = 30;
var batterbon = 25;
var tea = 10;

if(biscuit > 40){
    console.log("biscuit khaua jabe na")
}
else if(batterbon < 20){
    console.log("batterbon e khabo")
}
else{
    console.log("tea is best")
}
//  ans : tea is best

*/