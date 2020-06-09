// console.warn('It`s works!');

const inputElements = document.querySelectorAll(".form__item__input");

function inputContentDetect() {
    const label = this.nextElementSibling;
    const inputValue = label.previousElementSibling.value;
    inputValue.length === 0 ? label.classList.remove('hidden') : label.classList.add('hidden');
}

inputElements.forEach(el => el.addEventListener('ontouchend', inputContentDetect));
inputElements.forEach(el => el.addEventListener('keyup', inputContentDetect));

const xxx = document.querySelector('#register__terms').value;
console.log(`value to: ${xxx}`);

const checkbox = document.querySelector('#register__terms');

checkbox.addEventListener('click', function() {
    const checkboxStatus = document.querySelector('#register__terms').checked;
    let btn = document.querySelector('#register__button'); 
    console.log(`Checkbox is: ${checkboxStatus}`);

    checkboxStatus ? btn.disabled = false : btn.disabled = true;
    console.log(`Button is: ${btn.disabled}`);
})