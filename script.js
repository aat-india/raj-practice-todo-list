//raj todolist script file
const mylist = []
let tempIndex = -1;
let tempValue = "";

const btn=document.getElementById("btn1");
const input=document.getElementById("text1");
const unorderlist=document.getElementById("unorderlist1");
const updateBtn = document.getElementById("updateBtn");

btn.addEventListener('click', rajinput);

updateBtn.addEventListener("click", function updateMyList(){
    if(tempIndex == -1){
        return;  //no updation
    }
    const updatedValue = input.value;
    mylist[tempIndex] = updatedValue;
    storeInLocalStorage();
    updateDom();
    updateBtn.style.display = "none";  
    btn.style.display = "inline";  //active
    input.value = "";
    tempIndex = -1;   

});

function rajinput(){
    //console.log("button addEventListner activated!!!!!!!");
    let userinput=input.value;
    if(!userinput){
        alert("ERROR : No input");
        return;
    }

    mylist.push(userinput); //adding input data in mylist array by push function
    //show data to user
    createNewLiElement(userinput, mylist.length-1);  //input data storing in LIST tag created in unordered list of HTML
    storeInLocalStorage(); //input data will storing in local storage
    //console.log(mylist);

    input.value = ""; //input field again blank 
    //console.log(input);
}

function createNewLiElement(userInput, index)
{
    //console.log("demo testing INDEX VALUE  ",index)
    let li1=document.createElement("li");
    //creating label to show user input content
    let label = document.createElement("label");
    label.textContent = userInput;
    //create delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";

    deleteButton.addEventListener("click", function (){
        deleteElement(index);
    });

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function (){
        //console.log("demo testing  ",index);
        editMyList(index);
       
    });

    let div = document.createElement("div");
    div.appendChild(label);
    div.appendChild(deleteButton);
    div.appendChild(editButton);
    div.style.width = "150px";
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.marginBottom = "20px";
 
    li1.appendChild(div);
    unorderlist.appendChild(li1);
}

function editMyList(index){
        updateBtn.style.display = "inline"; //active
        btn.style.display = "none";  //hide
        input.value = mylist[index];
        tempIndex = index;
        console.log("testing index value : ",index);
        console.log("testing value at specific position : ",mylist[index]);
}

function updateDom() {
    mylist.innerHTML = "";
    showOldList();
}

function deleteItemFromList(mylist, index){
    mylist.splice(index, 1);
    //console.log("testing splice in my list ", mylist);
}
function deleteElement(index){
    deleteItemFromList(mylist, index)
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
    for(let i=0; i<mylist.length; i++)
    {
        createNewLiElement(mylist[i]);
    }
}

getOldList();
showOldList();










//console.log(btn);
//console.log(input);
//console.log(unorderlist);