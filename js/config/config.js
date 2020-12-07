$('.stairNavigation_flex_left').on('click','li',function(){
	// console.log($(this))
	$(this).addClass('active')
	$(this).siblings().removeClass('active')
})
$('.stairNavigation_flex_center').on('click','li',function(){
	// console.log($(this))
	$(this).addClass('actives')
	$(this).siblings().removeClass('actives')
})
$('.listUlItemOne').mouseover(()=>{
	$('.listUlItemOne img').attr('src','/img/config/topjian.png')
	$('.listUlItemOne_xiala').show()
})
$('.listUlItemOne').mouseout(()=>{
	$('.listUlItemOne img').attr('src','/img/config/buttomjian.png')
	$('.listUlItemOne_xiala').hide()
})
$('.listUlItemTwo').mouseover(()=>{
	$('.listUlItemTwo img').attr('src','/img/config/topjian.png')
	$('.listUlItemTwo_xiala').show()
})
$('.listUlItemTwo').mouseout(()=>{
	$('.listUlItemTwo img').attr('src','/img/config/buttomjian.png')
	$('.listUlItemTwo_xiala').hide()
})
$(document).ready(()=>{
	$('.listUlItemTwo_xiala').hide()
	$('.listUlItemOne_xiala').hide()
})
var secondNavigationMin_content_btnOne_content_show = false
$('.secondNavigationMin_content_btnOne').click(()=>{
	secondNavigationMin_content_btnOne_content_show = !secondNavigationMin_content_btnOne_content_show
	if(secondNavigationMin_content_btnOne_content_show){
		$('.secondNavigationMin_content_btnOne_content').animate({height:'210px'})
	}else{
		$('.secondNavigationMin_content_btnOne_content').animate({height:'0'})
	}
})
let secondNavigationMin_content_btnTow_content_show = false
$('.secondNavigationMin_content_btnTow').click(()=>{
	secondNavigationMin_content_btnTow_content_show = !secondNavigationMin_content_btnTow_content_show
	if(secondNavigationMin_content_btnTow_content_show){
		$('.secondNavigationMin_content_btnTow_content').animate({height:'80px'})
	}else{
		$('.secondNavigationMin_content_btnTow_content').animate({height:'0'})
	}
})

$('.caidanBtn').click(()=>{
	$('.secondNavigationMin').attr('style','transform: translateX(0);')
})
$('.hideBtn').click(()=>{
	$('.secondNavigationMin').attr('style','transform: translateX(100%);')
})

$('.secondNavigationMin_topBtn').on('click','div',function(){
	// console.log($(this))
	$(this).addClass('topBtn_active')
	$(this).siblings().removeClass('topBtn_active')
})

// 屏幕滚动事件
$(document).scroll(function() {
	var scroH = $(document).scrollTop();
	var viewH = $(window).height();
	if(scroH >20){
		$('.stairNavigationWrapper').hide()
		$('.secondNavigation').attr('style','position: fixed;top:0;left:0;')
		$('.secondNavigation').animate({height:'55px'})
	}else{
		$('.stairNavigationWrapper').show()
		$('.secondNavigation').attr('style','position: static;')
	}
});