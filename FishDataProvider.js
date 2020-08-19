const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans"
    }


]


for (fish of fishCollection) {
    let fishCard = `<div><img src=${fish.image}></div><ul>`
    let fishCard += `<li>Given Name: ${fish.name}</li>`
    let fishCard += `<li>Species: ${fish.species}</li>`
    let fishCard += `<li>length: ${fish.length}</li>`
    let fishCard += `<li>Diet: ${fish.food}</li>`
    let fishCard += `<li>Harvest Location: ${fish.harvestLocation}</li>`
    let fishCard += `</ul>`
}