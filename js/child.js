// document.getElementById('pet-container').childNodes[7].childNodes[3].parentNode.parenNode.parentNode;

// create element and set innerText or innerHTML
const newChild = document.createElement('li');
newChild.innerText = 'new born programmer here';

// find the parent to add the child 
const parentList = document.getElementById('namelist');

// append the child to parent
parentList.appendChild(newChild);