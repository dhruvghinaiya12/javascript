import { handleLogout, navbar } from "../components/helper.js";
document.getElementById("header").innerHTML = navbar();
handleLogout();

let favorite = JSON.parse(localStorage.getItem("favorite")) || [];

const FavRecipe = (favorite) => {
  document.getElementById("FavoriteMeals").innerHTML = "";
  favorite.map((item,index) => {
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
         <button class="btn btn-danger mt-3" id="removeButton-${index}">remove</button>
          </div>
        </div>
      `;
    document.getElementById("FavoriteMeals").append(div);
    const removeButton = document.getElementById(`removeButton-${index}`);
    removeButton.addEventListener("click", () => removeFavorite(index));
  });
};


const removeFavorite = (index) => {
    favorite.splice(index, 1);
    localStorage.setItem("favorite", JSON.stringify(favorite));
    FavRecipe(favorite);
  };

  FavRecipe(favorite);
