<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <title>服务首页</title>
    <meta name="description" content="服务首页">
    <link href="${ctx}/h5/res/f7/css/framework7.ios.min.css" rel="stylesheet" />
    <!--<link href="res/f7/css/framework7.md.min.css" rel="stylesheet" />-->
    <link href="${ctx}/h5/res/f7/css/framework7-icons.css" rel="stylesheet" />
    <script src="${ctx}/h5/res/f7/js/framework7.min.js"></script>
    <link href="${ctx}/h5/res/main.css?v=2" rel="stylesheet" />
    <!--图片大小：
        顶部：110x85 px
        列表：110x85 px
    -->
</head>
<body>
    <div id="app">
        <div class="view view-main view-init">
            <div class="page ">

                <div class="navbar">
                    <div class="navbar-inner sliding">
                        <div class="title">服务首页</div>
                        <div class="right">
                            <!--<a class="link external" href="my-policy.html" ><i class="f7-icons" style="font-size: 22px">person</i></a>-->
                        </div>
                    </div>
                </div>

                <div class="page-content hide-navbar-on-scroll main-page">
                    
                    <div class="main-group">热门产品</div>
                    <div  data-space-between="2" data-slides-per-view="3" id="hotProductsCtx" class="swiper-container main-swiper main-ctx">
                        <div class="swiper-wrapper" id="hotProducts">
                        </div>
                    </div>

                    <div id="productCls"  class="swiper-container">
                        <div class="swiper-wrapper " > 
                        	<c:forEach items="${list}" var="classify" varStatus="status">
								<div class="swiper-slide toolbar tabbar"><a href="#tab-${status.index+1}-${classify.name}" class="tab-link <c:if test='${status.index==0}'>tab-link-active</c:if>">${classify.name}</a></div>
							</c:forEach>
                        </div>
                    </div>
                    <div class="tabs-swipeable-wrap" style="height:auto">
                        <div class="tabs"> 
                        	<c:forEach items="${list}" var="bean" varStatus="status">
								<div id="tab-${status.index+1}-${bean.name}" class=" main-tabctx tab <c:if test='${status.index==0}'>tab-active</c:if>" >
	                                <div class="list media-list bx-main-list">
	                                    <ul class="" id="productList${status.index+1}"></ul>
	                                </div>
	                            </div>
							</c:forEach>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script src="${ctx}/h5/res/bxapp.js"></script>
    <script src="${ctx}/h5/res/jquery.js"></script>
    <script>
        var swiper2 = new Swiper('#productCls', {
          direction: 'horizontal',
          slidesPerView: '3',
          freeMode: true, 
          resistance:true,
          resistanceRatio:0,
          touchMoveStopPropagation: false,
          mousewheel: true
        });
        var delayLoad = function () { 
            setTimeout(function () { $$('img.lazy').trigger('lazy');},300);
        };
        // 动态设置热门产品列表项
        var createHotProduct = function (html) { 
            document.getElementById('hotProducts').innerHTML=html;
            var itemCount = $$('#hotProductsCtx .item-product').length;
            if (itemCount < 3 && itemCount>0) { 
                var htmlCtx = html;
                for (var i = 0; i < Math.floor(3/itemCount); i++) { 
                    htmlCtx+= html;
                }
                document.getElementById('hotProducts').innerHTML=htmlCtx;
            }
            var sp = new Swiper('#hotProductsCtx', {
               	  direction: 'horizontal',
               	  slidesPerView: '2.5',
               	  spaceBetween: 5,
               	  freeMode: true, 
               	  resistance:true,
               	  resistanceRatio:0,
               	  touchMoveStopPropagation: false,
               	  mousewheel: true
            });
        };

        var lastShowCatId = '';
        app.on('tabShow', function (tab) {
            delayLoad();
            
            var tabId = tab.id;
            var clsId = tabId.split('-')[2];
            var productId = tabId.split('-')[1];
            if (lastShowCatId != clsId) { 
                lastShowCatId = clsId;
                getProductList(clsId,productId);
            }
        });
        
        $(function(){
        	getHotProductList('1'); //热门产品列表
        	getProductList($(".tab-link-active").html(),"1"); //产品列表
    	});
    	
	    function getProductList(classifyName,productId) { //获取热门产品 
			var url = "../h5/queryProducts";
	    	var paramData = {"classifyName":classifyName};
	    	var productListId = "productList"+productId; //
	    	var productListHtml = ""; //
	    	$.ajax({ //实时获取数据
				url : url,
				type : "post",
				dataType : "json",
				data : paramData,
				error : function() {
				},
				success : function(result) {
					if(result != null){
						var array = result.data;
						$(array).each(function(i){
                            var tagHtml = "";
                            if (array[i].productTag) { 
                                tagHtml = "<span class=\"badge color-red\">"+array[i].productTag+"</span>";
                            }
							var lihtml = "<li><a onclick=\"window.location='"+array[i].url_1+"'\" class=\"item-link item-content\">"
				                            +"<div class=\"item-media bx-item-image\"><img class=\"lazy  lazy-fade-in\" src='.."+array[i].pic_2+"'></div>"
				                            +"<div class=\"item-inner\">"
				                            	+"<div class=\"item-title-row\">"
				                            		+"<div class=\"item-title bx-item-title\">"+tagHtml+"&nbsp;"+array[i].name+"</div>"
				                            		+"</div>"
			                            		+"<div class=\"item-text bx-item-desc\">"+array[i].brief+"</div>"
			                            		+"<div class=\"bx-item-prize\">"+array[i].price+"元起</div>"
		                            		+"</div>"
	                            		+"</a></li>";
							productListHtml += lihtml;
						});
						$("#"+productListId).html(productListHtml);
					}
				}
			});
		}
	    
	    function getHotProductList(isHot) { //获取热门产品 
			var url = "../h5/queryProducts";
	    	var paramData = {"isHot":isHot};
	    	var hotListHtml = "";
	    	$.ajax({ //实时获取数据
				url : url,
				type : "post",
				dataType : "json",
				data : paramData,
				error : function() {
				},
				success : function(result) {
					if(result != null){
						var array = result.data;
						$(array).each(function(i){
                            var detailUrl = array[i].url_1;
                            if (detailUrl && detailUrl!= '#') { 
                                detailUrl= 'window.location=\''+detailUrl+'\'';
                            }
							hotListHtml += "<div class=\"swiper-slide\"><div class=\"item-product\" onclick=\""+detailUrl+"\"><a><img src=\".."+array[i].pic_1+"\" /></a></div></div>";
						});
						//$("#hotProductList").html(hotListHtml);
                        createHotProduct(hotListHtml);
					}
				}
			});
		}
        
    </script>
</body>
</html>