//import function to create a copy of the location array
import {harvestLocationCopier} from './LocationDataProvider.js';
//import function to generate html for the location list
import {locationHTMLGenerator} from './Location.js';

//create&export function to...
//call the function to create a copy of the location array and store it in a variable
//create a variable to hold the HTML that will contain the location list
//iterate the location array over the location html generator
// add variable with the generated HTML to the HTML container
//create a variable to target location for HTML
export const locationListCreator = () => {
    const harvestLocationCopy = harvestLocationCopier();
    let locationListHTML = "";
    for (const location of harvestLocationCopy) {
        locationListHTML += locationHTMLGenerator(location);
    }
    const locationListTarget = document.querySelector(".places");
    locationListTarget.innerHTML += `${locationListHTML}`;
}