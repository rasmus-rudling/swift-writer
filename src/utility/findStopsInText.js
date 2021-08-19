const findStopsInText = (text) => {
    let stopsInText = [];

    [...text].forEach((char, idx) => {
        if (char === " ") {
            stopsInText.push(idx);
        }
    })

    return stopsInText;
}

export default findStopsInText;