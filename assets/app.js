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

        
        // displaying missedIngredients
        $(".recipe1-ingredients").html("<li>" + 
        response[0].missedIngredients[0].name + "</li>" +
         "<li>" + response[0].missedIngredients[1].name + "</li>")
        
        // displaying usedIngredients
        $(".recipe1-ingredients").append("<li>" + response[0].usedIngredients[0].name + "</li>" + "</li>" + response[0].usedIngredients[1].name + "</li>");

        // display quantities of ingredients
        // response[0].missedIngredients[0].metaInformation.unitShort  

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


