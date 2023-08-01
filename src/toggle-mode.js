let darkMode = true;

const buttonToggle = document.getElementById("toggle-mode");

buttonToggle.addEventListener("click", (event) => {
  //Add/remove the light class do html tag.
  document.documentElement.classList.toggle("light");
  
  let mode = darkMode ? "Light" : "Dark";
  
  //Nega a veracidade, true vira false.
  darkMode = !darkMode;

  //Alvo atual do evento.
  event.currentTarget.querySelector("span")
    .textContent = `${mode} mode active!`;
});