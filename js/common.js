/**
 * Created by Administrator on 2018/2/2.
 */



//列表部分
$(".list").click(function(){
    $(".close").animate({"right":"20px"},300);
    $(".close").css({
        "display":"block",
        "z-index":1
    });
    $(".list-items").css({
        "display":"block"
    });

});

//点击显示与隐藏
$(".close").click(function(){
    $(".close").animate({"right":"0"},300,function(){
        $(".close").css({
            "display":"none"
        });
    });
    $(".list-items").css({
        "display":"none"
    })
});




//-------------页面尾部的点击事件-----------
$(".footer-list").each(function(i){
    $(this).click(function(){
        $(this).find($(".ulbox")).toggle("slow");
    });
});

