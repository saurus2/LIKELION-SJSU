/**
 * Jaesung Yoo, Dasom Lee
 * LIKELION US FALL 2022
 * TEAM4_Project2
 */

//variables
var pH = 7.0;
const speed = 10;
var makeTime = 0;
var fallTime = 0;
var score = 0;
var gender = 0;
var gameOver = 0;

var input = document.getElementById('input');

//arrays to make words falling
const oneWord = ["function", "void", "array", "for", "while", "Hello World", "java", "python", "gcc", "array", "number", "event", "date", "switch", "break", "public static void main(String[] args)", "while(n != 0)", "function fall()", "for (int n: arr)", "for (int e: arr)", "addEventListener", "else if", "onClick"];
const twoWords1 = ["int", "double", "float", "var", "const", "let", "String", "char", "Integer", "Double", "Object"];
const twoWords2 = ["element", "n", "car", "value", "input", "output", "sample", "arr", "score", "name", "address"];

//detecting when enter key is pressed
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        removeElement(input.value);
        input.value = "";

        if (gameOver == 1) {
            updateScore();
        }
    }
})

function fall() {
    var rainClass = document.getElementsByClassName("rain");

    for (var i = 0; i < rainClass.length; i++) {
        rainClass[i].style.top = (parseInt(rainClass[i].style.top) + speed) + 'px';

        if (parseInt(rainClass[i].style.top) > 800) {
            pH -= 1;
            rainClass[i].remove();
            document.getElementById("pH").innerHTML = "pH: " + pH.toFixed(1);
            if (pH == 4) {
                if (gender == 0) {
                    document.getElementById("image").src = "image2.jpg";
                } else {
                    document.getElementById("image").src = "image5.jpg";
                }
            }
        }
    };
    move();
}

//Giving time for words to fall
function move() {
    if (pH > 0) {
        setTimeout(fall, fallTime);
    } else {
        document.getElementById("gameover").style.display = "block";
        document.getElementById("home").style.display = "block";
        document.getElementById("words").style.display = "none";

        if (gender == 0) {
            document.getElementById("image").src = "image3.jpg";
        } else {
            document.getElementById("image").src = "image6.jpg";
        }
        gameOver = 1;
    }
}

function updateScore() {
    var highScores = [];

    const readFile = require("readFile");
    FileSystemVar.readFile("./Score.txt");

    fs.readFile("./Score.txt", (err, line) => {
        if (err) throw err;
        readline.eachLine('Score.txt', (line) => {
            highScores.push(line.toString());
        });
    })


    if (score > highScores[5]) {
        highScores[5] = score;
        highScores[4] = input.value;
    } else if (score > highScores[3]) {
        highScores[3] = score;
        highScores[2] = input.value;
    } else if (score > highScores[1]) {
        highScores[1] = score;
        highScores[0] = input.value;
    } else {
        return;
    }

    flName.open("w");

    for (var i = 0; i < 6; i++) {
        flName.writeln(highScores[i]);
    }

    flName.close();

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

//sending user to home screen
function home() {
    document.location.href = "./index.html";
}

function removeElement(str) {
    var rainClass = document.getElementsByClassName("rain");

    for (var i = 0; i < rainClass.length; i++) {
        if (rainClass[i].innerHTML == str) {
            rainClass[i].remove();
            if (str.length > 12)
                score += 50
            score += 100
            document.getElementById("score").innerHTML = "Score: " + score;
            break;
        }
    }
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
        makeTime = 4000;
        fallTime = 250;
    } else if (n == 1) {
        makeTime = 3000;
        fallTime = 200;
    } else {
        makeTime = 2000;
        fallTime = 150;
    }

    if (Math.random() > 0.5) {
        document.getElementById("image").src = "image1.jpg";
        gender = 0;
    } else {
        document.getElementById("image").src = "image4.jpg";
        gender = 1;
    }

    //유저가 레벨 선택하면 없어지게 함
    document.getElementById("logo").style.display = "none";
    document.getElementById("buttons").style.display = "none";
    //유저가 레벨 선택하면 보이게 함
    document.getElementById("score").style.display = "block";
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("pH").style.display = "block";
    document.getElementById("pH").innerHTML = "pH: " + pH.toFixed(1);
    document.getElementById("input").style.display = "block";
    document.getElementById("line").style.display = "block";
    document.getElementById("image").style.display = "block";

    make();
    move();
}
