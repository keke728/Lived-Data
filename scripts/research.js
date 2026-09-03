/* Lets visitors fold the perspective note without hiding it by default. */
(() => {
  const section = document.querySelector(".research-perspective");
  const trigger = document.querySelector(".research-perspective-trigger");
  if (!section || !trigger) return;

  trigger.addEventListener("click", () => {
    const isFolded = section.classList.toggle("is-folded");
    trigger.setAttribute("aria-expanded", String(!isFolded));
  });
})();
