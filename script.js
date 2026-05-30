document.body.classList.remove("is-loading", "is-ready", "is-complete");

const updateHeaderState = () => {
  document.body.classList.toggle("is-scrolled", window.scrollY > 24);
};

const revealElements = document.querySelectorAll(".scroll-reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -6% 0px",
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });
