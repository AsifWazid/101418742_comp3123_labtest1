function delayedSuccess() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("delayed success!");
        }, 500);
    });
}

function delayedException() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("delayed exception!");
        }, 500);
    });
}

delayedSuccess()
    .then(message => {
        console.log({ message: message });
    });

delayedException()
    .catch(error => {
        console.log({ error: error });
    });