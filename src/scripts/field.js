/*
Step 2: Define a variable who's value is an empty array.
            This variable will store all of the 
            plants that are growing in the field
*/

let currentCrops = []

/*
Step 3: Define and Export a function that accepts 
a seed object as input.
            This function will add the seed to the 
            field using the .push() method
*/

export const addPlant = (seedObject) => {

/*
Step 4: Inside the addPlant function we use a conditional 
statement that decides that "if->seedObject is an array" we 
use a for/of-loop to iterate thru that array and push each 
individual "object" to the empty array named currentCrops 
that we created in step one. 

If the seedObject isn't an array
it goes to the else statement and gets automatically pushed 
to the currentCrops array.
*/

    if (Array.isArray(seedObject)){
        for (const object of seedObject) {
            currentCrops.push(object)
        }
    } else {
        currentCrops.push(seedObject)
    }
}


/*
Step 5: Here, we declare and export a function named usePlants 
to return a copy of the currentCrops array.
*/

export const usePlants = () => {
    return currentCrops.map(currentCrops => ({...currentCrops}))
}


