var user_input_bill = $('left').val();

var after_tax = 0;

var final = 0;

var num_people = 0;

var final_n_people = 0;

//it calculates bill after CA tax and displays it
function taxCalculate() {
  var user_input = document.getElementById('user_input').value;
  after_tax = 1.0938 * user_input;
  document.getElementById('at1').innerHTML = after_tax;
}

//it takes what user clicks for tip percantage and calculates after tip and displays it
function tipCalculate(n) {
  if (n == 0) {
    final = 1.15 * after_tax;
  }
  else if (n == 1) {
    final = after_tax * 1.18;
  }
  else if (n == 2) {
    final = after_tax * 1.20;
  }
  else if (n == 3) {
    var custom = document.getElementById('popup').value;
    final = after_tax * (1 + (custom / 100))
  }
  document.getElementById('ta2').innerHTML = final
}

//it pops up the input box for custom tip percantage
function clickMe() {
  var text = document.getElementById('popup');
  text.classList.toggle("hide");
  text.classList.toggle("show");
}

//it calculates the amount of payment per person
function perPersonCalculate() {
  var num_people = document.getElementById('n_people').value;
  final_n_people = final / num_people;
  document.getElementById('ta3').innerHTML = final_n_people;
}

//it is to get a random element from array list
function get_random(list) {
  return list[Math.floor((Math.random() * list.length))];
}

//it is to display random number to make users to decide who is paying the bill
function whoIsPaying() {
  //array to store people
  var people = [];
  //getting number of people
  var num_people = document.getElementById('n_people').value;

  //for loop to store as many as people number
  for (var i = 0; i < num_people; i++) {
    people.push(i + 1);
  }
  //printing person who got randomly picked between people
  document.getElementById('result').innerHTML = get_random(people);
}

