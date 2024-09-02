import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar()


let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("SignUpBtn").addEventListener("click", (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("Password").value;

  let User = users.find(user => user.email === email && user.password === password);

  if (User) {
    alert("Login successful!");
    window.location.href = "../index.html"; 
  } else {
    alert("Invalid email or password. Please try again.");
  }
});

