//Variables
const form=document.querySelector("form");
const input=document.querySelector("#txtTaskName");
const btnDeleteAll=document.querySelector("#btnDeleteAll");
const taskList=document.querySelector("#task-list");

eventListeners()
function eventListeners() {
    form.addEventListener("submit",addNewItem);
    taskList.addEventListener("click",deleteItem);
    
} function addNewItem(e) {
    if(input.value==""){
        alert("Add New Item");

    }
    const li=document.createElement("li")
    li.className="list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value));
   
    //create a
    const a=document.createElement("a");
    a.classList="delete-item float-right";
    a.setAttribute("href","#");
    a.innerHTML='<i class="fas fa-plus"></i>'
    li.appendChild(a);

    taskList.appendChild(li)
    
    input.value="";
     e.preventDefault()
}

function deleteItem(e) {
  if (e.target.className==="fas fa-plus") {
      e.target.parentElement.parentElement.remove();
  }
    e.preventDefault();
}

