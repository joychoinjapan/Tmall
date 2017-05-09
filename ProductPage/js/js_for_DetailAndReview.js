/**
 * Created by chushuwei on 2017/05/06.
 */
$(function () {
    $("div.productReviewDiv").hide();
    $("a.productDetailTopReviewLink").click(function () {
            $("div.productReviewDiv").show();
            $("div.productDetailDiv").hide();
        }
    )
    $("a.productReviewTopPartSelectedLink").click(function () {
        $("div.productReviewDiv").hide();
        $("div.productDetailDiv").show();
    })
})