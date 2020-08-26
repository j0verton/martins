const TipsFromMartin = [
    {
        // number:this.indexOf+1,
        tip:"Feed your fish daily."
    },
    {
        // number:this.indexOf+1,
        tip:"Don't skimp on the quality of your fish food."
    },
    {
        // number:this.parentElement.indexOf+1,
        tip:"It's okay to skimp on the quality of your decorative rocks."
    },
    {
        // number:this.parentElement.indexOf+1,
        tip:"Don't try to put hats on your fish."
    },
    {
        // number:this.parentElement.indexOf+1,
        tip:"Once every other fortnight clean the inside of your water pump with four blue pipe cleaners that you've soaked in Gin."
    },
    {
        // number:this.parentElement.indexOf+1,
        tip:"Feed your fish daily."
    },

]
console.log()
//creates a function which creates a copy of the tips array to export
export const TipArrayCopier = () => {
    return TipsFromMartin.slice();
}