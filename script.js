window.addEventListener("DOMContentLoaded", () => {
  const loader  = document.getElementById("loader");
  const content = document.getElementById("content");
  const nav     = document.querySelector(".top-nav");

  setTimeout(() => {
    loader.style.display = "none";
    content.classList.remove("hidden");
    nav.classList.remove("hidden");
  }, 1500);
});
