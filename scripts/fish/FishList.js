/**
 *  FishList which renders individual fish objects as HTML
 */

//imports the copy of the array
import {useFish, sortTheMostHolyFish, sortSoldierFish, sortUnworthyFish} from './FishDataProvider.js';
//imports the fish card html generator
import { Fish } from "./Fish.js"

// //creates and exports the function that iterates through the array of fish with the html generator 
// //and adds each iteration to a variable which is then plugged in to the DOM
// export const FishList = () => {
//     //selects the container for the fish cards in the DOM
//     const contentElement = document.querySelector(".fishList");
//     //assigns the copy of the array to a variable inside the function
//     const fishes = useFish();
//     //creates a containter for the HTML
//     let fishHTMLRepresentations = ""
//     //iterates through the copy of the fish array
//     for (const fish of fishes) {
//         //plugs a fish from the array into the fish card html generator 
//         //and adds that fish card html into the html container
//         fishHTMLRepresentations +=Fish(fish);
//     }
//     // Add to the existing HTML in the content element
//     contentElement.innerHTML += 
//     `${fishHTMLRepresentations}`
// }

export const FishList = () => {

    const addFishToDom = (whichFishArray) => {
        // console.log(whichFishArray)
        const contentElement = document.querySelector(".fishList");
        let fishHTMLRepresentations = ""
        for (const fish of whichFishArray) {
            fishHTMLRepresentations +=Fish(fish);
        }
        contentElement.innerHTML += 
        `${fishHTMLRepresentations}`
    
    };
    const holyFish = sortTheMostHolyFish();
    // console.log(holyFish)
    addFishToDom(holyFish);
    const soldierFish = sortSoldierFish();
    addFishToDom(soldierFish);
    const unworthyFish = sortUnworthyFish();
    addFishToDom(unworthyFish);

    

      
}
