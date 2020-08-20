const fishCollection = [
    {
        image:"bluefish.jpg",
        name: "Big Blue",
        species: "Male Beta",
        length: "2 inches",
        diet: "Flies",
        harvestLocation: "the Islands",
    },
    {
        image:"orangefish.jpg",
        name: "Medium Orange",
        species: "Female Beta",
        length: "4 inches",
        diet: "Sea Bugs",
        harvestLocation: "Tahiti"
    },
    {
        image:"yellowbluefish.jpg",
        name: "Bart",
        species: "Simpsonius",
        length: "5 inches",
        diet: "crustaceans",
        harvestLocation: "Springfield"
	},
	{
        image:"fish1.jpg",
        name: "Big Mac",
		length: "6 feet",
		diet: "jellyfish",
		species: "Giant sunfish",
		harvestLocation: "Sam's Club Reef"
	},
	{
        image:"fish2.jpg",
		name: "Squigle",
		length: "2 feet",
		diet: "smaller fish",
		species: "Moray Eel",
		harvestLocation: "Ole Dan's boat wreck"
	},
	{
        image:"fish3.jpg",
		name: "Hammy",
		length: "4 feet",
		diet: "just about everything",
		species: "Groupers",
		harvestLocation: "Jimmy's big boi fishin' spot"
	},
	{
        image:"fish4.jpg",
		name: "Tiny",
		length: "1 inch",
		diet: "plankton",
		species: "Blue Chromis",
		harvestLocation: "Young Dan's boat wreck",
    },
    {
        image:"fish5.jpg",
        name: "The Situation",
        species: "New Jersey Gutter Fish",
        length: "1 inch",
        diet: "Creatine",
        harvestLoc: "New Jersey",
    },
    {
        image:"fish6.jpg",
        species: "Gem Tang",
        name: "Diamond",
        length: "6 in",
        diet: "Algae Strips",
        havestLocation: "South Africa",
    },
    {
        image:"fish7.jpg",
        species: "Black Tang",
        name: "Midnight",
        length: "1 inch",
        diet: "Vegetation",
        havestLocation: "Croatia",
    },
    {
        image:"fish8.jpg",
        species: "Crosshatch Triggerfish",
        name: "Itchy",
        length: "7 ft",
        diet: "Micronutrients",
        havestLocation: "Blue Hole"
    },
    {
        image:"fish9.jpg",
        species: "Candy Basslet",
        name: "Cherry",
        length: "3 cm",
        diet: "Algae",
        havestLocation: "Brazil"
    },
    {
        image:"fish10.jpg",
        species: "Japanese Interruptus Angelfish",
        name: "Rainbow",
        length: "2 ft",
        diet: "Fish pellets",
        havestLocation: "South Africa"
    },
    {
        image:"fish11.jpg",
        species: "Clarion Angelfish",
        name: "Banana Stripe",
        length: "11 cm",
        diet: "Micronutrients",
        havestLocation: "Antiqua"
    },
    {
        image:"fish12.jpg",
        species: "Neptune Grouper",
        name: "Squigy",
        length: "1 ft",
        diet: "Algae",
        havestLocation: "Bahamas"
    },
    {
        image:"fish13.jpg",
        name: "Nemo",
        species: "Clownfish",
        length: "1.5 inches",
        diet: "Copepods",
        harvestLocation: "Orlando, FL"
    },
    {
        image:"fish14.jpg",
        name: "Torch",
        species: "Flame Angelfish",
        length: "3 inches",
        diet: "Mealworms",
        harvestLocation: "San Jose, CA"
    },
    {
        image:"fish15.jpg",
        name: "Rocky",
        species: "Blue Damselfish",
        length: "2 inches",
        diet: "Copepods",
        harvestLocation: "Destin, FL"
    },
    {
        image:"fish16.jpg",
        name: "Rudy",
        species: "Copperband Butterflyfish",
        length: "5 inches",
        diet: "Mealworms",
        harvestLocation: "Costa Rica"
    },
    {
        image:"fish17.jpg",
        name: "Simba",
        species: "Lionfish",
        length: "6 inches",
        diet: "Mealworms",
        harvestLocation: "Argentina"
    },
    {
        image:"fish18.jpg",
        name: "Mr. Freeze",
        species: "Blue Tang",
        length: "6 inches",
        diet: "Mealworms",
        harvestLocation: "Costa Rica"
    },
    {
        image:"fish19.jpg",
        name: "Frodo",
        species: "Yellow Tang",
        length: "4 inches",
        diet: "Mealworms",
        harvestLocation: "Honolulu, HI"
    },
    {
        image:"fish20.jpg",
        species: "Goldfish",
        length: 15,
        diet: "Fish Food",
        name: "Lockes",
        harvest: "Wally World",
    },
    {
        image:"fish21.jpg",
        species: "Rainbow Trout",
        length: 44,
        diet: "Fish Food",
        name: "Treant",
        harvest: "Lake Canada",
    },
];

// creates&exports a function to return a copy of the original array, using the slice method
//this is calling the function in the return statment so it returns a copy of the whole array
export const useFish = () => {
    return fishCollection.slice()
}
