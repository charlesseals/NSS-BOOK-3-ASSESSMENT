/*
Step 9: Here you need to define/export a function named catalog
that accepts (harvestedFoodArray) in as a parameter.

When invoked, this function will create an empy string named 
templateString and will then move onto a for/of-loop that 
allows us to iterate thru every object in the (harvestedFoodArray).

Inside that for/of-loop, it will add an HTML string to our 
templateString for each individual object.

At the very end of our catalog function we return templateString
so that the person invoking the function will recieve the 
templateString string where the function is called.
*/



export const catalog = (harvestedFoodArray) => {
    let templateString = ""
    for (const food of harvestedFoodArray) {

        templateString += `<section class ="plant">${food.type}</section>`
    }
    return templateString
}