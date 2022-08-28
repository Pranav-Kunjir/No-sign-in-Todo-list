var addArray = [];
var doneArray = [];
if (localStorage.getItem("finalarray") === null) {
    let final = [];
    localStorage.setItem("finalarray",JSON.stringify(final));
}
if (localStorage.getItem("donearray") === null) {
    let done = [];
    localStorage.setItem("donearray",JSON.stringify(done));
}

function addtodo (){
    // var todo = document.getElementById("input").value;
    // var todolist = [];
    // todolist.push(todo);
    // console.log(todolist)
    var add= document.getElementById("input");
    if ((add.value).length === 0 ){
        alert("Type something in the input field");
    } else{
        addArray.push(add.value);
        // console.log(addArray)
        var oldItems = JSON.parse(localStorage.getItem('finalarray')) || [];
        oldItems.push(add.value);
        localStorage.setItem("finalarray",JSON.stringify(oldItems));
        add.value = "";
        addhtml()
    }
    
}
function addhtml (){
    var oldItems = JSON.parse(localStorage.getItem('finalarray')) || [];
    var parentdiv = document.getElementById("todotext");
    parentdiv.innerHTML = ""
    var index = 0
    for ( var i = 0; i < oldItems.length; i++){
        var pelement = document.createElement("p");
        var text = document.createTextNode(oldItems[i]);
        // pelement.classList += "todotext";
        pelement.classList.add("todotext")
        pelement.appendChild(text);
        parentdiv.appendChild(pelement);
    }
}
function add_done_html (){
    var doneItems = JSON.parse(localStorage.getItem('donearray')) || [];
    var parentdiv = document.getElementById("donetodos");
    parentdiv.innerHTML = ""
    var index = 0
    for ( var i = 0; i < doneItems.length; i++){
        var pelement = document.createElement("p");
        var text = document.createTextNode(doneItems[i]);
        pelement.classList += "dash";
        pelement.appendChild(text);
        parentdiv.appendChild(pelement);
    }
}

addhtml()
add_done_html()
var deleteelement = document.getElementsByClassName("indtext");
deleteelement.onclick = function (){
    console.log("deletes")
}
var curr_todo = document.getElementById("todotext")
var done_todo = document.getElementById("donetodos")
curr_todo.onclick = e => {
    var element = e.target.innerHTML;
    var oldItems = JSON.parse(localStorage.getItem('finalarray')) || [];
    var doneItems = JSON.parse(localStorage.getItem('donearray')) || [];
    var index = 0
    for ( var i = 0; i < oldItems.length; i++){
        if (element == oldItems[i]){
            console.log("delete " + oldItems[i])
            doneItems.push(oldItems[i])
            oldItems.splice(i,1);
            // console.log(doneItems);
            console.log(oldItems);
            localStorage.setItem("finalarray",JSON.stringify(oldItems));
            localStorage.setItem("donearray",JSON.stringify(doneItems));
            addhtml();
            add_done_html();
        };
    };

} 
done_todo.onclick = e => {
    var element = e.target.innerHTML;
    var doneItems = JSON.parse(localStorage.getItem('donearray')) || [];
    var index = 0
    for ( var i = 0; i < doneItems.length; i++){
        if (element == doneItems[i]){
            console.log("delete " + doneItems[i]);
            doneItems.splice(i,1);
            console.log(doneItems)
            localStorage.setItem("donearray",JSON.stringify(doneItems));
            add_done_html();
        };
    };

} 

