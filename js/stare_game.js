"use strict";
const popup = document.querySelector(".popup");
const page = document.querySelector(".page");

const pause = document.querySelector(".audio-pause");
const play = document.querySelector(".audio-play");

const startGame = document.querySelector(".start-game");
const saveResult = document.querySelector(".save-result_wrapp");

let audioGame = document.createElement("audio");
audioGame.src = "audio/1.mp3";

startGame.addEventListener("click", (e) => {
  e.preventDefault();
  audioGame.play();
  popup.style.display = "none";
  page.style.display = "block";
});
// плеер
pause.addEventListener("click", () => {
  audioGame.pause();
  pause.classList.add("active_audio");
  play.classList.remove("active_audio");
});
play.addEventListener("click", () => {
  audioGame.play();
  play.classList.add("active_audio");
  pause.classList.remove("active_audio");
});
audioGame.addEventListener("ended", function () {
  this.currentTime = 0;
  this.play();
});

saveResult.addEventListener("mousedown", () => {
  saveResult.classList.add("save-result_click");
});
saveResult.addEventListener("mouseup", () => {
  saveResult.classList.remove("save-result_click");
});

saveResult.addEventListener("click", () => {
  localStorage.setItem("clicks", JSON.stringify(counter.textContent));
  let getSaveClicks = localStorage.getItem("clicks");
  getSaveClicks = JSON.parse(getSaveClicks);
});

// финал
const ended = document.querySelector(".ended");
const footer = document.querySelector(".footer");

ended.addEventListener("click", function (e) {
  if (e.target.classList.contains("activ-button")) {
    setTimeout(() => {
      audioGame.pause();
      page.style.display = "none";
      footer.style.display = "block";
    }, 2000);
  }
});
