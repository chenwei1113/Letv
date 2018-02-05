/**
 * Created by Administrator on 2018/2/5.
 */
$(".more").click(function(){
    if($(this).attr("isShowMore")=="true"){
        $(".regi-more").css({
            "padding-left":"54px"
        });
        $(".regi-more").find("ul").css({
            "width":"235px"
        });
        $(".more").html("&lt; 收起");
        $(this).attr("isShowMore",false);
    }else if($(this).attr("isShowMore")=="false"){
        $(".regi-more").css({
            "padding-left":"102px"
        });
        $(".regi-more").find("ul").css({
            "width":"125px"
        });
        $(".more").html("展开 &gt;");
        $(this).attr("isShowMore",true);
    }
});