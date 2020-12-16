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
var APIKey = "cadebde4223d47aba1fca1df13e51294";
// var APIKey = "2f3e7f513e714122ada8fe2295969951"; Cris's key
var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + APIKey + "&ingredients=" + ingredientList + "&number=2";


// Function to get recipe using the ingredients ingredientList
function getRecipe() {

    // AJAX call
    $.ajax({
        url: queryURL,
        method: "GET",

        // log the resulting object
    }).then(function (response) {

        // log the queryURL 
        console.log(response);

        // for loop to display recipe ingredients, img, title
        for (var i = 0; i < response.length; i++) {
            var recipeDiv = $('<div class="recipe">')

            recipeDiv.append("<h4>" + response[i].title + "</h4>")

            recipeDiv.append('<img src="' + response[i].image + '" />')

            // for loop to get ingredients from recipe1 ...?
            recipeDiv.append("<ul>")
            for (var k = 0; k < response[i].usedIngredients.length; k++) {

                console.log(i);
                console.log(k);

                // displaying usedIngredients
                recipeDiv.append("<li>" + response[i].usedIngredients[k].originalString + "</li>")
            }

            for (var k = 0; k < response[i].missedIngredients.length; k++) {

                // displaying missedIngredients
                recipeDiv.append("<li>" + response[i].missedIngredients[k].originalString + "</li>")
            }

            recipeDiv.append("</ul>")
            $('#recipeCards').append(recipeDiv);

            getInstructions(response[i].id);
        }



        // }

    });

} // end of getRecipe function

function getInstructions(recipeId) {
    // var recipeId = response[i].id
    var how2URL = `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=${APIKey}`;
    console.log(how2URL);

    $.ajax({
        url: how2URL,
        method: "GET"

    }).then(function (instructions) {
        console.log(instructions)

        var instructionsDiv = $(`<div class="instructions">`)

        instructionsDiv.append("<h5> Instructions </h5>");

        instructionsDiv.append("<ol>" + instructions[0].steps.length);

        for (var j = 0; j < instructions[0].steps.length; j++);

        instructionsDiv.append("<li>" + instructions[0].steps[j].step + "</li>");

        instructionsDiv.append("</ol>");
        $('#recipeCards').append(instructionsDiv);


    })
}; // end of getInstructions function

// calling getRecipe function
// getRecipe();


// Event listeners

// Submit button clicked, what happens each time
$("#search-recipe").click(function () {
    item1 = $("#item1").val().trim();
    item2 = $("#item2").val().trim();
    item3 = $("#item3").val().trim();
    item4 = $("#item4").val().trim();
    item5 = $("#item5").val().trim();
    var ingredientTemp = [item1, item2, item3, item4, item5];

    // loop through ingredientTemp, if ingredient entered add to ingredientList array
    for (i = 0; i <= 4; i++) {
        if (ingredientTemp[i] != "") {
            ingredientList.push(ingredientTemp[i])
        }
    }


    queryURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKey}&ingredients=${ingredientList}&number=2`;

    console.log(queryURL);
    console.log(ingredientList);

    // getRecipe each time click submit button
    getRecipe();
});
