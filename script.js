// Exercise 1

function getSquaredNumbers(numbers) {
    let array = [];
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
    let reversedWordsArray = [];
    let letter = word.split('');
    for (let i=0; i < word.length; ++i ) {
        reversedWordsArray.unshift(letter[i]);
    }
    return reversedWordsArray.join("");
}

console.log(getReversedString('Hello!')); // '!olleH'
console.log(getReversedString('Arrays')); // 'syarrA'

// Exercise 3

function isPalindrome (string) {
    const reversedString = getReversedString(string).replaceAll(' ', '');
    const lowerCaseReversedString = reversedString.toLowerCase();
    const lowerCaseString = string.toLowerCase().replaceAll(' ','');
    function getReversedString(string) {
        let reversedWordsArray = [];
        const letter = string.split('');
        for (let i = 0; i < string.length; ++i) {
            reversedWordsArray.unshift(letter[i]);
        }
        return reversedWordsArray.join('');
    }
    return lowerCaseString === lowerCaseReversedString;
}

console.log(isPalindrome('Kayak')); // true
console.log(isPalindrome('Racecar')); // true
console.log(isPalindrome('Was it a cat I saw')) // true
console.log(isPalindrome('Hello!')); // false

// Exercise 4
const lettersObject = countLetters('The quick brown fox jumps over the lazy dog');

function countLetters(analysedString) {
    const stringWithNoSpaces = analysedString.replaceAll(' ', '');
    const stringToLowerCase = stringWithNoSpaces.toLowerCase();
    const stringToArray = stringToLowerCase.split('');
    let alphabet = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0,
    };
    for (let i = 0; i < stringToArray.length; ++i) {
        let letter = stringToArray[i];
        alphabet[letter] = (alphabet[letter] || 0) +1;
    }
    return alphabet
}
console.log(lettersObject);

// Exercise 5

const peopleArray = [
    {
        name: 'Adam',
        age: 20 },
    {
        name: 'Amanda',
        age: 5 },
    {
        name: 'John',
        age: 75 },
    {
        name: 'Dave',
        age: 15
    }
];

function getYoungestPerson(peopleArray) {
    const peopleSortedByAge = peopleArray.sort(
    function(firstPerson, secondPerson) {
        return firstPerson.age - secondPerson.age
    });
    return peopleSortedByAge[0];
}
function getOldestPerson(peopleArray) {
    const peopleSortedByAge = peopleArray.sort(
    function(firstPerson, secondPerson) {
        return firstPerson.age - secondPerson.age;
        });
    return peopleSortedByAge[peopleSortedByAge.length - 1];
}
function getAgeDifference(peopleArray) {
    return getOldestPerson(peopleArray).age - getYoungestPerson(peopleArray).age;
}
console.log(getAgeDifference(peopleArray)); // 70

// Exercise 6

const pointsArray = [1,-4,7,12]

function getSumOfPositivePoints(analysedPointsArray) {
    for (i = 0; i < analysedPointsArray.length; ++i) {

    }
}