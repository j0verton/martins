const martinsHarvestLocations = [
    {
        location: "Tahiti"
    },
    {
        location: "Hawaii"
    },
    {
        location: "Naples, Florida"
    },
    {
        location: "Costa Rica"
    }
]

export const harvestLocationCopier = () => {
    return martinsHarvestLocations.slice();
}

