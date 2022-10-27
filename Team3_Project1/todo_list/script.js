//script
var i = 0;
var page = 0;
function add() {
    var input = document.getElementById('td1');
    var inputdate = document.getElementById('date');
    
    if (!input.value || !inputdate.value) {
        alert('내용&날짜를 입력해 주세요')
    } else {
        var box = document.createElement("DIV");
        var node = document.createElement("SPAN");
        var checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");


        var textnode = document.createTextNode(input.value + ' - ' + document.getElementById('date').value);
        box.id = 'box' + i;
        box.className = 'box';
        checkbox.className = 'checkbox';
        node.appendChild(textnode);
        box.appendChild(checkbox);
        box.appendChild(node);

        input.value = "";
        inputdate.value = "";

        var remove_btn = document.createElement("Button");
        remove_btn.innerHTML = "X";
        remove_btn.className = 'delete';
        remove_btn.onclick = function() {box.remove()};
        box.appendChild(remove_btn);

        document.getElementById('list' + page).appendChild(box);

        i++;
    }
}

function change(n) {
    page = n;
    document.getElementById('list0').style.display = 'none';
    document.getElementById('list1').style.display = 'none';
    document.getElementById('list2').style.display = 'none';
    document.getElementById('list' + page).style.display = 'block';
}