const t=document.querySelector("body"),e=t.querySelector("[data-start]"),o=t.querySelector("[data-stop]");let r=null;t.style.backgroundColor=red,e.addEventListener("click",(function(){console.log("click"),r=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.style.backgroundColor=e}),1e3)})),o.addEventListener("click",(function(){clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.cc1f9c0e.js.map