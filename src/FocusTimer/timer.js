import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";
import { kitchenTimer } from "./sounds.js";

export function countdown() {
  if (!state.isRunning) {
    return
  };

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--

  if (seconds < 0) {
    seconds = 59;
    minutes--
  };

  if(minutes < 0) {
    reset();
    kitchenTimer.play();
    return
  };

  updateDisplay(minutes, seconds);

  // Recursão and callBack function.
  setTimeout(() => countdown(), 1000);
};

export function updateDisplay(min, sec) {
  //nullish coalescing operator.
  //Check the value. If not, get the state value.
  min = min ?? state.minutes;
  sec = sec ?? state.seconds;

  el.minutes.textContent = String(min).padStart(2, "0");
  el.seconds.textContent = String(sec).padStart(2, "0");
};