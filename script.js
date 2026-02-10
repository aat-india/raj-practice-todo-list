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

function getOldList(){
    const oldList = JSON.parse(localStorage.getItem("arr")); //getting old data from local storage
    if(oldList){

        for(let i=0;i<oldList.length;i++)
        {
            mylist.push(oldList[i]);  //ASSIGN oldList data to myList array
        }
    }
    //console.log("old list : ",mylist);  //testing old list data are assigned to myList
    
}


getOldList();










//console.log(btn);
//console.log(text);
//console.log(unorderlist);