const API_KEY = "be77863312a24e6ca35f4cdba4d0e6b7"; // storing API key for later use
const recipeList = document.getElementById("recipe-list");

function displayRecipe(recipes) {
  recipeList.innerHTML = "";

  recipes.forEach((recipe) => {
    const recipeItem = document.createElement("li");
    recipeItem.classList.add("recipe-item");
    recipeImage = document.createElement("img");
    recipeImage.src = recipe.image;
    recipeImage.alt = "recipe image";

    recipeTitle = document.createElement("h2");
    recipeTitle.innerText = recipe.title;

    recipeIngredients = document.createElement("p");
    recipeIngredients.innerHTML = `<strong>Ingredients:</strong> 
    ${recipe.extendedIngredients
      .map((ingredient) => ingredient.original)
      .join(", ")};`;

    recipeLink = document.createElement("a");
    recipeTitle.href = recipe.sourceUrl;
    recipeLink.innerText = "View Recipe"

    recipeItem.appendChild(recipeLink);
    recipeItem.appendChild(recipeTitle);
    recipeItem.appendChild(recipeImage);
    recipeItem.appendChild(recipeIngredients);
    recipeList.appendChild(recipeItem);
  });
}

async function getRecipe() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );

  const data = await response.json();

  return data.recipes;
}

async function init() {
  const recipes = await getRecipe();
  displayRecipe(recipes);
  console.log(recipes);
}

init();
