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
<div class="tt-breadcrumb">
    <div class="container">
        <ul>
            <li><a href="/">首页</a></li>
            <li>账户</li>
        </ul>
    </div>
</div>
<div id="tt-pageContent">
    <div class="container-indent">
        <div class="container container-fluid-custom-mobile-padding">
            <h1 class="tt-title-subpages noborder">订单详情</h1>
            <div class="tt-shopping-layout">
                <h2 class="tt-title">订单 ${orderId}</h2>
                <a href="/customer/toPersonal" class="tt-link-back">
                    <i class="icon-e-19"></i> 返回个人中心
                </a>
                <div class="tt-wrapper">
                    <div class="tt-table-responsive">
                        <table class="tt-table-shop-03">
                            <thead>
                            <tr>
                                <th>商品</th>
                                <th>价格</th>
                                <th>数量</th>
                                <th>总价</th>
                            </tr>
                            </thead>
                            <tbody>
                            <c:forEach items="${orderProduct}" var="op" varStatus="s">
                            <tr>
                                <td>${op.name}</td>
                                <td>${op.price/op.number}</td>
                                <td>${op.number}</td>
                                <td>${op.price}</td>
                            </tr>
                            </c:forEach>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tt-shopcart-col">
                    <c:if test="${orders.isPay == 0}">
                    <div class="row">
                        <div class="col-md-6 col-lg-4">
                            <div class="tt-shopcart-box tt-boredr-large">
                                <a href="/orders/updateStatus/${orderId}" class="btn btn-lg"><span class="icon icon-check_circle"></span>去支付</a>
                            </div>
                        </div>
                    </div>
                    </c:if>
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