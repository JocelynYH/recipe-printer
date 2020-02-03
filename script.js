let insertAfter = (oldEl, newEl) => {
    oldEl.parentNode.insertBefore(newEl, oldEl.nextSibling);
}

var formatRecipe = () => {

    var recipeContent = document.querySelector('#content-wrapper')
    var facts = document.querySelector('#facts')
    document.querySelector('.flex-box').style.flexWrap = 'nowrap';

    var header = document.querySelector('header');
    header.parentNode.removeChild(header);

    var page = document.querySelector('#page');
    page.style.margin = "0px"

    var flexBox = document.querySelector('.flex-box');
    flexBox.style.flexWrap = "nowrap";

    var footer = document.querySelector('footer');
    footer.parentNode.removeChild(footer);

    var content = document.querySelector('#content');
    content.removeChild(content.lastElementChild);

    var recipeImage = document.querySelector('.recipe-image');
    recipeImage.style.maxWidth = '460px';

    document.querySelector('.facts').style.margin = '0px';

    var instructions = flexBox.children[1]


    var recipeLength = getRecipeLength(instructions)

    if (recipeLength === "long") {

        longRecipeFormat();
    }

    window.print()
}

let moveNutritionToBottom = (target) => {
    let nutrition = document.querySelector('.facts');

    nutrition.style.position = 'absolute'
    nutrition.style.bottom = '0'
    nutrition.style.left = '0'

    let ingredientsInstructions = document.querySelector('.flex-box');
    ingredientsInstructions.marginBottom = '20px';
}

let swapIngredientsInstructions = () => {
    let ingredientsInstructions = document.querySelector('.flex-box');
    insertAfter(ingredientsInstructions.children[1], ingredientsInstructions.children[0])
}

let longRecipeFormat = () => {
    let ingredients = document.querySelector('.flex-item');
    let recipeImage = document.querySelector('.recipe-image');
    let title = document.querySelector('#content-inner');

    let recipeIngredientContainer = document.createElement('div');
    recipeIngredientContainer.setAttribute('id', 'recipe-ingredient-container');

    recipeIngredientContainer.appendChild(recipeImage)
    recipeIngredientContainer.appendChild(ingredients)

    recipeIngredientContainer.style.cssText = "display: flex; flex-flow: row nowrap; align-items: flex-start; padding: 20px; max-width: 960px; margin: 0 auto; "

    for (divChild of recipeIngredientContainer.children) {
        divChild.style.padding = '20px'
    }

    insertAfter(title, recipeIngredientContainer);

    instructions.style.width = '100%'

    recipeImage.style.maxWidth = '260px';
    recipeImage.style.margin = '0px';
}

let getRecipeLength = (elem) => {
    let height = elem.offsetHeight;

    let recipeLength = (height > 400) ? 'long' : 'short';
}

let reduceImage = () => {

}