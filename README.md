### Button-Hover-Effects
<p>Just Some More  Button Hover Effects</p>
------------------------------------
<p>IE9+,chrome,opera,firefox</p>
-----------------------------------

[效果预览](https://jchx2012.github.io/button-hover/ "效果预览")

####原理
+ border属性拆分开来理解
+ 类似拆分开画三角形

```javascript

	border:1px solid currentColor;/*currentColor当前文字的颜色*/
	border-style: solid;
	border-width: 0 0 0 0;/*上、右、下、左*/
	border-color: #611c19 transparent transparent transparent;
	/*btn-13特殊*/
	.btn-13-js:hover span {
            width: 562.5px;/***525是按钮对角线的最大长度(三角函数)Math.sqrt(宽度的平方+高度的平方)再开平方***/
            height: 562.5px;
        }
	/*btn-13.js*/
	$(function () {
    	$('.btn-13-js').on('mouseenter', function (e) {
          var parentOffset = $(this).offset(), relX = e.pageX - parentOffset.left, relY = e.pageY - parentOffset.top;
          console.log(parentOffset);
                    /**
                     * $(this).offset()当前对象相对于整个页面(body)的上边和左边的固定偏移值：Object {top: 692, left: 757.84375}
                     * e.pageX鼠标相对于当前页面的x坐标值：变化的值
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

```
