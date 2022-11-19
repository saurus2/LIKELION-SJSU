/**
 * Jaesung Yoo, Dasom Lee
 * LIKELION US FALL 2022
 * TEAM4_Project2
 */

var pH = 7.0;
const speed = 10;
var makeTime = 0;
var fallTime = 0;

const oneWord = ["function", "void", "array", "for", "while", "Hello World", "java", "python", "gcc", "array", "number", "event", "date", "switch", "break", "public static void main(String[] args)", "(for i = 0; i < n; i++)", "(for i = 0; i > n; i--)", "while(n != 0)", "function fall()"];
const twoWords1 = ["int", "double", "float", "var", "const", "let", "String", "char", "Integer", "Double", "Object"];
const twoWords2 = ["element", "n", "car", "value", "input", "output", "sample", "arr"];

function fall() {
    var rainClass = document.getElementsByClassName("rain");

    for (var i = 0; i < rainClass.length; i++) {
        rainClass[i].style.top = (parseInt(rainClass[i].style.top) + speed) + 'px';

        if (parseInt(rainClass[i].style.top) > 800) {
            pH -= 1;
            rainClass[i].remove();
        }
    };
    move();
}

//Giving time for words to fall
function move() {
    if (pH > 0) {
        setTimeout(fall, fallTime);
    }
}

//Time for Creating new words
function make() {
    if (pH > 0) {
        setTimeout(wordMaker, makeTime);
    }
}

//Making a new word using words arrays
function wordMaker() {
    var word = "";
    //one word
    if (Math.random() > 0.5) {
        word = oneWord[Math.floor((Math.random() * oneWord.length))];
        //two words
    } else {
        word = twoWords1[Math.floor((Math.random() * twoWords1.length))] + " " + twoWords2[Math.floor((Math.random() * twoWords2.length))];
    }
    var node = document.createElement("P");
    var textNode = document.createTextNode(word);

    node.style.left = (Math.random() * 1280) + "px";
    node.style.top = "0px";
    node.className = "rain";
    node.appendChild(textNode);
    document.getElementById("words").appendChild(node);
    make();
}

//All words node
const words = document.querySelectorAll(".word");

//Start the falling effect after 1.5 seconds
setTimeout(() => {
    //Add show class to each word
    words.forEach((e) => {
        e.classList.add("show");
    });
}, 1500);

//When user select the level of the game, the words starts falling
function start(n) {
    if (n == 0) {
        makeTime = 3000;
        fallTime = 200;
    } else if (n == 1) {
        makeTime = 2000;
        fallTime = 150;
    } else {
        makeTime = 1000;
        fallTime = 100;
    }

    //유저가 레벨 선택하면 없어지게 함
    document.getElementById("words-wrapper").style.display = "none";
    document.getElementById("buttons").style.display = "none";
    //유저가 레벨 선택하면 보이게 함
    document.getElementById("input").style.display = "block";
    document.getElementById("line").style.display = "block";

    make();
    move();
}