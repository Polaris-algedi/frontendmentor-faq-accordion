import "./style.css";
document.addEventListener("DOMContentLoaded", () => {
  const faqHeaders = document.querySelectorAll(".faq-header");
  faqHeaders.forEach((header, idx) => {
    header.addEventListener("click", () => toggle(header));
    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle(header);
      }
      // Arrow navigation
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (faqHeaders[idx + 1]) faqHeaders[idx + 1].focus();
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (faqHeaders[idx - 1]) faqHeaders[idx - 1].focus();
      }
    });
  });
});

const toggle = (clickedHeader) => {
  const faqItem = clickedHeader.parentElement;
  const faqParagraph = faqItem.querySelector("p");
  const faqImage = clickedHeader.querySelector("img");
  if (faqParagraph.classList.contains("open")) {
    faqParagraph.classList.remove("open");
    faqImage.src = "/images/icon-plus.svg";
    clickedHeader.setAttribute("aria-expanded", "false");
  } else {
    faqParagraph.classList.add("open");
    faqImage.src = "/images/icon-minus.svg";
    clickedHeader.setAttribute("aria-expanded", "true");
  }
};
