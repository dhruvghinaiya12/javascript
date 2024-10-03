import ApiMethods from "../components/api.js";
import { navbar, handleLogout } from "../components/helper.js";

document.getElementById("navbar").innerHTML = navbar();
handleLogout();

let Login = localStorage.getItem("Login") || false;
if (Login == false) {
  window.location.href = "/Final-Exam2/pages/login.html";
}
const fetchAllContent = async () => {
  AllContent = await ApiMethods.get();
  content(AllContent);
};

let data = JSON.parse(localStorage.getItem("signupdata")) || [];
let AllContent = [];

const content = (displayData) => {
  document.getElementById("all-contents").innerHTML = ""; 
  displayData.map((items) => {
    let div = document.createElement("div");
    div.className = "main-contents";
    div.innerHTML = `
        <img src="${items.image}" alt="product-image">
        <h1>name: ${items.name}</h1>
        <h1>price: ${items.price} ₹</h1>
        <h1>category: ${items.category}</h1>
        <button class="delete-btn" data-id="${items.id}">delete</button>
      `;
    div.querySelector(".delete-btn").addEventListener("click", async () => {
      await ApiMethods.delete(items.id);
      content(AllContent);
    });
    document.getElementById("all-contents").append(div);
  });
};

const sidebar = async () => {
  // let signup = await ApiMethods.getsignup();
  document.getElementById("sidebar").innerHTML = "";
  data.map((item) => {
    let div = document.createElement("div");
    div.className = "sidebar-content";
    div.innerHTML = `
      <img src="${item.img}" alt="profile-pic">
      <h1>${item.username}</h1>
    `;
    document.getElementById("sidebar").append(div);
  });
};


sidebar();
fetchAllContent();

const searching = () => {
  let searchValue = document.getElementById("searching").value.toLowerCase();
  let filteredData = AllContent.filter((ele) => 
    ele.name.toLowerCase().includes(searchValue)
  );
  content(filteredData);
};

document.getElementById("search").addEventListener("click", searching);

const sorting = (order) => {
  let sortedData = [...AllContent];
  if (order === "lth") {
    sortedData.sort((a, b) => a.price - b.price);
  } else {
    sortedData.sort((a, b) => b.price - a.price);
  }
  content(sortedData);
};

document.getElementById("sort-select").addEventListener("change", (e) => {
  sorting(e.target.value);
});

const filterByCategory = (category) => {
  if (category === "all") {
    content(AllContent);
  } else {
    let filteredData = AllContent.filter((ele) => ele.category === category);
    content(filteredData);
  }
};

document.getElementById("filter").addEventListener("change", (e) => {
  filterByCategory(e.target.value);
});