// Preview Functioning
let enterButton=document.querySelector(".enterButton");
let noThanks=document.querySelector(".noThanks");
let preview=document.querySelector(".preview");
let body=document.querySelector("body");
enterButton.addEventListener("click",()=>{
    preview.style.display="none";
    body.style.height="auto";
    body.style.overflow="auto";
})
noThanks.addEventListener("click",()=>{
    location.href="https://google.com";
})

// Second View activate
let yes=document.querySelector(".yes");
let secondScreen=document.querySelector(".secondScreen");
yes.addEventListener("click",()=>{
    console.log("working");
    secondScreen.style.display="flex";
    secondScreen.style.flexDirection="column";
    document.querySelector(".noImg").style.display="none";
})

// Click on no
let no=document.querySelector(".no");
no.addEventListener("click",()=>{
    document.querySelector(".noImg").style.display="flex";
})


// Get all the letters
let wrapper=document.querySelector(".wrapper");
let letter1=document.querySelector("#letter1");
let letter2=document.querySelector("#letter2");
let letter3=document.querySelector("#letter3");

letter3.addEventListener("click",()=>{
    letter3.style.top="-5vh";
    letter3.style.left="-24vw";
    letter3.style.transform="none";
    letter3.style.zIndex="10";
})
letter2.addEventListener("click",()=>{
    letter2.style.top="-5vh";
    letter2.style.left="30vw";
    letter2.style.transform="none";
    letter2.style.zIndex="10";
})
letter1.addEventListener("click",()=>{
    letter1.style.top="35vh";
    letter1.style.transform="none";
    letter1.style.zIndex="10";
})