// JavaScript conditional statements and loops
//  [ 12 exercises with solution]


// 1.. Write a JavaScript program that accept two integers 

// and display the larger.

var num1 = 10;
var num2 = 20;

if (parseInt(num1) > parseInt(num2)) {
    console.log(num1,"is bigger")
}
  else{
    console.log(num2,"is bigger")
  }


// 2...Write a JavaScript conditional statement 
// to find the sign of product of three numbers. 

let x = 5;
let y = -15;
let z = 20;


if(x > 0 && y > 0 && z > 0){
    console.log("This sign is +")
}
else if(x < 0 && y < 0 && z < 0){
    console.log("This sign is -")
}
else if(x > 0 && y < 0 && z < 0 ){
console.log("This sign is +")
}
else if(x < 0 && y > 0 && z < 0){
console.log("This sign is +")
}
else{console.log("This sign is -")}



// 3... Write a JavaScript conditional statement to sort three numbers. 

var a = 0;
var b =-1;
var c = 4;
if (a>b && a>c)
{
        if (b>c)
        {
            console.log(a + ", " + b + ", " +c);
        }
        else
        {
            console.log(a + ", " + c + ", " +b);
        }
}
else if (b>a && b >c)
{
        if (a>c)
        {
             console.log(b + ", " + a + ", " +c);
        }
        else
        {
             console.log(b + ", " + c + ", " +a);
        }
}
else if (c>a && c>b)
{
        if (a>b)
        {
            console.log(c + ", " + a + ", " +b);
        }
        else
        {
            console.log(c + ", " + b + ", " +a);
        }
}        

//  ans - 4, 0, -1


// 4... Write a JavaScript conditional statement 
// to find the largest of five numbers. 
var psc = 10;
var jsc = 5;
var ssc = 13;
var hsc = 3;

if(psc > jsc && psc > ssc && psc > hac){
    console.log(psc, "is big")
}else if(
    jsc > psc && jsc > ssc && jsc > hsc
){
    console.log(jsc , "is big")
}
else if(ssc > psc && ssc > jsc && ssc > hsc){
    console.log(ssc, "is big")
}
else{
    console.log(hsc, "is big")
}

// ans :- 13 is big


// Write a JavaScript for loop that will iterate from 0 to 15. For each 
// iteration, it will check if the current number is odd or even, and 
// display a message to the screen.


for(var i = 1; i <= 15; i++){
    var result = i;
    if (result % 2 == 0) {
        console.log(i,'is even')
    }else{
        console.log(i,'is odd')
    }
}

/* ans :- 
1 is odd
2 is even
3 is odd
4 is even
5 is odd
6 is even
7 is odd
8 is even
9 is odd
10 is even
11 is odd
12 is even
13 is odd
14 is even
15 is odd
*/



// 6... Write a JavaScript program which compute, the average marks of the 
// following students Then, this average is used to determine the 
// corresponding grade.


let David = 80
let Vinoth = 77
let Divya = 88
let Ishitha = 95
let Thomas = 68

const totalNumber = David + Vinoth + Divya + Ishitha + Thomas;
const averageNumber = totalNumber / 5;
console.log(averageNumber) // nas :- 81.6
if (averageNumber < 60 ) {
    console.log("They got F")
}
else if(averageNumber >= 60 && averageNumber < 70){
    console.log("They got D")
}
else if(averageNumber >= 70 && averageNumber < 80){
    console.log("They got C")
}
else if(averageNumber >= 80 && averageNumber < 90){
    console.log("They got B")
}
else if(averageNumber >= 90 && averageNumber < 100){
    console.log("They got A")
}

// ans :- They got B


