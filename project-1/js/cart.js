import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar();

import handleLogout, { createTag } from "../components/helper.js";
handleLogout();

let cartproduct = JSON.parse(localStorage.getItem("cartproduct")) || [];

const displayCart = (cartproduct) => {
  document.getElementById("cartItems").innerHTML = "";
  document.getElementById("empty").innerHTML = "";
  if (cartproduct.length == 0) {
    empty.innerHTML = `
     <div class="emptycart mt-4">
     <img src="/project-1/img/bag.png" alt="cart-img" class="img-fluid">
      <h2>Your shopping cart is empty</h2>
      <p class="cart-detail mb-5">
       Return to the store to add items for your delivery slot. Before proceed to checkout
       you must add some products to your shopping cart. You will find a lot of interesting 
       products on our shop page.
     </p>
      <a href="/project-1/pages/product.html" class="view-products">Explore Products</a>
     </div>
    `;
  } else {
    let label = document.createElement("div");
    label.className = "Cart-Header";

    let labelproduct = createTag("h3", "Product");
    let labelCategory = createTag("h3", "Category");
    let labelPrice = createTag("h3", "Price");
    let labelQuantity = createTag("h3", "Quantity");
    let labelAmount = createTag("h3", "Total Price");

    label.append(
      labelproduct,
      labelCategory,
      labelPrice,
      labelQuantity,
      labelAmount
    );

    document.getElementById("cartItems").append(label);
    cartproduct.map((ele) => {
      let div = document.createElement("div");
      div.className = "Cart-Item";

      let div1 = document.createElement("div");
      div1.className = "Cart-Item-1";

      let img = createTag("img", ele.image);

      let title = createTag("h4", ele.title);

      div1.append(img, title);

      let category = createTag("h3", ele.category);

      let price = createTag("p", `$${ele.price}`);

      let amount = createTag("h2", `$${ele.price * ele.quantity}`);

      let handleQuantity = document.createElement("div");
      handleQuantity.className = "handleQuantity";

      let decreaseQuantity = createTag("button", "-");

      let quantity = createTag("h3", ele.quantity);

      let increaseQuantity = createTag("button", "+");

      decreaseQuantity.addEventListener("click", () => {
        if (ele.quantity > 1) {
          ele.quantity--;
          quantity.innerHTML = ele.quantity;
          amount.innerHTML = `$${ele.price * ele.quantity}`;
          localStorage.setItem("cartproduct", JSON.stringify(cartproduct));
          displayCart(cartproduct);
        }
      });

      increaseQuantity.addEventListener("click", () => {
        ele.quantity++;
        quantity.innerHTML = ele.quantity;
        amount.innerHTML = `$${ele.price * ele.quantity}`;
        localStorage.setItem("cartproduct", JSON.stringify(cartproduct));
        displayCart(cartproduct);
      });

      handleQuantity.append(decreaseQuantity, quantity, increaseQuantity);

      let Btn = createTag("button", "Remove");
      Btn.className = "delete-btn";
      Btn.addEventListener("click", () => {
        cartproduct = cartproduct.filter((item) => item.id !== ele.id);
        localStorage.setItem("cartproduct", JSON.stringify(cartproduct));
        displayCart(cartproduct);
      });

      div.append(div1, category, price, handleQuantity, amount, Btn);
      document.getElementById("cartItems").append(div);
    });
  }
};

displayCart(cartproduct);
