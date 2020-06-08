// console.warn('It`s works!');

const inputElements = document.querySelectorAll(".form__item__input");

inputElements.forEach(el => el.addEventListener('keyup', function() {
    const label = el.nextElementSibling;
    const inputValue = label.previousElementSibling.value;
    inputValue.length === 0 ? label.classList.remove('hidden') : label.classList.add('hidden');
}));
inputElements.forEach(el => el.addEventListener('ontouchend', function() {
    const label = el.nextElementSibling;
    const inputValue = label.previousElementSibling.value;
    inputValue.length === 0 ? label.classList.remove('hidden') : label.classList.add('hidden');
}));
