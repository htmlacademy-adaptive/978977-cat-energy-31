var n=document.querySelector(".main-nav"),e=document.querySelector(".main-nav__toggle");e&&n&&(n.classList.remove("main-nav--nojs"),e.addEventListener("click",()=>{n.classList.toggle("main-nav--closed"),n.classList.toggle("main-nav--opened")}));