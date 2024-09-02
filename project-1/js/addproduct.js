import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar()

let Login = localStorage.getItem("Login") || false;
if (Login == false) {
    window.location.href = "/project-1/pages/login.html"
}