$(function() {
	var selected = ".teacher-desc-list,.taocan-list-box,.newstu-know-list,.q-list-img"
	$(selected).hover(function() {
		$(this).toggleClass("animated pulse")
	})
	$(".taocan-list-box,.newstu-know-list").hover(function() {
		$(this).addClass("addhover").siblings().removeClass("addhover");
	})
	/*懒加载原理添加动画*/
	$(".js_animate").scrollLoading({
		container: $(window),
		callback: function() {
			switch($(this).attr("data-animate")) {
				case "1":
					$(this).children(".banner-title1").addClass('animated bounceInLeft').siblings(".banner-title2").addClass('animated bounceInRight').siblings(".banner-title3").addClass('animated bounceInLeft');
					break;

				case "2":
					$(this).children(".title1").addClass('animated bounceInLeft').siblings(".title2").addClass('animated bounceInRight').siblings(".title3").addClass('animated bounceInLeft');
					break;

				case "3":
					$(this).find(".circle-list").addClass('animated zoomIn');
					break;

				case "4":
					$(this).addClass('animated bounceInRight');
					break;
					case "5":
					$(this).find("img").addClass('animated zoomIn');
					break;
			}
		}
	});
	var videoConfig = {
		uu: "a91d451d26",
		vu: "afca79087a",
	}
	if(document.createElement('video').canPlayType) {
		videoConfig["type"] = "h5";
	}
	var player = new CloudVodPlayer();
	player.init(videoConfig, "online__video");
	$(".js-video-list").on("click", function() {
		$(this).addClass("add-click").siblings().removeClass("add-click");
		$(this).parents("li").siblings().find(".js-video-list").removeClass("add-click");
		var newVu = $(this).attr('data-vu');
		$('#online__video').html("");
		videoConfig["vu"] = newVu;
		player.init(videoConfig, "online__video");
		videoConfig["auto_play"] = "1";
	})
	$(".hover-show").hover(function() {
			var index = $(this).index();
			$(".tablet-color .tip-box").eq(index - 2).find(".hover-title").toggle();
		})
		$(".ztk-list").hover(function(){
			if($(this).index()==0){
				console.log($(this).parents(".ztk-box"))
				$(this).parents(".ztk-box").css({"background-image":"url('http://static.wangxiao.cn/zhuanti/new/sg/img/11.png')"});
			
			}else if($(this).index()==1){
				$(this).parents(".ztk-box").css({"background-image":"url('http://static.wangxiao.cn/zhuanti/new/sg/img/22.png')"});
			
			}else if($(this).index()==2){
				$(this).parents(".ztk-box").css({"background-image":"url('http://static.wangxiao.cn/zhuanti/new/sg/img/33.png')"});
			
			}
			$(this).addClass("add-click").siblings().removeClass("add-click")
			
		})
		$(".video-rt-box li").click(function(){
			$(this).find(".video-list-box").addClass("add-click");
			$(this).siblings().find(".video-list-box").removeClass("add-click")
			$(this).find("ul").slideDown();
			$(this).siblings().find("ul").slideUp()
		})

})