/**
 * Created by Administrator on 2018/2/2.
 */
//�ֲ�ͼ
$(function() {
    var s = new SlideShow({
        "boxDom": $("#slideshow"),
        "width": "100%",
        "height": "710px",
        "timeSpace": 3000,
        "btnColor": "rgba(0,0,0,0.2)",
        "btnHighColor": "#f50f57",
        "btnWidth": 30,
        "btnHeight": 5,
        "imgs": ["../img/slide1.jpg", "../img/slide2.jpg", "../img/slide3.jpg"]
    });
    s.initUI();
});


//���list����ʾ�б�
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

//���close���ر��б�
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