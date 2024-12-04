const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const fontSizeControl = () => {
  text.style.fontSize = `${input.value}px`;
};
input.addEventListener("input", fontSizeControl);