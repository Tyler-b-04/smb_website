const headlineInput = document.getElementById("headline-input");
const updateButton = document.getElementById("update-btn");
const ctaHeadline = document.getElementById("cta-headline");

updateButton.addEventListener("click", function () {
  const newHeadline = headlineInput.value.trim();
  if (newHeadline !== "") {
    ctaHeadline.textContent = newHeadline;
    console.log("CTA updated:", newHeadline);
  }
});