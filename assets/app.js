// Declare a variable to store the searched ingredient
// var ingredient = $("#item1").val;
var item1 = $("#item1").data-name();
// var item2 = $("#item2");
// var item3 = $("#item3");
// var item4 = $("#item4");
// var item5 = $("#item5");

var ingredientList = [`${item1}, ${item2}, ${item3}, ${item4}, ${item5}`];

console.log(ingredientList);

// Variable Declaration
var searchRecipe = $("#search-recipe").val();
var addIngredient = $("#add-ing").val();


console.log(ingredientList);

// Setup API key
const APIKey = "2f3e7f513e714122ada8fe2295969951";
const queryURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKey}&ingredients=${ingredientList}&number=2`;

console.log(queryURL);

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

// Function to get recipe using the ingredients ingredientList
function getRecipe(){

    // AJAX call
    $.ajax({
        url: queryURL,
        method:"GET",
        
        // log the resulting object
    }).then(function(response){

        // log the queryURL 
        console.log(response);

        // transfer recipe title content to HTML
        $("#recipe1-title").text(response[0].title)
        console.log(response[0].title)

        // var missedIngredients = [(response[0].missedIngredients[0].name), (response[0].missedIngredients[1].name)];

        // response[0].missedIngredients[0].metaInformation.unitShort  
        
        // displaying missedIngredients
        $(".recipe1-ingredients").html("<li>" + 
        response[0].missedIngredients[0].name + "</li>" +
         "<li>" + response[0].missedIngredients[1].name + "</li>")
        
        // displaying usedIngredients
        $(".recipe1-ingredients").append("<li>" + response[0].usedIngredients[0].name + "</li>" + "</li>" + response[0].usedIngredients[1].name + "</li>");

     
    });
}
// calling getRecipe function
getRecipe();


// Event listeners

// search 
$("#search-recipe").click(function(){
    return getRecipe();
});