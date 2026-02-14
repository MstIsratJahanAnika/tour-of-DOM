// console.log('file connected');

// const section = document.getElementsByTagName('section');

const sections = document.querySelectorAll('section') //html tags
for(const section of sections){
    console.log(section);

    // applying styles to sections
    section.style.backgroundColor = 'lightcyan';
    section.style.border = '3px solid red';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '20px';
}
console.log(sections);

//connecting css file
for(const section of sections){
    section.classList.add('section-cards');
}