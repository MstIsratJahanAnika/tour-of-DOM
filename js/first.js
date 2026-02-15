console.log('first js');

// method-1-by tag name -> HTML Collection
const allSections = document.getElementsByTagName('section');
console.log(allSections);  //output array-like object


// method-2-by id ->HTML Collection
const h1ID = document.getElementById('first-item-id');

// console.log(h1ID);
console.log(h1ID.innerText);
// h1ID.innerText = 'Text item changed';


//method-3-by class name ->HTML collection
const className = document.getElementsByClassName('section-item');
console.log(className);


// query selector - for complex css selector -> NodeList
