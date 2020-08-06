

export const arraySample = (populationArray, sampleSize, presetArray = []) => {
    
    while (presetArray.length < sampleSize) {
        let randIdx = Math.floor(Math.random() * populationArray.length);
        let randSample = populationArray[randIdx];
        if (!presetArray.includes(randSample)) presetArray.push(randSample);
    }
    return presetArray;
}


