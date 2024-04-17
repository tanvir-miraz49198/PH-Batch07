// video 6
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    
    .then(res => res.json())
    .then(data =>  viewPost(data))
    
}

loadPost()

function viewPost(data){
    const parentDiv = document.getElementById("load-post")

  for(const post of data){
  const childDiv = document.createElement('div');
  childDiv.classList.add('post')
    childDiv.innerHTML = `
    <h4>user-${post.id}</h4>
    <h5>Post title : ${post.title}</h5>
    <p>Post description: ${post.body}</p>
    `;
    parentDiv.appendChild(childDiv)
  }
}

