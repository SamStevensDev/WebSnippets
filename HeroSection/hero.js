document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(SplitText);

  const split = new SplitText(".hero-title", { type: "chars" });

  gsap.from(split.chars, {
    y: -40,
    opacity: 0,
    duration: 1,
    stagger: 0.03,
    ease: "power3.out",
  });

  gsap.from(".hero-subtext", {
    y: 30,
    opacity: 0,
    delay: 0.3,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".cta", {
    scale: 0.8,
    opacity: 0,
    delay: 0.8,
    duration: 0.6,
    ease: "back.out(1.7)",
  });
});
