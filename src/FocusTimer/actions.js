import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";

//As funçõs devem ter o nome da data-action do html.
export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
};

export function reset() {
  state.isRunning = !state.isRunning;
  document.documentElement.classList.remove("running");
  
  timer.updateDisplay();
};

export function set() {
  //Permite edição do conteúdo.
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
};

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");
};