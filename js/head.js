/**
 * Created by WZC on 2017/2/10.
 */
$(function () {
    $(".select_bar").on({
        "mousemove":function () {
            var cur = $(".select_bar").index($(this))
            if(cur > 2){
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