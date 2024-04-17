//  Module 31  {es6} -------

// video 2
// difference between let const
// if we will declare a var variable or let variable, then it can be updated its value, 

// but if we declare a const variable, 
// it will not be updated in any case and will work fine with our function.

// required to use let and const . not var. ----------
let person = 'tanvir';
person = 'sabit';
console.log(person); 
// ans :- sabit
/*
const place = 'Coxs bazar'
place = 'Kuakata'
console.log(place)*/
// error



// video 3
// default parameter -------

function Name(name1, name2 = 'Hasan'){
    const fullName = name1 + " " + name2;
    return fullName;
}

const addFullName = Name('Tanvir')
console.log(addFullName)
// ans :- Tanvir Hasan



function Name2(name1 = 'Tanvir', name2 = 'Hasan'){

    const fullName2= name1 + " " + name2;
    return fullName2;
}

const addFullName2 = Name2()
console.log(addFullName2)
// ans :- Tanvir Hasan



//  video 4
// multiline ------

// approach :- {1}
const multiline1 = 'my name is tanvir hassan \n' +
'i read in 13th'
console.log(multiline1)
// ans :- my name is tanvir hassan
// i read in 13th

const a = 10;
const b = 20;
const sum1 = 'sum of: ' + a + ' and ' + b + ' is: ' + (a+b)

console.log(sum1)
// sum of: 10 and 20 is: 30


// approach :- {2}
// `` = this backtick and required to use
const multiline2 = `i am in college now
and i love my college`
console.log(multiline2)
// ans :- i am in college now
// and i love my college


const x = 20;
const y = 30;
const sum2 =`sum of: ${x} and ${y} is ${x+y}`
console.log(sum2)
// sum of: 20 and 30 is 50




//  video 5
// arrow

// function expression --------
const add = function add(numb1 , numb2){
    let total = numb1 + numb2;
    return total;
}

let result = add(100 , 500)
console.log(result)
//  ans :- 600



// anonymous function expression -----
const names = function (name1st , name2nd , name3rd){
const fullName3 = name1st + name2nd + name3rd;
return fullName3;
}

const getName = names('Tanvir' ,' ' ,'Hasan')
console.log(getName)
// ans :-  Tanvir Hasan



// arrow function ---------------
// To declare the arrow function, a variable must first be taken.
//   Function, function name or bracket should not be given inside the variable.

//  Only parameters should be given with brackets.  Then give the arrow sign.
//   After that these parameters have to be worked.  Arrow sign means to return. 

//  So, when calling this function, it must be called inside the variable.
const addNumbers = (number1 , number2) => number1 +number2;
const totalNumbers = addNumbers(500 , 200);
console.log(totalNumbers);
// ans :- 700 




// video 6
// more arrow

// no parameter
const getPie = () => 3.1416;
const hhh = getPie()
console.log(hhh)
// ans :- 3.1416


// single parameter
const doubleIt = (num) => num * 2;
const result2 = doubleIt(20);
console.log(result2) 
// ams :- 40


// single parameter simple version
const tripleIt = num2 => num2 * 3;
const getTriple = tripleIt(20);
console.log(getTriple)
// ans :- 60



// multiline arrow function

const doMath = (x , y ,z) => {
    const firstMath = x + y;
    const secondMath = y + z;
    const finalMath = firstMath + secondMath;

    return finalMath
}

const finalResult = doMath(10 , 20, 30)
console.log(finalResult)
// ans :- 80



// video 7
// spread.js

// approach {1}
const positiveNumbers = [10, 20, 50, 15, 60, 40, 90, 100, 500, 250]

console.log(positiveNumbers)
// ans :- [
//  10, 20,  50,  15,  60,
//  40, 90, 100, 500, 250
// ]
const maxNumber = Math.max(positiveNumbers);
console.log(maxNumber)
// ans :- NaN



// spread means ... these three dots 
const positiveNumbers2 = [10, 20, 50, 15, 60, 40, 90, 100, 500, 250]

console.log(...positiveNumbers2)
// ans :- 10 20 50 15 60 40 90 100 500 250
const maxNumber2 = Math.max(...positiveNumbers2);
console.log(maxNumber2);
// ans :- 500



// approach {2}
const digits = [10, 20, 30, 40, 50]

const digit1 = digits;

digits.push(100)
digit1.push(200)
console.log(digits)
console.log(digit1)

//   ans :-
// [
//   10,  20,  30, 40,
//   50, 100, 200
// ]
// [
//   10,  20,  30, 40,
//   50, 100, 200
// ]



const digits1st = [10, 20, 30, 40, 50]

const digit2nd = [...digits1st];

digits1st.push(100)
digit2nd.push(200)
console.log(digits1st)
console.log(digit2nd)
// ans :-

// [ 10, 20, 30, 40, 50, 100 ]
// [ 10, 20, 30, 40, 50, 200 ]



// video 8
// object destructure
const customer = {
    phone : 01700000000,
    age : 32,
    order : 'eggs'
}

// variable name have to be same as object property name

const {age} = customer
console.log(age)
//  ans :- 32



// array destructuring
const [first, second] = [10 , 20]
console.log(first,second);
// ans :- 10 20

const [third, fourth, fifth] = [30, 40, 50, 60, 80];

console.log(third, fourth, fifth)
// ans :- 30 40 50


const clint = ['sabit', 'susan', 'isa', ]
const [boro, soto, mejo] = clint;
console.log(soto)
//  ans :- susan


function keepNames(){
    return ['rahim','karim',]
}
const [keep1 , keep2] = keepNames();
console.log(keep1)
//  ans :- rahim
console.log(keep1, keep2)
//  ans :- rahim karim