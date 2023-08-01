import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

//As funçõs devem ter o nome da data-action do html.
export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
  sounds.buttonPressAudio.play();
};

export function reset() {
  state.isRunning = !state.isRunning;
  document.documentElement.classList.remove("running");
  
  timer.updateDisplay();
  sounds.buttonPressAudio.play();
};

export function set() {
  //Permite edição do conteúdo.
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
};

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");

  if (state.isMute) {
    sounds.bgAudio.play();
    return
  };

  sounds.bgAudio.pause();
};