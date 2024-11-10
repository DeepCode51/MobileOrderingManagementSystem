<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
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
            <li>个人中心</li>
        </ul>
    </div>
</div>
<div id="tt-pageContent">
    <div class="container-indent">
        <div class="container container-fluid-custom-mobile-padding">
            <h1 class="tt-title-subpages noborder">个人中心</h1>
            <div class="tt-shopping-layout">
                <h2 class="tt-title-border">我的账号</h2>
                <div class="tt-wrapper">
                    <h3 class="tt-title">订单列表</h3>
                    <div class="tt-table-responsive">
                        <table class="tt-table-shop-01">
                            <thead>
                            <tr>
                                <th>订单</th>
                                <th>日期</th>
                                <th>状态</th>
                                <th>总价</th>
                            </tr>
                            </thead>
                            <tbody>
                            <c:forEach items="${ordersList}" var="o" varStatus="s">
                                <tr>
                                    <td><a href="/orders/queryOrder/${o.orderId}">${o.orderId}</a></td>
                                    <td>${o.createTime}</td>
                                    <td><c:if test="${o.isPay == 1}">已支付</c:if><c:if test="${o.isPay == 0}">未支付</c:if></td>
                                    <td>￥${o.payPrice}</td>
                                </tr>
                            </c:forEach>


                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tt-wrapper">
                    <h3 class="tt-title">账号详情</h3>
                    <div class="tt-table-responsive">
                        <table class="tt-table-shop-02">
                            <tbody>
                            <tr>
                                <td>姓名:</td>
                                <td>${customer.customerName}</td>
                            </tr>
                            <tr>
                                <td>账号:</td>
                                <td>${customer.stuNumber}</td>
                            </tr>
                            <tr>
                                <td>邮箱:</td>
                                <td>${customer.email} </td>
                            </tr>
                            <tr>
                                <td>地址:</td>
                                <td>${customer.address}</td>
                            </tr>
                            <tr>
                                <td>电话:</td>
                                <td>${customer.phoneNo}</td>
                            </tr>
                            </tbody>
                        </table>
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
<script type="text/javascript">
    window.jQuery || document.write("<script src='${ctx}/assets/js/jquery.js'>"+"<"+"/script>");
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