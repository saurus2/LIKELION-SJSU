            
       
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
        $('.Home').click(function(){
            $('.menu').css('display', 'block');
            $('.sub').css('display', 'none');
        });

        document.getElementById("vs").disabled = true;   


        