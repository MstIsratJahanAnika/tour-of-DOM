console.log('third js');

// parent a child add 
// parent niye asho 
const parentItem = document.getElementById('third-list');

// child add in parent
const child_li=document.createElement('li');
child_li.innerText = 'child element added';

// angta lagao 
parentItem.appendChild(child_li);