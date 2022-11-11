let rain = document.getElementById('rain');
const speed = 10;
rain.style.top = '0px';

function fall() {
    rain.style.top = (parseInt(rain.style.top) + speed) + 'px';
    move();

    if (parseInt(rain.style.top) > 900) {
        alert('바닥')
    }
}

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

move();