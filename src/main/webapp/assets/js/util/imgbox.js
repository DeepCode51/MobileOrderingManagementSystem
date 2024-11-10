(function ($) {
    $.fn.imgBox = function (opts){
        var defaults = {idName:"#lightbox"};
        var obj= $.extend({}, defaults, opts);
        var id = $(obj.idName)
        id.hide();  
        $(".imgbox").click(function (e) {
            var img = new Image();
            img.src = $(this).attr("href");
            $("*").stop(); //停止所有正在运行的动画
            id.hide();
            //var html = "<div id=\"lightbox\"><img  src=\"" + img.src + "\" /><div id=\"close\"></div></img><div>" + $(this).attr("title") + "</div></div>"
            //$("body").append(html);
            $("img", id).attr("src", img.src);
            $("div:eq(1)", id).html($(this).attr("title"));
            //追加一个层，使背景变灰
            $(".modal-dialog").append("<div id='greybackground'></div>");
            $("#greybackground").css({
                opacity: "0.5",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                position: "absolute",
                backgroundColor: "#9c9c9c"
            });
            //设置样式 
             id.css({
                position: "absolute",
                border: "5px solid #ccc", "text-align": "center",
                //width: img.width
            })
            $("#close", id).css({
                position: "absolute",
                top: -13 + "px",
                left: img.width - 10 + "px",
                width: "26px",
                height: "26px",
                background: "url(../img/images/fancybox.png) -42px 0",
                cursor: "pointer"
            })
            $("div:eq(1)", id).css({
                "font-size": "12px", "font-family": "Arial", margin: "5px"
            })
            var width = $(".modal-dialog").width();
            if(width > img.width){//弹出框比图片大,则在弹出框居中,否则就浏览器居中
                id.css({ "top": img.height / 2 + "px", "left": (width - img.width) / 2 + "px", "z-index": 1000 }).fadeIn("slow");
            }else{
                id.css({ "top": "-50px", "left": (- (img.width - width) / 2) + "px", "z-index": 1000 }).fadeIn("slow");
            }
        })
        $("#close", id).click(function () {
        	id.hide();
        	$("#greybackground").remove();
        })
    } 
}) (jQuery)