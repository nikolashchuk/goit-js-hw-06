const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formElements = { email, password };

  if (email === '' || password === '') {
    return alert('Заповніть поля!!!');
  }
  //   console.log(`email: ${email.value}, password: ${password.value}`);
  console.log(formElements);
  event.currentTarget.reset();
}
