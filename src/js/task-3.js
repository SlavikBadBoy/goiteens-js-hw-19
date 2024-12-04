const radioButtons = document.querySelectorAll('input[name="color"]');

radioButtons.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    const selectedColor = event.target.value;
    document.body.style.backgroundColor = selectedColor;
  });
});
