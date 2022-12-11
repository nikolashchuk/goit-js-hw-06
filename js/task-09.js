function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnColor = document.querySelector('.change-color');
console.log(btnColor);

const textColor = document.querySelector('.color');
console.log(textColor);

const bodyColor = document.querySelector('body');

btnColor.addEventListener('click', changeColor);

function changeColor() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  textColor.textContent = bodyColor.style.backgroundColor;
}
