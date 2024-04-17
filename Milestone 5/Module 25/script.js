
    // Document.getElementByTagName {approach - 1}
    let singleTag = document.getElementsByTagName('h3')[0];

    singleTag.style.backgroundColor = "green";
    singleTag.style.color = "black";

    // Document.getElementByTagName {approach - 2}
    let multiTag = document.getElementsByTagName('li');

    for (let i = 0; i < multiTag.length; i++) {
        const result = multiTag[i];
        result.style.backgroundColor = "purple";
        result.style.color = "black";
    }


   
    // Document.getElementsByClassName {approach :- 1}
    let singleClass = document.getElementsByClassName('important-places')[0];
    
    singleClass.style.backgroundColor = 'blue';
    singleClass.style.color = 'white'


   // Document.getElementsByClassName {approach :- 2}
   let multiClass = document.getElementsByClassName("popular-games");

   for (let i = 0; i < multiClass.length; i++) {
    let classesResult = multiClass[i];
    classesResult.style.backgroundColor = 'orange'
   }


   // Document.getElementById
   
   let tagSystem = document.getElementById('ID');
   
   tagSystem.style.color = 'gray'
  


// appendChild

let addFruit = document.getElementById("Fruits")

let newFruit = document.createElement('li')
newFruit.innerText = "berry";
addFruit.appendChild(newFruit)


// inner html

let prep = document.getElementById('fun-prep')
prep.innerHTML = `<h1>Read properly</h1>`
let exm = document.getElementById("exam-prep")
exm.appendChild(prep)