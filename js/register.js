/**
 * Created by Administrator on 2018/2/5.
 */

var regPhone = /^1[34578]\d{9}$/;
$("#userphone").blur(function(){
   if(regPhone.test($(this).val())){

   }else {
       $(".errmsg").html("手机号格式不正确");
   }
});



$("#randomcode").click(function(){
    var str = randomCode();
    $(this).html(str);
});
//产生随机验证码 (数字加字母)
function randomCode(){
    var letter = ['a','b','c','d','e','f','g','h','i','j','k','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var str = "";
    var let1 = letter[parseInt(Math.random()*50)];
    var let2 = letter[parseInt(Math.random()*50)];
    var num1 = parseInt(Math.random()*10);
    var num2 = parseInt(Math.random()*10);
    var arr = [let1,let2,num1,num2];
    for(var i=0;i<arr.length;i++){
        str += arr[parseInt(Math.random()*4)];
    }
    return str;
}


