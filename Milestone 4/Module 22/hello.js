// Module 22
// video 1

// string lower case
const userName = 'Tanvir Hassan';
console.log(userName.toLowerCase())
// ans :- tanvir hassan

// String upper case
const name2 = 'sabit hasan';
const vv = name2.toUpperCase()
console.log(vv)
// ans :- SABIT HASAN

var num = 1001;
var num2 = num.toString()
console.log(typeof num2)
// ans :- string




// video 2

// string include
const lyrics = 'amar sonar bangla ami tomai valobashi'

const doesExist = lyrics.includes('bangla');
console.log(doesExist)
// ans :- true 

const doesExist2 = lyrics.includes('Bangla');
console.log(doesExist2)
// ans :- false

const doesExist3 = lyrics.includes('bangladesh');
console.log(doesExist3)
// ans :- false


// index of
console.log(lyrics.indexOf('tomai'))
// ans :- 22


// start With
console.log(lyrics.startsWith('amar'))
// ans :- true


// start With
console.log(lyrics.startsWith('tomar'))
// ans :- false


// ends With
console.log(lyrics.endsWith('valobashi'))
// ans :- true


// ends With
console.log(lyrics.endsWith('ghrina'))
// ans :- false



// video 3
// split-join

let lyrics2 = 'amar collage er nam notunhat public collage. ami amar collage k valobashi'

let parts = lyrics2.split(' ')
console.log(parts)
/* ans :- 
[
  'amar',     'collage',
  'er',       'nam',
  'notunhat', 'public',
  'collage'
] */

let char = lyrics2.split('')
console.log(char)
/* ans :-
[
  'a', 'm', 'a', 'r', ' ', 'c', 'o', 'l', 'l', 'a',
  'g', 'e', ' ', 'e', 'r', ' ', 'n', 'a', 'm', ' ',
  'n', 'o', 't', 'u', 'n', 'h', 'a', 't', ' ', 'p',
  'u', 'b', 'l', 'i', 'c', ' ', 'c', 'o', 'l', 'l',
  'a', 'g', 'e', '.', ' ', 'a', 'm', 'i', ' ', 'a',
  'm', 'a', 'r', ' ', 'c', 'o', 'l', 'l', 'a', 'g',
  'e', ' ', 'k', ' ', 'v', 'a', 'l', 'o', 'b', 'a',
  's', 'h', 'i'
]
*/ 

let sentences = lyrics2.split('.');
console.log(sentences)
/* ans :-
[
  'amar collage er nam notunhat public collage',
  ' ami amar collage k valobashi'
]
*/ 


let lyrics3 = 'abcdefghijklmnopqrstuv'
let slices = lyrics3.slice(5, 8)
console.log(slices)


let lyrics4 = [
    'My name is tanvir hassan',
    'I am 18 years old',
    'My home town is jashore'
];

let joining = lyrics4.join('. ')
console.log(joining)
// ans :- My name is tanvir hassan. I am 18 years old. My home town is jashore




// video 4
// math

// math.pow
const result = Math.pow(3, 3);
  // (3*3*3 = 27)
console.log(result); // ans : - 27 

const result2 = Math.pow(4, 5); 
 //(4*4*4*4*4 = 1024)

console.log(result2); // ans : - 1024


// math.abs
const numb1 = 25;
const numb2 = 45;
const gap1 = numb1 - numb2;
console.log(gap1);
// ans :- -20
const gap2 = Math.abs(numb1 - numb2);
console.log(gap2)
// ans :- 20

if (gap2 < 5) {
  console.log("you guys are friends")
}else{
  console.log("you guys stay apart")
}
// you guys stay apart


// math.round
const number1 = 2.441516;
const fullNumber = Math.round(number1);
console.log(fullNumber); 
// ans :- 2

const number2 = 2.541516;
const fullNumber2 = Math.round(number2);
console.log(fullNumber2); 
// ans :- 3

// math.ceil
const number3 = 3.141516;
const fullNumber3 = Math.ceil(number3);
console.log(fullNumber3); 
// ans :- 4

// math.floor
const number4 = 6.941516;
const fullNumber4 = Math.floor(number4);
console.log(fullNumber4); 
// ans :- 6

// math.random
const number5 = [];
const fullNumber5 = Math.random(number5); 
// ans :- 0.2877271985070762   note :- {any output can be come}

console.log(fullNumber5); 
// ans :- 0.5040761229265991

const number6 = [];
const fullNumber6 = Math.random(number6)*100;
const roundAns = Math.round(fullNumber6);
console.log(roundAns);
 // ans :- 75  note :- {any output can be come between 1 to 100}





// video 5
// swap

let first = 10;
let second = 50;
console.log(first, second)
// ans :- 10 50

// approach :- 1
const temp = first;
first = second;
second = temp;
console.log(first, second)
// ans :- 50 10


// approach :- 2
let first1 = 'mango';
let second2 = 'orange';

[first1, second2] = [second2, first1] 

console.log(first1, second2);
// ans :- orange mango


// approach :- 3
let x = 100;
let y = 300;

x = x + y; // {100 + 300 = 400}
y = x - y; // {400 - 300 = 100}
x = x - y; // {400 - 100 = 300}

console.log(x, y)
// ans :- 300 100



// video 6
// max & min

// approach 1
let a = 10;
let b = 20;
let c = 18;

if (a > b && a > c) {
  console.log("A is BIG")
}else if(b > a && b > c){
  console.log("B is Big")
}else{
  console.log('C is BIG')
}

// ans :- B is Big


// approach 2

console.log(Math.max(a,b,c))
// ans :- 20


// approach 3

function findBig(X, Y, Z){
  return Math.max(X,Y,Z)
}

const bigNumber = findBig(1050, 3000, 8070);
console.log(bigNumber)
// ans :- 8070



// approach 4
// less number 
function findLss(X, Y, Z){
  return Math.min(X,Y,Z)
}

const lessNumber = findLss(1050, 3000, 8070);
console.log(lessNumber)
// ans :- 1050




// video 7
// find the highest from an array

function maxInArray(numbers){
  let largest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  
  const element = numbers[i];
  // console.log(element)
  if (element > largest) {
    largest = element
  }
  
}
return largest
}

const highest = [125, 145, 188, 169, 192, 187, 175]
const tallest = maxInArray(highest)
console.log(tallest)
// ans :- 192



// video 8
// reverse string

function reverseString(stringText) {
  for(let i = stringText.length-1; i >= 0; i--){
      let element = stringText[i];
      console.log(element)
      
  }
 
}



// reverse word
function reverseWord(str){
const word = str.split(' ');
console.log(word)
// ans :- [ 'i', 'am', 'a', 'good', 'boy' ]
let finalResult = [];
for (let i = str.length - 1; i >= 0; i--) {
  const element = str[i];
  
  finalResult.push(element)
}
const reversed = finalResult.join(' ');
return reversed
}





let text = 'i am a good boy'
reverseString(text)
const reversed = reverseWord(text);
console.log(reversed)

/* ans :-
y
o
b

d
o
o
g

a

m
a

i
*/ 





// video 9
// fibonacci sequence
const fibonacci
 = [0 , 1];
for(let i = 2; i <= 10; i++){
 fibonacci
 [i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci)

/* ans :- 
[
   0, 1,  1,  2,  3,
   5, 8, 13, 21, 34,
  55
]
*/ 