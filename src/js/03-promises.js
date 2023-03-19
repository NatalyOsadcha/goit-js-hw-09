import Notiflix from 'notiflix';

const form = document.querySelector('form');

form.addEventListener('submit', handleInput);

function handleInput(evt) {
  evt.preventDefault();

  const {
    elements: { delay, step, amount },
  } = evt.target;
  console.log(delay.value, step.value, amount.value);

  delayPr = Number(form.elements.delay.value);
  stepPr = Number(form.elements.step.value);
  amountPr = Number(form.elements.amount.value);

  for (let position = 1; position <= amountPr; position++) {
    console.log(delayPr);
    delayPr += stepPr;
    createPromise(position, delayPr)
      .then(({ position, delayPr }) =>
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delayPr}ms`
        )
      )
      .catch(({ position, delayPr }) =>
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delayPr}ms`
        )
      );
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
