/**
 * Created by chushuwei on 2017/05/06.
 */
$(function () {
    var initBigImg=false;
    $("img.smallImage").mouseenter(function () {
        var bigImageURL=$(this).attr("bigImageURL");
        $("img.bigImg").attr("src",bigImageURL);
        $("img.smallImage").each(function () {
            $(this).css("border-color","white");
        })
        $(this).css("border-color","black");
    });
    $("img.bigImg").load(
        function () {
            if (initBigImg)
                return;
            $("img.smallImage").each(function () {
                var bigImageURL=$(this).attr("bigImageURL");
                img=new Image();
                img.src=bigImageURL;
                img.onload=function () {
                    console.log(bigImageURL);
                    $("div.img4load").append($(img));
                };
            });
            initBigImg=true;
        }
    );
});
