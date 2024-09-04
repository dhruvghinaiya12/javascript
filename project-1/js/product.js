import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar();

import handleLogout, { createTag } from "../components/helper.js";
handleLogout();
let products = JSON.parse(localStorage.getItem("products")) || [];

const UIProducts = (data) => {
  document.getElementById("products").innerHTML = "";
  data.map((ele) => {
    let img = createTag("img", ele.image);
    let title = createTag("h3", ele.title);
    let price = createTag("p", `Price: $${ele.price}`);
    let category = createTag("h3", ele.category);
    let btn = createTag("button", "Add to Cart");
    let div = document.createElement("div");
    div.className = "main-product";
    div.append(img, title, price, category, btn);
    document.getElementById("products").append(div);
  });
};
UIProducts(products);

const handlesort = (orderby) => {
  if (orderby === "lth") {
    let store = products.sort((a, b) => a.price - b.price);
    UIProducts(store);
  } else if (orderby === "htl") {
    let store = products.sort((a, b) => b.price - a.price);
    UIProducts(store);
  }
};

const handleCategory = (category) => {
  if (category === "all") {
    UIProducts(products);
  } else {
    let store = products.filter(
      (ele) => ele.category.toLowerCase() === category.toLowerCase()
    );
    UIProducts(store);
  }
};

document.getElementById("sort").addEventListener("change", (e) => {
  handlesort(e.target.value);
});
document.querySelector(".filter-section").addEventListener("change", (e) => {
  if (e.target.name === "category" && e.target.type === "radio") {
    handleCategory(e.target.value);
  }
});
const search = (e) => {
  e.preventDefault();

  let searchValue = document.getElementById("search-input").value;
  let temp = products.filter((ele) => ele.title.toLowerCase().includes(searchValue.toLowerCase()));
  UIProducts(temp);
};

document.getElementById("search-icon").addEventListener("click", search);
