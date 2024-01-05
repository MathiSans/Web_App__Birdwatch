const body = document.querySelector('[data-js="body"]');

function createHeader() {
  const headerElement = document.createElement("header");
  headerElement.setAttribute("data-js", "header-element");
  headerElement.innerHTML = "BirdWatch";
  body.append(headerElement);
}

createHeader();

function createContainer() {
  const mainElement = document.createElement("main");
  mainElement.classList.add("content__container");
  mainElement.setAttribute("data-js", "content-container");
  body.append(mainElement);
}

createContainer();
