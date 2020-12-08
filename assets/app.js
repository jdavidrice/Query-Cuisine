// Declare a variable to store the searched ingredient
var ing = "",

// Variable Declaration
var searchRec = $("#search-recipe");
var searchButton = $("#search-button");
var inglist = [];

// Setup API key
const APIkey = "2f3e7f513e714122ada8fe2295969951";

// Function to display recipe
function displayRecipe(event){
    event.preventDefault();
    if(searchRec.val().trim()!==""){
        ing = searchRec.val().trim();
        getRecipe(inglist);
    }
    
}

// Function to get recipe using the ingredients
function getRecipe(inglist){
    // AJAX call
    var queryURL =
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response){

    });
}