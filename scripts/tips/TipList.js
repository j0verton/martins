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
export const createTipList = () => {
    let tipHTMLProduct = ""
    const TipArrayCopy = TipArrayCopier()
    for (let i=0;  i< TipArrayCopy.length; i++) {
        // tipNum will hold index position plus 1 to define tip number for counting 
        let tipNum = i+1
        tipHTMLProduct += TipHTMLGenerator(TipArrayCopy[i], tipNum);
    }
    const tipListDOMTarget = document.querySelector('#tips-container');
    tipListDOMTarget.innerHTML += `${tipHTMLProduct}`;
}
