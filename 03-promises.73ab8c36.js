const e=document.querySelector("form");e.addEventListener("submit",(function(o){o.preventDefault();const{elements:{delay:t,step:l,amount:n}}=o.target;console.log(t.value,l.value,n.value),function(o,t){t=e.elements.delay.value;let l=e.elements.step.value,n=e.elements.amount.value;o=0;for(;o<n;){const e=Math.random()>.3;t=Number(t),l=Number(l),o=Number(o),setTimeout((()=>{e?console.log(`✅ Fulfilled promise ${o} in ${t}ms`):console.log(`❌ Rejected promise ${o} in ${t}ms`)}),t),console.log(t),o+=1,t+=l}}()}));
//# sourceMappingURL=03-promises.73ab8c36.js.map
