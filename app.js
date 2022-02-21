var addArray = [];

function addtodo (){
    // var todo = document.getElementById("input").value;
    // var todolist = [];
    // todolist.push(todo);
    // console.log(todolist)
    var add= document.getElementById("input");
    addArray.push(add.value);
    console.log(addArray)
    var oldItems = JSON.parse(localStorage.getItem('finalarray')) || [];
    oldItems.push(add.value);
    localStorage.setItem("finalarray",JSON.stringify(oldItems));
    add.value = "";
    addhtml()
}
function addhtml (){
    var oldItems = JSON.parse(localStorage.getItem('finalarray')) || [];
    var parentdiv = document.getElementById("todotext");
    parentdiv.innerHTML = ""
    var index = 0
    for ( var i = 0; i < oldItems.length; i++){
        var pelement = document.createElement("p");
        var text = document.createTextNode(oldItems[i]);
        pelement.classList += "todotext";
        pelement.appendChild(text);
        parentdiv.appendChild(pelement);
    }
}

addhtml()
var deleteelement = document.getElementsByClassName("indtext");
deleteelement.onclick = function (){
    console.log("deletes")
}
window.onclick = e => {
    var element = e.target.innerHTML;
    var oldItems = JSON.parse(localStorage.getItem('finalarray')) || [];
    var index = 0
    for ( var i = 0; i < oldItems.length; i++){
        if (element == oldItems[i]){
            console.log("delete " + oldItems[i])
            oldItems.splice(i,1);
            console.log(oldItems);
            localStorage.setItem("finalarray",JSON.stringify(oldItems));
            addhtml();

        };
    };

} 
