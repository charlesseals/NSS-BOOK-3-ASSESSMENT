console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"

const yearlyPlan = createPlan()

//console.log(yearlyPlan)



// const freshPlant = addPlant()

// console.log(freshPlant)



 const fieldPlants = usePlants()

// console.log(fieldPlants)



plantSeeds(yearlyPlan)

console.log(usePlants())


const newHarvestPlants = harvestPlants(fieldPlants)
//console.log(newHarvestPlants)

const catalogVariable = catalog(newHarvestPlants)

document.querySelector(".container").innerHTML += catalogVariable