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

