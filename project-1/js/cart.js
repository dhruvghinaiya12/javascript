import Navbar, { footer } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("Footer").innerHTML = footer();

import handleLogout, { createTag } from "../components/helper.js";
handleLogout();

let cartproduct = JSON.parse(localStorage.getItem("cartproduct")) || [];

const displayCart = (cartproduct) => {
  document.getElementById("cartItems").innerHTML = "";
  document.getElementById("empty").innerHTML = "";
  document.getElementById("checkout").innerHTML = "";

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

    cartproduct.map((ele, index) => {
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
        cartproduct.splice(index, 1);
        localStorage.setItem("cartproduct", JSON.stringify(cartproduct));
        displayCart(cartproduct);
      });

      div.append(div1, category, price, handleQuantity, amount, Btn);
      document.getElementById("cartItems").append(div);
    });

    /*------------------------------------------summary------------------------------------------*/
    const states = [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
    ];
    let totalAmount = 0;
    let gst = 0.18;
    cartproduct.map((ele) => {
      totalAmount += ele.price * ele.quantity;
    });
    let GSTtotal = totalAmount * gst;
    let totalWithGst = totalAmount + GSTtotal;
    let div = createTag("div", "");
    div.className = "Cart-Summary";
    let heading = createTag("h1", "order summary");
    let subtotal = createTag(
      "h3",
      `subtotal <span class="value">$${totalAmount}</span>`
    );
    subtotal.className = "subtotal";

    let GST = createTag("h3", `GST <span class="value">$${GSTtotal}</span>`);
    GST.className = "gst";

    let total = createTag(
      "h2",
      `total <span class="value">$${totalWithGst}</span>`
    );
    total.className = "total";

    let stateLabel = createTag("label", "");
    let stateSelect = document.createElement("select");
    stateSelect.className = "form-select";
    stateSelect.id = "stateSelect";

    let defaultOption = document.createElement("option");
    defaultOption.textContent = "Select a state";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    stateSelect.appendChild(defaultOption);
    states.map((state) => {
      let option = document.createElement("option");
      option.value = state;
      option.textContent = state;
      stateSelect.appendChild(option);
    });
    let checkoutBtn = createTag("button", "Checkout");
    checkoutBtn.addEventListener("click", () => {
      let selectedState = stateSelect.value;

      if (selectedState !== "Select a state") {
        alert(`Checkout successfully!`);
        localStorage.removeItem("cartproduct");
        window.location.href = "/project-1/pages/product.html";
      } else {
        alert("Please select your state before proceeding.");
      }
    });
    div.append(
      heading,
      subtotal,
      GST,
      total,
      stateLabel,
      stateSelect,
      checkoutBtn
    );
    document.getElementById("checkout").append(div);
  }
};

displayCart(cartproduct);

