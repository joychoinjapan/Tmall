/**
 * Created by chushuwei on 2017/05/06.
 */
$(function () {
    var stock=66;
    $(".productNumberSetting").keyup(function () {
        var num=$(".productNumberSetting").val();
        num=parseInt(num);
        if(isNaN(num)){
            num=1;
        }
        if(num<=0){
            num=1;
        }
        if(num>stock){
            num=stock;
        }
        $(".productNumberSetting").val(num);
    });
    $("#increase").click(function () {
        var num=$(".productNumberSetting").val();
        num++;
        if(num>stock)
            num=stock;
        $(".productNumberSetting").val(num);
    })
    $("#decrease").click(function () {
        var num=$(".productNumberSetting").val();
        --num;
        if(num<=0)
            num=1;
        $(".productNumberSetting").val(num);
    })
});
