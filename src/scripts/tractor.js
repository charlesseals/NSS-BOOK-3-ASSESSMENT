/*
Step 6: At the begining of this file you need to import 
all of the create"plant" functions into tractor.js along 
with the addPlant function.
*/

import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createWheat } from "./seeds/wheat.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createCorn } from "./seeds/corn.js"

/*
Step 7: In this step we need to declare/export a function 
named plantSeeds with a parameter named plantingPlan. 

Within this plantSeeds function, we will have a for/of-loop 
that iterates thru each of the rows of the plantingPlan and 
then to access each of those seeds within those rows we need 
to use another for/of-loop. Within that for/of-loop we need 
to use a conditional statement that states: 
if (seed === "(plantNameHere)")
then we can assign our create"plant" function equal to a const variable named "seed". 

Once we have done that we invoke the addPlant() function with the argument being (seed). 
        Since in the line before this step we assigned the create"plant" function to the const variable seed, this addPlant(seed) step adds that specific plant to the field where it is to be planted/sowed by the TRACTOR.
*/


export const plantSeeds = (plantingPlan) => {
    for (const row of plantingPlan) {
        for (const seed of row) {
            if (seed === "Asparagus") {
                const seed = createAsparagus()
                addPlant(seed)
            } else if (seed === "Soybean") {
                const seed = createSoybean()
                addPlant(seed)
            } else if (seed === "Potato") {
                const seed = createPotato()
                addPlant(seed)
            } else if (seed === "Sunflower") {
                const seed = createSunflower()
                addPlant(seed)
            } else if (seed === "Wheat") {
                const seed = createWheat()
                addPlant(seed)
            } else if (seed === "Corn") {
                const seed = createCorn()
                addPlant(seed)
            }
            }
    }
}