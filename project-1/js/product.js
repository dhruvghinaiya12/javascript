import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar();

import handleLogout, { createTag } from "../components/helper.js";
handleLogout();
let products = JSON.parse(localStorage.getItem("products")) || [];

let cartproduct = JSON.parse(localStorage.getItem("cartproduct")) || [];

const exist = (id) => {
  const product = cartproduct.filter((ele) => ele.id == id);
  if (product.length > 0) {
    return true;
  } else {
    return false;
  }
};

const addToCart = (ele) => {
  if (exist(ele.id)) {
    cartproduct = cartproduct.map((item) => {
      if (item.id == ele.id) {
        item.quantity += 1; 
        alert("Quantity increased");
      }
      return item;
    });
  } else {
    ele.quantity = 1;
    cartproduct.push(ele);
    alert("Product added to cart");
  }
  localStorage.setItem("cartproduct", JSON.stringify(cartproduct));
};

const UIProducts = (data) => {
  document.getElementById("products").innerHTML = "";
  document.getElementById("message").innerHTML = "";
  if (data.length === 0) {
    message.innerHTML = `
     <div class="no-products-message">
      <p class="no-products">
       no products added yet, It’s time to stock your store! Add products now and start showcasing your collection.
        </p> 
       <a href="/project-1/pages/addproduct.html" class="add-product-link">click here to add products...</a>
    </div>
      `;
  } else {
    data.map((ele) => {
      let img = createTag("img", ele.image);
      let title = createTag("h3", ele.title);
      let price = createTag("p", `Price: $${ele.price}`);
      let category = createTag("h3", ele.category);
      let btn = createTag("button", "Add to Cart");
      btn.addEventListener("click", () => addToCart(ele)); 
      let div = document.createElement("div");
      div.className = "main-product";
      div.append(img, title, price, category, btn);
      document.getElementById("products").append(div);
    });
  }
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
  let temp = products.filter((ele) =>
    ele.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  UIProducts(temp);
};

document.getElementById("search-icon").addEventListener("click", search);
