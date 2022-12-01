

function bgm() {
    var myAudio = document.getElementById("bgm");  
    myAudio.volume = 0.0;
}

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

// when click home button -> reload
$('.Home').click(function(){
    window.location.reload()
});

var num = 2
console.log(num);

var q_food = {
    2: {"A": "이사하는 날에 짜장면", "B": "비 오는 날에 파전"},
    3: {"A": "김치 없이 라면먹기", "B": "치킨무 없이 치킨먹기"},
    4: {"A": "물렁 복숭아", "B": "딱딱 복숭아"},
    5: {"A": "물냉면", "B": "비빔냉면"},
    6: {"A": "짜장면", "B": "짬뽕"},
    7: {"A": "평생 치킨 안먹기", "B": "평생 라면 안먹기"},
    8: {"A": "상추 깻잎 꼬다리 따서 먹기", "B": "그냥 먹기"},
    9: {"A": "맥도날드", "B": "버거킹"},
}

var q_date = {
    2: {"A": "강아지상", "B": "고양이상"},
    3: {"A": "칠칠맞지만 너그러운 사람", "B": "완벽하지만 쩨쩨한 사람"},
    4: {"A": "노잼 교회 오빠/누나랑 사귀기", "B": "꿀잼 클럽 오빠/누나랑 사귀기"},
    5: {"A": "야외에서 공개고백 받기", "B": "단톡방에서 고백받기"},
    6: {"A": "담배중독 연인", "B": "술중독 연인"},
    7: {"A": "스킨십 중독자 연인", "B": "무성욕자 연인"},
    8: {"A": "모든 계획에 알람 맟추는 철저한 연인 ", "B": "매사에 계획 없는 사람"},
    9: {"A": "맨날 EX 이야기 하는 연인", "B": "맨날 EX 이야기 해달라고 조르는 연인"},
}

// next() funciton
function next(){
    if(num == 10){
        $('.sub').css('display', 'none');
        // $('.home').css('display', 'none');
        $('h1').css('display', 'none');
        $('#rst').css('display', 'block');

    }
    else{
        console.log(num);
        $('h2').html(`음식 밸런스 ${num}.`); 
        $('.A').html(q_food[num]['A']);
        $('.B').html(q_food[num]['B']);
    }
    num ++;

} 

function next2(){
    if(num == 10){
        $('.sub').css('display', 'none');
        // $('.home').css('display', 'none');
        $('h1').css('display', 'none');
        $('#rst').css('display', 'block');

    }
    else{
        console.log(num);
        $('h2').html(`연애 밸런스 ${num}.`); 
        $('.A').html(q_date[num]['A']);
        $('.B').html(q_date[num]['B']);
    }
    num ++;
}



document.getElementById("VS").disabled = true;  