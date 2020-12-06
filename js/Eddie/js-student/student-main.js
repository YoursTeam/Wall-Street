$.ajax({
  type: "get",
  url: "./js/Eddie/js-student/slider.json",
  success: res => {
    $.each(res, (index, item) => {
      let li = `<li style="background: url(${item.img}) no-repeat"></li>`
      $(".slider .img ul").append(li)
      let span = `<span class="hover"></span>`
      $(".spot").append(span)
    })
    $(".spot span").eq(0).addClass("active")
    btn($(".slider .prev"), $(".slider .next"))

    dynamic($(".future .container"))
    dynamic($(".future .wrapper"))
    dynamic($(".fadeInUp"))
    dynamic($(".method"))
    dynamic($(".item-txt"))
    dynamic($(".social-img"))
    dynamic($(".free .exper-learnmore"))

    dynamicCT($(".exp .spinner"))
    dynamicCB($(".exp .spinner"))
    dynamicCT($(".item-spinner"))
    dynamicCB($(".item-spinner"))
    dynamicCT($(".spinner-css"))
    dynamicCB($(".spinner-css"))

    $(".nav-tabs li").click(function () {
      $(this).addClass("selected").removeClass("hover").siblings().addClass("hover").removeClass("selected")
      $(".tab-content .item").eq($(this).index()).show().siblings().hide()
      $(".tab-content .item-img").eq($(this).index()).animate({
        opacity: 1
      }, 200, function () {
        $(this).parent().siblings().find(".item-img").animate({
          opacity: 0
        }, 200)
      })
      $(".tab-content .item-content").eq($(this).index()).animate({
        opacity: 1
      }, 200, function () {
        $(this).parent().siblings().find(".item-content").animate({
          opacity: 0
        }, 200)
      })
    })
  }
})

// 封装动态element
function dynamic (element) {
  $(window).on('scroll', function () {
    let scrT = $(window).scrollTop()
    let offT = element.offset().top - element.height() - $(window).height()
    if (scrT >= offT) {
      element.css({
        transform: 'translateY(0)',
        opacity: 1
      })
    }
  })
}
function dynamicCT (element) {
  $(window).on('scroll', function () {
    let scrT = $(window).scrollTop()
    let offT = element.offset().top - $(window).height()
    if (scrT >= offT) {
      element.find(".sp_top .fill").css({
        transform: 'rotate(225deg)',
      })
    }
  })
}
function dynamicCB (element) {
  $(window).on('scroll', function () {
    let scrT = $(window).scrollTop()
    let offT = element.offset().top - $(window).height()
    if (scrT >= offT) {
      element.find(".sp_bottom .fill").css({
        transform: 'rotate(45deg)',
      })
    }
  })
}


// 封装按钮
function btn (p, n) {
  let index = 0
  let ulList
  let liWidth
  p.click(function () {
    ulList = $(this).siblings(".img").find("ul")
    liWidth = ulList.find("li").width()
    index--
    if (index < 0) {
      index = ulList.find("li").length - 1
    }
    ulList.stop().animate({
      left: -index * 100 + "%"
    }, 800)
    $(".spot span").eq(index).addClass("active").removeClass("hover").siblings().addClass("hover").removeClass("active")
  })
  n.click(function () {
    ulList = $(this).siblings(".img").find("ul")
    liWidth = ulList.find("li").width()
    index++
    if (index > ulList.find("li").length - 1) {
      index = 0
    }
    ulList.stop().animate({
      left: -index * 100 + "%"
    }, 800)
    $(".spot span").eq(index).addClass("active").removeClass("hover").siblings().addClass("hover").removeClass("active")
  })
  $(".spot span").click(function () {
    ulList = $(this).parent().siblings(".img").find("ul")
    index = $(this).index()
    $(this).addClass("active").removeClass("hover").siblings().addClass("hover").removeClass("active")
    ulList.stop().animate({
      left: -index * 100 + "%"
    }, 800)
  })

  let setInt = setInterval(function () {
    n.click()
  }, 5000)
  $(".slider").hover(function () {
    clearInterval(setInt)
  }, () => {
    setInt = setInterval(function () {
      n.click()
    }, 2000)
  })
}