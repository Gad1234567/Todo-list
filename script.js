const inpuBox = document. getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function addTask(){
    if(inpuBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inpuBox.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inpuBox.value = "";
    saveData();
}

ListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}), false;

function saveData(){
    localStorage.setItem("data", ListContainer.innerHTML);
}
function showTask(){
    ListContainer.innerHTML = localStorage.getItem("data");
}
showTask();