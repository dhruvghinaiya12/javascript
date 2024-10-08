import { handleLogout, navbar } from "../components/helper.js";
document.getElementById("header").innerHTML=navbar()
handleLogout();

let Login = localStorage.getItem("Login");

let allrecipe;
const Api=async()=>{
    let request = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    let response=await request.json();
    allrecipe = response.meals; 
    Recipe(allrecipe);
}

Api();

const Recipe=(meals)=>{
    document.getElementById("meals").innerHTML=""
meals.map((item)=>{
    const div = document.createElement("div");
    div.classList.add("col-lg-3", "meal");

    div.innerHTML = `
        <div class="card text-center">
          <img class="card-img-top" src="${item.strMealThumb}" alt="${item.strMeal}">
          <div class="card-body">
            <h5 class="card-title">${item.strMeal}</h5>
            <p class="card-text">Category: ${item.strCategory}</p>
          <h5 class="card-title">${item.strArea} Dish</h5>
          <a class="nav-link" href="${item.strYoutube}" target="_blank"><button class="btn btn-danger mt-3 add-to-cart">watch Recipe video</button></a>
          <button class="btn btn-primary mt-3" id="AddButton-${item.idMeal}">Add to Favorite</button>

          </div>
        </div>
      `;
      document.getElementById("meals").append(div)
      let addButton = document.getElementById(`AddButton-${item.idMeal}`);
      addButton.addEventListener("click", () => AddToFavorite(item));
})
}

let favorite = JSON.parse(localStorage.getItem('favorite')) || [];

const AddToFavorite = (item) => {
    
    if (Login !== "true") {
        alert("You must be logged in to add to favorites!");
        window.location.href="/API_project/pages/login.html"
        return;
    }
    let recipe = {
        strMeal: item.strMeal,
        strCategory: item.strCategory,
        strMealThumb: item.strMealThumb,
        strArea: item.strArea,
        strYoutube: item.strYoutube
    };

    let isFavorite = favorite.find(fav => fav.strMeal === recipe.strMeal);
    
    if (isFavorite) {
        alert(`${recipe.strMeal} is already in favorites!`);
        return; 
    }

    favorite.push(recipe);
    localStorage.setItem('favorite', JSON.stringify(favorite));
    alert(`${recipe.strMeal} has been added to favorites!`);
};
