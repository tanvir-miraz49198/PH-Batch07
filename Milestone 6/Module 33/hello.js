// Module 33
// video 2
// json.js

const user = {id : 108, name : 'Tanvir', position : 'web developer'}
const stringified = JSON.stringify(user)
console.log(stringified)
// ans :- {"id":108,"name":"Tanvir","position":"web developer"}


const shop = {
    owner : 'Tanvir vai',
    address : {
        street : 'mk road 30/A',
        home : 05,

    },
    products : ['laptop', 'mobile', 'computer', 'keyboard', 'mouse'],

    revenue : 45000,
    isOpen : true,
    isNew : false
}

console.log(shop);

/* ans :- 
{
  owner: 'Tanvir vai',
  address: { street: 'mk road 30/A', home: 5 },
  products: [ 'laptop', 'mobile', 'computer', 'keyboard', 'mouse' ],
  revenue: 45000,
  isOpen: true,
  isNew: false
}
*/ 



const shopString = JSON.stringify(shop);
console.log(shopString)
// ans :- {"owner":"Tanvir vai","address":{"street":"mk road 30/A","home":5},"products":["laptop","mobile","computer","keyboard","mouse"],"revenue":45000,"isOpen":true,"isNew":false}


const obj = JSON.parse(shopString);
console.log(obj);

/* ans :-
{
  owner: 'Tanvir vai',
  address: { street: 'mk road 30/A', home: 5 },
  products: [ 'laptop', 'mobile', 'computer', 'keyboard', 'mouse' ],
  revenue: 45000,
  isOpen: true,
  isNew: false
}
*/ 





     