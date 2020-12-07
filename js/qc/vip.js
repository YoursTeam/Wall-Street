$('.btn').click(()=>{
    let thp=$('.inp').val()
    let verify=$('.verify').val()
    
})
$('.yan').click(()=>{
    console.log(1)
    $.ajax({
        type:'psot',
        url:'http://loaclhost:8001/deng',
        success:(res,data)=>{
            console.log(data)
        }
    })
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