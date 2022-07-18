// Currying in js
// example f(a,b) into f(a)f(b)

function  f(a){
    return function(b){
        console.log(a,b);
    }
}

f(5)(6);

// Q1 - sum(2)(6)(1)''


function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

let total = sum(2)(6)(1);

console.log(total)

// Q2 
// evaluate("sum")(4)(2) => 6
//evaluate("multiply")(4)(2)=>8
// evaluate("divide")(4)(2)=>2
// evaluate("substract")(4)(2)=>2


function evaluate(operation){
    return function(a){
        return function(b){
            if(operation === "sum") return a+b;
            else if(operation ==="divide") return a/b;
            else if(operation ==="substract") return a-b;
            else if(operation === "multiply") return a*b;
            else return "Invalid operation"
        };
    };
}

console.log(evaluate("sum")(4)(2))
console.log(evaluate("multiply")(4)(2))
console.log(evaluate("divide")(4)(2))
console.log(evaluate("substract")(4)(2))


const mul = evaluate("multiply");

console.log(mul(3)(5));


// Q3 Infinite Currying sum(1)(2)(3)(4)

function sum(a){
    return function (b){
      if(b) return sum(a + b);
      return a;
    };
}

console.log(sum(5)(2)(3)(4)());

// Q4 Currying vs partial Application


function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

let newtotal = add(2)(6)(1);

console.log(newtotal)


function sumP(a){
    return function(b,c){
        return a+b+c;
    };
}


const x = sumP(10);
console.log(x(3,4));
console.log(x(3,2));


// Q5 real world scenario for using currying for manipulating DOM

// function updateElementText(id){
//     return function(content){
//         document.querySelector("#" + id).textContent = content
//     }
// }

// const UpdateHeader = updateElementText("heading");
// UpdateHeader("Heloo T JAMANA");


// Q6 - curry() implementation
// Converts f(a,b,c) into f(a)(b)(c)   ****

function curry(func){
    return function curriedFunc(...args){
        if(args.length >= func.length){
            return func(...args)
        } else{
            return function(...next){
                 return curriedFunc(...args,...next)
            };
        }
    };
}


const sumC = (a,b,c,d) => a+b+c+d;

const totalSum = curry(sumC);


console.log(totalSum(1)(6)(5)(6))