//imports the function which can be called to copy the array
import { TipArrayCopier } from './TipDataProvider.js';
//imports the html generator
import { TipHTMLGenerator } from './Tip.js'

//create a variable to contain a string of HTML
//calls the function to copy the array and attaches the copy to a variable
//create and export the function iterating through the tip array with the HTML generator, 
//append each iteration the variable for containing a string of HTML (or a template literal)
//select a DOM target, 
//plug the variable with the generated HTML into the DOM target

//refactored to use .map rather than a for..of loop
export const createTipList = () => {
    const TipArrayCopy = TipArrayCopier()
    const tipListDOMTarget = document.querySelector('#tips-container');
    tipListDOMTarget.innerHTML += `${TipArrayCopy.map(tip => TipHTMLGenerator(tip, TipArrayCopy.indexOf(tip)+1)).join('')}`;
}
