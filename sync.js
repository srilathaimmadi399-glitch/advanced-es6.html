// console.log("start")
// console.log("learning js")
// console.log("end")


// //asynchronous
// console.log("start")
// setTimeout(()=>{
//     console.log("hello")

// },2000);
// console.log("end")

// //setTimeout:executes a function after a specified delay

// //`
// //syntax:
// //setTimeout(function(){
//     //code

// //},delay);
// //`
// //Example:
// setTimeout(function(){
//     console.log("Hello Students")
// },3000);
// //Example2:
// console.log("program started")
// //store time in timer
// let timer= setTimeout(()=>{
//     console.log("loading complete")
// },5000);
// console.log(timer)
// console.log("program finished")
// //clear Timeout():stops a timeout before excution
// clearTimeout(timer);

// let timer1=setTimeout(()=>{
//     alert("session expired");
// },10000);

// //cancel timeout
// clearTimeout(timer1)

// //after a specified interval
// //`
// //setInterval(function(){
// //code

// //},delay)
// //`
// //example
// setInterval(function(){
//     console.log("hello")
// },2000)

// //couter example
// let count=1
// let counter=setInterval(()=>{
//     console.log("count");
//     count++;
//     if(count==10){
//         clearInterval(counter)
//     }
// },1000);

// //setInterval(()=>{
//   //  let time=new Date();
//     //console.log(time.toLocaleTimeString())
// //},1000);
// //otp expiry
// //splash screen
// //auto logout
// //delay notifications
// //loding screen

// //Task:change colors of body using setInterval
// const arr=["red",
//     "green",
//     "blue",
//     "pink",
//     "violet",
//     "yellow"
// ]
// let i=0;
// setInterval(()=>{
//     document.body.style.backgroundColor=arr[i];
//     i++;
//     if(index==arr.length){
//         i=0;
//     }
// },2000)

// //callbacks:helps to executes task
// // another task finishes

// //callback function:passed as a argumentsto another funct

// function greet(name){
//     console.log("hello",+name);

// }
// //higher order funct
// function process(Callback){
//     Callback("srilatha");
// }
// process(greet);

// //Note:setTimeout():uses callback function

// //setTimeout(function(){

// //})

// //async callbacks
// setTimeout(function(){
//     alert("hello")
// })

// //Multiple async task
// `
// login
// |
// get users
// |
// get orders
// |
// payments
// |
// logout

// setTimeout()--Callbacks
// Problem:callbacks leads to nested code
// callback hell:occurs when multiple callbacks
// nested inside one another
// 1.read
// 2.debug
// 3.maintain
// `
// login(function(){
//     getprofile(function(){
//         getorders(function(){
//             makepayment(function(){
//                 logout(function(){
//                     console.log("done")
//                 });
//             });
//         });
//     });
// });

// //to solve above problem
// //promises:represents the eventual compilation
`
// promises states
 
// pending
//    |
// resolved(success)
//     or
// rejected(failure)

// syntax:
// let promise =
//  new Promise(function(resolve,reject){

// });
// `

//create a promise
 let promise=new Promise((resolve,reject)=>{
    resolve("success");
});
console.log(promise)

//resolve is called:op is successfull

//handle the success
promise.then((result)=>{
    console.log(result)
});

//reject():called when op fails
let promise1=new Promise((resolve,reject)=>{
    reject("network error")
});
promise1.catch((error)=>{
    console.log(error)
});
//then():successful execution
//catch():used to handle the error

function login(){
    return new Promise((resolve,reject)=>{
        let success=true;
        if(success){
            resolve("login successfull")
        }
        else{
            reject("login failed")
        }
    });
}
login().then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error)

});

//Callback hell:
login(function(){
    Profile(function(){
        orders(function(){
            console.log("chaining process")
        });
    });
});

// //promises
// login().then(getprofile)
// .then(getorders)
// .catch(error)

//Fake API call
function fetchDate(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve("data received")
        },3000);
    });
}
fetchDate().then(data=>{
    console.log(data)
    console.log("loding..")
})
console.log("plase wait")