const button =document.getElementsByTagName("button");
let body=document.getElementsByTagName("body");
let span=document.getElementById("span");
let style = document.body.style;

const color = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function getRandomNumber(){
    return Math.floor(Math.random() * color.length);
}

function changeColor(){
    let code = "#";
    for (let i=0;i<8;i++){
        code+=color[getRandomNumber()];
    }
    span.textContent=code
    style.backgroundColor=code
}

