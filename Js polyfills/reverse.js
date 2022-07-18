function reverseArray(input){
   let returned = new Array;
   for(let i = input.length - 1; i >= 0; i--){
       returned.push(input[i]);
   }
   return returned;
   
}

let a = [3,5,7,8,9];
let b = reverseArray(a);
console.log(b);