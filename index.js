import definition from "./page/definition.js";
import example from "./page/example.js";
import proof from "./page/proof.js";

// define routes
const routes = [
  { path: "group_intro", content: definition },
  { path: "group_intro/#example", content: example },
  { path: "group_intro/#proof", content: proof },
];

const content = document.getElementById("content");

function handleRouteChange() {
  const route = window.location.hash.slice(0);
  const matchingRoute = routes.find((r) => r.path === route);
  if (matchingRoute) {
    content.innerHTML = matchingRoute.content;
  } else {
    content.innerHTML = "404 Not Found";
  }
}

window.addEventListener("hashchange", () => {
  handleRouteChange();
  //   reload page when there is route change to make latex works
  location.reload();
});

// handle initial route
handleRouteChange();

// toggle to open sidebar
const toggleButton = document.querySelector(".toggle_button");
const sidebar = document.querySelector(".sidebar");

toggleButton.addEventListener("click", () => {
  console.log("toggle");
  sidebar.classList.toggle("open");
  content.classList.toggle("open");
});

// enable dark mode
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const body = document.querySelector("body");
const nav = document.querySelector("nav");

sun.addEventListener("click", () => {
  disableDarkMode();
});

moon.addEventListener("click", () => {
  enableDarkMode();
});
// check dark mode in localstorage
let darkMode = localStorage.getItem("darkMode");
if (darkMode === "enable") {
  enableDarkMode();
}
// enable & disable
function enableDarkMode() {
  body.classList.add("dark-mode");
  sidebar.classList.add("dark-mode");
  nav.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enable");
}
function disableDarkMode() {
  body.classList.remove("dark-mode");
  sidebar.classList.remove("dark-mode");
  nav.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "");
}
