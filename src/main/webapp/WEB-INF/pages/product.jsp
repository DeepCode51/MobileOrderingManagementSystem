<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
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
        <!-- mobile product slider  -->
        <div class="tt-mobile-product-layout visible-xs">
            <div class="tt-mobile-product-slider arrow-location-center slick-animated-show-js">
                <div><img src="${product.pic_1}" alt=""></div>
            </div>
        </div>
        <!-- /mobile product slider  -->
        <div class="container container-fluid-mobile">
            <div class="row">
                <div class="col-6 hidden-xs">
                    <div class="tt-product-vertical-layout">
                        <div class="tt-product-single-img">
                            <div>
                                <img class="zoom-product" src='${product.pic_1}' data-zoom-image="${product.pic_1}" alt="">
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-6">
                    <div class="tt-product-single-info">
                        <div class="tt-add-info">
                            <ul>
                                <li><span>标签:</span> ${product.productTag}</li>
                            </ul>
                        </div>
                        <h1 class="tt-title">${product.name}</h1>
                        <div class="tt-price">
                            <span class="new-price">${product.price}</span>
                        </div>
                        <div class="tt-review">
                            <div class="tt-rating">
                                <i class="icon-star"></i>
                                <i class="icon-star"></i>
                                <i class="icon-star"></i>
                                <i class="icon-star-half"></i>
                                <i class="icon-star-empty"></i>
                            </div>
                        </div>
                        <div class="tt-wrapper">
                            <div class="tt-row-custom-01">
                                <%--<div class="col-item">--%>
                                    <%--<div class="tt-input-counter style-01">--%>
                                        <%--<span class="minus-btn"></span>--%>
                                        <%--<input type="text" value="1" size="5">--%>
                                        <%--<span class="plus-btn"></span>--%>
                                    <%--</div>--%>
                                <%--</div>--%>
                                <div class="col-item">
                                    <a href="/cart/addProduct/${product.id}" class="btn btn-lg"><i class="icon-f-39"></i>加入购物车</a>
                                </div>
                            </div>
                        </div>

                        <%--<div class="tt-wrapper">--%>
                            <%--<div class="tt-add-info">--%>
                                <%--<ul>--%>
                                    <%--<li><span>Vendor:</span> Polo</li>--%>
                                    <%--<li><span>Product Type:</span> T-Shirt</li>--%>
                                    <%--<li><span>Tag:</span> <a href="#">T-Shirt</a>, <a href="#">Women</a>, <a href="#">Top</a></li>--%>
                                <%--</ul>--%>
                            <%--</div>--%>
                        <%--</div>--%>
                        <div class="tt-collapse-block">
                            <div class="tt-item">
                                <div class="tt-collapse-title">商品详情</div>
                                <div class="tt-collapse-content">
                                   ${product.brief}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<a href="#" class="tt-back-to-top">返回顶部</a>
<!-- modal (AddToCartProduct) -->
<jsp:include page="common/modalCart.jsp" flush="true"/>
</body>
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