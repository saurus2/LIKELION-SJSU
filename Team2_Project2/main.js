// when click food btn
$('#food_btn').click(function(){
    $('.menu').css('display', 'none');
    $('.food').css('display', 'block');
});

// when click date btn
$('#date_btn').click(function(){
    $('.menu').css('display', 'none');
    $('.date').css('display', 'block');
});

// when click drama btn
$('#drama_btn').click(function(){
    $('.menu').css('display', 'none');
    $('.drama').css('display', 'block');
});

// when click home button
$('.home').click(function(){
    $('.menu').css('display', 'block');
    $('.sub').css('display', 'none');
});

var num = 2
console.log(num);

// next() funciton
function next(){
    if(num == 10){
        $('.sub').css('display', 'none');
    }
    console.log(num);
    $('h2').html(`연애 밸런스 ${num}.`); 
    num ++;

} 

// background: url( "drone.png" );
// console.log(num[i])