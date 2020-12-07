$('.config_header').load('/html/config/config.html')
$('.next').on('click',()=>{
	// console.log(1)
	$('#quanqiuBox_ul').animate({left:'0'})
})
$('.prop').on('click',()=>{
	// console.log(1)
	$('#quanqiuBox_ul').animate({left:'-75%'})
})
$('.zuixinBox_swiperBox_next').on('click',()=>{
	$('.yidongBox').attr('style','transform:translateX(0)')
})
$('.zuixinBox_swiperBox_prop').on('click',()=>{
	$('.yidongBox').attr('style','transform:translateX(-100%)')

})