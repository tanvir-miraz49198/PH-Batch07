const url = 'https://randomuser.me/api/'
const fetchUser = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => getUsers(data))
}

const getUsers = (data) => {
    console.log(data)
  
    const name = document.getElementById('name');
    name.innerText = data.results[0].name.first;
    const gender = document.getElementById('gender');
    gender.innerText = data.results[0].gender;
    const email = document.getElementById('email');
    email.innerText = data.results[0].email;
    const phone = document.getElementById('phone');
    phone.innerText = data.results[0].phone;
    const location = document.getElementById('location');
    
    location.innerText = data.results[0].location.country;




    const img = document.getElementById('img')
    img.src = data.results[0].picture.medium
   
    
    
}

fetchUser()