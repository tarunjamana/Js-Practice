// Given a string of words or phrases, count the number of vowels.

// loop through every character and check it against a collection of vowels.

const vowels = string => {
    let count = 0;
    const choices = "aeiou";

    for(let character of string.toLowerCase()) {
        if(choices.includes(character)) count++;
    }

    return count;
}

console.log(vowels("hello world"));


// regular expressions to extract all the vowels and then count them.

const _vowels = string =>{
    matches = string.match(/[aeiou]/gi);
    return matches ?matches.length : 0;
}


console.log(_vowels("hello world"))