!function(){var t=document.querySelector("body"),e=t.querySelector("[data-start]"),a=t.querySelector("[data-stop]"),n=null;e.addEventListener("click",(function(){a.disabled=!1,e.disabled=!0,n=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),a.addEventListener("click",(function(){clearInterval(n),a.disabled=!0,e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.a95a85b4.js.map