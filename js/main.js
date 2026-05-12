const header = document.querySelector(".site-header");
const toggle = document.querySelector(".site-header__toggle");
const drawerLinks = document.querySelectorAll(".site-header__drawer-link");

toggle.addEventListener("click", () => {
  header.classList.toggle("is-open");
});

drawerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
  });
});
