import definition from "./page/definition.js";

// define routes
const routes = [
  { path: "", content: definition },
  { path: "#example", content: "Example Page" },
  { path: "#proof", content: "Proof Page" },
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

window.addEventListener("hashchange", handleRouteChange);

// handle initial route
handleRouteChange();
