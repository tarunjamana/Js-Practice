// objects in js

const user ={
    name:"tarun jamana",
    age:28,
    "like this video":true
}

console.log(user.name)

user.name="new name";
delete user.age

console.log(user)
console.log(user["like this video"]);
delete user["like this video"];
console.log(user)


// interview questions exp
const func = (function (a){
delete a;
return a
})(5)

console.log(func);


const property = "Name"
const name = "tarun jamana"

const newUser = {
[property]:name
}


console.log(newUser)



const user2 = {
    name:"ROadecs",
    age:34,
    isMan:true
}

for(key in user2){
    console.log(user2[key]);
}


// O/P based Questions Q1
const obj = {
    a:"one",
    b:"two",
    a:"three"
}

console.log(obj)

// If two keys with the same name , the first key with the name will be specified with the last key value but will be in the start position


// Q2 Create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2

let nums ={
    a:100,
    b:200,
    title:"My nums",
};

multiplyByTwo(nums);

function multiplyByTwo(obj){
    for (key in obj){
        if(typeof obj[key] === "number"){
            obj[key] = obj[key]*2;
        }
    }
}

console.log(nums)


// Q3 - What's the Output of the following code

const a = {}
const b = {key:"b"}
const c ={key:"c"}

a[b] = 123;  
// a["[object Object]"] = 123
a[c] = 456;
// a["[object Object]"] = 456
console.log(a)
console.log(a[b])

// Q4 What is JSON.stringify and JSON.parse

const jsonObj = {
    name:'json batch',
    age:43
}

console.log(jsonObj);

const strObj = JSON.stringify(jsonObj);

// localStorage.setItem("test",strObj);
// used for local storag

console.log(strObj);

 console.log(JSON.parse(strObj))

//  Q5 Whats is the output

console.log([..."tarun"])

// Q6 whats the output
const q6user = {name:"tarun",age:28}

const admin = {admin:true,...q6user};

console.log(admin)


// Q7 O/P based question
const settings = {
    username:"tarun",
    level:19,
    health:90
}

const data  = JSON.stringify(settings,["level","health"]);

console.log(data);


// Q8 O/P based question

const shape = {
    radius:10,
    diameter(){
        return this.radius*2;
    },
    perimeter: () => 2*Math.PI*this.radius
}

console.log(shape.diameter());
console.log(shape.perimeter())


// Q9 destructuring in objects

let destructure = {
    dname:"tarun",
    dage:34,
    fullName:{
        firstName:"tarun",
        lastName:"jamana"
    }
}

const {dname,dage} = destructure;

const {fullName :{firstName}} = destructure

// Nested Destructuring
console.log(firstName)
console.log(dname,dage)


// Q10 O/P based question

function getItems(fruitList,favoriteFruit,...args){
    return [...fruitList,...args,favoriteFruit];
}

const items = getItems(["banana","apple"],"pear","orange");

console.log(items)

// Q11 questions on object referencing

let C = {greeting:"Hey!!"};
let D;

D = C;

C.greeting = "hello";

console.log(D.greeting)

// providing the reference  but not the complete object

// Q12 What is the output

console.log({a:1} =={a:1})
console.log({a:1} === {a:1})

// both are indipendent objects and referencing different areas in the memeory

// Q13 What is the output

let person = {name:"tarun"};
const members =[person];
person = null;
console.log(members)

// since we are only just passing the person object to members[0] but if we do person.name=null

// person.name= null;

console.log(members);

//Q14 O/P based question

const value = {number:10};

const multiply  = (x = {...value}) =>{
    console.log(x.number *= 2);
}
//  since using spread operator as a default value it just clone the object and doesnt modify the original array
multiply(); // 20
multiply(); //20
multiply(value) //20  number:20 after completion
multiply(value) // 40 since number was modified in the previous call


// Q15 O/P based question


function changeAgeAndReference(person){
    person.age = 25;

    person = {
        name:"John",
        age:36
    };

    return person
}

const personObj1 ={
    name:"alex",
    age:43
};

const personObj2 = changeAgeAndReference(personObj1);


console.log(personObj1);
console.log(personObj2)

// since we are reassiginging the object it will return the reassigned obj

// Q16 what is shallow and deep copying ? 

const cloneObj = {
    name:"adasf",
    age:43
}

const objClone = Object.assign({},cloneObj);

objClone.age=23;

console.log(objClone);
console.log(cloneObj)

// other way is using JSON.parse(JSON.stringify(obj));

const jsonObjClone = JSON.parse(JSON.stringify(cloneObj));
jsonObjClone.age = 23
console.log(jsonObjClone)

// other way is 

const desOBjClone = { ...cloneObj};

desOBjClone.age =13;

console.log(desOBjClone)