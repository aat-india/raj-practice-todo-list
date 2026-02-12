//raj todolist script file
const mylist = []

const btn=document.getElementById("btn1");
const text=document.getElementById("text1");
const unorderlist=document.getElementById("unorderlist1");

btn.addEventListener('click', rajinput);
let index=-1;
function rajinput(){
    //console.log("button addEventListner activated!!!!!!!");
    let userinput=text.value;
    if(!userinput){
        alert("ERROR : No input");
        return;
    }


    mylist.push(userinput); //adding input data in mylist array by push function
    index=mylist.length-1;
    //show data to user
    createNewLiElement(userinput, index);  //input data storing in LIST tag created in unordered list of HTML
    storeInLocalStorage(); //input data will storing in local storage
    console.log(mylist);

    text.value = ""; //text field again blank 
    //console.log(input);
}

function createNewLiElement(userInput, index)
{
    let li1=document.createElement("LI");
    //creating label to show user input content
    let label = document.createElement("LABEL");
    label.textContent = userInput;
    //create delete button
    let deleteButton = document.createElement("BUTTON");
    deleteButton.textContent = "X";

    deleteButton.addEventListener("click", function(){
        deleteElement(index);
    });

    let div = document.createElement("DIV");
    div.appendChild(label);
    div.appendChild(deleteButton);
    div.style.width = "150px";
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.marginBottom = "20px";
   

    li1.appendChild(div);
    unorderlist.appendChild(li1);
}

function deleteElement(index){
    mylist.splice(index, 1);
    console.log("testing splice in my list ", mylist);
    storeInLocalStorage();  //delete element from local storage
    unorderlist.innerHTML = ""; //unordered list old data becomes null
    showOldList();  //new updated list is shown after deleting element
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

//printing OldList at starting when we refresh or close the browser this oldList must be shown as previously shown its a illusion
function showOldList(){
    for(let i=0; i<mylist.length;i++)
    {
        createNewLiElement(mylist[i]);
    }
}

getOldList();
showOldList();










//console.log(btn);
//console.log(text);
//console.log(unorderlist);