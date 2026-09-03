/* Only one extended bio stays open, and a click elsewhere closes it. */
(() => {
  const bioDetails = [...document.querySelectorAll(".person-bio-details")];
  if (!bioDetails.length) return;

  const closeAllBios = () => {
    bioDetails.forEach((detail) => {
      detail.open = false;
    });
  };

  bioDetails.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (!detail.open) return;
      bioDetails.forEach((otherDetail) => {
        if (otherDetail !== detail) otherDetail.open = false;
      });
    });
  });

  document.addEventListener("click", (event) => {
    if (!bioDetails.some((detail) => detail.contains(event.target))) closeAllBios();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAllBios();
  });
})();
