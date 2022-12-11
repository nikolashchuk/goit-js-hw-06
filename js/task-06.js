const onInput = document.querySelector('#validation-input');
console.log(onInput);
const checkLength = onInput.dataset.length;
console.log(checkLength);

onInput.addEventListener('blur', onBlur);

function onBlur(event) {
  if (event.currentTarget.value.length === Number(checkLength)) {
    onInput.classList.add('valid');
    onInput.classList.remove('invalid');
  } else {
    onInput.classList.add('invalid');
    onInput.classList.remove('valid');
  }
}
