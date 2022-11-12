/**
 * Jaesung Yoo, Dasom Lee
 * LIKELION US FALL 2022
 * TEAM4_Project2
 */

let rain = document.getElementById('rain');
const speed = 10;
rain.style.top = '0px';
const oneWord = ["function", "void", "array", "for", "while", "(for i = 0; i > n; i++)", "Hello World", "while(n > 0)", "java", "python", "gcc", "array", "number", "event", "date", "switch", "break"];
const twoWords1 = ["int", "double", "float", "var", "const", "let", "String", "char", "Integer", "Double", "Object"];
const twoWords2 = ["element", "n", "car", "value", "input", "output", "sample"];

function fall() {
    rain.style.top = (parseInt(rain.style.top) + speed) + 'px';
    move();

    if (parseInt(rain.style.top) > 900) {
        alert('바닥')
    }
}

//Giving words time to fall 
function move() {
    setTimeout(fall, 100);
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
    document.getElementById("words-wrapper").style.visibility = "hidden";
    document.getElementById("buttons").style.visibility = "hidden";
    move();
}