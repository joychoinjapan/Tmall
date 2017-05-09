/**
 * Created by chushuwei on 2017/05/03.
 */
$(function () {
    $('input.sortBarPrice').keyup(function () {
        var data_begin = $('input.beginPrice').val();
        var begin = minChange(data_begin);
        var data_end = $('input.endPrice').val();
        var end = maxChange(data_end);
        // alert("最小"+begin+"最大"+end);

        if (!isNaN(begin) && !isNaN(end)) {
            $("div.productUnit").hide();
            $("div.productUnit").each(function () {
                var price = $(this).attr("price");
                price = new Number(price);
                if (price <= end && price >= begin) {
                    $(this).show();
                }
            })

        }
    })

})

function maxChange(data) {
    if((data.length)==0){
        return Number.MAX_VALUE;
    }
    var num=parseInt(data);
    if(!isNaN(num)&&num>=0){
        return num;
    }else {
        return Number.MAX_VALUE;
    }
}
function minChange(data) {
    if((data.length)==0){
        return 1;
    }
    var num=parseInt(data);
    if(!isNaN(num)&&num>=0){
        return num;
    }else {
        return 1;
    }
}


