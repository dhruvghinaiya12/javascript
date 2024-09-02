import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar()


let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("SignUpBtn").addEventListener("click", (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("Password").value;

  let User = users.find(user => user.email === email && user.password === password);
  
  if(User) {
    alert("Login successful");
    localStorage.setItem("username", User.name);
    localStorage.setItem("Login", true);
    window.location.href = "/project-1/pages/login.html";
  } else {
    alert("Login failed, please try again");
  }
});

if (localStorage.getItem("Login")) {
  const logoutElement = document.getElementById("logout");
  
  if (logoutElement) { 
    logoutElement.addEventListener("click", (e) => {
      e.preventDefault();

      localStorage.removeItem("username");
      localStorage.removeItem("Login");

      window.location.href = "/project-1/index.html";
    });
  } else {
    console.log("Logout element not found in the DOM.");
  }
}



