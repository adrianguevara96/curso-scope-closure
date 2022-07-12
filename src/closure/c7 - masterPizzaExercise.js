function orderPizza() {
    let ingredients = [];

    return function setIngredients(ingredient){
        ingredients.push(ingredient);
        console.log(`My pizza: ${ingredients}`)
    }
}

const smallPizza = orderPizza();
smallPizza('Cheese');
smallPizza('Tomatoe sauce');
smallPizza('Onions');
smallPizza('Anchovites');
