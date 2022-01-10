function animate() {
  const animationContainer = document.querySelector(".loading-animation");
  const animationFigure = document.querySelector(".loading-animation__figure");
  const animationBounds = animationContainer.getBoundingClientRect();
  const { bottom, left, right, top } = animationBounds;
  const { width, height } = animationFigure.getBoundingClientRect();

  function runAnimation() {
    const randomLeft = Math.floor(Math.random() * (right - left - width));
    const randomTop = Math.floor(Math.random() * (bottom - top - height));
    const randomScale = Math.random() * (2 - 1) + 1;
    animationFigure.style.transform = `translate(${randomLeft}px, ${randomTop}px) scale(${randomScale})`;
    animationFigure.style.boxShadow = `0 ${randomScale * 3}px ${randomScale * 5}px 0 rgba(0, 0, 0, ${
      1 / randomScale / 2
    })`;
    setTimeout(() => {
      runAnimation();
    }, 1000);
  }

  runAnimation();
}

animate();
