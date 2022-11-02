// get date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

const navBtn = document.querySelector(".nav-btn");
const navbar = document.querySelector(".navbar");
const navLogo = document.querySelector(".nav-logo");
const navLinks = document.querySelectorAll(".nav-link");
const sidebar = document.querySelector(".sidebar");
const sideCloseBtn = document.querySelector(".side-close-btn");
const formCloseBtn = document.querySelector(".form-close-btn");
const sideLinks = document.querySelectorAll(".side-link");

// NAVBAR COLOR CHANGES ON SCROLL
window.addEventListener("scroll", navScroll);

function navScroll() {
  navLinks.forEach((navLink) => {
    if (window.scrollY > 60) {
      navLink.addEventListener("mouseover", () => {
        navLink.style.color = "white";
      });
      navLink.addEventListener("mouseout", () => {
        navLink.style.color = "black";
      });
      navbar.classList.add("navbar-scroll");
      navLogo.style.color = "black";
      navLink.style.color = "black";
    } else {
      navbar.classList.remove("navbar-scroll");
      navLogo.style.color = "white";
      navLink.style.color = "white";

      navLink.addEventListener("mouseout", () => {
        navLink.style.color = "white";
      });
    }
  });
}
// END OF NAVBAR COLOR CHANGES

// SIDEBAR FUNCTIONALITY
// open sidebar
navBtn.addEventListener("click", showSidebar);

function showSidebar() {
  sidebar.classList.add("show-sidebar");
  navBtn.classList.add("hide-nav");
}
// close sidebar on x button
sideCloseBtn.addEventListener("click", closeSidebar);
// function to close the sidebar
function closeSidebar() {
  sidebar.classList.remove("show-sidebar");
  navBtn.classList.remove("hide-nav");
}
// close sidebar when clickng link
for (let i = 0; i < sideLinks.length; i++) {
  sideLinks[i].addEventListener("click", closeSidebar);
}
