function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        const words = mixedArray
            .filter(item => typeof item === "string")
            .map(word => word.toLowerCase());

        if (words.length > 0) {
            resolve(words);
        } else {
            reject("No strings found");
        }
    });
}

module.exports = lowerCaseWords;