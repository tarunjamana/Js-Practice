// Given a phrase, capitalize every word.

// 1st way to capitalize
 const capitalize = phrase => {
     const words=[]

     for(let word of phrase.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1))
     }
     return words.join(' ');
 }


 console.log(capitalize("hello world"));


//  2nd way to capitalize

const _capitalize = phrase =>{
    let title=phrase[0].toUpperCase()

    for (let i = 1; i < phrase.length; i++) {
        title += phrase[i-1] === " "?phrase[i].toUpperCase():phrase[i];
    }
    return title;
}


console.log(_capitalize("hello world"));