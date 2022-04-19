

$("#firefly1").on('click',function(){
    FadeIn(1);
    Twinkle(1);
})

$("#firefly2").on('click',function(){
    FadeIn(2);
    Twinkle(2);
})

$("#firefly3").on('click',function(){
    FadeIn(3); 
    Twinkle(3); 
})

$("#firefly4").on('click',function(){
    FadeIn(4);
    Twinkle(4);
})

$("#firefly5").on('click',function(){
    FadeIn(5);
    Twinkle(5);  
})

$("#firefly6").on('click',function(){
    FadeIn(6);
    Twinkle(6);
})

$("#firefly7").on('click',function(){
    FadeIn(7); 
    Twinkle(7); 
})

$("#firefly8").on('click',function(){
    FadeIn(8);
    Twinkle(8);
})





//FadeIn Question
function FadeIn(n){
                $('#Q'+n).fadeIn();    
            }

//firefly fly away            
function Twinkle(n){
    
    $('#firefly'+n).css('animation','firefly_twinkle1 3s forwards');
    $('#firefly'+n).html('<h1 id="number">'+n+'</h1>');
}


//score
var score=0;

//Q1
$("#submitImg1").click(function(){
    
    var Q1=$("[name='Q1']").val();
    
    if(Q1==="2022-04-22"){
        $('#submit1').html("<img id='submitImg1' src='images/check.png'>");
        $('#result1').text("出發日期：4/22(五)");
        $("[name='Q1']").attr({'disabled':'true'});
        $('#score').text(score+=20);     
    }else{
        $('#submit1').html("<img id='submitImg1' src='images/cancel.png'>"); 
        $('#result1').text("出發日期：4/22(五)");  
        $("[name='Q1']").attr({'disabled':'true'}); 
        $('#score').text(score);               
    }
    
})

//Q2
$("#submitImg2").click(function(){
    
    var Q2=$("[name='Q2']").val();
    
    if(Q2==="夢幻島嶼"){
        $('#submit2').html("<img id='submitImg2' src='images/check.png'>");
        $('#result2').text("2020綠色博覽會：夢幻島嶼");
        $("[name='Q2']").attr({'disabled':'true'});  
        $('#score').text(score+=20); 
    }else{
        $('#submit2').html("<img id='submitImg2' src='images/cancel.png'>"); 
        $('#result2').text("2020綠色博覽會：夢幻島嶼");  
        $("[name='Q2']").attr({'disabled':'true'});
        $('#score').text(score);   
    }
    
})

//Q3
//對的按鈕
$("#btn4").click(function(){
    
        $('#submit3').html("<img id='submitImg3' src='images/check.png'>");
        $('#result3').text("紅光");
        $('#btn1').attr({'disabled':'true'});
        $('#btn2').attr({'disabled':'true'});   
        $('#btn3').attr({'disabled':'true'});   
        $('#btn4').attr({'disabled':'true'});
        $('#btn5').attr({'disabled':'true'});
        $('#score').text(score+=10);              
})
//錯的按鈕
$("#btn1").click(function(){ BTN() })
$("#btn2").click(function(){ BTN() })
$("#btn3").click(function(){ BTN() })
$("#btn5").click(function(){ BTN() })

var BTN=function(){
        $('#submit3').html("<img id='submitImg3' src='images/cancel.png'>"); 
        $('#result3').text("紅光");  
        $('#btn1').attr({'disabled':'true'});
        $('#btn2').attr({'disabled':'true'});   
        $('#btn3').attr({'disabled':'true'});   
        $('#btn4').attr({'disabled':'true'});
        $('#btn5').attr({'disabled':'true'});
        $('#score').text(score);
}

//Q4
$("#submitImg4").click(function(){
    
    var obj=document.getElementsByName("Q4");
    var check=[];
    var Q4="A";

    for(var k in obj){
        if(obj[k].checked){
        Q4+=obj[k].value;
        }
    }

    if(Q4==="A124"){
        $('#submit4').html("<img id='submitImg4' src='images/check.png'>");
        $('#result4').text("苦無、手裡劍、鎖鐮");
        $("[name='Q4']").attr({'disabled':'true'}); 
        $('#score').text(score+=10);         
    }else{
        $('#submit4').html("<img id='submitImg4' src='images/cancel.png'>"); 
        $('#result4').text("苦無、手裡劍、鎖鐮");  
        $("[name='Q4']").attr({'disabled':'true'});
        $('#score').text(score);   
    }
    
})




//Q5
$("#submitImg5").click(function(){
    
    var Q5=$("[name='Q5']").val();
    
    if(Q5==="2"){
        $('#submit5').html("<img id='submitImg5' src='images/check.png'>");
        $('#result5').text("礁溪鄉");
        $("[name='Q5']").attr({'disabled':'true'});  
        $('#score').text(score+=10);            
    }else{
        $('#submit5').html("<img id='submitImg5' src='images/cancel.png'>"); 
        $('#result5').text("礁溪鄉");  
        $("[name='Q5']").attr({'disabled':'true'});
        $('#score').text(score);   
    }
    
})

//Q6
$("#submitImg6").click(function(){
    
    var Q6=$("[name='Q6']:checked").val();
    
    if(Q6==="3"){
        $('#submit6').html("<img id='submitImg6' src='images/check.png'>");
        $('#result6').text("簪纓");
        $("[name='Q6']").attr({'disabled':'true'}); 
        $('#score').text(score+=10);             
    }else{
        $('#submit6').html("<img id='submitImg6' src='images/cancel.png'>"); 
        $('#result6').text("簪纓");  
        $("[name='Q6']").attr({'disabled':'true'}); 
        $('#score').text(score);  
    }
    
    
})

//Q7
$('input[type=range]').change(function(){

    var fare=$("[name='Q7']").val();
    $('#fare').text(fare);

})

$("#submitImg7").click(function(){
    
    var Q7=$("[name='Q7']").val();
    

    if(Q7==="150"){
        $('#submit7').html("<img id='submitImg7' src='images/check.png'>");
        $('#result7').text("平日$150 / 假日$250");
        $("[name='Q7']").attr({'disabled':'true'}); 
        $('#score').text(score+=10);             
    }else{
        $('#submit7').html("<img id='submitImg7' src='images/cancel.png'>"); 
        $('#result7').text("平日$150 / 假日$250");  
        $("[name='Q7']").attr({'disabled':'true'});
        $('#score').text(score);   
    }
    
})

//Q8
$("#submitImg8").click(function(){
    
    var Q8=$("[name='Q8']").val();
    
    if(Q8==="08:30"){
        $('#submit8').html("<img id='submitImg8' src='images/check.png'>");
        $('#result8').text("準時於8:30從家裡出發");
        $("[name='Q8']").attr({'disabled':'true'}); 
        $('#score').text(score+=10);             
    }else{
        $('#submit8').html("<img id='submitImg8' src='images/cancel.png'>"); 
        $('#result8').text("準時於8:30從家裡出發");  
        $("[name='Q8']").attr({'disabled':'true'}); 
        $('#score').text(score);  
    }
    
})
