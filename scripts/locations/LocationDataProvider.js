// const martinsHarvestLocations = [
//     {
//         location: "Tahiti",
//     },
//     {
//         location: "Hawaii",
//     },
//     {
//         location: "Naples, Florida",
//     },
//     {
//         location: "Costa Rica",
//     }
// ]



import { useFish } from '../fish/FishDataProvider.js' 

const fishArrayCopy = useFish();
const harvestLocations = []
const locationHarvester = (array) => {
    
    for (const fish of array) {
      if (harvestLocations.includes(fish.harvestLocation)) {
          console.log ("duplicate")
      } else {
          let obj ={};
          obj["harvestLocation"] = fish.harvestLocation
        harvestLocations.push(obj); 
      }
    }
 
}
locationHarvester(fishArrayCopy)

export const harvestLocationCopier = () => {

    return harvestLocations.slice();
}


