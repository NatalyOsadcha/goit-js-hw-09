const body = document.querySelector('body');
const startBtn = body.querySelector('[data-start]');
const stopBtn = body.querySelector('[data-stop]');
let disabled = false;
let timerId = null;

startBtn.addEventListener('click', handleColor);
stopBtn.addEventListener('click', stopColor);

function handleColor() {
  stopBtn.disabled = false;
  startBtn.disabled = true;

  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColor() {
  clearInterval(timerId);
  stopBtn.disabled = true;
  startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
