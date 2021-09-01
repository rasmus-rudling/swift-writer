import findStopsInText from './findStopsInText';

const wordsPerMinToUpdateTime = (wordsPerMinute, text) => {
    let numberOfStops = findStopsInText(text).length;
    let numberOfChars = text.length;
    let numberOfWords = text.split().length;
    let timeItShouldTake = (numberOfWords * 60) / wordsPerMinute;
    let updateTimeInSeconds = timeItShouldTake / (numberOfChars + numberOfStops);
    let updateTimeInMiliSeconds = updateTimeInSeconds * 1000;
    return updateTimeInMiliSeconds;
}

export default wordsPerMinToUpdateTime;