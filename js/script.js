document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navItems = document.querySelector(".navitems");

  hamburger.addEventListener("click", () => {
    navItems.classList.toggle("active");
  });
});
