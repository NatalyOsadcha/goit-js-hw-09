function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var l=r("7Y9D8");const i=document.querySelector("form");function u(e,n){return new Promise(((t,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?t(e,n):o(e,n)}),n)}))}i.addEventListener("submit",(function(n){n.preventDefault();let t=Number(i.elements.delay.value);const o=Number(i.elements.step.value),r=Number(i.elements.amount.value);t-=o;for(let n=1;n<=r;n++)u(n,t).then((()=>e(l).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`))).catch((()=>e(l).Notify.failure(`❌ Rejected promise ${n} in ${t}ms`))),t+=o,console.log(t)}));
//# sourceMappingURL=03-promises.f28dce31.js.map
