// video 5
// cookies

// we can get any website cookie
//  by apply this code in that specific website's console

document.cookie.split('; ').map(c => {
    const parts = c.split('=')
    console.log(`name: ${parts[0]}, value: ${parts[1]}`)

})




// video 6
// local storage

// types
// 1..localStorage.setItem(key, value);
// 2..let lastName = localStorage.getItem(key);

// 3..localStorage.removeItem(key);
// 4..localStorage.clear();

// Parameters
// key :- Required. {The name of a key.}
// value :- Required. {The value of the key.}



// return value
// An object :- A localStorage object.



// video 7
// object from local storage
// if we want a object from a browser , then cannot get it like this


// <-- object to string -->
const person = {name: 'tanvir', id:105, school: 'ml school'}

const personString = JSON.stringify(person)
console.log(typeof personString)
// ans :- string
console.log(personString)
// ans :- {"name":"tanvir","id":105,"school":"ml school"}


// <-- string to object -->
const personObject = JSON.parse(personString)
console.log(typeof personObject)
// ans :- object
console.log(personObject)
// ans :- { name: 'tanvir', id: 105, school: 'ml school' }




// 