// module 39
// video 2
// V8 engine parse the javaScript and execute..
/* JavaScript এর কোড যদি crome এ দেওয়া হয় তাহলে ক্রমের ভেতরে 
একটা স্পেশাল ইঞ্জিন আছে জার নাম V8 engine ।এই ইঞ্জিন JavaScript 
এর কোড কে parse করে এক্সিকিউট করে */


// video 5
// promise.js

// approach 1
const getData = new Promise((resolve, reject) => {

    resolve(100);
})

getData.then(data => console.log(data))
// ans :- 100


// approach 2
const getData2 = new Promise((resolve, reject) => {

   reject("No Data Available");
})

getData2
.then(data => console.log(data))
.catch(err => console.log('ERR:',err))



// approach 3
const getData3 = new Promise((resolve, reject) => {

    const randomDigit = Math.random()*10;
    console.log(randomDigit)
    if (randomDigit < 5) {
        resolve(100)
    }else{
        reject("No Data Available");
    }
   
})

getData3
.then(data => console.log(data))
.catch(err => console.log('ERR:',err))

// result can be anything




// video 6
// interval.js

// set timeout

setTimeout(() => {
    console.log('Hello')
},4000) 
// ans :- set timeout will execute after 4 sec and it will execute for one time
let num = 0;
const timeoutId = setTimeout(() => {
num++
if (num = 5) {
    
}
})



// set Interval Structure
// setInterval(function / map function , milliSecond)
let num1 = 0;

// ans :- num1 will running by adding 1 digit after 1 sec until we stop

const intervalId = setInterval(() => {
    // num++ 
    console.log(++num1) // if we want to 1 to 10 then we have to use ++num or num1++ before console.log(num1)

    if (num1 === 10) {
        clearInterval(intervalId) // clearInterval stop the running ..
    }
},10)

/*  ans :-
1
2
3
4
5
6
7
8
9
10
*/ 





// video 7
// event loop 

// approach 1
function a(){
    console.log("a")
}

a()

// nas :- a

// approach 2
function b(){
    console.log("b")
    c()
    console.log("d")
    console.log("e")
}

b()

function c(){
    console.log("c")
}

/* ans :-
b
c
d
e
*/


// approach 3
function x(){
console.log('X');
y();
console.log('xxx')
}


function y(){
console.log('y')
z()
console.log('yyy')
}


function z(){
console.log('z')
console.log('zz')
}

x()

/* ans :-
X
y
z
zz
yyy
xxx
*/ 



// video 8
// 