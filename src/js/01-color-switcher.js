const body = document.querySelector('body');
const startBtn = body.querySelector('[data-start]');
const stopBtn = body.querySelector('[data-stop]');
let timerId = null;

body.style.backgroundColor = red;

startBtn.addEventListener('click', handleColor);
stopBtn.addEventListener('click', stopColor);

function handleColor() {
  console.log('click');
  timerId = setInterval(() => {
    const createColor = getRandomHexColor();
    body.style.backgroundColor = createColor;
  }, 1000);
}

function stopColor() {
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
