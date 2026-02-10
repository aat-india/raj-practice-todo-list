//raj todolist script file
let arr=[]

const btn=document.getElementById("btn1");
const text=document.getElementById("text1");
const unorderlist=document.getElementById("unorderlist1");

btn.addEventListener('click', rajinput);
let index=-1;
function rajinput(){
    //console.log("button addEventListner activated!!!!!!!");
    let input=text.value;
    if(!input){
        alert("ERROR : No input");
    }

    setLi(input);
    //console.log(input);
}

function setLi(input1)
{
    let li1=document.createElement("LI");
    li1.textContent=input1;
    unorderlist.appendChild(li1);
}












//console.log(btn);
//console.log(text);
//console.log(unorderlist);