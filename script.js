// Exercise 1

function getSquaredNumbers(numbers) {
    const array = [];
    for (let i = 0; i < numbers.length; ++i) {
       array.push(Math.pow(numbers[i], 2));
    }
    return array;
}

console.log(getSquaredNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
console.log(getSquaredNumbers([6, 7, 8, 9, 10])); // [36, 49, 64, 81, 100]
const numbers = [1, 2, 3];
console.log(getSquaredNumbers(numbers)); // [1, 4, 9]
console.log(numbers); // [1, 2, 3]

// Exercise 2

function getReversedString(word) {
    const reversedWordsArray = [];
    const letters = word.split('');
    for (let i=0; i < word.length; ++i ) {
        reversedWordsArray.unshift(letters[i]);
    }
    return reversedWordsArray.join('');
}

console.log(getReversedString('Hello!')); // '!olleH'
console.log(getReversedString('Arrays')); // 'syarrA'

// Exercise 3

function isPalindrome (string) {
    const reversedString = getReversedString(string).replaceAll(' ', '');
    const lowerCaseReversedString = reversedString.toLowerCase();
    const lowerCaseString = string.toLowerCase().replaceAll(' ','');

    return lowerCaseString === lowerCaseReversedString;
}

console.log(isPalindrome('Kayak')); // true
console.log(isPalindrome('Racecar')); // true
console.log(isPalindrome('Was it a cat I saw')) // true
console.log(isPalindrome('Hello!')); // false

// Exercise 4
const lettersObject = countLetters('The quick brown fox jumps over the lazy dog');
console.log(countLetters('Hi and welcome to my house'));
function getParsedText(text) {
    const stringWithNoSpaces = text.replaceAll(' ', '');
    const stringToLowerCase = stringWithNoSpaces.toLowerCase();
    return stringToLowerCase.split('');
}

getParsedText('Wonderful'); // ['w', 'o', 'n', 'd', 'e', 'r', 'f', 'u', 'l']

function countLetters(analysedString) {
    const letters = getParsedText(analysedString);
    const alphabet = {};
    for (let i = 0; i < letters.length; ++i) {
        const letter = letters[i];
        alphabet[letter] = (alphabet[letter] || 0) +1;
    }
    return alphabet;
}
console.log(lettersObject);

// Exercise 5

const peopleArray = [
    {
        name: 'Adam',
        age: 20
    },
    {
        name: 'Amanda',
        age: 5
    },
    {
        name: 'John',
        age: 75
    },
    {
        name: 'Dave',
        age: 15
    }
];

function getYoungestPerson(peopleArray) {
    const peopleSortedByAge = peopleArray.sort(
        function(firstPerson, secondPerson) {
            return firstPerson.age - secondPerson.age;
        }
    );
    return peopleSortedByAge[0];
}
function getOldestPerson(peopleArray) {
    const peopleSortedByAge = peopleArray.sort(
        function(firstPerson, secondPerson) {
            return firstPerson.age - secondPerson.age;
        }
    );
    return peopleSortedByAge[peopleSortedByAge.length - 1];
}
function getAgeDifference(peopleArray) {
    return getOldestPerson(peopleArray).age - getYoungestPerson(peopleArray).age;
}
console.log(getAgeDifference(peopleArray)); // 70

// Exercise 6

const pointsArray = [1,-4,7,12]

function getSumOfPositivePoints(analysedPointsArray) {
    let positiveNumbers = [];
    for (let i = 0; i < analysedPointsArray.length; ++i) {
        if (analysedPointsArray[i] >= 0) {
           positiveNumbers.push(analysedPointsArray[i]);
        }
    }
    let sumOfPositivePoints = 0
    for (let i = 0; i < positiveNumbers.length; ++i) {
        sumOfPositivePoints += positiveNumbers[i];
    }
    return sumOfPositivePoints;
}
console.log(getSumOfPositivePoints(pointsArray));

// Exercise 7
const numbersToSquare = [1, 2, 2];
function getSquareSum(numbersArray) {
    let squaredNumbers = [];
    for (let i = 0; i < numbersArray.length; ++i) {
        squaredNumbers.push(Math.pow(numbersArray[i], 2));
    }
    let total = 0;
    for (let i = 0; i < squaredNumbers.length; ++i) {
        total = total + squaredNumbers[i];
    }
    return total;
}
console.log(getSquareSum(numbersToSquare));