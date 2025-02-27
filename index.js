'use strict';

const cakeRecipes = require("./cake-recipes.json");
var prompt = require('prompt-sync')();


// function returns all unique authors of a given recipe list. So every author is only listed once.

const getAuthors = (recipes) => {
  const authors = [];
  recipes.forEach(recipe => {
    if (!authors.includes(recipe.Author)) {
      authors.push(recipe.Author);
    };
  });
  return authors;
};

console.log('---------------------------------------------------------------------------------------------');
console.log(getAuthors(cakeRecipes));

// function that logs the name of each recipe, using object destructuring. If there are no recipes found, it logs that there are no recipes found. 

const getRecipeNames = (recipes) => {
  if (recipes.length === 0) {
    console.log("No recipes found.");
  } else {
    recipes.forEach(({ Name }) => {
      console.log(Name);
    });
  }
}

console.log('---------------------------------------------------------------------------------------------');
getRecipeNames(cakeRecipes);

// function that return all recipe names of a given author, using the filter method.

const returnRecipeNamesByAuthor = (recipes, author) => {

  const nameList = recipes.filter(recipe => recipe.Author.toLowerCase() === author.toLowerCase());

  if (nameList.length === 0) {
    return "No recipes found with that author name.";
  } else {
    return nameList.map(recipe => recipe.Name);
  }
};

console.log('---------------------------------------------------------------------------------------------');
console.log(returnRecipeNamesByAuthor(cakeRecipes, "Mary cadogan"));


// function that returns a list of recipes that contain a given ingredient. The function takes a list of recipes as input and an ingredient as a string.
// return the names of the recipes that contain the ingredient.

const returnRecipeNamesByIngredient = (recipes, ingredient) => {
  const nameList = recipes.filter(recipe =>
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

const getRecipeByName = (recipes, name) => {
  const matchName = recipes.find(recipe => recipe.Name.toLowerCase().includes(name.toLowerCase()));

  if (matchName.length === 0) {
    return "No recipe names found with that word.";
  } else {
    return matchName;
  };
};

console.log('---------------------------------------------------------------------------------------------');
console.log(getRecipeByName(cakeRecipes, "pud"));

// function that returns all ingredients of a given recipe list as a single array. Using 

const getAllIngredients = (recipes) => {
  const allIngredients = recipes.reduce((accumulator, recipe) => {
    return accumulator.concat(recipe.Ingredients);
  }, []);
  return allIngredients;
};

console.log('---------------------------------------------------------------------------------------------');

console.log(getAllIngredients(cakeRecipes));

// shorter list for testing input instead of cakeRecipes: function getAllIngredients

console.log('---------------------------------------------------------------------------------------------');

const recipesArray = []; // empty array to store the result of getRecipeByName
const result = getRecipeByName(cakeRecipes, "pud");
recipesArray.push(result);
console.log(getAllIngredients(recipesArray));


// Part 2

console.log('---------------------------------------------------------------------------------------------');

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

const savedRecipes = [];

let choice;

do {
  choice = displayMenu();

  switch (choice) {
    case 1:
      console.log("Your choice is 1. You can find all authors below:");
      console.log(getAuthors(cakeRecipes))
      break;
    case 2:
      const authorPrompt = prompt("Your choice is 2. Enter the author's name: ");
      console.log("You can find all recipes by the author below:");
      console.log(returnRecipeNamesByAuthor(cakeRecipes, authorPrompt));

      break;
    case 3:
      const ingredientPrompt = prompt("Your choice is 3. Enter the ingredient: ");
      console.log("You can find all recipes by the ingredient below:");
      console.log(returnRecipeNamesByIngredient(cakeRecipes, ingredientPrompt));
      break;
    case 4:
      const recipeNamePrompt = prompt("Your choice is 4. Enter the recipe name: ");
      console.log("You can find the recipe below:");

      const choosenRecipe = getRecipeByName(cakeRecipes, recipeNamePrompt);
      console.log(choosenRecipe);

      const saveRecipe = prompt("Do your want to save this recipe? Enter Y or N: ").toLocaleLowerCase();

      if (saveRecipe === "y") {
        savedRecipes.push(choosenRecipe);
        console.log("Recipe saved!");
      } else {
        console.log("Recipe not saved.");
      };
      break;
    case 5:
      console.log("Your choice is 5. You can find all ingredients of saved recipes below:");
      if (savedRecipes.length === 0) {
        console.log("No saved recipes found.");
      } else {
        console.log(getAllIngredients(savedRecipes));
      };
      break;
    case 0:
      console.log("Exiting...");
      break;
    default:
      console.log("Invalid input. Please enter a number between 0 and 5.");
  }
} while (choice !== 0);