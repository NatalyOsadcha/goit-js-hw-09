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

  delay = form.elements.delay.value;
  step = form.elements.step.value;
  amount = form.elements.amount.value;
  position = 0;
 
  delay += step*position;
   console.log(delay);
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






// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });