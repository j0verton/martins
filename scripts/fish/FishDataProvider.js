const fishCollection = [
    {
        image:"bluefish.jpg",
        name: "Big Blue",
        species: "Male Beta",
        length: 2,
        diet: "Flies",
        harvestLocation: "the Islands",
    },
    {
        image:"orangefish.jpg",
        name: "Medium Orange",
        species: "Female Beta",
        length: 4,
        diet: "Sea Bugs",
        harvestLocation: "Tahiti"
    },
    {
        image:"yellowbluefish.jpg",
        name: "Bart",
        species: "Simpsonius",
        length: 5,
        diet: "crustaceans",
        harvestLocation: "Springfield"
	},
	{
        image:"fish1.jpg",
        name: "Big Mac",
		length: 6,
		diet: "jellyfish",
		species: "Giant sunfish",
		harvestLocation: "Sam's Club Reef"
	},
	{
        image:"fish2.jpg",
		name: "Squigle",
		length: 2,
		diet: "smaller fish",
		species: "Moray Eel",
		harvestLocation: "Ole Dan's boat wreck"
	},
	{
        image:"fish3.jpg",
		name: "Hammy",
		length: 4,
		diet: "just about everything",
		species: "Groupers",
		harvestLocation: "Jimmy's big boi fishin' spot"
	},
	{
        image:"fish4.jpg",
		name: "Tiny",
		length: 1,
		diet: "plankton",
		species: "Blue Chromis",
		harvestLocation: "Young Dan's boat wreck",
    },
    {
        image:"fish5.jpg",
        name: "The Situation",
        species: "New Jersey Gutter Fish",
        length: 1,
        diet: "Creatine",
        harvestLocation: "New Jersey",
    },
    {
        image:"fish6.jpg",
        species: "Gem Tang",
        name: "Diamond",
        length: 6,
        diet: "Algae Strips",
        harvestLocation: "South Africa",
    },
    {
        image:"fish7.jpg",
        species: "Black Tang",
        name: "Midnight",
        length: 1,
        diet: "Vegetation",
        harvestLocation: "Croatia",
    },
    {
        image:"fish8.jpg",
        species: "Crosshatch Triggerfish",
        name: "Itchy",
        length: 7,
        diet: "Micronutrients",
        harvestLocation: "Blue Hole"
    },
    {
        image:"fish9.jpg",
        species: "Candy Basslet",
        name: "Cherry",
        length: 3,
        diet: "Algae",
        harvestLocation: "Brazil"
    },
    {
        image:"fish10.jpg",
        species: "Japanese Interruptus Angelfish",
        name: "Rainbow",
        length: 2,
        diet: "Fish pellets",
        harvestLocation: "South Africa"
    },
    {
        image:"fish11.jpg",
        species: "Clarion Angelfish",
        name: "Banana Stripe",
        length: 11,
        diet: "Micronutrients",
        harvestLocation: "Antiqua"
    },
    {
        image:"fish12.jpg",
        species: "Neptune Grouper",
        name: "Squigy",
        length: 12,
        diet: "Algae",
        harvestLocation: "Bahamas"
    },
    {
        image:"fish13.jpg",
        name: "Nemo",
        species: "Clownfish",
        length: 1.5,
        diet: "Copepods",
        harvestLocation: "Orlando, FL"
    },
    {
        image:"fish14.jpg",
        name: "Torch",
        species: "Flame Angelfish",
        length: 3,
        diet: "Mealworms",
        harvestLocation: "San Jose, CA"
    },
    {
        image:"fish15.jpg",
        name: "Rocky",
        species: "Blue Damselfish",
        length: 2,
        diet: "Copepods",
        harvestLocation: "Destin, FL"
    },
    {
        image:"fish16.jpg",
        name: "Rudy",
        species: "Copperband Butterflyfish",
        length: 5,
        diet: "Mealworms",
        harvestLocation: "Costa Rica"
    },
    {
        image:"fish17.jpg",
        name: "Simba",
        species: "Lionfish",
        length: 6,
        diet: "Mealworms",
        harvestLocation: "Argentina"
    },
    {
        image:"fish18.jpg",
        name: "Mr. Freeze",
        species: "Blue Tang",
        length: 6,
        diet: "Mealworms",
        harvestLocation: "Costa Rica"
    },
    {
        image:"fish19.jpg",
        name: "Frodo",
        species: "Yellow Tang",
        length: 4,
        diet: "Mealworms",
        harvestLocation: "Honolulu, HI"
    },
    {
        image:"fish20.jpg",
        species: "Goldfish",
        length: 15,
        diet: "Fish Food",
        name: "Lockes",
        harvestLocation: "Wally World",
    },
    {
        image:"fish21.jpg",
        species: "Rainbow Trout",
        length: 44,
        diet: "Fish Food",
        name: "Treant",
        harvestLocation: "Lake Canada",
    },
];

// creates&exports a function to return a copy of the original array, using the slice method
//this is calling the function in the return statment so it returns a copy of the whole array
export const useFish = () => {
    return fishCollection.slice()
}

export const sortTheMostHolyFish = () => {
    // sort out the fish that are multiples of 3
    const mostHolyFishArray = [];
    // const soldierFishArray = [];
    // const unworthyFishArray = []
    for (const fish of fishCollection) {
        if(fish.length % 3 === 0) {
            fish.worth = "most-holy"
            mostHolyFishArray.push(fish);
        // } else if (fish.length % 5 === 0) {
        //     soldierFish.push(fish);
        // } else {
        //     unworthyFishArray.push(fish);
        }
    }
    return mostHolyFishArray
    // console.log(mostHolyFishArray)
  }

export const sortSoldierFish = () => {
    const soldierArray = []
    for (const fish of fishCollection) {  
        if (fish.length %5===0 && fish.length%3 !==0){
            fish.worth = "soldier"
            soldierArray.push(fish)
        }
    }
    return soldierArray
    // console.log(soldierArray)
}

export const sortUnworthyFish = () => {
    const unworthyArray = []
    for (const fish of fishCollection) {  
        if (fish.length %5 !==0 && fish.length%3 !==0){
            fish.worth = "unworthy"
            unworthyArray.push(fish);
        }
    }
    return unworthyArray
    // console.log(unworthyArray)
}