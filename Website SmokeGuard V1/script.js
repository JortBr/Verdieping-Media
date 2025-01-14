gsap.from("#learn-more", {
  duration: 1,
  scale: 0.8,
  opacity: 1,
  delay: 1,
});

document.querySelector("#learn-more").addEventListener("click", () => {
  gsap.to(window, {
    scrollTo: { y: ".features", offsetY: 50 },
    duration: 1,
  });
});
