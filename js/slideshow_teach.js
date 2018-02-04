
	function SlideShow($obj) {
		//属性
		this.boxDom = $obj.boxDom;//放轮播图的盒子
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
		//初始化界面
		this.initUI = function () {
			var that = this;
			$(this.boxDom).append("<ul></ul>");
			//1.把img添加到box中，把li添加到ul中
			for (var i = 0; i < this.imgs.length; i++) {
				//循环添加img，循环给ul添加li
				$(this.boxDom).prepend("<img />");
				$(this.boxDom).find("ul").append("<li></li>");
			}
			//给每个img设置样式
			$(this.boxDom).find("img").each(function(i){
				this.src = that.imgs[i];
				$(this).css({
					"position":"absolute",
					"width": that.width,
					"height":that.height
				});
			});
			$(this.boxDom).find("ul").find("li").css({
				"float":"left",
				"width": that.btnWidth,
				"height": that.btnHeight,
				"margin-left": "10px",
				"backgroundColor": that.btnColor
			});

			//2. 改变外观
			//ul
			$(this.boxDom).find("ul").css(
					{
						"position":"absolute",
						"bottom":"20px",
						"left":"50%",
						"transform":"translateX(-50%)"
					});
			//img
			$(this.boxDom).find("img").eq(0).css({"opacity":"1"}).nextUntil("div").css({"opacity":"0"});
			//li
			$(this.boxDom).find("ul").eq(0).find("li").eq(0).css({"backgroundColor":that.btnHighColor});

			//箭头
			$(".leftArrow").css("display","none");
			$(".rightArrow").css("display","none");
		};

		//自动播放
		this.autoPlay = function(){
			let that = this;
			this.myTimer = setInterval(function(){
				//一、改变数据
				//当前的图片淡出//下一张淡入
				let outOrd = that.ord;
				that.ord++;
	//			console.log(that.imgs.length);
				//数据合法性判断
				if(that.ord>that.imgs.length-1){
					that.ord = 0;
				}
				//二、改变外观
				//图片的淡入淡出
				//获取所有的图片
				$imgs = $(that.boxDom).find("img");
				$imgs.eq(outOrd).animate({"opacity":0},500);
				$imgs.eq(that.ord).animate({"opacity":1},500);
				//改变豆豆的颜色
				$(that.boxDom).find("ul").children().eq(that.ord).css({"backgroundColor":that.btnHighColor}).siblings().css({"backgroundColor":that.btnColor});
			},this.timeSpace);
		};

		//停止播放
		this.stopPlay = function(){
			window.clearInterval(this.myTimer);
		}

		//跳转到指定图片
		this.goImg = function(transOrd){
			let outOrd = this.ord;
			this.ord = transOrd;
			//二、改变外观
			$imgs = $(this.boxDom).find("img");//获取所有的img
			//图片的淡入淡出
			$imgs.eq(outOrd).animate({"opacity":0},500);
			$imgs.eq(this.ord).animate({"opacity":1},500);
			//改变豆豆的颜色
			$(this.boxDom).find("ul").children().eq(this.ord).css({"background-color":this.btnHighColor}).siblings().css({"background-color":this.btnColor});
		}

		//初始化事件
		this.initEvent = function(){
			var that = this;
			$(this.boxDom).mouseenter(function(){
				$(".leftArrow").css("display","block");
				$(".rightArrow").css("display","block");
				that.stopPlay();
			});
			$(this.boxDom).mouseleave(function(){
				$(".leftArrow").css("display","none");
				$(".rightArrow").css("display","none");
				that.autoPlay();
			});
			$(this.boxDom).find("ul").find("li").click(function(){
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
				$imgs = $(that.boxDom).find("img");
				transOrd = transOrd<0?$imgs.length-1:transOrd;
				that.goImg(transOrd);
			});
			$(".rightArrow").click(function(){
				let transOrd = that.ord+1;
				$imgs = $(that.boxDom).find("img");
				transOrd = transOrd>$imgs.length-1?0:transOrd;
				that.goImg(transOrd);
			});
		}

	}