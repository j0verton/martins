// imports the copy of the array from FishDataProvider
import { useFish } from './FishDataProvider.js';

// creates a variable to call up the copy of the array
const allTheFish = useFish()

//iterates through the copy of the array and logs the content
// for (const fish of allTheFish) {
//     console.log(fish)
    
// }

// Import the FishList here
import { FishList } from './FishList.js';

FishList();

//let fishHTML ="" 
//for (const fish of fishCollection) {
//     let fishCard = `<div><img src=${fish.image}></div><ul>`;
//     fishCard += `<li>Given Name: ${fish.name}</li>`;
//     fishCard += `<li>Species: ${fish.species}</li>`;
//     fishCard += `<li>length: ${fish.length}</li>`;
//     fishCard += `<li>Diet: ${fish.food}</li>`;
//     fishCard += `<li>Harvest Location: ${fish.harvestLocation}</li>`;
//     fishCard += `</ul>`;
//     fishHTML += fishcard;
//     return fishHTML;
// };
//const target = document.querySelector(".fishList");
//target.innerHTML = fishHTML;


