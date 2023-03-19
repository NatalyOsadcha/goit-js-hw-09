import Notiflix from 'notiflix';

const form = document.querySelector('form');

form.addEventListener('submit', handleInput);

function handleInput(evt) {
  evt.preventDefault();

  const {
    elements: { delay, step, amount },
  } = evt.target;
  console.log(delay.value, step.value, amount.value);

  let delayPr = Number(form.elements.delay.value);
  const stepPr = Number(form.elements.step.value);
  const amountPr = Number(form.elements.amount.value);

  for (let position = 1; position <= amountPr; position++) {
  
    createPromise( position, delayPr)
      .then((position, delayPr ) =>
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delayPr}ms`
        ) 
      )
      .catch((position, delayPr ) =>
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delayPr}ms`
        )
    );
    delayPr += stepPr;
    console.log(delayPr);
  }
  // evt.target.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(position, delay);
      } else {
        reject(position, delay);
      }
    }, delay);
  });
}
