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
    recipeImage.style.maxWidth = '360px';
    recipeImage.style.margin = '0px';

    document.querySelector('.facts').style.margin = '0px';

    let recipeIngredientContainer = document.createElement('div');

    moveIngredients()

    if (document.querySelector('.ingredients').offsetHeight > 400) {
        moveNutrition()
    }

    longRecipeFormat();

    window.print()
}

let insertAfter = (oldEl, newEl) => {
    oldEl.parentNode.insertBefore(newEl, oldEl.nextSibling);
}


let getRecipeLength = (elem) => {
    let height = elem.offsetHeight;

    let recipeLength = (height > 400) ? 'long' : 'short';
}


let longRecipeFormat = () => {
    let instructions = document.querySelector('.flex-box').children[0]

    var recipeLength = getRecipeLength(instructions)

    if (recipeLength === "long") {

        let ingredients = document.querySelector('.ingredients');
        let recipeImage = document.querySelector('.recipe-image');
        let title = document.querySelector('#content-inner');

        let recipeIngredientContainer = document.createElement('div');
        recipeIngredientContainer.setAttribute('id', 'recipe-ingredient-container');

        recipeIngredientContainer.appendChild(recipeImage)
        recipeIngredientContainer.appendChild(ingredients)

        recipeIngredientContainer.style.cssText = "display: flex; flex-flow: row nowrap; align-items: flex-start; padding: 20px; max-width: 960px; margin: 0 auto; padding-bottom: 0px;"

        for (divChild of recipeIngredientContainer.children) {
            divChild.style.padding = '20px'
        }

        insertAfter(title, recipeIngredientContainer);

        instructions.style.width = '100%'

        recipeImage.style.maxWidth = '260px';
        recipeImage.style.margin = '0px';
    }

}

let moveIngredients = () => {
    let ingredients = document.querySelector('.flex-item');
    let recipeImage = document.querySelector('.recipe-image');
    let title = document.querySelector('#content-inner');

    ingredients.classList.add('ingredients');
    let recipeIngredientContainer = document.createElement('div');
    recipeIngredientContainer.setAttribute('id', 'recipe-ingredient-container');

    recipeIngredientContainer.appendChild(recipeImage)
    recipeIngredientContainer.appendChild(ingredients)

    recipeIngredientContainer.style.cssText = "display: flex; flex-flow: row nowrap; align-items: flex-start; padding: 20px; max-width: 960px; margin: 0 auto; padding-bottom: 0px;"

    for (divChild of recipeIngredientContainer.children) {
        divChild.style.padding = '20px'
    }

    insertAfter(title, recipeIngredientContainer);


    var flexBox = document.querySelector('.flex-box')
    let instructions = flexBox.children[0]
    instructions.style.width = '100%'
}

let moveNutrition = () => {
    let nutrition = document.querySelector('.facts')
    let recipeImage = document.querySelector('.recipe-image')
    let image = recipeImage.children[0]
    insertAfter(image, nutrition)
}

formatRecipe()

