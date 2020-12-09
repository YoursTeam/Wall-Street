$('.gyheiyy').load('../../html/config/config.html')
$('.bottom').load('../../html/config/footer.html')

$('.selecticon').click(() => {
    $('.listshow').css({
        display: 'block'
    })
})
$('.listshow li').click(() => {
    $('.listshow').css({
        display: 'none'
    })
    $('.checkout').html($('.listshow li').html())
})

function html() {
    $.ajax({
        type: 'get',
        url: 'http://localhost:8081/bj',
        success: (res) => {
            console.log(res[0].centers[0].address.stressName)
            $.each(res[0].centers, (index, item) => {
                console.log(item)
                $('.datail_content_title').text(item.centerName)
                $(`<div>
               <div class="particulars_box_icon">
                   <img src="../../img/qc/地址.png" alt="" width="100%">
               </div>
               <div class="particulars_box_text">
                   <h2>地址</h2>
                   <div>${item.address.stressName}</div>
                   <div class='border_bottom'></div>
               </div>
           </div>
           <div>
               <div class="particulars_box_icon">
                   <img src="../../img/qc/电 话.png" alt="" width="100%">
               </div>
               <div class="particulars_box_text">
                   <h2>联系方式</h2>
                   <div>${item.address.telephone}</div>
                   <div class='border_bottom'></div>
               </div>
           </div>
           <div>
               <div class="particulars_box_icon">
                   <img src="../../img/qc/累计工作时间.png" alt="" width="100%">
               </div>
               <div class="particulars_box_text">
                   <h2>工作时间</h2>
                   <div>周一到周五<span>10:00-21:30</span></div>
                   <div>周六到周日
                       <span>10:00-19:00</span>
                   </div>

               </div>
           </div>`).appendTo($('.particulars_box'))
                //                 var map = new BMap.Map("allmap");
                //                 var point = new BMap.Point(item.longitude, item.longitude)
                //                 map.centerAndZoom(point, 14);
                //                 // 添加带有定位的导航控件
                //                 var navigationControl = new BMap.NavigationControl({
                //                     // 靠左上角位置
                //                     anchor: BMAP_ANCHOR_TOP_LEFT,
                //                     // LARGE类型
                //                     type: BMAP_NAVIGATION_CONTROL_LARGE,
                //                     // 启用显示定位
                //                     enableGeolocation: true
                //                 });
                //                 var geolocationControl = new BMap.GeolocationControl();
                //                 var opts = {
                //                     width: 300,
                //                     height: 280,
                //                 }
                //                 var html = `
                // <div class="ason-map-div_box">
                //    <div class="ason-map-div">
                //        <strong>东方广场中心</strong>
                //        <div class="col">
                //            <b>地址</b>
                //            <p>北京市东城区<br>东长安街 1 号<br>东方广场 W3 座 2 层<br>邮编：100738<br>（地铁 1 号线王府井站 A 出口）</p>
                //        </div>
                //        <div class="col">
                //            <b>联系电话</b>
                //            <p>010-85185058</p>
                //        </div>
                //        <div class="col">
                //            <b>工作时间</b>
                //            <p>周一至周五&nbsp;10:00 - 21:30</p>
                //            <p>周六至周日&nbsp;10:00 - 19:00</p>
                //        </div>
                //    </div>
                // </div>`
                //                 var myIcon = new BMap.Icon("https://api.map.baidu.com/images/blank.gif", new BMap.Size(15, 15))
                //                 var pt = new BMap.Point(116.41866394, 39.91600266);
                //                 var marker = new BMap.Marker(pt, {
                //                     icon: myIcon
                //                 });
                //                 // 将标注添加到地图
                //                 map.addOverlay(marker);
                //                 var infoWindow = new BMap.InfoWindow(html, opts);
                //                 map.openInfoWindow(infoWindow, point)
                //                 map.addControl(geolocationControl);
            })
            var map = new BMap.Map("allmap");
            var point = new BMap.Point(res[0].centers[0].longitude, res[0].centers[0].latitude)
            map.centerAndZoom(point, 14);
            // 添加带有定位的导航控件
            var navigationControl = new BMap.NavigationControl({
                // 靠左上角位置
                anchor: BMAP_ANCHOR_TOP_LEFT,
                // LARGE类型
                type: BMAP_NAVIGATION_CONTROL_LARGE,
                // 启用显示定位
                enableGeolocation: true
            });
            var geolocationControl = new BMap.GeolocationControl();
            var opts = {
                width: 300,
                height: 280,
            }
            var html = `
<div class="ason-map-div_box">
    <div class="ason-map-div">
        <strong>东方广场中心</strong>
        <div class="col">
            <b>地址</b>
            <p>${res[0].centers[0].address.stressName}</p>
        </div>
        <div class="col">
            <b>联系电话</b>
            <p>${res[0].centers[0].address.telephone}</p>
        </div>
        <div class="col">
            <b>工作时间</b>
            <p>周一至周五&nbsp;10:00 - 21:30</p>
            <p>周六至周日&nbsp;10:00 - 19:00</p>
        </div>
    </div>
</div>`
            var myIcon = new BMap.Icon("https://api.map.baidu.com/images/blank.gif", new BMap.Size(15, 15))
            var pt = new BMap.Point(res[0].centers[0].longitude, res[0].centers[0].latitude);
            var marker = new BMap.Marker(pt, {
                icon: myIcon
            });
            // 将标注添加到地图
            map.addOverlay(marker);
            var infoWindow = new BMap.InfoWindow(html, opts);
            map.openInfoWindow(infoWindow, point)
            map.addControl(geolocationControl);
        }
    })
}
html()
$('.sh').click(() => {
    console.log($('.cityname').text())
    $('.cityname').text($('.sh').text())
    $.ajax({
        type: 'get',
        url: 'http://localhost:8081/sh',
        success: (res) => {
            // console.log(res[0].centers)

            $.each(res[0].centers, (index, item) => {
                console.log(item)
                $('.datail_content_title').text(item.centerName)
                $('.particulars_box').html($(`<div>
<div class="particulars_box_icon">
    <img src="../../img/qc/地址.png" alt="" width="100%">
</div>
<div class="particulars_box_text">
    <h2>地址</h2>
    <div>${item.address.stressName}</div>
    <div class='border_bottom'></div>
</div>
</div>
<div>
<div class="particulars_box_icon">
    <img src="../../img/qc/电 话.png" alt="" width="100%">
</div>
<div class="particulars_box_text">
    <h2>联系方式</h2>
    <div>${item.address.telephone}</div>
    <div class='border_bottom'></div>
</div>
</div>
<div>
<div class="particulars_box_icon">
    <img src="../../img/qc/累计工作时间.png" alt="" width="100%">
</div>
<div class="particulars_box_text">
    <h2>工作时间</h2>
    <div>周一到周五<span>10:00-21:30</span></div>
    <div>周六到周日
        <span>10:00-19:00</span>
    </div>

</div>
</div>`))

            })
            var map = new BMap.Map("allmap");
            var point = new BMap.Point(res[0].centers[0].longitude, res[0].centers[0].latitude)
            map.centerAndZoom(point, 14);
            // 添加带有定位的导航控件
            var navigationControl = new BMap.NavigationControl({
                // 靠左上角位置
                anchor: BMAP_ANCHOR_TOP_LEFT,
                // LARGE类型
                type: BMAP_NAVIGATION_CONTROL_LARGE,
                // 启用显示定位
                enableGeolocation: true
            });
            var geolocationControl = new BMap.GeolocationControl();
            var opts = {
                width: 300,
                height: 280,
            }
            var html = `
<div class="ason-map-div_box">
    <div class="ason-map-div">
        <strong>东方广场中心</strong>
        <div class="col">
            <b>地址</b>
            <p>${res[0].centers[0].address.stressName}</p>
        </div>
        <div class="col">
            <b>联系电话</b>
            <p>${res[0].centers[0].address.telephone}</p>
        </div>
        <div class="col">
            <b>工作时间</b>
            <p>周一至周五&nbsp;10:00 - 21:30</p>
            <p>周六至周日&nbsp;10:00 - 19:00</p>
        </div>
    </div>
</div>`
            var myIcon = new BMap.Icon("https://api.map.baidu.com/images/blank.gif", new BMap.Size(15, 15))
            var pt = new BMap.Point(res[0].centers[0].longitude, res[0].centers[0].latitude);
            var marker = new BMap.Marker(pt, {
                icon: myIcon
            });
            // 将标注添加到地图
            map.addOverlay(marker);
            var infoWindow = new BMap.InfoWindow(html, opts);
            map.openInfoWindow(infoWindow, point)
            map.addControl(geolocationControl);
        }
    })
})

setInterval(() => {
    let width = $(window).width();
    console.log(width)
    if (width < 767) {
        $('.city_img').css({
            display: 'none'
        })
        $('.brief_text').css({
            display: 'name'
        })
    } else {
        $('.city_img').css({
            display: 'block'
        })
        $('.brief_text').css({
            display: 'block'
        })
    }
}, 500);