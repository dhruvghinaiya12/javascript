import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar()


let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("SignUpBtn").addEventListener("click", (e) => {
  e.preventDefault();

  let data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    password: document.getElementById("Password").value,
  };

  users.push(data);
  localStorage.setItem("users", JSON.stringify(users));
  window.location.href = "./login.html";
});

