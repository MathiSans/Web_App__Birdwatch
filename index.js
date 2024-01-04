const body = document.querySelector('[data-js="body"]');

function createHeader() {
  const headerElement = document.createElement("header");
  headerElement.setAttribute("data-js", "header-element");
  headerElement.innerHTML = "BirdWatch";
  body.append(headerElement);
}

createHeader();
