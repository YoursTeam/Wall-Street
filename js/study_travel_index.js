/*页面滚动样式 */
$(function(){
    const HEIGHT = 200;
    let $aL = $(".content-active-line");
    let $node = $(".node");
    let initH = $($node[0]).position().top;
    let arr = [];
    $node.each((index,item)=>{arr.push($(item).position().top + Math.abs(initH) )});
    $(window).on("scroll",Gun)
    /*滚动函数 */
    Gun();
    function Gun(){
        let scrollY = $(document).scrollTop() - HEIGHT;
        if(scrollY>=arr[0]){
            $aL.height(scrollY);
        }
        if($(window).width()>767){
            arr.forEach((item,index)=>{
                if(scrollY>item){
                    $($node[index]).addClass("active");
                }else if(scrollY <= item){
                    $($node[index]).removeClass("active");
                }
            })
        }
    }
})
/*页面尺寸改变样式 */
$(function(){
    let $nodeNum = $(".node-num");
    $(window).on("resize",function(){
        if($(window).width()>767){
            $nodeNum.removeClass("node")
        }else{
            $nodeNum.addClass("node")
        }
    })
})
/*视频划入样式 */
$(function(){
    let $video = $("video");
    let $cV = $(".learn-content-video");
    $cV.on('mouseover',()=>{$video.attr("controls","controls")})
    $cV.on('mouseout',()=>{$video.removeAttr("controls")})
    $cV.on("click",function(){
        $video.removeAttr("controls");
        let video = $(this).find("video")[0];
        console.log(video.paused)
        if(video.paused){
            video.play();
            $(this).find("a").hide();
        }else{
            video.pause();
            $(this).find("a").show();
        }
        
    })
})