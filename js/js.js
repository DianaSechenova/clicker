"use strict";
const scroodge = document.querySelector("#click-scroodge");
const counter = document.querySelector(".counter");
const cage = document.querySelectorAll(".cage");
const btn = document.querySelectorAll(".glow-button");
const btnElement = document.querySelectorAll("button");
const extraMoney = document.querySelector(".extra-money");
const extra_ = document.querySelector(".extra_");
// стоимость
const billy = 100;
const villi = 200;
const dilli = 300;
const ponka = 400;
const zig = 500;
const beakley = 600;

let clicks = 0;

let audioMoney = document.createElement("audio");
audioMoney.src = "audio/moneta.mp3";

let audioSave = document.createElement("audio");
audioSave.src = "audio/save.mp3";

let audioError = document.createElement("audio");
audioError.src = "audio/23.mp3";

//анимация клика
scroodge.addEventListener("mousedown", () => {
  scroodge.style.width = "190px";
  scroodge.style.height = "350px";
  audioMoney.play();
});
scroodge.addEventListener("mouseup", () => {
  scroodge.style.width = "200px";
  scroodge.style.height = "360px";
  audioMoney.play();
});
// счетчик кликов(манеты++)
scroodge.addEventListener("click", counter_money);
function counter_money() {
  clicks = clicks + 1;
  counter.textContent = clicks;
  activ_btn(0, billy);
  activ_btn(1, villi);
  activ_btn(2, dilli);
  activ_btn(3, ponka);
  activ_btn(4, zig);
  activ_btn(5, beakley);
}
//активация кнопки
function activ_btn(btnItem, item) {
  if (counter.textContent >= item) {
    btn[btnItem].classList.add("activ-button");
  } else if (btn[btnItem].classList.contains("activ-button")) {
    btn[btnItem].classList.remove("activ-button");
  }
  free_person(0, billy, 0);
  free_person(1, villi, 1);
  free_person(2, dilli, 2);
  free_person(3, ponka, 3);
  free_person(4, zig, 4);
  free_person(5, beakley, 5);
}
// нажатие на кнопку
function free_person(btnItem, item, numb_cage) {
  btn[btnItem].addEventListener("click", function (e) {
    if (clicks >= item && e.target.classList.contains("activ-button")) {
      clicks = clicks - item;
      counter.textContent = clicks;
      audioSave.play();
      cage[numb_cage].style.display = "none";
      btnElement[btnItem].remove();
    }
  });
}
//экстра деньги
function get_extraMoney() {
  extraMoney.style.display = "flex";
  const timer_extra_monye = document.querySelector(".timer");
  let counterTimer = 5;
  const intervalId = setInterval(() => {
    timer_extra_monye.textContent = --counterTimer;
    if (counterTimer === 0) {
      clearInterval(intervalId);
      extraMoney.style.display = "none";
    }
  }, 1000);
}
extra_.addEventListener("click", (e) => {
  clicks = clicks + 100;
  counter.textContent = clicks;
  audioMoney.play();
  extraMoney.style.display = "none";

  return (counter.textContent = clicks);
});
setTimeout(get_extraMoney, 10000);
setInterval(get_extraMoney, 10000);
