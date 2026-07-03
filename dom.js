//Selecting the elements
let heading = document.getElementById("title")
console.log(heading)

//2nd method
//Query selector():
//it is going to return the first matching element
//id,class,tag
let heading1=document.querySelector("#title")
console.log(heading1)

let bio=document.querySelector("#title")
console.log(bio)
//Manupulation:change the text
heading.innerText="welocome to Chalapathi";

//selecting by tag name
let head2=document.querySelector("h2")
console.log(head2)
//selecting all same tags
let paragraphs=document.querySelectorAll("p")
console.log(paragraphs)
//loop through elements
paragraphs.forEach((item)=>{
    console.log(item.innerText);
})
//Reading the elements
console.log(
    document.getElementById("title").innerText
);
//Read HTML
//console.log(
//   document.getElementById("title").innerHTML
//);
 console.log(     
     document.getElementById("course").innerHTML="JavaScript"
 );
//changing multiple elements
function changeStyle(){
let paragraphs=document.querySelectorAll("p")
paragraphs.forEach((para)=>{
    paragraphs.innerText="all";
});
//Js can change Css also
let heading =document.getElementById("title")
heading.style.backgroundColor="pink";
heading.style.fontsize="40px";
//border
heading.style.border="2px solid black";
heading.style.width="300px";
};