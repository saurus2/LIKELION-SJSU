//script
var i = 0;
function add() {
    var input = document.getElementById('td1').value;
    if (!input) {
        alert('내용을 입력해 주세요')
    } else {
        var node = document.createElement("SPAN");
        var textnode = document.createTextNode(input);
        node.id = node + i;
        node.appendChild(textnode);
        i++;
        document.getElementById("list").appendChild(node)
        document.getElementById('td1').value = "";
    }
}