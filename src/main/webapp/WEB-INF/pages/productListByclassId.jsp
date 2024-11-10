<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
    pageContext.setAttribute("basePath", basePath);
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta charset="utf-8" />

    <title>首页</title>
    <meta name="description" content="首页">
    <meta name="keywords" content="HTML5 Template">
    <meta name="description" content="Wokiee - Responsive HTML5 Template">
    <meta name="author" content="wokiee">
    <link rel="shortcut icon" href="${ctx}/assets/images/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="${ctx}/assets/css/theme.css">

</head>
<body>
<jsp:include page="common/header.jsp" flush="true"/>
<div id="tt-pageContent">
    <div class="container-indent">
        <div class="container container-fluid-custom-mobile-padding">
            <div class="tt-block-title">
                <h1 class="tt-title">商品</h1>
                <div class="tt-description">TOP VIEW IN THIS WEEK</div>
            </div>
            <div class="row tt-layout-product-item">


            </div>
        </div>
    </div>


</div>

<a href="#" class="tt-back-to-top">返回顶部</a>
<!-- modal (AddToCartProduct) -->
<jsp:include page="common/modalCart.jsp" flush="true"/>
</body>
<script type="text/javascript">
    $.ajax({ //实时获取数据
        url : "/bx/pd/queryPageIndex",
        type : "post",
        dataType : "json",
        error : function() {
        },
        success : function(result) {
            var html = '';
            $.each(result.rows,function(i,item){
                html+='<div class="col-6 col-md-4 col-lg-3">';
                html+='    <div class="tt-product thumbprod-center">';
                html+=       '<div class="tt-image-box">';
                html+=           '<a href="product.html">';
                html+=           '<span class="tt-img"><img src="<%=basePath%>'+item.pic_1+'" ></span>';
                html+=           '</a>';
                html+=        '</div>';
                html+=    '<div class="tt-description">';
                html+=    '<h2 class="tt-title"><a href="product.html">'+item.name+'</a></h2>';
                html+=        '<div class="tt-price">'+item.price+'</div>';
                html+=           '<div class="tt-product-inside-hover">';
                html+=               '<div class="tt-row-btn">';
                html+=                   '<a href="#" class="tt-btn-addtocart thumbprod-button-bg" data-toggle="modal" data-target="#modalAddToCartProduct">加入购物车</a>';
                html+=              '</div>';
                html+=            '</div>';
                html+=        '</div>';
                html+=     '</div>';
                html+= '</div>';
            });

            $('.tt-layout-product-item').append(html);
        }
    });

</script>
<script src="${ctx}/assets/external/bootstrap/js/bootstrap.min.js"></script>
<script src="${ctx}/assets/external/slick/slick.min.js"></script>
<script src="${ctx}/assets/external/perfect-scrollbar/perfect-scrollbar.min.js"></script>
<script src="${ctx}/assets/external/panelmenu/panelmenu.js"></script>
<script src="${ctx}/assets/external/instafeed/instafeed.min.js"></script>
<script src="${ctx}/assets/external/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
<script src="${ctx}/assets/external/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
<script src="${ctx}/assets/external/countdown/jquery.plugin.min.js"></script>
<script src="${ctx}/assets/external/countdown/jquery.countdown.min.js"></script>
<script src="${ctx}/assets/external/lazyLoad/lazyload.min.js"></script>
<script src="${ctx}/assets/js/main.js"></script>
<!-- form validation and sending to mail -->
<script src="${ctx}/assets/external/form/jquery.form.js"></script>
<script src="${ctx}/assets/external/form/jquery.validate.min.js"></script>
<script src="${ctx}/assets/external/form/jquery.form-init.js"></script>
</html>