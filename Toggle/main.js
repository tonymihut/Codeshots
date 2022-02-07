const toggleContainer = document.querySelector(".toggle__container");
const toggleKnob = document.querySelector(".toggle__container__knob");

toggleContainer.addEventListener("click", () => {
  toggleContainer.classList.toggle("toggle__container--active");
  toggleKnob.classList.toggle("toggle__container__knob--active");
  toggleKnob.classList.toggle("toggle__container__knob--inactive");
});
