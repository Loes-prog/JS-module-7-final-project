'use strict';

const cakeRecipes = require("./cake-recipes.json");


// function returns all unique authors of a given recipe list. So every author is only listed once.

const getAuthors = (recipeList) => {
  const authors = [];
  recipeList.forEach(recipe => {
    if (!authors.includes(recipe.Author)) {
      authors.push(recipe.Author);
    };
  });
  return authors;
};

console.log('---------------------------------------------------------------------------------------------');
console.log(getAuthors(cakeRecipes));

// function that logs the name of each recipe, using object destructuring. If there are no recipes found, it logs that there are no recipes found. 

const getRecipeNames = (recipeList) => {
  if (recipeList.length === 0) {
    console.log("No recipes found.");
  } else {
    recipeList.forEach(({ Name }) => {
      console.log(Name);
    });
  }
}

console.log('---------------------------------------------------------------------------------------------');
getRecipeNames(cakeRecipes);

// function that return all recipes of a given author, using the filter method.

const returnRecipeNamesByAuthor = (recipeList, author) => {

  const nameList = recipeList.filter(recipe => recipe.Author.toLowerCase() === author.toLowerCase());
  return nameList;
};

console.log('---------------------------------------------------------------------------------------------');
console.log(returnRecipeNamesByAuthor(cakeRecipes, "Mary cadogan"));


// function that returns a list of recipes that contain a given ingredient. The function takes a list of recipes as input and an ingredient as a string.
// return the names of the recipes that contain the ingredient.

const returnRecipeNamesByIngredient = (recipeList, ingredient) => {
  const nameList = recipeList.filter(recipe =>
    recipe.Ingredients.some(ing => ing.toLowerCase().includes(ingredient.toLowerCase())
    )
  );

  if (nameList.length === 0) {
    return "No recipes found with that ingredient.";
  } else {
    return nameList.map(recipe => recipe.Name);
  }
};

console.log('---------------------------------------------------------------------------------------------');
console.log(returnRecipeNamesByIngredient(cakeRecipes, "140g caster sugar"));

// function that takes a list of recipes and a name as input. Returns a single recipe that matches the given name.

const getRecipeByName = (recipeList, name) => {
  const matchName = recipeList.find(recipe => recipe.Name.toLowerCase().includes(name.toLowerCase()));

  if (matchName.length === 0) {
    return "No recipe names found with that word.";
  } else {
    return matchName.Name;
  };
};

console.log('---------------------------------------------------------------------------------------------');
console.log(getRecipeByName(cakeRecipes, "pud"));

// function that returns all ingredients of a given recipe list as a single array. Using 

const getAllIngredients = (recipeList) => {
  const allIngredients = recipeList.reduce((accumulator, recipe) => {
    return accumulator.concat(recipe.Ingredients);
  }, []);
  return allIngredients;
};

// shorter list for input function getAllIngredients

const shorterRecipeList = returnRecipeNamesByAuthor(cakeRecipes, "Mary cadogan");

console.log('---------------------------------------------------------------------------------------------');

console.log(getAllIngredients(shorterRecipeList));


// Part 2

const displayMenu = () => {
  console.log("\nRecipe Management System Menu:");
  console.log("1. Show All Authors");
  console.log("2. Show Recipe names by Author");
  console.log("3. Show Recipe names by Ingredient");
  console.log("4. Get Recipe by Name");
  console.log("5. Get All Ingredients of Saved Recipes");
  console.log("0. Exit");
  const choice = prompt("Enter a number (1-5) or 0 to exit: ");
  return parseInt(choice);
}


let choice;

do {
  choice = displayMenu();

  switch (choice) {
    case 1:

      break;
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
    case 5:

      break;
    case 0:
      console.log("Exiting...");
      break;
    default:
      console.log("Invalid input. Please enter a number between 0 and 5.");
  }
} while (choice !== 0);