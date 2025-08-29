// Wait until the page finishes loading
window.addEventListener("load", () => {
  const header = document.querySelector("header");

  if (header) {
    // Make header visible (CSS transition will animate it)
    header.style.opacity = "1";
    console.log("✅ Header fading in!");
  } else {
    console.log("❌ Header not found.");
  }
});
