// Given a string of characters, return the character that appears the most often.


const max = string => {
    const characters = {}

    for(let char of string){
        characters[char] =characters[char] + 1 || 1
    }

    console.log(characters)

    let maxCount = 0;
    let maxCharacter = null
    for(let char in characters){
        if(characters[char] > maxCount){
          maxCount = characters[char];
          maxCharacter =char
        }
    }

    return maxCharacter
}


console.log(max("abcsfwldswacvwabcaabfsf"))