function stringReverseOwels(input){
let i =0;
let j = input.length -1;
let str1 = input.split("");

while (i <j){
    if(isVowel(str1[i])){
        i++;
        continue;
    }
    if(isVowel(str1[j])){
        j--;
        continue;
    }

    // swap the values 
    let t =str1[i];
    str1[i] = str1[j];
    str1[j] = t;

    i++;
    j--;
}
let str2= str1.join("");
return str2
}


function isVowel(c){
    return (c == 'a' || c == 'A' || c == 'e'
    || c == 'E' || c == 'i' || c == 'I'
    || c == 'o' || c == 'O' || c == 'u'
    || c == 'U');
}

let result = stringReverseOwels("Jamana");

console.log(result);



// Logic keep two pointers one from the start and one from the end and start a while loop and with conditon j,a,m,a,n,a
// 1 i=0,j=5  i<j true ; 


// number_cardinality question js Qube cinemas example

function number_cardinality(num){
let result = '';
 let strNumArray = num.toString().split("");
 console.log(strNumArray);
 if(Number(strNumArray[strNumArray.length -1]) === 0 ){
   result= 'zero'
 }

 if(Number(strNumArray[strNumArray.length -1]) === 5 ){
    result= 'five'
  }

  if(num%2 === 0 && Number(strNumArray[strNumArray.length -1]) !== 0 ){
    result= 'even'
  }

  if(num%2 !== 0 && Number(strNumArray[strNumArray.length -1]) !== 5 ){
    result= 'odd'
  }

return result;
}


let cardinalityResult = number_cardinality(Number(81))
console.log(cardinalityResult);
