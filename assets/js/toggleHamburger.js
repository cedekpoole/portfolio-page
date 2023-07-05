const toggleButton = document.getElementById("toggle-hamburger");
const navLinks = document.querySelector(".nav-links");
const link = document.querySelectorAll(".nav-links li");
const pageTitle = document.querySelector(".page-title");

// if window is less than 992px, change page title
if (window.innerWidth < 768) {
    pageTitle.innerText = "Cedekpoole";
}

// when window is resized, change page title
window.addEventListener("resize", () => {

  window.innerWidth > 768
    ? (pageTitle.innerText = "Cameron Edek Poole")
    : (pageTitle.innerText = "Cedekpoole");

    // if window is more than 992px, close hamburger menu
  if (window.innerWidth >= 992) {
    navLinks.classList.remove("show-nav-links");
  }
});

// when hamburger menu is pressed, show navigation links
toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("show-nav-links");
});

// when each navigation link is pressed, close hamburger menu
link.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 992) {
        navLinks.classList.toggle("show-nav-links");
    }
  });
});
