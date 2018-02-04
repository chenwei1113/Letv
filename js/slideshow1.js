/**
 * Created by Administrator on 2018/2/2.
 */
function SlideShow($obj){
    //属性
    this.boxDom = $obj.boxDom;
    this.width = $obj.width;
    this.height = $obj.height;
    this.timeSpace = $obj.timeSpace;
    this.btnColor = $obj.btnColor;
    this.btnHighColor = $obj.btnHighColor;
    this.btnWidth = $obj.btnWidth;
    this.btnHeight = $obj.btnHeight;
    this.imgs = $obj.imgs;
    this.myTimer = null;
    this.ord = 0;//当前图片的下标

    //方法
    //1. 初始化界面
    this.initUI = function(){
        var that = this;
        //1）插入 slide-wrap 盒子
        $(this.boxDom).append("<div></div>");
        $(this.boxDom).append("<ul></ul>");
        $(this.boxDom).append("<span></span>");
        $(this.boxDom).append("<span></span>");

        $(this.boxDom).children().eq(0).addClass("slide-wrap");
        $(this.boxDom).children().eq(1).addClass("uls");
        $(this.boxDom).children().eq(2).addClass("leftArrow");
        $(this.boxDom).children().eq(3).addClass("rightArrow");

        for(var i=0;i<this.imgs.length;i++){
            //2）根据图片的个数在 slide-wrap中插入相同个数的div，用来放置图片
            $(".slide-wrap").append("<div></div>");
            $(".uls").append("<li></li>");
        }

        $(".uls").find("li").append("<i></i>");
        //console.log(parseInt(that.width)*that.imgs.length+"%");
        //3) 设置样式
        $(this.boxDom).find("span").css({
            "position":"absolute",
            "width": "64px",
            "height": "64px",
            "border-radius":"50%",
            "background": "rgba(83,83,83,.6)",
            "top":"50%",
            "tansform":"tranlateX(-50%)",
            "color":"#fff",
            "font-size":"30px",
            "display":"flex",
            "align-items":"center",
            "justify-content":"center"
        });
        $(".leftArrow").css({
            "left": "2%"
        });
        $(".leftArrow").html("<");
        $(".rightArrow").css({
            "right": "2%"
        });
        $(".rightArrow").html(">");
        //大盒子的样式
        $(".slide-wrap").css({
            "position":"absolute",
            "left":"-100%",
            "width": parseInt(that.width)*that.imgs.length+"%",
            "height": that.height
        });
        //放图片的盒子的样式
        $(".slide-wrap").find("div").each(function(i){
            $(this).css({
                "background-image": "url("+that.imgs[i]+")",
                "background-position":"top center",
                "position":"absolute",
                "top":"0",
                "left":2*100/that.imgs.length+"%",
                "width":100/that.imgs.length+"%",
                "height":that.height,
                "background-size": "cover"
            });
        });
        $(".uls").css({
            "width":"100%",
            "position":"absolute",
            "bottom":"20px",
            "display":"flex",
            "justify-content":"center"
        });
        $(".uls").find("li").css({
            "float":"left",
            "width": that.btnWidth,
            "height": "20px",
            "line-height":"20px",
            "margin-left": "20px"
        });
        $(".uls").find("li").find("i").css({
            "width": that.btnWidth,
            "height": that.btnHeight,
            "backgroundColor": that.btnColor,
            "display":"inline-block"
        });

        //初始化
        $(".slide-wrap").find("div").eq(0).css({
            "left": 100/that.imgs.length+"%"
        });
        $(this.boxDom).find($(".uls")).children().eq(0).find("i").css({
            "backgroundColor": that.btnHighColor,
            "height": "2px",
        });
        $(".leftArrow").css({"display":"none"});
        $(".rightArrow").css({"display":"none"});
    }
    //自动播放
    this.autoPlay = function(){
        this.myTimer = setInterval(()=>{
            let outOrd = this.ord;
            this.ord++;
            //数据合法性判断
            if(this.ord>this.imgs.length-1){
                this.ord = 0;
            }
            this.changeUI(outOrd,this.ord);
        },this.timeSpace);
    };

    //停止播放
    this.stopPlay = function(){
        window.clearInterval(this.myTimer);
    }

    this.changeUI = function(outOrd,inOrd){
        //改变外观
        let $imgs = $(".slide-wrap").find("div");
        $imgs.eq(outOrd).animate({"left":0},500,()=>{
            $imgs.eq(outOrd).css({"left":2*100/this.imgs.length+"%"});//????????????????????????????
        });
        console.log(this.imgs.length);
        $imgs.eq(inOrd).animate({"left":100/this.imgs.length+"%"},500);
        //改变ul中li的颜色
        $(".uls").children().eq(inOrd).find("i").css({"backgroundColor":this.btnHighColor,"height":"2px"}).parent().siblings().find("i").css({"backgroundColor":this.btnColor,"height":"1px"});
    }
    //跳转到指定图片
    this.goImg = function(transOrd){
        if(this.ord == transOrd){//如果进入的图片序号和出去的图片一致，则啥也不干。
            return;
        }
        let outOrd = this.ord;
        this.ord = transOrd;
        this.changeUI(outOrd,this.ord);
    }

    //初始化事件
    this.initEvent = function(){
        var that = this;
        $(this.boxDom).mouseenter(function(){
            $(".leftArrow").css("display","flex");
            $(".rightArrow").css("display","flex");
            that.stopPlay();
        });
        $(this.boxDom).mouseleave(function(){
            $(".leftArrow").css("display","none");
            $(".rightArrow").css("display","none");
            that.autoPlay();
        });
        $(".uls").find("li").mouseover(function(){
            $(this).css({"cursor":"pointer"});
        });
        $(".uls").find("li").click(function(){
            that.goImg($(this).index());
        });
        $(".leftArrow").mouseover(function(){
            $(this).css("cursor","pointer");
        });
        $(".rightArrow").mouseover(function(){
            $(this).css("cursor","pointer");
        });
        $(".leftArrow").click(function(){
            let transOrd = that.ord-1;
            let $imgs = $(".slide-wrap").find("div");
            transOrd = transOrd<0?$imgs.length-1:transOrd;
            that.goImg(transOrd);
        });
        $(".rightArrow").click(function(){
            let transOrd = that.ord+1;
            let $imgs = $(".slide-wrap").find("div");
            transOrd = transOrd>$imgs.length-1?0:transOrd;
            that.goImg(transOrd);
        });
    }

}