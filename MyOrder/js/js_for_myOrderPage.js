/**
 * Created by baobaochu on 2017/5/10.
 */
$(function () {
    $("a[orderStatus]").click(function () {
        var orderStatus=$(this).attr("orderStatus");
        if("all"==orderStatus){
            $("table[orderStatus]").show();
        }else {
            $("table[orderStatus]").hide();
            $("table[orderStatus="+orderStatus+"]").show();
        }
        $("div.orderType div").removeClass("selectedOrderType");
        $(this).parent("div").addClass("selectedOrderType");
    })

});