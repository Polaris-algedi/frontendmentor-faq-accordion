import "./style.css";
document.addEventListener("DOMContentLoaded", () => {
  const faqHeaders = document.querySelectorAll(".faq-header");
  faqHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const faqItem = header.parentElement;
      const faqParagraph = faqItem.querySelector("p");
      const faqImage = header.querySelector("img");
      if (faqParagraph.classList.contains("hidden")) {
        faqParagraph.classList.remove("hidden");
        faqImage.src = "/images/icon-minus.svg";
      } else {
        faqParagraph.classList.add("hidden");
        faqImage.src = "/images/icon-plus.svg";
      }
    });
  });
});
