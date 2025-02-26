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

getRecipeNames(cakeRecipes);

// function that return all recipes of a given author, using the filter method.

const returnRecipeNamesByAuthor = (recipeList, author) => {
  const nameList = recipeList.filter(recipe => recipe.Author === author);
  return nameList;
};

console.log('NEW EXCERCISE');

console.log(returnRecipeNamesByAuthor(cakeRecipes, "Mary Berry"));


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