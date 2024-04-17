// module 36 {mastering at object}
// video 1
// ways to create object

// approach 1 {Object literal syntax}

const person1 = {
firstName1 : 'Tanvir',
lastName1 : 'Hasan'
}

console.log(person1)
// ans :- { firstName1: 'Tanvir', lastName1: 'Hasan' }


// approach 2 {Object constructor}

const person2 = new Object ();

// Adding the properties on person2 object
person2.firstName2 = 'Ashraful';
person2.lastName2 = 'Alam';
console.log(person2)
// ans :- { firstName2: 'Ashraful', lastName2: 'Alam' }


// approach 3 {Constructor function}

function Person3(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  const myFather = new Person3("John", "Doe", 50, "blue");

  console.log(myFather)
/* ans :- 
Person3 {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue'
}
*/   


// approach 4 {Es6 classes}

class person4 {
    constructor(firstName1st, lastName1st, school, year){
        this.firstName1st = firstName1st;
        this.lastName1st = lastName1st;
        this.school = school;
        this.year = year;
    }
    
}

const  person5 = new person4('rahim', 'karim', "ML Model Heigh School", '2023')

console.log(person5)

/* ans :-
person4 {
  firstName1st: 'rahim',
  lastName1st: 'karim',
  school: 'ML Model Heigh School',
  year: '2023'
}
*/ 



// approach 5 {Object create}

const person6 = {
    name : 'Isa'
}

const person7 = Object.create(person6);
console.log(person7)
console.log(person7.name)
// ans :- {}
// ans :- Isa





// video 2

const student = {
    name: 'Tasin Sabit',
    money: 5000,
    study: 'math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function (){
        return this.name + 'is participating on exam'
    },
    improveExam: function (sub){
        this.exam();
        return `${this.name} is taking improvement exam on ${sub}`

    },

    treat: function (amount, tips){
     this.money = this.money - amount - tips;
     return this.money;
    }
}

const exam = student.exam();
console.log(exam)
// ans :- Tasin Sabitis participating on exam

const improveExam = student.improveExam(student.subjects[1]);
console.log(improveExam)
// ans :- Tasin Sabit is taking improvement exam on algebra

const treats =student.treat(500, 200)
console.log(treats)
// ans :- 4300
const treats2 =student.treat(500, 300)
console.log(treats2)
// ans :- 3500



const obj1 = {m:1 ,v:2}
const obj2 = {m:1 ,v:2}
console.log(obj1 === obj2)

const gf = (name2 = "ttt") => 'name2'; 
console.log(gf())