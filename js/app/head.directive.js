/**
 *
 * Created by WZC on 2017/2/9.
 */
angular.module("myApp")
    .directive("headCom",function () {
        return{
            restrict:"EAC",
            templateUrl:"js/app/temp/home_head.html"
        }
    })