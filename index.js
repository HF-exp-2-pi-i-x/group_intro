import definition from "./page/definition.js";
import example from "./page/example.js";
import proof from "./page/proof.js";

// define routes
const routes = [
  { path: "", content: definition },
  { path: "#example", content: example },
  { path: "#proof", content: proof },
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
  handleRouteChange;
  //   reload page when there is route change to make latex works
  location.reload();
});

// handle initial route
handleRouteChange();
