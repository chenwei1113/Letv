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
        $(this.boxDom).children().eq(0).addClass("slide-wrap");
        for(var i=0;i<this.imgs.length;i++){
            //2）根据图片的个数在 slide-wrap中插入相同个数的div，用来放置图片
            $(".slide-wrap").append("<div></div>");
        }
        //console.log(parseInt(that.width)*that.imgs.length+"%");
        //3) 设置样式
        //大盒子的样式
        $(".slide-wrap").css({
            "position":"absolute",
            "width": parseInt(that.width)*that.imgs.length+"%",
            "height": that.height,
            "background":"pink"
        });
        //放图片的盒子的样式
        $(".slide-wrap").find("div").each(function(i){
            $(this).css({
                "background-image": "url("+that.imgs[i]+")",
                "background-position":"top center",
                "float":"left",
                "width":100/that.imgs.length+"%",
                "height":that.height,
                "background-size": "cover"
            });
        });
    }
}