const themeButton = document.querySelector("#themeButton");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "Switch to Light";
  } else {
    themeButton.textContent = "Switch to Dark";
  }
});
