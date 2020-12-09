$('header').load('./config2.html', function () {
  $(this).prepend(
    $('<link/>', { rel: "stylesheet", href: '../../css/config/config.css' })
  )
  $(this).append(
	$('<script></script>', { src: '../../js/Eddie/config2.js'} )
  )
})
$('footer').load('./At_the_bottom_of_the_public2.html', function () {

  $(this).find('.col-hotline_footer-box_img img').attr("src", "../../img/Eddie/image-student/wechar_qr.jpg")
  $(this).find('.col.col-display1 img').attr("src", "../../img/qrf/logo_wse_footer.png")
  $(this).find('.footer_security_record img').attr("src", "../../img/qrf/record_icon.png")
  $(this).find('.col-hotline_footer-box_img').css({ boxSizing: "content-box" })
})

$.ajax({
  type: "get",
  url: "../../js/Eddie/team-video.json",
  success: function (res) {
    // 左右按钮切换
    $.each(res, (index, item) => {
      const li = `<li>
                    <div class="img">
                      <img src="${item.img}">
                      <video src="${item.video}" controls
                        poster="${item.img}"></video>
                    </div>
                    <div class=" txt">
                      <b>${item.txtB}</b>
                      <p>${item.txtP}</p>
                      <a href="#">播放</a>
                    </div>
                  </li>`
      $(".slider-list .team-video").append(li)
    })
    $(".slider-list .team-video").css({ width: $(".slider-list .team-video li").length * $(".slider-list .team-video li").width() })
    btn($(".team-slider .prev"), $(".team-slider .next"))
    // 播放&按钮
    $(".team-video .img img").click(function () {
      $(this).hide()
      $(this).siblings("video").get(0).play()
    })
    $(".team-video .txt a").click(function (e) {
      e.preventDefault()
      const vd = $(this).parent().siblings().find("video").get(0)
      $(this).parent().siblings().find("img").hide()
      vd.load()
      setTimeout(function () {
        vd.play()
      }, 200)
    })
  }
})

$.ajax({
  type: "get",
  url: "../../js/Eddie/time-slider.json",
  success: res => {
    $.each(res, (index, element) => {
      let d = ''
      for (let i = 0; i < (element.list.length + 1); i++) {
        let em = `<em></em>`
        d += em
      }
      let ct = ''
      $.each(element.list, (count, item) => {
        let t = `
                  <div class="t${count}">
                    <div class="tt">
                      <b>${item.duty}</b>
                      <span>${item.reap}</span>
                    </div>
                    <i>${item.year}</i>
                  </div>
                `
        ct += t
      })
      let li = `<li>
                  <strong>${element.title}</strong>
                  <div class="li-content">
                    <div class="ct">
                      ${ct}
                    </div>
                    <div class="d">
                      ${d}
                    </div>
                  </div>
                </li>
              `
      $(".ts-list ul").append(li)
    });
    $(".ts-list ul").css({
      width: $(".ts-list ul li").length * $(".ts-list ul li").width()
    })
    // 前后按钮
    btn($(".time-slider .prev"), $(".time-slider .next"))
  }
})


// 封装按钮
function btn (p, n) {
  let index = 0
  p.click(function () {
    if ($(".team-video .img video")) {
      $(".team-video .img video").get(0).load()
      $(".team-video .img img").show()
    }
    const ulList = $(this).siblings("div").find("ul")
    const liWidth = ulList.find("li").width()
    index--
    if (index < 0) {
      index = ulList.find("li").length - 1
    }
    ulList.stop().animate({
      left: -index * liWidth + "px"
    }, 800)
  })
  n.click(function () {
    if ($(".team-video .img video")) {
      $(".team-video .img video").get(0).load()
      $(".team-video .img img").show()
    }
    const ulList = $(this).siblings("div").find("ul")
    const liWidth = ulList.find("li").width()
    index++
    if (index > ulList.find("li").length - 1) {
      index = 0
    }
    ulList.stop().animate({
      left: -index * liWidth + "px"
    }, 800)
  })
}