const decbtn=document.getElementById("b1");
const resetbtn=document.getElementById("b2");
const incbtn=document.getElementById("b3");
const countl=document.getElementById("l1");

let count=0;

incbtn.onclick=function(){
    count++;
    countl.textContent=count;
}
decbtn.onclick=function(){
    count--;
    countl.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    countl.textContent=count;
}