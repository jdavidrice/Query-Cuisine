// Declare a variable to store the searched ingredient
var item1 = $("#item1").val().trim();
var item2 = $("#item2").val().trim();
var item3 = $("#item3").val().trim();
var item4 = $("#item4").val().trim();
var item5 = $("#item5").val().trim();

var ingredientList = [];


console.log(ingredientList);

// Variable Declaration
var searchRecipe = $("#search-recipe").val();
var addIngredient = $("#add-ing").val();


// console.log(ingredientList);

// Setup API key
var APIKey = "2f3e7f513e714122ada8fe2295969951";
var queryURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKey}&ingredients=${ingredientList}&number=2`;


// console.log(queryURL);

// // Function to display recipe
// function displayRecipe(event){
//     event.preventDefault();
//     if(ingredientList.length !== 0){
//         getRecipe(ingredientList);
//     }
    
// }



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

        
        // var missedIngredients = [(response[0].missedIngredients[0].name), (response[1].missedIngredients[0].name)];

        // response[0].missedIngredients[0].metaInformation.unitShort  
        
        // displaying missedIngredients
        $(".recipe1-ingredients").html("<li>" + 
        response[0].missedIngredients[0].name + "</li>" +
         "<li>" + response[0].missedIngredients[1].name + "</li>")
        
        // displaying usedIngredients
        $(".recipe1-ingredients").append("<li>" + response[0].usedIngredients[0].name + "</li>" + "</li>" + response[0].usedIngredients[1].name + "</li>");

        // display missedIngredients quantities
        $(".recipe-ingredients").append("<li>" + response[0].missedIngredients[0].metaInformation.unitShort + "</li>");

     
        // display usedIngredients quantities
        $(".recipe-ingredients").append("<li>" + response[0].usedIngredients[0].metaInformation.unitShort + "</li>");
       
        var R1usedAmts = response[0].usedIngredients[i].metaInformation.unitShort 
        var R1missedAmts = response[0].missedIngredients[i].metaInformation.unitShort 
        var R1ingredientAmts = [missedAmts[i] + usedAmts[i].unitShort]

        var R1missedIngredients = response[0].missedIngredients[i].name
        var usedIngredients = response[0].usedIngredients[i].name
        var totalR1Ingredients = [missedIngredients[i] + usedIngredients[i]];


        for (i=0; i<= array.length; i++) {
            if(ingredien[i] != ""){
            totalR1Ingredients.push(missedIngredients[i] + usedIngredients[i])
            }
        }
    });
}
// calling getRecipe function
// getRecipe();


// Event listeners

// Submit button clicked, what happens each time
$("#search-recipe").click(function(){
    var item1 = $("#item1").val().trim();
    var item2 = $("#item2").val().trim();
    var item3 = $("#item3").val().trim();
    var item4 = $("#item4").val().trim();
    var item5 = $("#item5").val().trim();
    var ingredientTemp = [item1, item2, item3, item4, item5];
    ingredientList = [];

    // loop through ingredientTemp, if ingredient entered add to ingredientList array
    for (i=0; i<=4; i++) {
        if(ingredientTemp[i] != ""){
        ingredientList.push(ingredientTemp[i])
        }
    }
    
    // ingredientList = [item1, item2, item3, item4, item5];
   
    queryURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKey}&ingredients=${ingredientList}&number=2`;

    console.log(queryURL);
    console.log(ingredientList); 

    // getRecipe each time click submit button
    getRecipe();
});



/* Recipes:
- Search Recipes by Ingredients (function)
- Extract Recipe from Website (function)
- Summarize Recipe

Ingredients:
- Ingredient Search
- Get Ingredient Information
- Parse Ingredients

Misc:
- ***Search all food (drop down list function)
- Image Classification URL/file (function)

Guides:
- Show images
- List of Ingredients
- Nutrition

Widgets:
- Visualize Recipe Ingredients by ID (excel id list)
-****Create Recipe Card*/


// next steps: 12/12/2020

// - create a variable like totalR1Ingredients = [] 
// - totalR1Ingredients = missedIngredients + usedIngredients
// - loop through missed and used Ingredients and add them into totalR1Ingredients array
// -  display totalR1Ingredients in <li>

// - create variable like 
// ingredientAmts = [missedIngredients[i].metaInformation[i].unitShort + usedIngredients[i].metaInformation[i].unitShort]
// - display ingredientAmts, append to <li></li>