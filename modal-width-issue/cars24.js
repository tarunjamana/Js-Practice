// Cars24 interview 
// Q1  Hoisting

function abc(){
    console.log(a);
    // console.log(b,c)   cant acess b,c before initilization
    // const c  =30;
    // let b = 20;
    var a =10;
}


abc();

// temporal dead zone where the variables are in the scope but not yet declared


// Q2 Implicit and explicit binding

var obj = {
  name:'tarun',
  display: function(){
      console.log(this.name);
  },
};

// if used arrow function  this points to window object

var obj1 = {
    name:"ABC",
}

obj.display();
obj.display.call(obj1); 
// provides a new context as the provided object


// Q3 - Implement a caching or a memoizing function in Js

function myMemoize(fn,context){
    const res = {};
    return function(...args){
      var argsCache = JSON.stringify(args);
      if(!res[argsCache]){
          res[argsCache] = fn.call(context || this, ...args)
      } 
          return res[argsCache];
      
    }
}

const clumsySquare  = (num1,num2) => {
    for(let i =1;i<100000000;i++){
        return num1 * num2;
    }
}

const memoizedClumsyProduct = myMemoize(clumsySquare)

console.time("first call");
console.log(memoizedClumsyProduct(7843,8975));
console.timeEnd("first call");


console.time("second call");
console.log(memoizedClumsyProduct(7543,9875));
console.timeEnd("second call");


// Q4 O/P based question on Event loop

console.log("a");
setTimeout(() => console.log("set"),0);
Promise.resolve(() => console.log("PRO")).then((res) => res());
console.log("b");

// a
// b
// pro  it goes to the Micro Task que or the priority and later moved to the call stack
// set  it goes to the task que and later to call stack and moreover settimeout is part of browser api not js


// Q5 Infinite currying

  function add(a){
  return function(b){
       if(b){
           return add(a + b)
       }
       return a;
  }
  }

  console.log(add(5)(2)(5)(4)());

//   Q6 Implement this code

const calc = {
    total:0,
    add(a){
        this.total += a;
        return this;
    },
    multiply(a){
        this.total *= a;
        return this;
    },
    substract(a){
        this.total -= a;
         return this;
    }
}

const result = calc.add(10).multiply(5).substract(30).add(10);

console.log(result.total);


// React Js Interview Question Create UI Mock