const themeButton = document.querySelector("#themeButton");
const nameInput = document.querySelector("#nameInput");
const greetingButton = document.querySelector("#greetingButton");
const clearButton = document.querySelector("#clearButton");
const greetingMessage = document.querySelector("#greetingMessage");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "Switch to Light";
  } else {
    themeButton.textContent = "Switch to Dark";
  }
});

greetingButton.addEventListener("click", () => {
  const name = nameInput.value.trim() || "visitor";
  greetingMessage.textContent = `Hello, ${name}. Keep building.`;
});

clearButton.addEventListener("click", () => {
  nameInput.value = "";
  greetingMessage.textContent = "Hello, visitor.";
});
