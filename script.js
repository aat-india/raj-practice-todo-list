//raj todolist script file
const mylist = []

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
        return;
    }

    
    mylist.push(input); //adding input data in mylist array by push function
    setLi(input);  //input data storing in LIST tag created in unordered list of HTML
    storeInLocalStorage(); //input data will storing in local storage
    console.log(mylist);

    text.value = ""; //text field again blank 
    //console.log(input);
}

function setLi(input1)
{
    let li1=document.createElement("LI");
    li1.textContent=input1;
    unorderlist.appendChild(li1);
}

function storeInLocalStorage()
{
    localStorage.setItem("arr",JSON.stringify(mylist))
}












//console.log(btn);
//console.log(text);
//console.log(unorderlist);