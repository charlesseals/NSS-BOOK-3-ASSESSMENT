/*
Step 8: Here we will define/export a new function 
named harvestPlants. This new function will take 
in any given plant as a parameter.

Within the harvestPlants function we will create 
an empty array.

After creating the empty array we use a for/of-loop 
to iterate thru the nowCrops array/parameter and decide 
that if the plant type matches the string "Corn" then
it will add half of the plan.output to output then 
console.log(output).

If that statement is false, the for loop will 
automatically set output = plant.output

Then at the very end, within the frist for/of-loop we 
need to create a nested for/index-loop that stops looping 
when it reaches one less time than the number of output.

As it iterates thru, it will push that plant to the empty
seedObjectArray that we created at the beginning of 
the harvestPlants function.

At the very end of the harvestPlants function, we 
return the empty array named seedObjectArray.
*/



export const harvestPlants = (nowCrops) => {
    const seedObjectArray = []
    for (const plant of nowCrops) {
        let output = ""
        if (plant.type === "Corn") {
            output = plant.output / 2
            console.log(output)
        } else {
            output = plant.output
            console.log(output)
        }
        for (let index = 0; index < output; index++) {
            seedObjectArray.push(plant)
        }
    }
    return seedObjectArray
}

