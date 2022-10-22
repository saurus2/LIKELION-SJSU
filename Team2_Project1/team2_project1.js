


var num_people = 0;

var user_input_bill =  $('left').val();

var after_tax = 0;

var final = 0;

function pr() {
  var user_input = document.getElementById('user_input').value;
  after_tax =  1.0938 * user_input;
  document.getElementById('at1').innerHTML = after_tax;
}

function pr1(n) {

  if(n == 0){
    final = 1.15 * after_tax;
 }
 else if(n == 1) {
    final = after_tax * 1.18;
 }
 else if(n == 2) {
    final = after_tax * 1.20;
 }
 else if(n == 3) {
   var custom = document.getElementById('popup').value;
   final = after_tax * (1 + (custom / 100))
 }
 document.getElementById('ta2').innerHTML = final
}

function clickMe() {
  var text = document.getElementById('popup');
  text.classList.toggle("hide");
  text.classList.toggle("show");
}

function c_n_p() {
  var people = document.getElementById('n_people').value;
  var final_n_people = final / people;
document.getElementById('p_total').innerHTML = final_n_people;
}
