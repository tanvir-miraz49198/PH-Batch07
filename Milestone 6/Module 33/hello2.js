// video 3 , 4 , 5
// json fetch

/* fetch by jsonPlaceHolder website 
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
*/

// fetch by my own
function loadUsers(){
// we have to place the data name by side of .com in the link  
const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
.then(res => res.json())
.then(data => displayUsers(data))
}

// if i call loadUsers() function then the web site show the name without click the button.

function displayUsers(users){
// for or for of anything can be use but for of required
for (const user of users) {
    const userName  = user.username;
    const li = document.createElement('li')
    li.innerText = userName;
const ul = document.getElementById('ul')
ul.appendChild(li)
}

}