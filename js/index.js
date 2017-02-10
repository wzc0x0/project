$(function () {
    $(document).scroll(function () {
        if($(this).scrollTop() >= 130){
            $(".header2").addClass("fix_top")
            $(".fix_wrap").css("display","block")
        }else {
            $(".fix_wrap").css("display","none")
            $(".header2").removeClass("fix_top")
        }
    })
})
$(function () {
    $.getJSON("image_config.json",function (json){
        for(let i = 0;i < json.length;i++){
            $(".home_box img").eq(i).attr({"src":json[i]["src"]})
        }
        $(".select_bar").on({
            "mousemove":function () {
                var cur = $(".select_bar").index($(this))
                if(cur > 3){
                    $(".sub_menu").eq(cur).css({"left":-71.5*(cur-2)})
                }
                $(".sub_menu").eq(cur).stop().show()
                $(".select_bar").removeClass("selected")
                $(this).addClass("selected")
            },
            "mouseleave":function () {
                $(".select_bar").removeClass("selected")
                $(".sub_menu").stop().hide()
            }
        })
        $(".marquee li").on("mousemove",function (e) {
            clearInterval(stop)
            let target = e.target
            let index = $(".marquee li").index($(target))
            //console.log(num)
            $(".marquee li").removeClass("on")
            $(".marquee li").eq(index).addClass("on")
            $(".auto_play").stop().animate({"left":-1200*index})
        })
        $(".home_banner").on({
            "mousemove":function () {clearInterval(stop)},
            "mouseleave":function () {autoPlay()}
        })
    })
})
$(function () {
    let stop = null
    let num  = 0
    autoPlay()
    function autoPlay() {
        stop = setInterval(function () {play()},5000)
    }
    function play() {
        $(".auto_play").animate({"left":-1200},800,function () {
            $(".auto_play li").eq(0).appendTo($(".auto_play"))
        }).animate({"left":0},0)
        $(".marquee li").removeClass("on")
        $(".marquee li").eq(num).addClass("on")
        num++
        if(num > 1){num = 0}
    }
})

$(function () {
    $(".b_map").on("mouseover",function(){
        let curImgWidth = $(this).width()
        let curImgHeight = $(this).height()
        $(".magic_cup").css("display","block")
        $(".big_pic").css("display","block")
        $(document).on("mousemove",function(e){
            let posX = e.pageX - $(".magic_cup").width()
            let posY = e.pageY - $(".magic_cup").height()
            //console.log(e.pageX,e.pageY)
            if(posX < 0){posX = 0}
            if(posY < 0){posY = 0}
            if(posX > curImgWidth - $(".magic_cup").width()){posX = curImgWidth - $(".magic_cup").width()}
            if(posY > curImgHeight - $(".magic_cup").height()){posY = curImgHeight - $(".magic_cup").height()}
            $(".magic_cup").css({left:posX,top:posY})
            $(".big_pic>img").css({left:-2*posX,top:-2*posY,position:"absolute"})
        })
    })
    $(".b_map").on("mouseout",function(){
        $(".magic_cup").css("display","none")
        $(".big_pic").css("display","none")
    })
    $(".s_map ul li").on("mouseover",function () {
        $(".s_map ul li").removeClass("dc")
        $(this).addClass("dc")
    })
})
