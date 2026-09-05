/* Keep extended profiles intentional: one opens at a time and closes on exit. */
(() => {
  const cards = [...document.querySelectorAll(".person-tile-copy.has-bio")];
  if (!cards.length) return;

  const closeAllBios = () => {
    cards.forEach((card) => {
      card.classList.remove("is-bio-open");
      card.querySelector(".person-bio-trigger")?.setAttribute("aria-expanded", "false");
    });
  };

  cards.forEach((card) => {
    const trigger = card.querySelector(".person-bio-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", (event) => {
      event.stopPropagation();
      const willOpen = !card.classList.contains("is-bio-open");
      closeAllBios();
      if (!willOpen) return;
      card.classList.add("is-bio-open");
      trigger.setAttribute("aria-expanded", "true");
    });
  });

  document.addEventListener("click", (event) => {
    if (!cards.some((card) => card.contains(event.target))) closeAllBios();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAllBios();
  });
})();
