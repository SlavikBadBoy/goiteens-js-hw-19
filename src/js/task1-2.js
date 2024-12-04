const btnOpen = document.querySelector("[data-open-modal]");
const btnClose = document.querySelector("[data-close-modal]");
const backdrop = document.querySelector(".js-backdrop");

btnOpen.addEventListener("click", () => {
  backdrop.classList.remove("is-hidden");
  document.body.classList.add("no-scroll");
});

btnClose.addEventListener("click", closeModal);

backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    closeModal();
  }
});

function closeModal() {
  backdrop.classList.add("is-hidden");
  document.body.classList.remove("no-scroll");
}
