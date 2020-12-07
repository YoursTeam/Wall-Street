let falag=true
$('.ason-pc-unids').click(function(){
    $(this).addClass("tag").siblings().removeClass('tag');
    if(falag){
    $('.pub-rq').eq(0).addClass("undis").siblings().removeClass('undis');
    falag=!falag 
}else{
        $('.pub-rq').eq(1).addClass("undis").siblings().removeClass('undis');
        falag=!falag 
  
    }
    
})
$('.gyheiyy').load('../config/config.html', function (){
    $(this).append(
        $('<link/>', { rel:"stylesheet", href: '../../css/config/config.css'})
    )
    $(this).append(
        $('<script></script>',{src: '../../js/config/config.js'})
    )
})
$('.bottom').load('../qrf/At_the_bottom_of_the_public.html',function(){
    $(this).append(
        $('<link/>', { rel:"stylesheet", href: '../../css/qrf/At_the_bottom_of_the_public.css'})
    )
})