import { useFish } from './FishDataProvider.js';

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}


// for (fish of fishCollection) {
//     let fishCard = `<div><img src=${fish.image}></div><ul>`;
//     fishCard += `<li>Given Name: ${fish.name}</li>`;
//     fishCard += `<li>Species: ${fish.species}</li>`;
//     fishCard += `<li>length: ${fish.length}</li>`;
//     fishCard += `<li>Diet: ${fish.food}</li>`;
//     fishCard += `<li>Harvest Location: ${fish.harvestLocation}</li>`;
//     fishCard += `</ul>`;
//     return fish,
// };
