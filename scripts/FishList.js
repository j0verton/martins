/**
 *  FishList which renders individual fish objects as HTML
 */

//imports the copy of the array
import {useFish} from './FishDataProvider.js';
//imports the fish card html generator
import { Fish } from "./Fish.js"

export const FishList = () => {
    //selects the container for the fish cards in the DOM
    const contentElement = document.querySelector(".fishList");
    //assigns the copy of the array to a variable inside the function
    const fishes = useFish();
    //creates a containter for the HTML
    let fishHTMLRepresentations = ""
    //iterates through the copy of the fish array
    for (const fish of fishes) {
        //plugs a fish from the array into the fish card html generator 
        //and adds that fish card html into the html container
        fishHTMLRepresentations +=Fish(fish);
    }
    // Add to the existing HTML in the content element
    contentElement.innerHTML += 
    `${fishHTMLRepresentations}`
}



