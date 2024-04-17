// video 3
// alert , confirm , prompt

// alert
const alertFunction = () => {
    alert("Welcome to our page")
}


// confirm
const confirmFunction = () => {
 const accept = confirm('are you fine')

 console.log(accept)

 if (accept === true) {
    alert('He accept It')
 }else{
    console.log('he cancel it')
 }

}

// prompt
const promptFunction = () => {
   const getAns = prompt('How Are You?')

   console.log(getAns)

   if (getAns === null) {
    alert('Give me some ans first')
   }else{
    console.log('Welcome to Our World')
    
   }

}







