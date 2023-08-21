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
    let reversedString = getReversedString(string).replaceAll(' ', '');
    let lowerCaseReversedString = reversedString.toLowerCase();
    let lowerCaseString = string.toLowerCase().replaceAll(' ','');
    function getReversedString(string) {
        let reversedWordsArray = [];
        let letter = string.split('');
        for (let i = 0; i < string.length; ++i) {
            reversedWordsArray.unshift(letter[i]);
        }
        return (reversedWordsArray.join(""));
    }
    return (lowerCaseString === lowerCaseReversedString);
}

console.log(isPalindrome('Kayak')); // true
console.log(isPalindrome('Racecar')); // true
console.log(isPalindrome('Was it a cat I saw')) // true
console.log(isPalindrome('Hello!')); // false

