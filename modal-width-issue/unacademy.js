// Unacadamey Interview Questions

// Q1 Map vs for each

// map returns a new array
// foreach doesnt return anything and it modifies the original array

// Map can be further chained with filter , 
// reduce etc as it returns an array and all the array operations can be done on this returned array
// whereas for each doesnt return anything

const arr = [2,3,6,6,1];

const mapResult = arr.map(item => item+2);

const forEachResult = arr.forEach((ar,i) => {
    arr[i] = ar + 3;
})

console.log(mapResult,forEachResult,arr)

// Q2 Null Vs Undefined


// undefined vs not defined

// In JavaScript, undefined means a variable has been declared but has not yet been assigned a value, such as:

var testVar;
console.log(testVar); //shows undefined
console.log(typeof testVar); //shows undefined

// null is an assignment value. It can be assigned to a variable as a representation of no value:

var newtestVar = null;
console.log(newtestVar); //shows null
console.log(typeof newtestVar); //shows object


// From the preceding examples, it is clear that undefined and 
// null are two distinct types: undefined is a type itself (undefined) while null is an object.

console.log(null === undefined) 
console.log(null == undefined)
console.log(null === null) 

// null = 'value' // ReferenceError
// undefined = 'value' // 'value'

let a = null;

console.log(a);

console.log(typeof(null));
console.log(typeof(undefined));


console.log(null == undefined)
console.log(null === undefined)

// Q3 Event Delegation

// document.querySelector("#products").addEventListener('click',(event) =>{
//     console.log(event)

//     if(event.target.tagName === "LI"){
//         window.location.href += "#" + event.target.id;
//     }
// })


// DOM event delegation is a mechanism of responding to ui-events via a single common parent rather than each child,
//  through the magic of event "bubbling" (aka event propagation).

// When event is triggered on an element the following occurs
// The event is dispatched to its target EventTarget and any event listeners found there are triggered
// Bubbling events will then trigger any additional event listeners found by following the EventTarget's parent chain upward, 
// checking for any event listeners registered on each successive EventTarget. 
// This upward propagation will continue up to and including the Document.


// bind an event handler to a single parent element, and that handler will get executed
//  whenever the event occurs on any of its child nodes (and any of their children in turn). This is event delegation.


// Q4 Flatten the Array

let arrtoFlat=[
    [1,2],
    [3,4],
    [5,6,["a","b"],7,8],
    [9,10,11,12]
]

let newflat =[...arrtoFlat];
console.log(newflat)
let flattendArry = [].concat(...arrtoFlat);
console.log(arrtoFlat)
console.log(flattendArry)

console.log(arrtoFlat.flat(2))

// polyfill for flat


// let arrtoFlat=[
//     [1,2],
//     [3,4],
//     [5,6,,["a","b"],7,8],
//     [9,10,11,12]
// ]

function customFlat(arr,depth=1){
    let result = [];
    arr.forEach((ar) =>{
        console.log(ar)
        if( Array.isArray(ar) && depth > 0){
            result.push(...customFlat(ar,depth-1))
        } else result.push(ar);
    });

    return result
}


console.log(customFlat(arrtoFlat,2))


// Q5 var vs let vs const 

//                      var            let             const
//scope-          functional scope    Block Scope   Block Scope
//redeclare-        can do             can not do     can not do
//initialization     can do            can do         can not do
// declaration       can do            can do          can do



// Q6 settimeout O/P based question

function avar(){
    for(var i =0 ;i<3;i++){
        setTimeout(function log(){
            console.log(i);
        },i*1000);
    }
}

avar();


function alet(){
    for(let i =0 ;i<3;i++){
        setTimeout(function log(){
            console.log(i);
        },i*1000);
    }
}

alet();

// if to only use var


function altavar(){
    for(var i = 0;i<3;i++){
        function inner(i){
            setTimeout(function log(){
                console.log(i);
            },i*1000);
        }
        inner(i);
    }
}

altavar();


// Q7 Explain call apply and bind

var person = {
    name:"Tarun Jamana",
    hello:function(thing){
        console.log(this.name + " say hello " + thing);
    },
}

var alterEgo = {
    name:"dinakar P"
}

person.hello("hello world");

person.hello.call(alterEgo,"world");

person.hello.apply(alterEgo,["world"]);


const newPerson  = person.hello.bind(alterEgo);

newPerson("world")


// Q8 infinite currying

function add(a){
    return function(b){
        if(b) return add(a+b);
        return a;
    };
}

let sum = add(1)(2)(4)(7)(8);

console.log(sum());


// Q9 Composition polyfill

function addFive(a){
    return a + 5;
}

function substractTwo(a){
    return a -2;
}

function multiplyfour(a){
    return a*4;
}

const compose = (...functions) =>{
    return (args) =>{
      return  functions.reduceRight((arg,fn) => fn(arg),args)
    }
}

const evaluate  = compose(addFive,substractTwo,multiplyfour);

console.log(evaluate(5));

// Q10 Implement Promise.all


function showText(text,time){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(text);
        }, time);
    });
}

// Promise.all([showText('hello',1000),Promise.resolve("hi"),Promise.reject("bye")]).then((value) => {
//     console.log(value)
// })


function myPromiseAll(promises){
    let result = [];
    return new Promise((resolve,reject) =>{
        promises.forEach((p,index) =>{
            p.then(res =>{
                result.push(res);
                if(index === promises.length - 1){
                    resolve(result);
                }
            }).catch((err) => reject(err))
        });
    });
}

myPromiseAll([
    showText("hello",1000),
    Promise.resolve("hi"),
    Promise.reject("bye"),
]).then((value) => console.log(value));