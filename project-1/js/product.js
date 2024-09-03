import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar();

import handleLogout, { createTag } from "../components/helper.js";
handleLogout();
let products = JSON.parse(localStorage.getItem("products")) || [];

const UIProducts = (data) => {
  data.map((ele) => {
    let img=createTag("img",ele.image);
    let title = createTag("h3", ele.title)
    let price = createTag("p", `Price: $${ele.price}`)
    let category= createTag("h3", ele.category)
    let btn=createTag("button", "Add to Cart")
    let div= document.createElement("div")
    div.className="main-product"
    div.append(img, title, price, category, btn)
    document.getElementById("products").append(div)
  });
};
UIProducts(products);
