
// module 32
// video 2
// chain.js

const user = [{id : 504, name : 'koko', section :'C'}]

console.log(user[0].name)
// ans :- koko


const data = {
    count: 5000,
    keepData : [
        {id:502, name:'Tanvir', section:'A'},
        {id:505, name:'Sabit', section:'B'}
    ]
}
console.log(data.keepData[1].name)
// ans :- Sabit
console.log(data.keepData[0].id)
// ans :- 502



const user2nd = {
    id : 506,
    name : 'Tomas alva edision',
    address : {
    street: {
        first : '35/A london street',
        second : 'right side of lake',
        third : 'third floor'
    }
    }
}

const userFlor = user2nd.address.street.third;

console.log(userFlor)
//  ans :- third floor




// video 3
// map.js
const number = [10, 20, 30, 40];
const doubleIt = num => num * 2;
const makeDouble = number.map(doubleIt);
console.log(makeDouble)
// ans :- [ 20, 40, 60, 80 ]
const makeTriple = number.map(x => x * 3)
console.log(makeTriple)
// ans :- [ 30, 60, 90, 120 ]
const fiveTimes = [2, 3, 4, 5].map(y => y * 5)

console.log(fiveTimes)
// ans :- [ 10, 15, 20, 25 ]





// video 4
// more map
const numbers2 = [60, 90, 120, 30];
const makeHalf = numbers2.map(h => h / 2)
console.log(makeHalf)
// ans :- [ 30, 45, 60, 15 ]


const makeThird = numbers2.map(t => t / 3);
console.log(makeThird)
// ans :- [ 20, 30, 40, 10 ]


// words map
const friends = ['tanvir', 'susan', 'isa', 'sabit']

const firstLetter = friends.map(fr => fr[0]);
console.log(firstLetter)
// ans :- [ 't', 's', 'i', 's' ]

// words length
const wordLength = friends.map(Ln => Ln.length);

console.log(wordLength)
//ans :- [ 6, 5, 3, 5 ]


// map in objects
const products = [
    {id : 1, name : 'Laptop', price : 50000},
    {id : 1, name : 'Phone', price : 80000},
    {id : 1, name : 'Air pods', price : 20000},
    {id : 1, name : 'Watch', price : 15000}
]

const items = products.map(p => p.name);
console.log(items)
// ans :- [ 'Laptop', 'Phone', 'Air pods', 'Watch' ]





// video 5
// filter
// filter always needs a condition. and the condition create with the parameter

const numbers3 = [10, 20, 30, 40, 50, 60, 80, 90, 100];
const bigNumbers = numbers3.filter(f => f > 30)
console.log(bigNumbers)
// ans :- [ 40, 50, 60, 80, 90, 100 ]


const user2 = [
    {id : 102, salary : 50000},
    {id : 103, salary : 55000},
    {id : 104, salary : 40000},
    {id : 105, salary : 30000},
    {id : 106, salary : 20000},
    {id : 107, salary : 10000},

]

const userSalary = user2.filter(x => x.salary > 30000)
console.log(userSalary)
// ans :-
/*[
    { id: 102, salary: 50000 },
    { id: 103, salary: 55000 },
    { id: 104, salary: 40000 }
  ]*/


const userSalary2 = user2.filter(x => x.salary < 30000)
console.log(userSalary2)
// ans :- [ { id: 106, salary: 20000 }, { id: 107, salary: 10000 } ]



// find.js
// find also need a condition every time.but it will give you only the first match output

const numbers4 = [10, 50, 5, 60, 40];
const find = numbers4.find(num => num % 5 == 0)
console.log(find)
// ans :- 10


const salaryByFind = user2.find(products => products.salary > 1000)
console.log(salaryByFind)
// ans :- { id: 102, salary: 50000 }





// video 6
// reduce.js


const numbers5 = [10, 20, 30, 50, 40, 80];
const total = numbers5.reduce((previous, current) =>{
    console.log(previous, current)
    // ans :-
   /*0 10
    10 20
    30 30
    60 50
    110 40
    150 80*/
    return previous + current
}, 0)
console.log(total)
// ans :- 230

const numbers6 = [10, 20, 30, 50, 40, 80];
const total2 = numbers6.reduce((previous, current) => previous + current, 0)

console.log(total2)
// ans :- 230



const student ={
    name : 'Tanvir',
    id : 108,
    subject : {
        math : 100,
        physics : 98,
        english : 82
    }
 }

 const name = student.name;
 console.log(name)
//  ans :- Tanvir

const englishMarks = student.subject.english;
console.log(englishMarks)
// ans :- 82

const marks = 'physics';
const physicsMarks = student.subject[marks];
console.log(physicsMarks)
// ans :- 98







// video 7
// class.js
// we have to use class when we want to make many things similarly .
// we have to make the structure by class and generate all things by call.


// syntactic sugar
class instructor {
    name;
    position = 'web course instructor';
    team =  'web team';
    location;

    constructor(name, location){
        this.name = name;
        this.location = location;
    }

    starSupportSession(time){
        console.log(`start the support session at ${time}`)

    }

    createQuiz(module){
        console.log(`please create quiz for module`)
    }
}


const instructorName = new instructor;
console.log(instructorName)
/* ans :- 
instructor {
  name: undefined,
  position: 'web course instructor',
  team: 'web team',
  location: undefined
}
*/

instructorName.starSupportSession('9.00');
// ans :- start the support session at 9.00
instructorName.createQuiz(32);
// ans :- please create quiz for module


 const instructorName2 = new instructor('Tanvir','Bangladesh');

// console.log(instructorName2)
/*
instructor {
  name: 'Tanvir',
  position: 'web course instructor',
  team: 'web team',
  location: 'Bangladesh'
}
*/ 





// video 8
// extend.js


// similar class

class similar{
    name;
    location;
    constructor (name, location){
     this.name = name;
     this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
        
    }
}


// first class
class jobPlacement extends similar {
    
    position = 'job Placement commandos'
    team = 'job placement'
    tech;
    
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
        
    }
    provideResume(feature){
       console.log(`please develop the ${feature}`)
    }

    prepareStudent(version){
        console.log(`please release the version ${version}`)

    }

   
}

const student1 = new jobPlacement('tanvir', 'dhaka', 'react')

console.log(student1)

/* ans :-
jobPlacement {
  name: 'tanvir',
  location: 'dhaka',
  position: 'job Placement commandos',
  team: 'job placement',
  tech: 'react'
}
*/ 


class instructor extends similar {
    
    position = 'web course instructor';
    team =  'web team';
    

    constructor(name, location){
        super(name, location)
    }

    starSupportSession(time){
        console.log(`start the support session at ${time}`)

    }

    createQuiz(module){
        console.log(`please create quiz for module`)
    }
}

const student2 = new instructor ('Susan', 'Jashore')
console.log(student2)
/*
instructor {
  name: 'Susan',
  location: 'Jashore',
  position: 'web course instructor',
  team: 'web team'
}
*/ 