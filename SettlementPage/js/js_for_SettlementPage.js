/**
 * Created by baobaochu on 2017/5/13.
 */
$(function () {
    $("img.leaveMessageImg").click(function () {
        $(this).hide();
        $("span.leaveMessageTextareaSpan").show();
        $("div.orderItemSumDiv").css("height","100px");
    })
})