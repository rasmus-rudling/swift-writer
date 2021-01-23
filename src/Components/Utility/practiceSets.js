const generateTest = (chars, numberOfChars) => {
    const charsToUse = chars.split("");
    let testOutput = [];
    let randomChar;
    const sentenceLengths = [3, 4, 5];
    let nextSentenceLength = sentenceLengths[Math.floor(Math.random() * sentenceLengths.length)];
    let currentSentenceLength = 0;

    for (let i = 1; i <= numberOfChars; i++) {
        randomChar = charsToUse[Math.floor(Math.random() * charsToUse.length)];
        testOutput.push(randomChar);
        currentSentenceLength++;

        if (i % nextSentenceLength === 0 && currentSentenceLength >= 3) {
            testOutput.push(" ");
            currentSentenceLength = 0;
            nextSentenceLength = sentenceLengths[Math.floor(Math.random() * sentenceLengths.length)];
        }
    }

    return testOutput.join("");
}


export const homeRow = {
    "left": generateTest("asdfg", 500),
    "right": generateTest("hjklöä", 500),
    "both": generateTest("asdfghjklöä", 500),
}