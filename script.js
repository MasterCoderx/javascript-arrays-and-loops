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

// Exercise 8 - Write a function to convert full name to initials (Case insensitive)

function getFullNameInitials(fullName) {
    const splitFullName = fullName.split(' ');
    return `${splitFullName[0].charAt(0)}.${splitFullName[1].charAt(0)}`;
}
console.log(getFullNameInitials('John Smith'));

// Exercise 9

const listOfSheep = [
    true, true, true, false,
    true, true, true, true ,
    true, false, true, false,
    true, null, false, true ,
    true, true, true, true ,
    false, undefined, true, true
];

function countNumberOfSheep(countList) {
    let numberOfSheep = 0;
    for (let i = 0; i < countList.length; ++i) {
        if (countList[i] === true) {
            numberOfSheep = numberOfSheep + 1;
        }
    }
    return numberOfSheep;
}

console.log(countNumberOfSheep(listOfSheep));

// Exercise 10

const randomNumbers = 35231;

function getReversedOrder(numbers) {
    const numbersToString = String(numbers);
    const numbersArray = numbersToString.split('');
    const reversedNumbersAsStringArray = numbersArray.reverse();
    let reversedNumbersArray = [];
    for (let i = 0; i < reversedNumbersAsStringArray.length; ++i) {
        reversedNumbersArray.push(parseInt(reversedNumbersAsStringArray[i]));
    }
    return reversedNumbersArray;
}
console.log(getReversedOrder(randomNumbers));

// Exercise 11
const junkArray = ['hay', 'needle', 'hay', 'hay', 'moreJunk', 'Junk', 'Junk'];
function findNeedle(arrayWithANeedleToFind) {
    for (let i = 0; i < arrayWithANeedleToFind.length; ++i) {
        if (arrayWithANeedleToFind[i] === 'needle') {
            return `found the needle at position ${arrayWithANeedleToFind.indexOf('needle')}`;
        }
    }
    return 'Cannot find the needle';
}
console.log(findNeedle(junkArray));

// Exercise 12

const arrayOfNumbers = [1, 4, 6, 8];
function getDoubleNumbers(numbersToDouble) {
    const doubledNumbers = [];
    for (let i = 0; i < numbersToDouble.length; ++i) {
         doubledNumbers.push(2 * numbersToDouble[i]);
    }
    return doubledNumbers;
}
console.log(getDoubleNumbers(arrayOfNumbers));

// Exercise 13

const arrayOfNumbersToInvert = [1, -4, 6, -8];
function getInverseNumbers(numbersToInvert) {
    const invertedNumbers = [];
    for (let i = 0; i < numbersToInvert.length; ++i) {
        invertedNumbers.push(numbersToInvert[i] * -1);
    }
    return invertedNumbers;
}
console.log(getInverseNumbers(arrayOfNumbersToInvert));

// Exercise 14

const arrayOfNumbersToAdd = [-1, 4.5, 3.2, -0.5];
function getSumOfNumbersInArray(numbersToAdd) {
    let sumOfNumbers = 0;
    for (let i = 0; i < numbersToAdd.length; ++i) {
        sumOfNumbers = sumOfNumbers + numbersToAdd[i];
    }
    return sumOfNumbers;
}
console.log(getSumOfNumbersInArray(arrayOfNumbersToAdd));

// Exercise 15

const firstArrayOfNumbersToAdd = [1, 2, 3, 4];
const secondArrayOfNumbersToAdd = [2.5, 2.5];

function getArraySum(numbersToAdd) {
    let sumOfNumbers = 0;
    for (let i = 0; i < numbersToAdd.length; ++i) {
        sumOfNumbers = sumOfNumbers + numbersToAdd[i];
    }
    return sumOfNumbers;
}
function arrayPlusArray(firstArraySum, secondArraySum) {
    const firstArrayToAdd = getArraySum(firstArraySum);
    const secondArrayToAdd = getArraySum(secondArraySum);
    return firstArrayToAdd + secondArrayToAdd;
}
console.log(arrayPlusArray(firstArrayOfNumbersToAdd, secondArrayOfNumbersToAdd));

// Exercise 16

const numberOfSheepToCount = [8];
function murmurNumberOfSheep(numberOfSheep) {
    const murmur = [];
    for (let i = 1; i < numberOfSheep; ++i) {
        murmur.push(`${i} sheep...`);
    }
    return murmur.join('');
}
console.log(murmurNumberOfSheep(numberOfSheepToCount));

// Exercise 17

gradesArray = [3, 4.3, 6, 5, 3];
function getGradesAverage(grades) {
    let gradesSum = 0;
    for (let i = 0; i < grades.length; ++i) {
        gradesSum = gradesSum + grades[i];
    }
    const gradesAverage = gradesSum / grades.length;
    return Math.floor(gradesAverage);
}

console.log(getGradesAverage(gradesArray));

// Exercise 18

const numberOfMonkeys = 10;
function countMonkeys(numberToPopulate) {
    let countingMonkeys = [];
    for (let i = 1; i <= numberToPopulate; ++i) {
        countingMonkeys.push(i);
    }
    return countingMonkeys;
}
console.log(countMonkeys(numberOfMonkeys));