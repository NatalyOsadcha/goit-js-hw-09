const form = document.querySelector('form');

form.addEventListener('submit', handleInput);

function handleInput(evt) {
  evt.preventDefault();

  const {
    elements: { delay, step, amount },
  } = evt.target;
  console.log(delay.value, step.value, amount.value);
  createPromise();
}

function createPromise(position, delay) {
  delay = form.elements.delay.value;
  let step = form.elements.step.value;
  let amount = form.elements.amount.value;
  position = 0;
  
  // setTimeout((), delay)/////
  while (position < amount) {
    const shouldResolve = Math.random() > 0.3;
    delay = Number(delay);
    step = Number(step);
    position = Number(position);
      
    setTimeout(() => {
      if (shouldResolve) {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
    console.log(delay);
    position += 1;
    delay += step;
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
