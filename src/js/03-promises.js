const form = document.querySelector('form');

form.addEventListener('submit', handleInput);

function handleInput(evt) {
  evt.preventDefault();

  const {
    elements: { delay, step, amount },
  } = evt.target;
  console.log(delay.value, step.value, amount.value);
  createPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    delay = form.elements.delay.value;
    let step = form.elements.step.value;
    let amount = form.elements.amount.value;
    position = 0;
    let delays = delay - step;

    while (position < amount) {
      const shouldResolve = Math.random() > 0.3;
      delay = Number(delay);
      step = Number(step);
      position = Number(position);

      setTimeout(() => {
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${position} in ${delays}ms`);
        } else {
          reject(`❌ Rejected promise ${position} in ${delays}ms`);
        }
      }, delays);

      position += 1;
      delays += step;
      console.log(delays);
    }
  });
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
