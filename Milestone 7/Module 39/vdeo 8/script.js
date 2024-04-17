// video 8
// try catch
function changeAge(){
   const inputField = document.getElementById('text-input')
   const inputFieldValue = inputField.value;
   const errorTag = document.getElementById('error-tag')



try {
    const age = parseInt(inputFieldValue)
    if (isNaN(age)) {
        throw "please enter a number"
    }else if(age < 18){
        throw 'you are not adult'
    }
    errorTag.innerHTML = "";
} catch (err) {
    errorTag.innerHTML = `ERROR: ${err}`
}


}