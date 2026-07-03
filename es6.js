//ES6 concepts
//`` ---template literal `${}` using backticks
//old method
var name="srilatha";
console.log("hello",+name)

//with ES6
const name1="srilatha";
console.log(`hello ${name1}`)

//let vs var
var name="rahul";
var name="sanjay";
var name="banana";
console.log(name)
//var redeclares the variables
//which can lead to bugs
//let when the value
//needs to changes

let age=22;
age=33;
console.log(age)

//constant :when dont

//want to change value
const pi=3.14;
//pi=3.15
//const pi=3.17;cant redeclare

//objects with const
//values can be modified
const student={
    name:"yamini",
};
student.name="Lakshmi";
console.log(student)

//Arrow functions
function greet(name){
    return "hello" +name
};
console.log(greet("Yamini"))
//new school
const greet1=(name) =>{
    return "hello" +name
}
//calling:
console.log(greet1("Minni"))
//single line short function
const greet2=name=>`hello ${name}`;
const addition=(a,b)=>{
    return a+b
}
console.log(addition(10,20))
//Task:create an arrow functions to calculate the simple interest

//why arrow functions in react
//const App=()=>{
//  return <h1>Hello</h1>
//}

//Expressions:
let a=10;
let b=20;
console.log(`sum is ${a+b}`)

//Multiline line strings
let message=`
    Hello I am a good girl
    also a good student`;
console.log(message)

//default parameters
function greet3(name){
    console.log(`Hello ${name}`)
};
greet3();
//arrow function
const greet4=(name="Yamini")=>{
    console.log("hello"+name)
};
greet4();
//Destructuring:allows extracting values from arrays
//or objects into variables
let colors=["Red","Blue","Green","Purple"]
let first=colors[0];
let second=colors[1];
console.log(first)
console.log(second)

// with destructuring
let [first1,second1]=colors;
console.log(first1)
console.log(second1)

let numbers=[10,20,30,40,50]
let p=10
let r=30
//a,,c-->skips the b value
let [x,,z]=numbers;
console.log(x)
console.log(z)
//rest operator with destructuring
let [first2,...remaining]=numbers;
console.log(first2)
console.log(remaining)
//Object Destructering:
let faculty ={
    name8 : "Suresh",
    branch2 : "DS",
    f_id : 16
};
//let name5 = faculty.name;
//let branch = faculty.branch;

//des:
let {name8,branch2} = faculty;
console.log(name8);
console.log(branch2);

//renaming the variables
let {name9:FacultyName} = faculty;
console.log(FacultyName)
console.log(faculty)

//Default values
let {name10,city="Hyd"} = faculty
console.log(city)
//nested objects
let Student1={
    first_name:"Jolly",
    address:{
    city: "Hyd",
    state: "TS"
}
};
let {address:{city1}}=Student1;
console.log(city1)

//Advanced ES6 concepts
//spread operator(...):
//Expand an array or object into individual
//elements are properties

//usrd for:
//1.copy arrys
//2.merge Objects
//3.merge arrays
//4.copy Objects
//5.pass array Elements as function arguements

//syntax:...array,...object

//Example:
let nums=[10,20,30,40]
//spread expands array into individual values
console.log(...nums)

//Example2:copy
let arr1=[10,20,30,40]
let arr2=[...arr1];
arr2.push(60);
console.log(arr1)
console.log(arr2)

//Example3
let frontend=["HTML","CSS"]
let backend=["NODE","EXPRESS"]
let fullstack=[...frontend,...backend]
console.log(fullstack)

//Spread objects
let frnds={
    f_name:"srujana",
    age:21

};
let copy={
    ...frnds
};
console.log(copy)

//Merging the objects
let personal={
    firstName:"Venkatesh"
};
let address={
    current_city:"Guntur"
};
let merged={
    ...personal,
    ...address
};
console.log(merged)


//Rest Parameters:(...)
//spread-->expand the values
//rest-->collects the value

//syntax:
//function demo(...values){}
function sum_demo(...numbers){
    let total=0
    for(let num of numbers){
        total +=num;
    }
    return total;
};
console.log(sum_demo(10,20,30))   
console.log(sum_demo(10,20,30,40,50))

function student_marks(name,...marks){
    console.log(name);
    console.log(marks)
};
student_marks("Nihitha",80,40)

//Enhanced object literals

let f_name="Srilatha";
let l_name="yadav";
//self.name=name
let Employee={
    f_name:f_name,
    l_name:l_name

};
console.log(Employee)
//with ES6
let company={
    f_name,
    l_name
};
console.log(company)
