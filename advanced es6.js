let student={
    greet:function(){
        console.log("hello")
    }
};
student.greet()
//with es6
let student1={
    greet(){
        console.log("hello")
    }
};
student1.greet()


//computed property names
let key="course";
let student2={
    [key]:"MERN"
};
console.log(student2)

//optimal chaining
//oc safely accesses
//nested properties
//without op

// let faculty={
   // name:"ramesh"
//};
//console.log(faculty.address.city)

let faculty1={
    name:"ramesh"
};
//prevents the errors when properties not available
console.log(faculty1.address?.city)

//Nested example
let employee={
    personal:{
        name:"Rahul"
    }
}
console.log(employee.personal?.location)

//optional chaining with arrays
let colors=["red","green"];
console.log(colors[0])
console.log(colors?.[5])

//opc with functions

let student3={
    greet(){
        console.log("hello")
    }
};
student3.greet?.()

//Nullish coalescing(??)
//provides a default value "only"
//when the left value is 
//null or undefined
//Syntax:value??defaultvalue

//Example:
let username=null;
console.log(username??"Guest")

let city;
console.log(city??"some where on the earth")

//      ||

let age=0;
console.log(age??18)

let score=null;
let result=score??36;
console.log(result)

//React Example:
//const username1=user?.name??"Guest"
const employee1={
    id:101,
    name:"seema"
};
console.log(employee1.address?.city??"not available")
let arr=[10,20,30,40]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
};
//new method
arr.forEach((num)=>{
    console.log(num)
})

//callback function:
//is a function passed as an argument to another function
//callback functio 
function greet(name){
    console.log("happy birthday" +name)
};
//higher order function
function process(Callback){
    //calling callback
    Callback("venkatesh")
}
process(greet)

//callback using arrow function
//function process(Callabck){
  //  Callback()
//};
//process(()=>{
  //  console.log("welcome students")
//})
//Higher order function
//accepts another function as an arguments
//or
//returns another function

function calculate(operation,a,b){
    return operation(a,b)
}
function add(a,b){
    return a+b;
}
console.log(calculate(add,10,20))

//function multiple functions
function substract(operation,a,b){
    return operation(a,b)
}
function sub(a,b){
    return a-b;


}
console.log(substract(sub,20,30))

function multiplication(operation,a,b){
    return operation(a,b)
}
function multi(a,b){
    return a*b;


}
console.log(multiplication(multi,20,30))

function division(operation,a,b){
    return operation(a,b)
}
function div(a,b){
    return a/b;
}

console.log(division(div,20,30))

//for-each -->used for iterators
//it cannot creat new values
//syntax:array.forEach(function(element)
//});
let numbers=[10,20,30,40]
numbers.forEach(function(num){
    console.log(num)
});
//arrow funct:
numbers.forEach((num,index)=>{
    console.log(index,num)
})

//Map();map(function,iterables)->Python
//Create a new array
//original array  remains unchaged
let nums=[10,20,30];
let doubled=nums.map((num)=>{
    return num*2
})
console.log(doubled)

//let names=["rahul","priya","vishnu"]
//use map to make all the names to uppercase

let names = ["rahul", "priya", "vishnu"]
let upper = names.map(name =>name.toUpperCase())
console.log(upper);

//filter:retrns elements
//stisfying the condition

let number=[10,20,30,40,50]
let even=number.filter(num => num%2==0);
console.log(even)

//Reduce():
//it reduces the array into a single unit
let nums1=[10,20,30]
let sum=nums1.reduce((total,num)=>{
    return total+num;
},0)
console.log(sum)

//Find():retuns first matching element
let value=nums1.find(num=>num>25);
console.log(value);

let students=[
    {id:1,name:"rahul"},
    {id:2,name:"dinesh"},
];
let student10 = students.find(s =>s.id==2);
console.log(student10)


//every():returns true if all 
// elements satisfy the condition
console.log(
    nums1.every(num=>num>5)
);  

//Variable scope
//function scope

function teacher(){
    var hello=10;
    let age1=33;
    console.log(age1)
    console.log(hello)
}
teacher()
//console.log(age1)
//console.log(hello)

//Block scope
//Anything inside the {}is block scoped
if(true){
    let city="Khammam";//cant block scope
    var country="India"//can be accesses function scope only
}
console.log(city)
console.log(country)
//1.assining
//2.declare
//3.scope

if (true){
    var a=67;
    let b=90;
    const c=30;
}
console.log(a)
//console.log(b)
//console.log(c)
// 
//Closures:is created when an
//inner functions remembers variables
//from its outer function even after
//outer function completes its executes

 function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
const counter = outer();
counter()
counter()
counter()