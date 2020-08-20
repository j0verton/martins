// imports the copy of the array from FishDataProvider
import { useFish } from './fish/FishDataProvider.js';

// creates a variable to call up the copy of the array
const allTheFish = useFish();

// Import the FishList here
import { FishList } from './fish/FishList.js';

FishList();



//imports a function which can be called to create a copy of the tips array
import { TipArrayCopier } from './tips/TipDataProvider.js';
//calls the function to create a copy of the array and attaches the copy to a variable
const TipsArrayCopy = TipArrayCopier();

import {createTipList} from './tips/TipList.js';
createTipList();



// import { harvestLocationCopier } from './locations/LocationDataProvider.js';

// const harvestLocationCopy = harvestLocationCopier();

// import { locationListCreator } from './locations/LocationList.js';

// locationListCreator();
