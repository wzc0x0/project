/**
 * Created by WZC on 2017/1/18.
 */
$(window).load(function () {
    $.getJSON("image_config.json",function (json) {
        for(let i = 0 ; i <json.length;i++){
            $(".home_goods ul img").eq(i).attr({"src":json[i]["src"]})
        }
    })
})
$(function () {
    $(".header").load("head.html")
    $(".footer").load("foot.html")
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
            console.log(e.pageX,e.pageY)
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
