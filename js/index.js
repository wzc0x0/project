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