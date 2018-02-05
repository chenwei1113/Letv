/**
 * Created by Administrator on 2018/2/2.
 */
//轮播图
$(function() {
    var s = new SlideShow({
        "boxDom": $("#slideshow"),
        "width": "100%",
        "height": "680px",
        "timeSpace": 3000,
        "btnColor": "#999999",
        "btnHighColor": "#2c83c6",
        "btnWidth": 120,
        "btnHeight": 1,
        "imgs": ["../img/slide1.jpg", "../img/slide2.jpg", "../img/slide3.jpg"]
    });
});


//鐐瑰嚮list锛屾樉绀哄垪琛�
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

//鐐瑰嚮close锛屽叧闂垪琛�
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


//onresize事件
$(window).resize(function(){
    if($(this).width()<767){
        $("#slideshow").css({
            "width": "100%",
            "height": "274.30556px"
        });
        $(".slide-wrap").css({
           "height":"274.30556px"
        });
        $(".slide-wrap").find("div").css({
            "height":"274.30556px"
        });
        $(".slide-wrap").find("div").eq(0).css({
            "background-image":"url(../img/1.jpg)"
        });
        $(".slide-wrap").find("div").eq(1).css({
            "background-image":"url(../img/2.jpg)"
        });
        $(".slide-wrap").find("div").eq(2).css({
            "background-image":"url(../img/3.jpg)"
        });
        $(".uls").find("li").css({
            "width": "41.66667px"
        });
        $(".uls").find("li").find("i").css({
            "width": "41.66667px"
        });
        $("#slideshow").mouseenter(function(){
            $(".leftArrow").css("display","none");
            $(".rightArrow").css("display","none");
        });
        $(".footer-list").find($(".ulbox")).css({
            "display":"none"
        })
    }else {
        $("#slideshow").css({
            "height": "680px"
        });
        $(".slide-wrap").css({
            "height":"680px"
        });
        $(".slide-wrap").find("div").css({
            "height":"680px"
        });
        $(".slide-wrap").find("div").eq(0).css({
            "background-image":"url(../img/pic1.jpg)"
        });
        $(".slide-wrap").find("div").eq(1).css({
            "background-image":"url(../img/pic2.jpg)"
        });
        $(".slide-wrap").find("div").eq(2).css({
            "background-image":"url(../img/pic3.jpg)"
        });
        $(".uls").find("li").css({
            "width": "120px"
        });
        $(".uls").find("li").find("i").css({
            "width": "120px"
        });
        $("#slideshow").mouseenter(function(){
            $(".leftArrow").css("display","flex");
            $(".rightArrow").css("display","flex");
        });
        $(".footer-list").find($(".ulbox")).css({
            "display":"block"
        })
    }
});


//-------------椤甸潰灏鹃儴 鐐瑰嚮鍙夊彿锛屾樉绀哄垪琛�-----------
$(".footer-list").each(function(i){
    $(this).click(function(){
        $(this).find($(".ulbox")).toggle("slow");
        //document.styleSheets[0].addRule('.footer-list::after','transform-origin: center center');
        //document.styleSheets[0].addRule('.footer-list::after','transition: transform .3s ease;');
        //
        //$(this).toggle(
        //    function(){
        //        document.styleSheets[0].addRule('.footer-list::after','transform: rotate(45deg) scale(1.08)');
        //    alert("1");
        //    },
        //    function(){
        //        document.styleSheets[0].addRule('.footer-list::after','transform: rotate(0deg) scale(1.00)');
        //    alert("2");
        //
        //    }
        //);
    });
});

