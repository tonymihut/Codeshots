const root = document.documentElement;
const rootStyle = getComputedStyle(root);
const gradientStart = rootStyle.getPropertyValue("--gradient-start");
const gradientEnd = rootStyle.getPropertyValue("--gradient-end");
const button = document.querySelector(".living-button");

function handleMouseMove(event) {
  const el = event.currentTarget;
  const cursorPosition = event.offsetX / 2 + -60;

  root.style.setProperty(
    "--gradient",
    `linear-gradient(${cursorPosition}deg, rgba(${gradientStart}, 1), rgba(${gradientEnd}, 1))`
  );
}

button.addEventListener("mousemove", handleMouseMove);
