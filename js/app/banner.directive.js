/**
 *
 * Created by WZC on 2017/2/10.
 */
angular.module("myApp")
    .directive("bannerSlide",function () {
        return{
            restrict:"EAC",
            templateUrl:"js/app/temp/banner_slide.html"
        }
    })