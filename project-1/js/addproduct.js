import Navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = Navbar();
import handleLogout, { getValue } from "../components/helper.js";
handleLogout();

let Login = localStorage.getItem("Login") || false;
if (Login == false) {
  window.location.href = "/project-1/pages/login.html";
}

let products = JSON.parse(localStorage.getItem("products")) || [];
const handleProduct = (e) => {
  e.preventDefault();
  let product={
    title:getValue(".title"),
    price:getValue(".price"),
    category:getValue(".category"),
    image:getValue(".img-url"),
    id:Date.now()

  }
products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  window.location.href = "/project-1/pages/product.html";  
};

document
  .getElementById("productdata")
  .addEventListener("submit", handleProduct);
