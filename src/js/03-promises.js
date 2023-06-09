import Notiflix from 'notiflix';

const form = document.querySelector('form');

form.addEventListener('submit', handleInput);

function handleInput(evt) {
  evt.preventDefault();

  let delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);

  for (let position = 1; position <= amount; position++) {
    createPromise(position, delay)
      .then(({ position, delay }) =>
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay} ms`
        )
      )
      .catch(({ position, delay }) =>
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay} ms`
        )
      );
    delay += step;
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
