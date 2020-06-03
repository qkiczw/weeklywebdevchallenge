// console.warn('It`s works!');

const inputElements = document.querySelectorAll("input[type='checkbox']");
// console.log(inputElements);

let warn = () => console.log('WARNING!!!')
inputElements.forEach(el => el.addEventListener('click', warn));