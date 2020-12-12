// Declare a variable to store the searched ingredient
var ingredient = "";

// Variable Declaration
var searchRecipe = $("#search-recipe").val();
var addIngredient = $("#add-ing").val();
var ingredientList = ["apple","salt","sugar"];
console.log(ingredientList);
// Setup API key
const apiKey = "2f3e7f513e714122ada8fe2295969951";
const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredientList}`;
console.log(apiUrl);

//Function to add ingredient
//function addIng(ingredient){
    //ingredientList.push(ingredient)

//}

// Function to display recipe
function displayRecipe(event){
    event.preventDefault();
    if(ingredientList.length !== 0){
        getRecipe(ingredientList);
    }
    
}

// Function to get recipe using the ingredients
function getRecipe(ingredientList){
    // AJAX call
    $.ajax({
        url:apiUrl,
        method:"GET",
        
    }).then(function(response){
        console.log(response);
        response.list.forEach(
            response => {
                if (id[0]) {
                    console.log(id[0]);
                }
            }
        )

     
    });
}
getRecipe();
// Event listeners
$("#search-recipe").click(function(){
    return getRecipe();
});