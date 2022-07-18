// Anagrams are words or phrases that contain the same number of characters.

// We can sort both the strings and then compare for equality 

const sort  = string => string.replace(/\W/g,'')
                              .toLowerCase()
                              .split('')
                              .sort()
                              .join('');
const _anagrams = (strA,strB) => sort(strA) === sort(strB);


console.log(_anagrams("hello world", "world hello"));

// An obvious approach is to create a character map that tallies the number of characters 
// for each input string. Then, we can compare the maps to see if they are identical.

const charCount = string =>{
    const table={}
    for(let char of string.replace(/\W/g,'').toLowerCase()){
        table[char]=table[char] + 1 || 1;
    }

    return table
}

const anagrams = (strA,strB) =>{
    const charCountA = charCount(strA);
    const charCountB = charCount(strB)

    if(Object.keys(charCountA).length !== Object.keys(charCountB).length) return false;

    for(let char in charCountA){
        if(charCountA[char] !== charCountB[char]) return false;
    }
    return true;
}

console.log(anagrams("hello world", "world hello"))