// Exercise 1

function getSquaredNumbers(numbers) {
    let array = []
    for (let i = 0; i < numbers.length; ++i) {
       squaredNumber = Math.pow(numbers[i], 2);
       array.push(squaredNumber);
    }
    return console.log(array);
}

getSquaredNumbers([1, 2, 3, 4, 5]); // [1, 4, 9, 16, 25]
getSquaredNumbers([6, 7, 8, 9, 10]); // [36, 49, 64, 81, 100]
const numbers = [1, 2, 3];
getSquaredNumbers(numbers); // [1, 4, 9]
console.log(numbers); // [1, 2, 3]

// Exercise 2

function getReversedString(word) {
    let reversedWordsArray = [];
    let letter = word.split('');
    for (let i=0; i < word.length; ++i ) {
        reversedWordsArray.unshift(letter[i]);
    }
    reversedString = reversedWordsArray.join("")
    return console.log(reversedString);
}

getReversedString('Hello!'); // '!olleH'
getReversedString('Arrays'); // 'syarrA'