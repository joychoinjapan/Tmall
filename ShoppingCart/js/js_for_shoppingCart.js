/**
 * Created by chushuwei on 2017/05/08.
 */

// 转换千进制度
function formatMoney(num) {
    num = num.toString().replace(/\$|\,/g,'');
    if(isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num*100+0.50000000001);
    cents = num%100;
    num = Math.floor(num/100).toString();
    if(cents<10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
        num = num.substring(0,num.length-(4*i+3))+','+
            num.substring(num.length-(4*i+3));
    return (((sign)?'':'-') + num + '.' + cents);
}

// 结算按钮颜色替换
function syncCreatOrderButton() {
    var selectAny=false;
    $(".cartProductItemIfSelected").each(function () {
        if("selectit"==$(this).attr("selectit")){
            selectAny==true;
        }
    });
    if(selectAny){
        $("button.createOrderButton").css("background-color","#C40000");
        $("button.createOrderButton").removeAttr("disabled");
    }
    else {
        $("button.createOrderButton").css("background-color","#AAAAAA");
        $("button.createOrderButton").attr("disabled","disabled");
    }

}
//同步全选状态
function synSelect() {
    var selectAll=true;
    $(".cartProductItemIfSelected").each(function () {
        if("false"==$(this).attr("selectit")){
            selectAll=false;
        }
    });
    if(selectAll)
        $(".selectAllItem").attr("src","http://how2j.cn/tmall/img/site/cartSelected.png");
    else
        $(".selectAllItem").attr("src","http://how2j.cn/tmall/img/site/cartNotSelected.png");
}
//显示选中的商品总数，以及总价格
function calcCartSumPriceSndNumber() {
    var sum=0;
    var totalNumber=0;
    $("img.cartProductItemIfSelected[selectit='selectit']").each(function () {
        var oiid=$(this).attr("oiid");
        var price=$(".cartProductItemSmallSumPrice[oiid="+oiid+"]").text();
        price=price.replace(/,/g,"");
        price=price.replace(/￥/g,"");
        sum+=new Number(price);
        var num=$(".orderItemNumberSetting[oiid="+oiid+"]").val();
        totalNumber=totalNumber+new Number(num);
    })
    $("span.cartTitlePrice").html("￥"+formatMoney(sum));
    $("span.cartSumPrice").html("￥"+formatMoney(sum));
    $("span.cartSumNumber").html(totalNumber);

}
//同步小记价格和商品价格
function syncPrice(pid,num,price) {
    $(".orderItemNumberSetting[pid="+pid+"]").val(num);
    var cartProductItemSmallSumPrice=formatMoney(num*price);
    $(".cartProductItemSmallSumPrice[pid="+pid+"]").html("￥"+cartProductItemSmallSumPrice);
    calcCartSumPriceSndNumber();
}

$(function () {

//选中一件商品
    $("img.cartProductItemIfSelected").click(function () {
        var selectit = $(this).attr("selectit");
        if ("selectit" == selectit) {
            $(this).attr("src", "http://how2j.cn/tmall/img/site/cartNotSelected.png");
            $(this).attr("selectit", "false");
            $(this).parents("tr.cartProductItemTR").css("background-color", "#FFF");
        }
        else {
            $(this).attr("src", "http://how2j.cn/tmall/img/site/cartSelected.png");
            $(this).attr("selectit", "selectit");
            $(this).parents("tr.cartProductItemTR").css("background-color", "#FFF8E1");
        }
        synSelect();
        syncCreatOrderButton();
        calcCartSumPriceSndNumber();

    });

//全选
    $("img.selectAllItem").click(function () {
        var selectit = $(this).attr("selectit");
        if ("selectit" == selectit) {
            $("img.selectAllItem").attr("src", "http://how2j.cn/tmall/img/site/cartNotSelected.png");
            $("img.selectAllItem").attr("selectit", "false");
            $(".cartProductItemIfSelected").each(function () {
                $(this).attr("src", "http://how2j.cn/tmall/img/site/cartNotSelected.png");
                $(this).attr("selectit", "false");
                $(this).parents("tr.cartProductItemTR").css("background-color", "#FFF");
            })
        }
        else {
            $("img.selectAllItem").attr("src", "http://how2j.cn/tmall/img/site/cartSelected.png");
            $("img.selectAllItem").attr("selectit", "selectit");
            $(".cartProductItemIfSelected").each(function () {
                $(this).attr("src", "http://how2j.cn/tmall/img/site/cartSelected.png");
                $(this).attr("selectit", "selectit");
                $(this).parents("tr.cartProductItemTR").css("background-color", "#FFF8E1");
            })
        }
        syncCreatOrderButton();
        calcCartSumPriceSndNumber();

    });
//增加和减少数量
    $(".numberPlus").click(function () {
        var pid=$(this).attr("pid");
        var stock=$("span.orderItemStock[pid="+pid+"]").text();
        var price=$("span.orderItemPromotePrice[pid="+pid+"]").text();
        var num=$("input.orderItemNumberSetting[pid="+pid+"]").val();
        num++;
        if(num>stock)
            num=stock;
        syncPrice(pid,num,price);
    })
//增加和减少数量
    $(".numberMinus").click(function () {
        var pid=$(this).attr("pid");
        var stock=$("span.orderItemStock[pid="+pid+"]").text();
        var price=$("span.orderItemPromotePrice[pid="+pid+"]").text();
        var num=$("input.orderItemNumberSetting[pid="+pid+"]").val();
        --num;
        if(num<=0)
            num=1;
        syncPrice(pid,num,price);
    })
//直接修改数量
    $("input.orderItemNumberSetting").onkeyup(function () {
        var pid=$(this).attr("pid");
        var stock=$("span.orderItemStock[pid="+pid+"]").text();
        var price=$("span.orderItemPromotePrice[pid]"+pid+"]").text();
        var num=$("input.orderItemNumberSetting[pid="+pid+"]").val();
        num=parseInt(num);
        if(isNaN(num))
            num=1;
        if(num<=0)
            num=1;
        if(num>stock)
            num=stock;
        syncPrice(pid,num,price)

    })


})
