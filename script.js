// Run after the whole page has loaded
window.addEventListener("load", () => {
  // Find the <header> element
  const header = document.querySelector("header");

  if (header) {
    // Set opacity to 1 (CSS will handle the fade-in effect)
    header.style.opacity = "1";
    console.log("✅ Header found, fading in!");
  } else {
    console.log("❌ Header not found.");
  }
});
