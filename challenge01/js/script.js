// console.warn('It`s works!');

const inputElements = document.querySelectorAll(".form__item__input");

function inputContentDetect() {
    const label = this.nextElementSibling;
    const inputValue = label.previousElementSibling.value;
    inputValue.length === 0 ? label.classList.remove('hidden') : label.classList.add('hidden');
}

inputElements.forEach(el => el.addEventListener('ontouchend', inputContentDetect));
inputElements.forEach(el => el.addEventListener('keyup', inputContentDetect));
