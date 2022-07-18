// Given an integer, reverse the order of the digits.

const reverse = integer => 
 parseInt(
     integer
     .toString()
     .split('')
     .reverse()
     .join('')
 ) * Math.sign(integer)

 console.log(reverse(123));
 console.log(reverse(-123))