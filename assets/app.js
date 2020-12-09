// Declare a variable to store the searched ingredient
var ing = "",

// Variable Declaration
var searchRecipe = $("#search-recipe");
var addIngredient = $("#add-ing");
var ingList = [];

// Setup API key
const apiKey = "2f3e7f513e714122ada8fe2295969951";
const apiUrl = "https://api.spoonacular.com/recipes/findByIngredients"

//Function to add ingredient
function addIng(ing){
    inglist.push(ing)

}

// Function to display recipe
function displayRecipe(event){
    event.preventDefault();
    if(ingList.length !== 0){
        getRecipe(inglist);
    }
    
}

// Function to get recipe using the ingredients
function getRecipe(ingList){
    // AJAX call
    $.ajax({
        url:apiURL,
        method:"GET",
    }).then(function(response){

    });
}