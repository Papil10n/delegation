const btn = document.querySelector(".button");
const list = document.querySelector(".btn__list");
const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");

let selectedBtn;




document.addEventListener("click", (event)  => {
   if (event.target.closest(".btn__text")) {
      swapBtn()
      list.classList.toggle("hide")
   }
   if (event.target.closest(".btn__link")) {
      let target = event.target;
      brightness(target);
   }
   if (!event.target.closest(".button")) {
      console.log('clicl')
      list.classList.add("hide")

   }

});

function swapBtn() {
   openBtn.classList.toggle("hide");
   closeBtn.classList.toggle("hide");
}

function brightness(element) {
   selectedBtn = element;
   selectedBtn.classList.toggle('brightness');
}