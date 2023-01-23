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

// slide home images
let index = 0;
let slideTime = 5000;
const bgImg = document.querySelector(".bg-img");
let images = [
  "./images/first-home-img.JPG",
  "./images/second-home-img.JPG",
  "./images/third-home-img.JPG",
  "./images/fourth-home-img.JPG",
];

function changeImg() {
  bgImg.style.backgroundImage = "url(" + images[index] + ")";

  if (index < images.length - 1) {
    index++;
  } else {
    index = 0;
  }

  setTimeout(changeImg, slideTime);
}
window.onload = changeImg;

// slide about videos

const videoSlide = document.querySelector(".about-vids");
const videos = document.querySelectorAll(".about-vid");
let count = 0;
// // get width of video
const size = videos[0].clientWidth;
const nextBtn = document.querySelector(".right");
const prevBtn = document.querySelector(".left");

videoSlide.style.transform = "translateX(" + -size * count + "px)";

nextBtn.addEventListener("click", () => {
  videoSlide.style.transition = "transform 0.4s ease-in-out";
  count++;
  videoSlide.style.transform = "translateX(" + -size * count + "px)";
});

prevBtn.addEventListener("click", () => {
  videoSlide.style.transition = "transform 0.4s ease-in-out";
  count--;
  videoSlide.style.transform = "translateX(" + -size * count + "px)";
});

// go back to original video
videoSlide.addEventListener("transitionend", () => {
  if (count > videos.length - 1) {
    videoSlide.style.transition = "none";
    count = 0;
    videoSlide.style.transform = "translateX(" + -size * count + "px)";
  }
  if (count < 0) {
    videoSlide.style.transition = "none";
    count = videos.length - 1;
    videoSlide.style.transform = "translateX(" + -size * count + "px)";
  }
});
