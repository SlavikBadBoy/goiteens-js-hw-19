const body = document.querySelector("body");
const button = document.querySelector("[data-action]");

const modalHeandler = (event) => {
  if (event.target.tagName !== "BUTTON") return;
  if (event.target.dataset.action === "open-modal") {
    body.classList.add("show-modal");
  }
  if (event.target.dataset.action === "close-modal") {
    body.classList.remove("show-modal");
  }
};

body.addEventListener("click", modalHeandler);
