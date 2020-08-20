//creates html to populate the fish card


export const Fish = (fish) => {
    return `
    <div class="fishList-card">
        <div class="card-image">
            <img class="fish-image"src="images/${fish.image}" alt="a picture of ${fish.name} the ${fish.species}"/>
        </div>
            <ul>
                <li>Given Name: ${fish.name}</li>
                <li>Species: ${fish.species}</li>
                <li>Length: ${fish.length}</li>
                <li>Diet: ${fish.diet}</li>
                <li>Harvest Location: ${fish.harvestLocation}</li>
            </ul>
        </div>
    </div>
    `
}
