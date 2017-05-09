/**
 * Created by chushuwei on 2017/05/01.
 */
$(function(){
    $("div.rightMenu span").mouseenter(function () {
        var left=$(this).offset().left;
        var top=$(this).offset().top;
        var catWidth=$("img#catear").width();
        var width=$(this).css("width");
        var destLeft=parseInt(left)+parseInt(width)/2-parseInt(catWidth)/2;
        $("img#catear").css("left",destLeft);
        $("img#catear").css("top",top-20);
        $("img#catear").fadeIn(500);
    });
    $("div.rightMenu span").mouseleave(function () {
        $("img#catear").hide();
    });
});
