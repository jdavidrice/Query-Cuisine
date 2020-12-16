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
var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + APIKey + "&ingredients=" + ingredientList + "&number=2";


// console.log(queryURL);

// // Function to display recipe
// function displayRecipe(event){
//     event.preventDefault();
//     if(ingredientList.length !== 0){
//         getRecipe(ingredientList);
//     }

// }



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

        // transfer recipe title content to HTML
        //$("#recipe1-title").text(response[0].title);
        //console.log(response[0].title)


        // var missedIngredients = [(response[0].missedIngredients[0].name), (response[1].missedIngredients[0].name)];



        //$(".recipe1-ingredients").html("<li>" + response[0].missedIngredients[0].name + "</li>" + "<li>" + response[0].missedIngredients[1].name + "</li>")
        for (var i = 0; i < response.length; i++) {
            var recipeDiv = $('<div class="recipe">')
            
            recipeDiv.append("<h4>" + response[i].title + "</h4>")

            recipeDiv.append('<img src="' + response[i].image + '" />')

            // for loop to get ingredients from recipe1 ...?
            recipeDiv.append("<ul>")
            for (var k = 0; k < response[i].usedIngredients.length; k++) {

                console.log(i);
                console.log(k);
                // // ORIGINAL displaying usedIngredients
                // recipeDiv.append("<li>" + response[i].usedIngredients[k].name + ' -- ' + response[i].usedIngredients[k].originalName + "</li>")

                 // displaying usedIngredients
                 recipeDiv.append("<li>" + response[i].usedIngredients[k].originalString + "</li>" + "<li>" + response[i].missedIngredients[k].originalString + "</li>")


            }

            // for loop for second recipe? right now it's displaying the same recipe twice

            recipeDiv.append("</ul>")
            $('#recipeCards').append(recipeDiv);
        }
  

    });
}
// calling getRecipe function
// getRecipe();


// Event listeners

// Submit button clicked, what happens each time
$("#search-recipe").click(function () {
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
    

    // loop through ingredientTemp, if ingredient entered add to ingredientList array
    // ingredientList.push(item1);
    // ingredientList.push(item2);
    // ingredientList.push(item3);
    // ingredientList.push(item4);
    // ingredientList.push(item5);

    // ingredientList = [item1, item2, item3, item4, item5];

    queryURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKey}&ingredients=${ingredientList}&number=2`;

    console.log(queryURL);
    console.log(ingredientList);

    // getRecipe each time click submit button
    getRecipe();
});


