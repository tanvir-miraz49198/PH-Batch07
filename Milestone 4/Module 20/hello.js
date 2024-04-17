// module 20 

// video 2 
// function
/*
function startFan(){
    console.log("stand up")
    console.log("go to the switch board")

    console.log("on the fan")

}
startFan();
/* ans :-
stand up
go to the switch board
on the fan
*/ 

/*

function giveSingara(money){

    console.log("mama singara dao")

    console.log(money)
}
giveSingara(200)
// ans :-
// mama singara dao      
// 200
*/

/*
// video 3
// peramiter

function add(num1,num2){
    console.log("going to add", num1, num2)

}
add(10,20)
// ans :- going to add 10 20


function sum(a, b, c, d, e) {

    console.log(a, b, c, d, e)

    // ans :- 15 25 35 45 55

    var sum = a+b+c+d+e;    

    console.log(sum)
    // ans :- 175
}
sum(15,25,35,45,55);
*/

/*
// video 4
// return

function add(number1, number2) {

    var sum = number1 + number2;

    return sum;
}
var plus = add(100, 50);
console.log(plus)
// ans :- 150


function singaraLagbe(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;

    return quantity;
}
var singaraDao = singaraLagbe(200);
console.log("amake singara dao",singaraDao,"peach")

// ans :- amake singara dao 20 peach
*/

/*
// video 5
// average

function assignmentAverage(assignment1,assignment2,assignment3){

    var total = assignment1 + assignment2 + assignment3;

    var average = total / 3;
    return average;
}
var assignment1 = 60;
var assignment2 = 60;
var assignment3 = 45;
var getNum = assignmentAverage(assignment1,assignment2,assignment3);

console.log("ami average number paichi",getNum);

//  ans :- ami average number paichi 55
*/

/*
// video 6
// object 
// mobile and student child known as properties

var student1 = {
               id:126,
               name: "solaiman khan",

               class: 11,
               marks: 988
            }
console.log(student1)
// ans :- { id: 126, name: 'solaiman khan', class: 11, marks: 988 }

console.log(student1.marks) // ans :- 988


var mobile = {
             brand: 'oppo',
             price: 28000,
             storage: "64gb",
             camera: "12mp"

}            
*/


/*
// video 7
// object property

var shoppingCart = {

        books: 3,
        sunglass:1,
        keyboard:5,
        mouse:1,
        pen:5
}

var properties = Object.keys(shoppingCart);
console.log(properties)
// ans :- [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen' ]

var propertiesValues = Object.values(shoppingCart);

console.log(propertiesValues);
//  ans :- [ 3, 1, 5, 1, 5 ]

// by changing only properties name can get the value

var valueSearch = 'keyboard';
propertiesName = shoppingCart[valueSearch];
console.log(valueSearch, propertiesName)
// ans :- keyboard 5

var booksCount = shoppingCart.books;
console.log('we have ',booksCount,'books'); 
// ans :- we have  3 books

var penCount = shoppingCart["pen"];
console.log('we have ',penCount,'pens')
// ans :- we have  5 pens
*/

/*
// video 8
// object-looping

var shoppingCart = {

    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 5,
    shoes: 25,
    shirt: 10
}

var keys = Object.keys(shoppingCart);

var val = Object.values(shoppingCart);

for (let i = 0; i < keys.length; i++) {

    const element = keys[i];
    const getResult = shoppingCart[element];

    console.log(element,":",getResult);
}
*/
/* ans :-

books : 3
sunglass : 1
keyboard : 5
mouse : 1
pen : 5
shoes : 25
shirt : 10

*/ 