/*
 * Mente Mirror — Modern Refinement
 * Phase 1.70 — Final UI/UX Polish
 *
 * Enhancements only:
 *   - sticky-header scroll state
 *   - Mjuzi mini mega-menu class hook
 *   - accessible testimonial filters on the testimonial index
 *
 * Existing navigation/menu behaviour remains in assets/js/mm-site.js.
 */
(() => {
  "use strict";

  /* ----------------------------------------------------------------------- */
  /* Header scroll state                                                     */
  /* ----------------------------------------------------------------------- */

  const header = document.querySelector("[data-header]");
  let ticking = false;

  const updateHeaderState = () => {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 10);
    }
    ticking = false;
  };

  const requestHeaderUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateHeaderState);
  };

  if (header) {
    updateHeaderState();
    window.addEventListener("scroll", requestHeaderUpdate, { passive: true });
  }

  /* ----------------------------------------------------------------------- */
  /* Mjuzi desktop mega-menu hook                                            */
  /* ----------------------------------------------------------------------- */

  const topLevelNavLinks = Array.from(
    document.querySelectorAll(".mm-nav__item > a")
  );

  const mjuziLink = topLevelNavLinks.find((link) => {
    const label = (link.textContent || "").trim().toLowerCase();
    const href = (link.getAttribute("href") || "").toLowerCase();
    return label === "mjuzi" || href.includes("/ai-wellness/");
  });

  if (mjuziLink && mjuziLink.parentElement) {
    mjuziLink.parentElement.classList.add("mm-nav__item--mjuzi-mega");
  }

  /* ----------------------------------------------------------------------- */
  /* Testimonial filters                                                     */
  /* ----------------------------------------------------------------------- */

  const testimonialGrid = document.querySelector(".mm-testimonial-grid");
  const testimonialCards = testimonialGrid
    ? Array.from(testimonialGrid.querySelectorAll(".mm-testimonial-card"))
    : [];

  const classifyTestimonial = (card) => {
    const typeNode = card.querySelector(".mm-testimonial-card__type");
    const type = (typeNode ? typeNode.textContent : "").trim().toLowerCase();

    if (/student|mentoring|university/.test(type)) return "students";
    if (/parent|family|couple|relationship/.test(type)) return "parents-family";
    if (/professional|corporate|observation/.test(type)) return "professionals";
    if (/personal growth|therapy experience/.test(type)) return "personal-growth";

    return "other";
  };

  if (testimonialGrid && testimonialCards.length >= 6) {
    const filterDefinitions = [
      ["all", "All"],
      ["students", "Students"],
      ["parents-family", "Parents & Family"],
      ["professionals", "Professionals"],
      ["personal-growth", "Personal Growth"]
    ];

    testimonialCards.forEach((card) => {
      card.dataset.testimonialCategory = classifyTestimonial(card);
    });

    const filters = document.createElement("div");
    filters.className = "mm-testimonial-filters";
    filters.setAttribute("role", "group");
    filters.setAttribute("aria-label", "Filter client experiences");

    const label = document.createElement("span");
    label.className = "mm-testimonial-filters__label";
    label.textContent = "Show:";
    filters.appendChild(label);

    const applyFilter = (selectedCategory, selectedButton) => {
      testimonialCards.forEach((card) => {
        const category = card.dataset.testimonialCategory || "other";
        card.hidden =
          selectedCategory !== "all" && category !== selectedCategory;
      });

      filters
        .querySelectorAll(".mm-testimonial-filter")
        .forEach((button) => {
          button.setAttribute(
            "aria-pressed",
            button === selectedButton ? "true" : "false"
          );
        });
    };

    filterDefinitions.forEach(([value, text], index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "mm-testimonial-filter";
      button.dataset.filter = value;
      button.textContent = text;
      button.setAttribute("aria-pressed", index === 0 ? "true" : "false");

      button.addEventListener("click", () => {
        applyFilter(value, button);
      });

      filters.appendChild(button);
    });

    testimonialGrid.parentNode.insertBefore(filters, testimonialGrid);
  }
})();
