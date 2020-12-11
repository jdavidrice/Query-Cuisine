// Declare a variable to store the searched ingredient
var ing = "";

// Variable Declaration
var searchRecipe = $("#search-recipe").val();
var addIngredient = $("#add-ing").val();
var ingList = ["apples", "bread", "milk"];

console.log(ingList)

// Setup API key
const apiKey = "2f3e7f513e714122ada8fe2295969951";
const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${addIngredient}`;

//Function to add ingredient
function addIng(ing){
    ingList.push(ing)

}

// Function to display recipe
function displayRecipe(event){
    event.preventDefault();
    if(ingList.length !== 0){
        getRecipe(ingList);
    }
    
}

// Function to get recipe using the ingredients
function getRecipe(ingList){
    // AJAX call
    $.ajax({
        url:apiUrl,
        method:"GET",
    }).then(function(response){
        console.log(response);
    });
}

// Event listeners
$("#search-recipe").click(function () {
    console.log(getRecipe)
    return getRecipe();
});

getRecipe();