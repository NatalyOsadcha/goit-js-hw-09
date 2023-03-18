const form = document.querySelector('form');
let amountCounter = 0;

form.addEventListener('submit', handleInput);

function handleInput(evt) {
  evt.preventDefault();
  amountCounter += 1;

  const {
    elements: { delay, step, amount}
  } = evt.target;
  console.log(delay.value, step.value, amount.value);


};


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


// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password }
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });



// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });