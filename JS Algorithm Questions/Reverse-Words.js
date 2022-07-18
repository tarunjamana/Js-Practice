// Given a phrase, reverse the order of the characters of each word.

// Using the inbuilt array methods
const reverseWords = string => string
                               .split(" ")
                               .map(word =>word
                                           .split("")
                                           .reverse()
                                           .join("")
                                )
                                .join(" ")

console.log(reverseWords("I love JavaScript!"))

// Using the for each and for loop

const _reverseWords = string => {
    const wordsReversed = []
    string.split(" ").forEach(word => {
        let wordReversed ="";
        for(let i =word.length -1 ;i>=0 ;i--){
            wordReversed += word[i];
        }
        wordsReversed.push(wordReversed)
    });
    return wordsReversed.join(" ");
}

console.log(_reverseWords("I love JavaScript!"))