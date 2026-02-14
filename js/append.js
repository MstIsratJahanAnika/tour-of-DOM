// console.log('append file connected');


// where to add - parent
const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

//create child node
const placesSection = document.createElement('section');

// create h1 tag
const h1 = document.createElement('h1');
h1.innerText = 'places I want to visit';
// add h1 to placesSection
placesSection.append(h1);

// add placeSection to mainContainer
mainContainer.appendChild(placesSection);

const ul = document.createElement('ul');

// li er angta ul a
const li1 = document.createElement('li');
li1.innerText = 'Bandarban';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Saint Martins';
// ul a angta lagao 
ul.appendChild(li2);

//ul er angta section a
placesSection.appendChild(ul);


// easier to create innerHTML
const bookSection = document.createElement('section');
bookSection.innerHTML = `
<h2>Books I need to read</h2>
<ul>
    <li>physics</li>
    <li>EEE</li>
    <li>math</li>
    <li>CSE</li>
    <li>programming language</li>
</ul>
`
// main container er shathe angta lagao
mainContainer.appendChild(bookSection); 