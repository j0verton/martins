const fishCollection = [
    {
        image:
        name: "Big Blue",
        species: "Male Beta",
        length: "2 inches",
        food: "Flies",
        harvestLocation "Beaches of Walmart"
    },

    {
        image:
        name: "Medium Orange",
        species: "Female Beta",
        length: "4 inches",
        food: "Sea Bugs",
        harvestLocation "Tahiti"
    },

    {
        image:
        name: "Bart",
        species: "Simpsonius",
        length: "5 inches",
        food: "crustaceans",
        harvestLocation "Springfield"
    },
    {
        image:
        name: "Bart",
        species: "Simpsonius",
        length: "5 inches",
        food: "crustaceans",
        harvestLocation "Springfield"
    },

    {
        image:
        name: "Bart",
        species: "Simpsonius",
        length: "5 inches",
        food: "crustaceans",
        harvestLocation "Springfield"
    },

    {
        image:
        name: "Bart",
        species: "Simpsonius",
        length: "5 inches",
        food: "crustaceans",
        harvestLocation "Springfield"
    },

    {
        image:
        name: "Bart",
        species: "Simpsonius",
        length: "5 inches",
        food: "crustaceans",
        harvestLocation "Springfield"
    },

    {
        image:
        name: "Bart",
        species: "Simpsonius",
        length: "5 inches",
        food: "crustaceans",
        harvestLocation "Springfield"
    },

    {
        image:
        name: "Bart",
        species: "Simpsonius",
        length: "5 inches",
        food: "crustaceans",
        harvestLocation "Springfield"
    },

    {
        image:
        name: "Bart",
        species: "Simpsonius",
        length: "5 inches",
        food: "crustaceans",
        harvestLocation "Springfield"
    },









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

