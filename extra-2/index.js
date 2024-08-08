const themeSwitcher = document.getElementById("themeSwitcher");

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.className = savedTheme;
  }
  updateButtonText();
});

themeSwitcher.addEventListener("click", () => {
  let currentTheme = document.body.className;

  if (currentTheme === "light-mode") {
    document.body.className = "dark-mode";
    localStorage.setItem("theme", "dark-mode");
  } else {
    document.body.className = "light-mode";
    localStorage.setItem("theme", "light-mode");
  }

  updateButtonText();
});

function updateButtonText() {
  if (document.body.className === "light-mode") {
    themeSwitcher.textContent = "Switch to Dark Mode";
  } else {
    themeSwitcher.textContent = "Switch to Light Mode";
  }
}
