// object/array destructuring , spread operator

const alphabets = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1','2','3','4','5','6','7']

const [a,,b,...rest] = alphabets


const newArray = [...alphabets,...numbers]
console.log(newArray)
console.log(a);
console.log(b);
console.log(rest);

function sumandMultiply(a,b){
    return [a+b,a*b,a/b];
}


const smparray = sumandMultiply(3,4);

console.log(smparray);

const [sum,multiply,division="no division"] = sumandMultiply(4,5);

console.log(sum);
console.log(multiply);
console.log(division);


// Object destructuring

const personOne = {
    name: 'Kyle',
    age:23,
    favorites:'watermelon',
    address:{
        city:'Somewhere',
        state:'one of them'
    }
}

const personTwo = {
    name:'sally',
    age:32,
    address:{
        city:'Somewhere else',
        state:'Another one of them'
    }
}



const {name:firstName,address: {city},...objrest} = personOne;

console.log(firstName);
console.log(city)
console.log(objrest)


function printUser({name , age}){
console.log(name,age);
}

printUser(personOne);

const items = [
    {name:'Bike' , price:100},
    {name:'TV' , price:200},
    {name:'Album' , price:10},
    {name:'Book' , price:5},
    {name:'Phone' , price:500},
    {name:'Computer' , price:1000},
    {name:'keuboard' , price:100},
    {name:'mouse' , price:25},
]

// filter map find forEach some every reduce includes

// find

const foundItem = items.find((item) =>{
    return item.name === "Book"
})

console.log(foundItem)

// some 
const hasInexpensiveItems =items.some((item) =>{
    return item.price <= 100
})

console.log(hasInexpensiveItems);

// every 

const hasInexpensiveItemsAll =items.every((item) =>{
    return item.price <= 100
})

console.log(hasInexpensiveItemsAll)

// reduce

const total = items.reduce((currentTotal , item) =>{
    return item.price + currentTotal
},0)


console.log(total);



// let var const 


// promises syntax
let p = new Promise((resolve, reject) =>{
    let a = 1 + 1;
    if(a  == 2){
        resolve('success');
    } else{
        reject('Failed');
    }
})


p.then((message) => {
    console.log("in the then " + message) 
}).catch((err) =>{
 console.log("in the catch "+err)
})

// callbacks example

const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialCallBack(){
    return new Promise((resolve, reject) =>{
        if(userLeft){
            reject({
                name:'User Left',
                message: ':('
            })
        } else if(userWatchingCatMeme){
            reject({
                name:'User Watching Cat Meme',
                message: 'WebDEvSimplified < Cat'
            })
        } else {
            resolve('Thumbsup and Subscribe')  
        }
    })
}


watchTutorialCallBack().then((message) =>{
    console.log("Success: " +message)
}).catch((error) =>{
    console.log(error.name + " " + error.message)
}) 


// example 
const recordVideoOne = new Promise((resolve, reject) =>{
    resolve('Video 1 recorded');
})

const recordVideoTwo = new Promise((resolve, reject) =>{
    resolve('Video 2 recorded');
})

const recordVideoThree = new Promise((resolve, reject) =>{
    resolve('Video 3 recorded');
})


Promise.all([
    recordVideoOne,
    recordVideoOne,
    recordVideoThree
]).then((messages) =>{
    console.log(messages)
})


Promise.race([
    recordVideoOne,
    recordVideoOne,
    recordVideoThree
]).then((messages) =>{
    console.log(messages)
})


let number = 0;
console.log(number++);
console.log(++number);
console.log(number);


setTimeout(function(){

},3000)


// O/P based question


function getPersonInfo(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
  }
  
  const person = 'Lydia';
  const age = 21;
  
  getPersonInfo`${person} is ${age} years old`;

//   If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!




// O/P based question

const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);

console.log(obj.hasOwnProperty('1'));
console.log(obj.hasOwnProperty(1));
console.log(set.has('1'));
console.log(set.has(1));

// All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string.
//  This is why obj.hasOwnProperty('1') also returns true.
// It doesn't work that way for a set. There is no '1' in our set: set.has('1') returns false.
//  It has the numeric type 1, set.has(1) returns true.


// O/P based question

const qobj = { a: 'one', b: 'two', a: 'three' };
console.log(qobj);

// If you have two keys with the same name, the key will be replaced. 
// It will still be in its first position, but with the last specified value.

// O/P based question
for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
  }

// The continue statement skips an iteration if a certain condition returns true.



// O/P based question

const objA = {};
const objb = { key: 'b' };
const objc = { key: 'c' };

objA[objb] = 123;
objA[objc] = 456;

console.log(objA[objb]);

// Object keys are automatically converted into strings. We are trying to set
//  an object as a key to object a, with the value of 123.

// However, when we stringify an object, it becomes "[object Object]".
//  So what we are saying here, is that a["[object Object]"] = 123. 
// Then, we can try to do the same again. c is another object that we are implicitly stringifying. 
// So then, a["[object Object]"] = 456.
// Then, we log a[b], which is actually a["[object Object]"]. We just set that to 456, so it returns 456.


// O/P based question

const Nperson = { name: 'Lydia' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(Nperson, 21));
console.log(sayHi.bind(Nperson, 21));
console.log(sayHi.bind(Nperson, 21)())

// With both, we can pass the object to which we want the this keyword to refer to. However,
//  .call is also executed immediately!
// .bind. returns a copy of the function, but with a bound context! It is not executed immediately.

// FYI: there are only 7 built-in types: null, undefined, boolean, number, string, object, and symbol. 
// "function" is not a type, since functions are objects, it's of type "object".



// O/P based question 

0;
new Number(0);
('');
(' ');
new Boolean(false);
undefined;

// There are 8 falsy values:

// undefined
// null
// NaN
// false
// '' (empty string)
// 0
// -0
// 0n (BigInt(0))
// Function constructors, like new Number and new Boolean are truthy.


// O/P based question

console.log(typeof typeof 1);

// The typeof operator returns a string indicating the type of the unevaluated operand.
// typeof 1 returns "number". typeof "number" returns "string"


// O/P based question

const Pnumbers = [1, 2, 3];
Pnumbers[10] = 11;
console.log(Pnumbers);

// When you set a value to an element in an array that exceeds the length of the array, 
// JavaScript creates something called "empty slots". These actually have the value of undefined,
//  but you will see something like:
// [1, 2, 3, 7 x empty, 11]
// depending on where you run it (it's different for every browser, node, etc.)


// O/P based question

(() => {
    let x, y;
    try {
      throw new Error();
    } catch (x) {
      (x = 1), (y = 2);
      console.log(x);
    }
    console.log(x);
    console.log(y);
  })();


//   The catch block receives the argument x. This is not the same x as the variable when we pass arguments. 
// This variable x is block-scoped.

// Later, we set this block-scoped variable equal to 1, and set the value of the variable y. 
// Now, we log the block-scoped variable x, which is equal to 1.

// Outside of the catch block, x is still undefined, and y is 2. 
// When we want to console.log(x) outside of the catch block, it returns undefined, and y returns 2.


// everything in javascript is either a primitive or a object

// JavaScript only has primitive types and objects.

// Primitive types are boolean, null, undefined, bigint, number, string, and symbol.

// What differentiates a primitive from an object is that primitives do not have any properties or methods;
//  however, you'll note that 'foo'.toUpperCase() evaluates to 'FOO' and does not result in a TypeError. 
// This is because when you try to access a property or method on a primitive like a string, 
// JavaScript will implicitly wrap the primitive type using one of the wrapper classes, 
// i.e. String, and then immediately discard the wrapper after the expression evaluates.
//  All primitives except for null and undefined exhibit this behaviour.



// O/P based question  
// what does setInterval()  method return 

// This method returns an interval ID which uniquely identifies the interval,
//  so you can remove it later by calling clearInterval().

// The returned intervalID is a numeric, 
// non-zero value which identifies the timer created by the call to setInterval(); 
// this value can be passed to clearInterval() to cancel the interval.


// O/P based question

console.log([...'Lydia']);

// A string is an iterable. The spread operator maps every character of an iterable to one element.


// O/P based question Generator functions

function* generator(i) {
    yield i;
    yield i * 2;
    yield i*3;
  }
  
  const gen = generator(10);
  
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);


// O/P based question  
let val = [1, 2, 3].map(num => {
    if (typeof num === 'number') return;
    return num * 2;
  });

console.log(val);

// When we don’t return a value from the function, the function returns undefined. For every element in the array,
//  the function block gets called, so for each element we return undefined.


// O/P based question


function getInfo(member, year) {
    member.name = 'Lydia';
    year = '1998';
  }
  
  const fperson = { name: 'Sarah' };
  const birthYear = '1997';
  
  getInfo(fperson, birthYear);
  
  console.log(fperson, birthYear);

//   Arguments are passed by value, unless their value is an object, then they're passed by reference. 
//   birthYear is passed by value, since it's a string, not an object.
//   When we pass arguments by value, a copy of that value is created

// The variable birthYear has a reference to the value "1997". 
// The argument year also has a reference to the value "1997", 
// but it's not the same value as birthYear has a reference to. 
// When we update the value of year by setting year equal to "1998",
//  we are only updating the value of year. birthYear is still equal to "1997".

// The value of person is an object. The argument member has a (copied) reference to the same object.
//  When we modify a property of the object member has a reference to, the value of person will also be modified,
//  since they both have a reference to the same object. person's name property is now equal to the value "Lydia"

// O/P based question

function greeting() {
    throw 'Hello world!';
  }
  
  function sayHi() {
    try {
      const data = greeting();
      console.log('It worked!', data);
    } catch (e) {
      console.log('Oh no an error:', e);
    }
  }
  
  sayHi();

// With the throw statement, we can create custom errors. 
// With this statement, you can throw exceptions.
//  An exception can be a string, a number, a boolean or an object. 
// In this case, our exception is the string 'Hello world!'.

// With the catch statement, we can specify what to do if an exception is thrown in the try block.
//  An exception is thrown: the string 'Hello world!'. e is now equal to that string, which we log. 
// This results in 'Oh an error: Hello world!'.

// O/P based question

function Car() {
    this.make = 'Lamborghini';
    return { make: 'Maserati' };
  }
  
  const myCar = new Car();
  console.log(myCar);
  console.log(myCar.make);

//   When you return a property, the value of the property is equal to the returned value,
//  not the value set in the constructor function. 
// We return the string "Maserati", so myCar.make is equal to "Maserati".

// O/P based question
(() => {
    let x = (y = 10);
  })();
  
  console.log(typeof x);
  console.log(typeof y);

// this is equal to 
// y=10
// let x = y
// since y is set 10 we added a property y with value 10 to the global object(window object) i.e window.y = 10(in browser)
// then we are setting x to the value of y which is 10 , 
// but since x is let so it will be block scoped(i.e scope of x is within IIFE) 
// so since console.log(typeof x) is done outside the iife x is undefined here 
// but console.log(typeof y) will return number since y is accesible anywhere in our code 


// O/P based question

class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  Dog.prototype.bark = function() {
    console.log(`Woof I am ${this.name}`);
  };
  
  const pet = new Dog('Mara');
  
  pet.bark();
  
  delete Dog.prototype.bark;
  
//   pet.bark(); will give type error pet.bark is not a function

// We can delete properties from objects using the delete keyword, also on the prototype.
//  By deleting a property on the prototype, it is not available anymore in the prototype chain.
//  In this case, the bark function is not available anymore on the prototype after delete Dog.prototype.bark, 
// yet we still try to access it.
// this will throw a type error

const pset = new Set([1, 1, 2, 3, 4]);

console.log(pset);

// The Set object is a collection of unique values: a value can only occur once in a set.
// We passed the iterable [1, 1, 2, 3, 4] with a duplicate value 1. 
// Since we cannot have two of the same values in a set, one of them is removed. This results in {1, 2, 3, 4}.




// Basic Memoization function example

const add = () => {
    const cache = {};
    return num => {
        console.log(cache);
      if (num in cache) {
        return `From cache! ${cache[num]}`;
      } else {
        const result = num + 10;
        cache[num] = result;
        return `Calculated! ${result}`;
      }
    };
  };
  
  const addFunction = add();
  console.log(addFunction(10));
  console.log(addFunction(10));
  console.log(addFunction(5 * 2));

//   we are creating a cache object which stores the previously computed values
// 1st console.log we are passing 10 to the add function  which returns a function since cache is empty we go to the else block
// and result is computed and cache[10] is set to 20 , now the cache object will be {10:20}
// for the second console log we are again calling add with value 10 , which returns a function and here the passed value will be 
// 10,next it will check the if case if num in cache i.e 10 in {10:20} which is true so it returns the result from the cache i.e cache[10]
//  same will happen for the third console log


// O/P based question
const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];

for (let item in myLifeSummedUp) {
  console.log(item);
}

for (let item of myLifeSummedUp) {
  console.log(item);
}


// with for in we can iterate over enumerable properties, in an arry the enumerable properties are the keys(index)
// {0: "☕", 1: "💻", 2: "🍷", 3: "🍫"} this is how an array looks like

// with a for of loop we can iterate over iterables , An array is an iterable . When we iterate over the array,
// the variable "item" is equal to the element it is currently iterarting over

// O/P based question

function sayHi(name) {
    return `Hi there, ${name}`;
  }
  
  console.log(sayHi());

// By default, arguments have the value of undefined, unless a value has been passed to the function. 
// In this case, we didn't pass a value for the name argument. name is equal to undefined which gets logged.


// O/P based question

const Cperson = {
    name: 'Lydia',
    age: 21,
  };
  
  let City = Cperson.city;
  City = 'Amsterdam';
  
  console.log(Cperson);

//   we are setting a variable city = person.city which is not there so city will be undefined
// next we set city to amsterdam and note that we are not referencing person object itself 
// This doesn't change the person object: there is no reference to that object.
// When logging the person object, the unmodified object gets returned.


// O/P based question

let newList = [1, 2, 3].push(4);

// console.log(newList.push(5));  gives error newList.push is not  a fucntion

// The .push method returns the new length of the array, not the array itself! 
// By setting newList equal to [1, 2, 3].push(4), we set newList equal to the new length of the array: 4.
// Then, we try to use the .push method on newList.
//  Since newList is the numerical value 4, we cannot use the .push method: a TypeError is thrown.


// O/P based question

function giveLydiaPizza() {
    return 'Here is pizza!';
  }
  
  const giveLydiaChocolate = () =>
    "Here's chocolate... now go hit the gym already.";
  
  console.log(giveLydiaPizza.prototype);
  console.log(giveLydiaChocolate.prototype);

//  Regular functions, such as the giveLydiaPizza function,
//  have a prototype property, which is an object (prototype object) with a constructor property.
//  Arrow functions however, such as the giveLydiaChocolate function, do not have this prototype property. 
//  undefined gets returned when trying to access the prototype property using giveLydiaChocolate.prototype.

// O/P based question

const Qperson = {
    name: 'Lydia',
    age: 21,
  };
  
  for (const [x, y] of Object.entries(Qperson)) {
    console.log(x, y);
  }

//   Object.entries(person) returns an array of nested arrays, containing the keys and objects:
// [ [ 'name', 'Lydia' ], [ 'age', 21 ] ]

// Using the for-of loop, we can iterate over each element in the array, the subarrays in this case.
//  We can destructure the subarrays instantly in the for-of loop, using const [x, y]. 
// x is equal to the first element in the subarray, y is equal to the second element in the subarray.


// O/P based question

const getList = ([x, ...y]) => [x, y]
const getUser = user => ({ name: user.name, age: user.age })

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))

// the first console.log we do a fuction call by passing the value [1,2,3,4]  in the function definition 
// we are destruturing the passed array right away so the it becmones [1,[2,3,4]]

// The getUser function receives an object. With arrow functions, we don't have to write curly brackets 
// if we just return one value. However, if you want to instantly return an object from an arrow function, 
// you have to write it between parentheses, otherwise everything between the two braces will be interpreted 
// as a block statement. In this case the code between the braces is not a valid JavaScript code, so a SyntaxError gets thrown.

// The following function would have returned an object:
// const getUser = user => ({ name: user.name, age: user.age })


// associativity with conditions

console.log([] && "i am");

// with && operator right hand value will be returned if the left hand value is truthy 
// ,in this [] is truthy so i am is returned.

console.log(null && 1);

// Logical AND (&&) evaluates operands from left to right, returning immediately with the value
// of the first falsy operand it encounters; if all values are truthy, the value of the last operand is returned.

console.log([] || "i am");
console.log(null || 1 || NaN)

//  with OR(||) if expr1|| expr2 , if expr1 can be converted to true return expr1 else returns expr2

// logical and(&&) return first falsy from the expression , if all true , the value of last operand is returned
// logical or(||) convert the first one to truthy if possible return the first on else the last operand is returned

// With the || operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned.


// O/P based question

const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
  myPromise().then(res => console.log(res));
  console.log('second');
}

async function secondFunction() {
  console.log(await myPromise());
  console.log('second');
}

firstFunction();
secondFunction();


//  In the first function the we (sort of) put the myPromise function aside while it was running, 
// but continued running the other code, which is console.log('second') in this case. 
// Then, the function resolved with the string I have resolved,
//  which then got logged after it saw that the callstack was empty.


// With the await keyword in secondFunction, we literally pause the execution of an async function
//  until the value has been resolved before moving to the next line.
// This means that it waited for the myPromise to resolve with the value I have resolved, and only 
// once that happened, we moved to the next line: second got logged.


// O/P based question
const Cset = new Set();

Cset.add(1);
Cset.add('Lydia');
Cset.add({ name: 'Lydia' });

for (let item of Cset) {
  console.log(item + 2);
}

// for the first item we get 1+2 which logs 3 in console
// for the second item we get 'lydia' + 2 , so here since 2 is not a string it gets converted to a string and console logs 
// 'lydia2'
// for the third item we get {name:"lydia"} and  we want to log {name:"lydia"} + 2 , so it tries to stringify both 
// Whenever we stringify a regular object, it becomes "[object Object]".
//  "[object Object]" concatenated with "2" becomes "[object Object]2".

// O/P based question

function compareMembers(person1, person2 = Person) {
    console.log(person1,person2);
    if (person1 !== person2) {
      console.log('Not the same!');
    } else {
      console.log('They are the same!');
    }
  }
  
  const Person = { name: 'Lydia' };
  
  compareMembers(Person);
  

//   Objects are pass by reference , so here we are passing the Person to compareMemebers function ,
// from the function definition we can see that person2 is defaulted to the value Person 
// So both person1 and person2 are referencing the same object Person 


// O/P based question

const emojis = ['✨', '🥑', '😍'];

emojis.map(x => x + '✨');
console.log(emojis);
emojis.filter(x => x !== '🥑');
console.log(emojis);
emojis.find(x => x !== '🥑');
console.log(emojis);
emojis.reduce((acc, cur) => acc + '✨');
console.log(emojis);
emojis.slice(1, 2, '✨');
console.log(emojis);
emojis.splice(1, 2, '✨');
console.log(emojis);


// With splice method, we modify the original array by deleting, replacing or adding elements.
//  In this case, we removed 2 items from index 1 (we removed '🥑' and '😍') and added the ✨ emoji instead.
// map, filter and slice return a new array, find returns an element, and reduce returns a reduced value.
// array.splice(index, howmany, item1, ....., itemX)



// Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. 
// They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". 
// When we try to access the variables before they are declared, JavaScript throws a ReferenceError.



// O/P based question
console.log(`${(x => x)('I love')} to program`);

// Expressions within template literals are evaluated first , here we are calling an iffe (x => x)('I love') so it returns I love
// This results in I love to program


// O/P based question
const myMap = new Map();
const myFunc = () => 'greeting';

myMap.set(myFunc, 'Hello world!');

console.log(myMap); 
// {myFunc() : 'Hello world!'}  i,e  { () => 'greeting' => 'Hello world!' }.

//1
let value1 = myMap.get('greeting');
//2
let value2 = myMap.get(myFunc);
//3
let value3 = myMap.get(() => 'greeting');

console.log(value1,value2,value3)



// O/P based question

const Lperson = {
    name: 'Lydia',
    age: 21,
  };
  
  const changeAge = (x = { ...Lperson }) => (x.age += 1);
  const changeAgeAndName = (x = { ...Lperson }) => {
    x.age += 1;
    x.name = 'Sarah';
  };
  
  changeAge(Lperson);
  changeAgeAndName();
  
  console.log(Lperson);

//   O/P based question

const config = {
    languages: [],
    set language(lang) {
      return this.languages.push(lang);
    },
  };
  
  console.log(config.language);

//   The language method is a setter. Setters don't hold an actual value, 
//   their purpose is to modify properties. When calling a setter method, undefined gets returned.

// O/P based question
const name = 'Lydia Hallie';

console.log(!typeof name === 'object');
console.log(!typeof name === 'string');

// type of name returns string so The string "string" is a truthy value,\
//  so !typeof name returns the boolean value false. false === "object" and false === "string" both return false.


// Suits And courts card deck problem using generator functions

cardDeck = ({
  suits: ["♣️", "♦️", "♥️", "♠️"],
  court: ["J", "Q", "K", "A"],
  [Symbol.iterator]: function* () {
    for (let suit of this.suits) {
      for (let i = 2; i <= 10; i++) yield suit + i;
      for (let c of this.court) yield suit + c;
    }
  }
})

console.log([...cardDeck]);


// Merge arrays based on matching ids


var a1 = [{ id : 1, name : "test"}, { id : 2, name : "test2"}, {id:4,name:'test4'}]
var a2 = [{ id : 1, count : "1"}, {id : 2, count : "2"},{id:3,count:"3"}];

let temp= []
let spreadtemp =[]

const a3 = a1.map(t1 => {
  a2.map(t2 => {
    console.log(t1,t2)
    if(t1.id === t2.id){
      temp.push(Object.assign({},t1,t2))
      spreadtemp.push({...t1,...t2});
    }
  })
})

console.log(temp)
console.log(spreadtemp)
// const a3 = [...a1,...a2];

// console.log(a3);


// Find 4 largest elements from an array and return their sum , if array has las then 4 items return sum of the items

let exp1 = [7,-2,3];
let exp2 = [1,2,1,1,-8];
let exp3 = [-4,-5,7,9,-11];
let exp4= [1,1,1,1,1,-6];

function arrayExp(arr){
  let total = 0;
  if(arr.length < 4){
    console.log(arr.reduce((acc,cur) => acc + cur,total));
   return arr.reduce((acc,cur) => acc + cur,total);
  }
  let sortedArr = arr.sort((a,b) => a<b?1:a>b?-1:0)
  console.log(sortedArr);
  let fourLargeArr = sortedArr.slice(0,4);
  console.log(fourLargeArr);
  return fourLargeArr.reduce((acc,cur) => acc+cur,total);
}

console.log(arrayExp(exp1));
console.log(arrayExp(exp2));
console.log(arrayExp(exp3));
console.log(arrayExp(exp4));


// O/P Based question

const arr = [
  { x: 'a', order: 10},
  { x: 'a', order: 3},
  { x: 'a', order: 4},
  { x: 'b', order: 3},
  { x: 'b', order: 2},
  { x: 'b', order: 1}
];

let result = {a:[],b:[]}

for( let key in arr){
  console.log(arr[key]['x']);
  if(arr[key]['x'] === "a"){
    result['a'].push(arr[key])
  } else if(arr[key]['x'] === "b"){
    result['b'].push(arr[key])
  }
}

console.log(result)


// O/P based questions

console.log(2 + true);
console.log(+'03');
console.log(+'as');




var x = 10;

if (function abc(){})

{

x += typeof abc;

}

console.log(x);


// "10object"
// ===================
let ditems = [];

ditems[null] = "foo";
console.log(ditems.length); 
ditems[100] = "bar";
console.log(ditems.length);
// ===============
// ==============
// function abc(){
// console.log(a,b,c);
// var a=10;
// let b =20;
// const c= 40;
// }
// abc();


let setarr = [1,1,2,2,3,3,4,4,5]

let newset = new Set(setarr);
console.log(...newset);
// =========================

// Remove a character from a given string, Also take input how many number of times character should be removed.
// Example1:
// Input string: dependent
// Input character to be removed: e
// Input number of times character to be removed: 2 
// Output: dpndent
// Note: It should NOT remove all the 'e'



function modify(arr,char,times){
let modifiedString="";
let count = 0;

for(let key in arr){
  if(arr[key] === char){
    if(count <= times -1){
      arr.splice(key,1)
      count++;
    }
  }
}
return modifiedString=arr.join("")
}

let string = "dependent";

let resultmodify = modify([...string],'e',2);

console.log(resultmodify);
// ==================

let fx = 3;
let fy = new Number(3);
let fz = 3;
console.log(fx==fy);
console.log(fx=== fy);
console.log(fy === fz);