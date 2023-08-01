import { controls } from "./elements.js";
import * as actions from "./actions.js";
import * as el from "./elements.js";
import state from "./state.js";
import { updateDisplay } from "./timer.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    //Access the html data through the dataset and attribute name.
    //Capturing the action.
    const action = event.target.dataset.action;
    if (typeof actions[action] !== "function") {
      return console.log("Not a function");
    };

    actions[action]();
  });
};

/* Ways to access ownership of an obj. */
// actions.toggleRunning() || actions["toggleRunning"]().

export function setMinutes() {
  //Quando em foco.
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = "";
  });

  //Verifica se a tecla é um number.
  //test retorna true ou false p/ a condição passáda.
  el.minutes.onkeydown = (event) => {
    const keyCode = event.keyCode || event.which;

    //Only number and backspace.
    return /^[0-9\b]$/.test(String.fromCharCode(keyCode));
  };

  //Tira o foco.
  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent;
    time = time > 60 ? 60 : time;

    state.minutes = time;
    state.seconds = 0;

    updateDisplay();
    el.minutes.removeAttribute("contenteditable");
  });
};