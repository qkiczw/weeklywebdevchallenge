const inputElements = document.querySelectorAll(".form__item__input");

function inputContentDetect() {
    const label = this.nextElementSibling;
    const inputValue = label.previousElementSibling.value;
    inputValue.length === 0 ? label.classList.remove('hidden') : label.classList.add('hidden');
}

inputElements.forEach(el => el.addEventListener('ontouchend', inputContentDetect));
inputElements.forEach(el => el.addEventListener('keyup', inputContentDetect));

const xxx = document.querySelector('#register__terms').value;

const registerCheckbox = document.querySelector('#register__terms');
const sendEmailCheckbox = document.querySelector('#send__terms')
const signInCheckbox = document.querySelector('#sign-in__terms')

termsChecker = function(e) {
    const getCheckboxName = e.target.name;
    console.log(`checkboxName: ${getCheckboxName}`);

    const checkboxStatus = document.querySelector(`#${getCheckboxName}__terms`).checked;
    let btn = document.querySelector(`#${getCheckboxName}__button`); 

    checkboxStatus ? btn.disabled = false : btn.disabled = true;
}

registerCheckbox.addEventListener('click', termsChecker);
registerCheckbox.addEventListener('ontouchend', termsChecker);
sendEmailCheckbox.addEventListener('click', termsChecker);
sendEmailCheckbox.addEventListener('ontouchend', termsChecker);
signInCheckbox.addEventListener('click', termsChecker);
signInCheckbox.addEventListener('ontouchend', termsChecker);