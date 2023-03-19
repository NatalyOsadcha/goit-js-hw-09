const form = document.querySelector('form');


form.addEventListener('submit', handleInput);

function handleInput(evt) {
  evt.preventDefault();
  

  const {
    elements: { delay, step, amount}
  } = evt.target;
  console.log(delay.value, step.value, amount.value);
createPromise();
};


function createPromise(position, delay) {
  console.log(Number(form.elements.delay.value));
  console.log(Number(form.elements.step.value));

  delay = form.elements.delay.value;
  // delay = form.elements.delay.value + form.elements.step.value * position;
  console.log(delay);
  amount = form.elements.amount.value;
  position = 0;
  const shouldResolve = Math.random() > 0.3;
  while (position < amount) {
     setTimeout(() => {
    if (shouldResolve) {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    }
     },  delay);
    position += 1;
  }
 
  
}


// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
return new Promise((resolve, reject) => { 

});

//   position = amount.value;
//   delay = delayStep.value;
//   console.log(firstDelay.value);
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }




// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });