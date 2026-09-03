/* Shared behavior used on every page. */
(() => {
  const updateHeaderState = () => {
    document.body.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  /* Discourage casual image saving without interfering with links or keyboard use. */
  document.addEventListener("contextmenu", (event) => {
    if (event.target.closest("img")) event.preventDefault();
  });
})();
