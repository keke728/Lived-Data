document.body.classList.remove("is-loading", "is-ready", "is-complete");

const updateHeaderState = () => {
  document.body.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });
