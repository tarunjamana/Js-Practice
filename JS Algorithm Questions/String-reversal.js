// Reverese a given String
let str="HI Tarun Jamana!";

// using JS built In methods 

const reverse = string => string.split('').reverse().join('');

console.log(reverse(str));

// Using the for of loop 

const _reverse = string =>{
    let result ="";
    for(let char of string){
        result = char + result;
    }
    return result;
}

console.log(_reverse(str));
