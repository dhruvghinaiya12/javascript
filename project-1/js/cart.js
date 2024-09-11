import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar();

import handleLogout, { createTag } from "../components/helper.js";
handleLogout();

let cartproduct = JSON.parse(localStorage.getItem("cartproduct")) || [];

const displayCart = (cartproduct) => {
  document.getElementById("cartItems").innerHTML = "";

  cartproduct.map((ele) => {
    let div = document.createElement("div");
    div.className = "Cart-Item";
    
    let img = createTag("img", ele.image);

    let title = createTag("h3", ele.title);

    let category = createTag("h3", ele.category);

    let price = createTag("p", `Price: $${ele.price}`);

    let amount = createTag("h2", `Total Amount: $${ele.price * ele.quantity}`);

    let handleQuantity = document.createElement("div");
    handleQuantity.className = "handleQuantity";

    let decreaseQuantity = createTag("button", "-");

    let quantity = createTag("h3", ele.quantity);
    
    let increaseQuantity = createTag("button", "+");

    decreaseQuantity.addEventListener("click", () => {
      if (ele.quantity > 1) {
        ele.quantity--;
        quantity.innerHTML = ele.quantity;
        amount.innerHTML = `Total Amount: $${ele.price * ele.quantity}`;  
        localStorage.setItem("cartproduct", JSON.stringify(cartproduct));
        displayCart(cartproduct);
      }
    });

    increaseQuantity.addEventListener("click", () => {
      ele.quantity++;
      quantity.innerHTML = ele.quantity;
      amount.innerHTML = `Total Amount: $${ele.price * ele.quantity}`;  
      localStorage.setItem("cartproduct", JSON.stringify(cartproduct));
      displayCart(cartproduct);
    });

    handleQuantity.append(decreaseQuantity, quantity, increaseQuantity);

    let Btn = createTag("button", "Remove");
    Btn.addEventListener("click", () => { 
      cartproduct = cartproduct.filter((item) => item.id !== ele.id);
      localStorage.setItem("cartproduct", JSON.stringify(cartproduct));
      displayCart(cartproduct);
    });

    div.append(img, title, category, price, handleQuantity, amount, Btn);
    document.getElementById("cartItems").append(div);
  });
};

displayCart(cartproduct);
