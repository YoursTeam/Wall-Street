!function(){
    /**
     * 下拉选框组件
     * @param {Array} arr 
     */
    $.fn.selectBox = function(arr=[],code){
        this.each(function(){
            selectBox(this,arr,code)
        })
        return this;
    }
     //创建元素
     function selectEle(father,arr,code){
        let s = ""; 
        switch(code){
            case 0:
                s  = "-请选择省份-";
            break;
            case 1:
                s  = "-请选择城市-";
            break;
            case 2:
                s  = "-请选择分类-";
            break;
         }
        let $ele = $(`
            <div class="chosen-drop">
                <div id="mCSB_2">
                    <ul class="mCSB_container">
                        <li>${s}</li>
                    </ul>
                    <div class="scroll_groove">
                        <div class="scroll_bar"></div>
                    </div>
                </div>
            </div>`);
        let str = arr.map(item=>("<li code="+ item["code"] +">" + item["name"] + "</li>" )).join("")
        $ele.find('.mCSB_container').append($(str))
        $(father).append($ele)
    }
    //下拉框逻辑
    function selectBox(father,arr,code){
        selectEle(father,arr,code)
        let i=0;
        
        let $con = $(father).find(".chosen-single span i");
        let $mcontainer = $(father).find(".mCSB_container");
        let $scrollBar = $(father).find(".scroll_bar");
        let $mH = $(father).find("#mCSB_2").height();
        let $mcH =$mcontainer.height();
        let rate = $mH/$mcH;
        let h = $mcH - $mH;
        let step = h/$mcontainer.children().length;
        $scrollBar.height($mH * rate);

        $(father).find(".chosen-drop").on("mousewheel",function(e){
            e.preventDefault();
            let t = i*step;
            if(e.originalEvent.wheelDeltaY<0){
                if(h>t){
                    i++
                }
            }else{
                if(t>0){
                    i--
                }
            }
            $mcontainer.css({top:-t})
            $scrollBar.css({top:t*rate})
        })
        $($scrollBar[0]).on("mousedown",function(e){
            let pX = $(this).position().top
            let x0 = e.pageY;
            $(document).on("mousemove",(e)=>{
                let x = e.pageY - x0;
                let tx = Math.min(Math.max(0,x+pX),$mH - $mH * rate);
                i = Math.ceil(tx/rate/step);
                $(this).css({top:tx});
                $mcontainer.css({top:-tx/rate});
                e.preventDefault();
            })
        })
        $(document).on("mouseup",(e)=>{
            $(document).off("mousemove")
            // if(!$(e.target).hasClass("chosen-single")){
            //     $(father).removeClass("active")
            // }
        })
        
        $mcontainer.on("click",(e)=>{
            if($(e.target).hasClass('disabled-result')){
                return;
            }
            $con.text(e.target.innerText)
            $con.attr("code",$(e.target).attr("code"))
            $(father).removeClass("active")
            e.stopPropagation();
        })
    }
}($)