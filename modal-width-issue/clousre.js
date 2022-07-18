// closures in Js
// Lexical Scope
// A lexical scope in JavaScript means that a variable defined outside a function 
// can be accessible inside another function defined after the variable declaration. 
// But the opposite is not true; the variables defined inside a function 
// will not be accessible outside that function.

// global Scope

function subscribe(){
    var name = "no name";
    // inner scope 2

    function displayName(){
        console.log(name)
    }

    displayName();
}

subscribe();

// closure gives you access to an outer functions scope from an inner function



// closure scope chain localScope(Own Scope) => Outer Fuction Scope => Global Scope


// Closures in Javascript
//  Ques 1: What will be logged into the console

let count = 0 ;
(function printCount(){
  if(count == 0){
      let count = 1;
      console.log(count);
  }
  console.log(count);
})();

// Ques 1 Write a function that would allow you to do this

function createBase(num){
    return function(innernum){
         console.log(innernum + num)
    }
}

var addSix = createBase(6);
 addSix(10); // returns 16
 addSix(21); // returns 27


//  QUe 3 TIme Optimization

function find(index){
    let a = [];
    for(let i = 0;i<1000000; i++){
        a[i] = i*i;
    }

    return function (index){
        console.log(a[index]);
    }
}

const closure = find();

console.time("6");
closure(6);
console.timeEnd("6");
console.time("12");
closure(12);
console.timeEnd("12");

// Ques 4 Block scope and Settimeout 

for(var i=0;i<3;i++){
    setTimeout(function log(){
    console.log(i);
    },1000)
}


// to print 0,1,2 use let 
for(let i=0;i<3;i++){
    setTimeout(function log(){
    console.log(i);
    },1000)
}
// creates a seperate execution context for that function / local scope 

// if to use only var to print 0,1,2 we need to use closure


for(var i=0;i<3;i++){

    function inner(i){
        setTimeout(function log(){
            console.log(i);
            },i * 1000)
    }
  inner(i);
}

// Q5 How would you use a closure to create a private counter

function counter(){
    var _counter = 0;

    function add(increment){
        _counter += increment;
    }

    function retrieve(){
        return "Counter = " + _counter;
    }

    return {
        add,
        retrieve
    }
}

const c = counter();
c.add(5);
c.add(10);
console.log(c.retrieve());

// Ques 6 What is Module Pattern

var Module = (function(){

    function privateMethod(){
        // do something
        console.log("private")
    }

    return {
        publicMethod: function(){
            // can call privateMethod();
            console.log("public");
        },
    };
})();

Module.publicMethod();
// Module.privateMethod();

// Ques 7 Make this run only once 

let view ;

function likeTheVideo(){

    let called = 0;
    return function(){
        if(called > 0){
            console.log("already Subscribed")
        } else{
            view = "Roadside Coder";
            console.log("Subscribe to" + view);
            called ++;
        }
    }
}

let isSubscribed = likeTheVideo();
isSubscribed();
isSubscribed();
isSubscribed();

// more generic of a once  function  in loadash library
// Ques 8 : Once Polyfill

function once(func,context){
    let ran;

    return function(){
        if(func){
            ran = func.apply(context || this,arguments);    
            func = null
        }

        return ran;
    };
}

const hello = once((a,b) => console.log("hello",a,b));

hello(1,2);
hello();


// QUes 9  polyfill for Memoize


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


// difference between closure and scope 