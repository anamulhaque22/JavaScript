const hamMenuBtn = document.querySelector(".menu-ham");
const smallMenu = document.querySelector(".sm-menu");
const headerHamMenuBtn = document.querySelector(".menu-hem-bar");
const headerHamMenuCloseBtn = document.querySelector(
  ".menu-close"
);
const headerSmallMenuLinks = document.querySelectorAll(".sm-menu-link");

hamMenuBtn.addEventListener("click", () => {
  if (smallMenu.classList.contains("sm-menu--active")) {
    smallMenu.classList.remove("sm-menu--active");
  } else {
    smallMenu.classList.add("sm-menu--active");
  }
  if (headerHamMenuBtn.classList.contains("d-none")) {
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  } else {
    headerHamMenuBtn.classList.add("d-none");
    headerHamMenuCloseBtn.classList.remove("d-none");
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener("click", () => {
    smallMenu.classList.remove("sm-menu--active");
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  });
}
