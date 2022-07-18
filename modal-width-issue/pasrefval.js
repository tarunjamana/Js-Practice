// examples

let a = 10;;
let b = 'hi';
let c = a;
c= c+1;

let d = [1,2];
let e = d;

d.push(3);

console.log(`a- ${a}`);
console.log(`b- ${b}`);
console.log(`c = ${c}`);
console.log(`d = ${d}`);
console.log(`e = ${e}`);


let newc = [1,2]
let newd = newc;

console.log(`c === d ${newc === newd}`);
console.log(`c == d ${newc == newd}`)

function add(array, element) {
    array.push(element);
}
console.log(newc)
add(newc,4);
console.log(newc    )
