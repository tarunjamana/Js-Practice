// Given a string, find the length of the longest substring without repeating characters.

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, 
// "pwke" is a subsequence and not a substring.


// Using double For loop

const isUnique =(s) =>{
    return new Set(s).size === s.length
}

var lengthOfLongestSubstring = function(s){
    let max =0;
    for(let begin = 0 ; begin <s.length;begin++){
        for(let end = begin; end <s.length;end++){
            const substring = s.substring(begin,end+1);
            console.log(substring)
            if(isUnique(substring)){
                max = Math.max(max,substring.length)
                console.log(max)
            }
        }
    }
    return max;
}

console.log(lengthOfLongestSubstring("abcabcbb"))


// HashMap approach

let lengthOfLongestSubstringMap = function(s){
    let max =0;
    let begin = 0;
    let map ={}

    for(let end = 0 ;end <s.length;end++){
        if(map[s[end]] !== undefined && map[s[end]] >=begin){
            begin =map[s[end]] + 1
        }
        map[s[end]] =end
        max = Math.max(max,end-begin + 1)
        
    }

    return max
}

console.log(lengthOfLongestSubstringMap("ab0c0ed"))


// Using Array 

var lengthOfLongestSubstringArray = function (s) {
    // Initialise an array to store the running characters and a longest string length variable
    let currentString = [];
    let longestStringLength = 0;

    // Loop through the provided string
    for (let i = 0; i < s.length; i++) {
        // Attempt to get the current character's position in the current string
        const currentCharacterPosition = currentString.indexOf(s[i]);

        // Check if the current character exists in the current string
        if (currentCharacterPosition !== -1) {
            // Chop the array off after the occurence of the character
            currentString.splice(0, currentCharacterPosition + 1);
        }

        // Add the current character to the array
        currentString.push(s[i]);

        // Store the current string length if bigger than the existing record
        longestStringLength = Math.max(
            longestStringLength,
            currentString.length
        );
    }

    return longestStringLength;
};

console.log(lengthOfLongestSubstringArray("abc0c0ed"))