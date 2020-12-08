$(function(){
	$(".nav-tabs li").click(function(){
		$(".product-list__content .tab-pane").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
		$(".nav-tabs li").eq($(this).index()).addClass("tabs_color").siblings().removeClass('tabs_color');
		
	})
	$(".product-list__content .tab-pane").eq(0).addClass("cur").siblings().removeClass('cur');
})