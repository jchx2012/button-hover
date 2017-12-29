/**
 * Created by Administrator on 2016/5/31.
 */
$(function () {
    $('.btn-13-js').on('mouseenter', function (e) {
        var parentOffset = $(this).offset(), relX = e.pageX - parentOffset.left, relY = e.pageY - parentOffset.top;
        console.log(parentOffset);
        /**
         * $(this).offset()当前对象相对于真个页面的上和右的固定偏移值：Object {top: 692, left: 757.84375}
         *e.pageX鼠标相对于当前页面的x坐标值：变化的值
         * e.pageY鼠标相对于当前页面的y坐标值：变化的值
         *
         */
        console.log(e.pageX);
        $(this).find('span').css({
            top: relY,
            left: relX
        });
    }).on('mouseout', function (e) {
        var parentOffset = $(this).offset(), relX = e.pageX - parentOffset.left, relY = e.pageY - parentOffset.top;
        $(this).find('span').css({
            top: relY,
            left: relX
        });
    });

});