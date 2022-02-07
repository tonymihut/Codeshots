const bouncyLink = document.querySelector(".bouncy-link");

const letters = bouncyLink.textContent.split("");

bouncyLink.textContent = "";

console.log(getComputedStyle(bouncyLink).letterSpacing);

const replaceContent = () =>
  letters.forEach((letter, index) => {
    
    const element = document.createElement("span");
    element.innerText = letter;

    if (letter === " ") {
      element.classList.add("spacer");
    }

    element.style.transitionDelay = `${index * 20}ms`;

    bouncyLink.appendChild(element);
  });

replaceContent();
