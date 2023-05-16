// storing API key for later use

const API_KEY = "eff7aaa4ae7743548683409ec4e44052";

async function getRecipe() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apikey=${API_KEY}`
  );

  const data = await response.json();

  return data.recipes;
}

async function init() {
  const recipes = await getRecipe();
  console.log(recipes);
}

init();
