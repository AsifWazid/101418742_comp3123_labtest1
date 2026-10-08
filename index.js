const lowerCaseWords = require('./question1');

console.log("Question 1:");

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => {
        console.log(result);

        console.log("\nQuestion 2:");
        require('./callbacks');
    })
    .catch(error => console.log(error));

