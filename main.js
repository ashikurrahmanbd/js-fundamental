// js core concept

// therer are only three types of data in js these are premitive 
// rest all date types are object
let a = "Ashik"; //string
const phoneNo = 1715261537;
let hasWife = false; //boolean


// Dclare a variable
let name = "Ashikur Rahman";

const number = 100; //not changeable

var profession = "Software Engineer" //old js variable declare


// js Array

// dclear an array
const numbers = []; //emapty array

const allNumbers = [10, 20, 30, 40];

const friends = ["Ashik", "shafiq", "akash"];

//push an element to an array
allNumbers.push(50);
allNumbers.push("shafiq"); //string also possible to add inside an array where all the elements are number

//delete teh last element of an array
allNumbers.pop();

// delete an array element from the first of an array
allNumbers.shift();


// loop though an array
for(let i = 0; i<allNumbers.length; i++){

    // console.log(allNumbers[i]);

}

// using other way
for(let num of allNumbers){
    // console.log(num)
}

// loop using for each
allNumbers.forEach(element => {
    // console.log(element)
});


// write simple funciton in js
function printName(){
    // console.log("something", "about me")
}

// funciton using parameter
function greetings(name){
    return "greetings" + name;
}

// funciton with a return 
function addTwoNuber(firstNum, seconNum){
    return firstNum + seconNum;
}

// arrow Function examples

const friendNamesBook = () => ['ashik', 'shafiq', 13, 'akash'];

// arrow function with an example
const goodFriend = (freindNames) => {
    if(Array.isArray(freindNames)){
        freindNames.forEach(friend => {
            if(friend.length === 5){
                return friend;
            }
        });
    }else{
        return "you did not submit and array"
    }
}

const friendArray = ["ashikur Rahman", "shafiq Akash", "akash"];

goodFriend(friendArray);

//Array 
// differ operation in array

// find, filter, map
// this fthree method of the array recieve the fucntion as a parameter and return the value based on our condition

// ********** find  using normal function ******* 

const goodNumbers = [15, 10, 20, 30, 40, 50, 60, 70, 80, 90];
//using find method classic way
const onlyTen = goodNumbers.find(findTen);

function findTen(number){
    return number > 20;
}

//same function using anonymous function
const onlyTenNumber = goodNumbers.find(function(desiredNumber){
    return desiredNumber < 20; //only single value or element will be return
});

// the above function can be written as an arrow function
const findOnlyTen = goodNumbers.find(desiredNumber => {
    return desiredNumber < 20;
})

// Filter method of array with example
const moreThanTweenty = goodNumbers.filter(numbers => {
    // return numbers > 50; //will give an array based on this condition
    return numbers > 50;
});

//another filter example
const Products = [
    {
        name: "Samsung",
        price: 5000,
        model: "old"
    },
    {
        name: "Apple",
        price: 50000,
        model: "old"
    },
    {
        name: "Xamio",
        price: 5000,
        model: "old"
    },
    {
        name: "Vivo",
        price: 5000,
        model: "old"
    },

];

//filer prodct and remove Ximio and create a new array using filter
const newArrayWithoutXamio = Products.filter(element => element.name !== "Xamio");


// Map method of array
// map method is basically return array and we can return the modified array whatever we want

const allArrayNumbers = [10, 50, 20, 30, 40, 60, 80, 70, 100];

const modifiedArray = allArrayNumbers.map(element => {
    return element * 2;
});


//simple one parametter arrow function where info is the parameter
const bkInfo = info => console.log(info, "all about information")


// simple if else condition

let amarNam = "Ashik";
if(amarNam !== "Ashik"){
    // console.log("you are not ahsik")
}else{
    // console.log("You are ashik")
}

//short if else or ternary operator
const numOne = 10;
const numTwo = 20;
const numCheck = (numOne > numTwo) ? numOne : numTwo; //short if else


// simple switch statement
let firstName = "Shafiq";

switch(firstName){
    case "Alam":
        // console.log("You are not actual person");
        break;
    
    case "Shafiq":
        // console.log("You are Shafiq");
        break;

    default:
        // console.log("Default");
}

// simple object in js
const Person = {
    name: "Ashikur Rahman",
    age: 25, 
    profession: "Software Developer",
    salary: function(fiverMoney, upworkMoney, fivesquidMoney){
        return fiverMoney + upworkMoney + fivesquidMoney;
    },
    outfit: {
        height: 5.4,
        eyeColor: "black",
        language: "bangla"
    },
    skill:{
        platform:{
            web: ['HTML', 'CSS', 'JS', 'PHP', 'WordPress', 'Shopify', 'MERN'],
            desktop: ['electron JS', 'C Sharp'],
            android: ['java', 'kotlin', 'flutter']
        }
    }
}

// how to access property from an object

// number 1 way
Person.name;
Person.profession;

// accessing a function from object 
Person.salary(500, 1000, 500);

//accesing a object form a root object
Person.outfit.height;

//accessing and array from an object inside another obejct
// Full array
Person.skill.platform.web;

//just array element
Person.skill.platform.web[4];

//loop though an array which is inside an object
//this will return the full array
const skillForWeb = Person.skill.platform.web;

//now as usal iterrate this array 
//you can use forEach, or simple for of
skillForWeb.forEach(element =>{

    // console.log(element)

})

//or just using for of
for(let element of skillForWeb){

    // console.log(element)

}

// end of obejct operation


// Destructuring an Array
// desctructuring is a process where we can get the valus out and set those in a variable
const arrayOne = ["ashik", "shafiq", 25, "Akash", "jannat"];

const [myName, vaiyaName] = arrayOne;

//above two vaible has got two values from the array where myName = Ashik, and vaiyaName = Shafiq


//Spread Operator
//spread operator main use for connecting two array or copay and array into a new one

const sArray = [10, 20, 30, 40, 50];
const newSArray = [50, 100,...sArray]

// Template Literal or string
//template string is basically an oppertunity which allows us to write html and js inside the backtic sign

const ageAshik = 34;
const templateString = `<h1>hello There my age is ${ageAshik}</h1>`;


// object descrtureing 
const AnotherPerson = {
    personName: "shafiq",
    age: 25,
    profession: "Freelancer",
    skill:{
        software: {
            graphics: ['adobe', 'msword']
        }
    }
}

const {personName, age} = AnotherPerson; // here person, age acting as property which has out and declareed as variable with the value of that property

const skill = AnotherPerson?.skill?.software?.graphics; //optional chaing from an object it means that if the property exists it will go next and this way we can understand which property finally getting the outpout from the object and which are undefined


// Api related functions
// Fetach from and API and return a json response

let url = 'https://jsonplaceholder.typicode.com/photos';

fetch(url)
.then(response => response.json())
.then(data => displayThumbnail(data))

// the above api sending data as an array and insde that aray we have the object so for getting the thubnailUrl we have to first iterate the array 

const displayThumbnail = (data) => {
    
    allArrayData = data //complete array of objects
    
    allArrayData.forEach(elements => {
        
        // console.log(elements.thumbnailUrl)
        // here we are getting 
        
    });
    
   
    
}
// end of fetch method

//JSON.Parse and JSON.stringify

// parse used to convert javaScript Object from JSON 

// stringfy used to covert JSON from JavaScript Object

const PersonThree = {
    personName: "BK",
    personAge: 25,
    works: function(){
        console.log("He works from home")
    }
}

// the aobove one is the javaScript Object
// if we want to conver it into json then we have to use JSON.strigify method
const personThreeStringify = JSON.stringify(PersonThree); //converted to JSON

//now if i want to again cover it into JavaScirpt objet i have to use Json parse
const personTheeJavaScriptObject = JSON.parse(personThreeStringify);

//get only the keys form an object
const pthreeObjectKeys = Object.keys(PersonThree);

// get only the values of the property from an object
const pThreeObjectValues = Object.values(PersonThree);

//loop through an object
for(eachProperty in PersonThree){
    // console.log(eachProperty)
}


// check truthy and falsee

// by default below are the truthy
// [], {}, any string, any number, true

const t1 = [];
const t2 = {};
const t3 = "anystring";
const t4 = 786;
const t5 = true;

if(t1 && t2 && t3 && t4 && t5){
    // console.log("true");
}else{
    // console.log("false")
}

//by default belows are the false
// empty string '', 0, undefined, null, false

const f1 = undefined;
const f2 = null;
const f3 = false;
const f4 = 0;
const f5 = '';

if(f1 && f2 && f3 && f4 && f5){
    // console.log("true")
}else{
    // console.log("False")
}

// end of truthy and false 

//different ways of declear a object

class personDefine{
    name;
    age;
    works(){

    };
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

}

const PersonObject = new personDefine("ashik", 25);
// console.log(PersonObject.name)

// another way 
const PersonFour = {
    name: "Shafiqul",
    age: 40,
    works: "freelancing"
}
// initiating the obejct 
const objPersonFour = Object.create(PersonFour);
// console.log(objPersonFour.name)

//LocalStorage and Session Storage

// local stroage. it save all the value as text not data type
const userArrayforLocalStorage = [
    {
        id: 1,
        name: "ashik",
        
    },
    {
        id: 2,
        name: "Shafiq",
        
    },
    {
        id: 3,
        name: "Akash",
        
    },
]
//if you want to set and array or object then you have to stringify first
const finalUserArray = JSON.stringify(userArrayforLocalStorage)

localStorage.setItem('userInfo', finalUserArray);

//if i want to retrive that object from the local stroage i must have to parse it first
const getUserinfo = JSON.parse(localStorage.getItem('userInfo'))

//setting a normal value to local storage
localStorage.setItem('speicalPerson', 'Zara Rahman')

const getData = localStorage.getItem('speicalPerson');
//end of Local Stroage

//for clearing the local stroage simply you can appy localstorage clear function
// localStorage.clear()

// session storage
sessionStorage.setItem('userInfo', JSON.stringify([{name: "ashik", age:25}]))

sessionStorage.setItem("productInfo", "Good Product");

// all other method are teh same like the local storage

sessionStorage.clear() //clearing the session

//what is asyncronise natrue
//by default JS is syncronised language
//and to make ti asyncronise we have some method

//setTimeOut(), setInterval(), fetch(), async await those function makes js asyncronise

setTimeout(function(){
    // what ever i want to perform this action will be executed after 5 seconds
    // console.log("something")
}, 5000)

//set interval

// setInterval(function(){
//     //this function will constantly call afer 1 seconds
// }, 1000)

//alert, confirm and promtp

// alert() is a default browser interface with a simple yes Button

// promtp() is a default browser interface to take the input from the user it has two button ok and cancel

// prompt("hello give your phone number");

// confirm() is also another interface like prompt but it returns two boolean values where yes is true and no is false

// const cofirmAns = confirm();
// if(cofirmAns == true){
//     const p = document.getElementById("para");
//     p.innerText = "You clicked on the yes";
//     document.body.appendChild(p)
// }


//some window.history api

//if we want to go 1 step back we can simply use window.history.back() method

// window.history.back()

// if we want to go 2 step back then
// window.history.back(-2)































