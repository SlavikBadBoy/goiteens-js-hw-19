const validInput = document.querySelector("#validation-input");
const validInputHandler = () => {
  if (validInput.value.length !== 6) {
    validInput.classList.add("invalid");
  }
  if (validInput.value.length === 6) {
    validInput.classList.replace("invalid", "valid");
  }
};
validInput.addEventListener("input", validInputHandler);
