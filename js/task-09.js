function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body')
const changeColorButton = document.querySelector('.change-color');
let backgroundColor = document.querySelector('.color');
changeColorButton.addEventListener('click', getNewColor);
function getNewColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  backgroundColor.textContent = `${newColor}`;
}