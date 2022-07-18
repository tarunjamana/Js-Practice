// A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.

// Using the built-in Js methods

let str = "civic"

const __isPalindrome = string => {
    const cleaned = string.replace(/\W/g,"").toLowerCase();
    return (
        cleaned === cleaned.split("").reverse("").join("")
    );
};


console.log(__isPalindrome(str));

// If regular expressions are not allowed we can create an array of acceptable characters to use as a filter.

const isPalindrome = string => {
    const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
    const stringCharacters = string
                             .toLowerCase()
                             .split("")
                             .reduce((characters,character) => validCharacters.indexOf(character) > -1
                                                               ?characters.concat(character)
                                                               :character,[]);
 return stringCharacters.join("") === stringCharacters.reverse().join("");
}

console.log(isPalindrome(str))


// We could also use the new every method on an array to check that the first and last
//  characters match up in sequential order towards the center. However, this will check two times more than necessary.

const _isPalindrome = string => string
                                .split("")
                                .every((char,index) => char === string[string.length -1 -index])

console.log(_isPalindrome(str))