//script
var i = 0;
function add() {
    var input = document.getElementById('td1').value;
    var inputdate = document.getElementById('date').value;
    
    if (!input||!inputdate) {
        alert('내용&날짜를 입력해 주세요')
    } else {
        var node = document.createElement("SPAN");
        var checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");


        var textnode = document.createTextNode(input + ' - ' + document.getElementById('date').value);
        node.id = 'node' + i;
        checkbox.id = 'checkbox' + i;
        node.appendChild(textnode);
        document.getElementById("list").appendChild(checkbox)
        document.getElementById("list").appendChild(node)
        document.getElementById('td1').value = ""; 
        document.getElementById('date').value ="";
        removeButton(i);
        i++;
    }
}

function removeButton(n){
    var remove_btn = document.createElement("Button");
    remove_btn.innerHTML = "-";
    remove_btn.id = 'del' + n;
    remove_btn.className = "minus";
    remove_btn.onclick = function() {remove(n)};
    document.getElementById("list").appendChild(remove_btn);
}

function remove(n) {
    document.getElementById('node'+n).style.display='none'; 
    document.getElementById('del'+n).style.display='none';
    document.getElementById('checkbox'+n).style.display='none';
}