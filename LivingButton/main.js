const root = document.documentElement;
const rootStyle = getComputedStyle(root);
const gradientStart = rootStyle.getPropertyValue("--purple");
const gradientEnd = rootStyle.getPropertyValue("--pink");
const button = document.querySelector(".living-button");

function handleMouseMove(event) {
  const cursorPosition = event.offsetX / 2 + -60;

  root.style.setProperty(
    "--gradient",
    `linear-gradient(${cursorPosition}deg, rgba(${gradientStart}, 1), rgba(${gradientEnd}, 1))`
  );
}

button.addEventListener("mousemove", handleMouseMove);
