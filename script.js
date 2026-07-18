document.body.classList.remove("is-loading", "is-ready", "is-complete", "is-transitioning");

const updateHeaderState = () => {
  document.body.classList.toggle("is-scrolled", window.scrollY > 24);
};

const isHomePage = document.body.classList.contains("home-page");
const revealElements = document.querySelectorAll(".scroll-reveal");
const perspectiveSection = document.querySelector(".research-perspective");
const perspectiveTrigger = document.querySelector(".research-perspective-trigger");
const personBioDetails = document.querySelectorAll(".person-bio-details");

if (isHomePage && "IntersectionObserver" in window) {
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
} else if (isHomePage) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

if (perspectiveSection && perspectiveTrigger) {
  perspectiveTrigger.addEventListener("click", () => {
    const isFolded = perspectiveSection.classList.toggle("is-folded");
    perspectiveTrigger.setAttribute("aria-expanded", String(!isFolded));
  });
}

if (personBioDetails.length) {
  const closeAllPersonBios = () => {
    personBioDetails.forEach((detail) => {
      detail.open = false;
    });
  };

  personBioDetails.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (!detail.open) return;
      personBioDetails.forEach((otherDetail) => {
        if (otherDetail !== detail) {
          otherDetail.open = false;
        }
      });
    });
  });

  document.addEventListener("click", (event) => {
    const clickedInsideBio = [...personBioDetails].some((detail) =>
      detail.contains(event.target)
    );

    if (!clickedInsideBio) {
      closeAllPersonBios();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllPersonBios();
    }
  });
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });
