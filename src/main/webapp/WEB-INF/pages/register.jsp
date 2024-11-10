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
            <li>创建账号</li>
        </ul>
    </div>
</div>
<div id="tt-pageContent">
    <div class="container-indent">
        <div class="container">
            <h1 class="tt-title-subpages noborder">创建账号</h1>
            <div class="tt-login-form">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6">
                        <div class="tt-item">
                            <h2 class="tt-title">个人信息</h2>
                            <div class="form-default">
                                <form id="contactform" method="post" action="/customer/register" novalidate="novalidate">
                                    <div class="form-group">
                                        <label for="loginInputName">姓名 *</label>
                                        <div class="tt-required">* 必填项</div>
                                        <input type="text" name="customerName" class="form-control" id="loginInputName" placeholder="请输入姓名">
                                    </div>
                                    <div class="form-group">
                                        <label for="loginInputStudentId">账号 *</label>
                                        <input type="text" name="stuNumber" class="form-control" id="loginInputStudentId" placeholder="请输入账号">
                                    </div>
                                    <div class="form-group">
                                        <label for="loginInputEmail">邮箱 *</label>
                                        <input type="text" name="email" class="form-control" id="loginInputEmail" placeholder="请输入邮箱">
                                    </div>
                                    <div class="form-group">
                                        <label for="loginInputPassword">密码 *</label>
                                        <input type="passoword" name="passoword" class="form-control" id="loginInputPassword" placeholder="请输入密码">
                                    </div>
                                    <div class="form-group">
                                        <label for="loginInputAddress">收货地址 *</label>
                                        <input type="text" name="address" class="form-control" id="loginInputAddress" placeholder="请输入收货地址">
                                    </div>
                                    <div class="form-group">
                                        <label for="loginInputPhoneNo">电话 *</label>
                                        <input type="text" name="phoneNo" class="form-control" id="loginInputPhoneNo" placeholder="请输入电话">
                                    </div>
                                    <div class="row">
                                        <div class="col-auto">
                                            <div class="form-group">
                                                <button class="btn btn-border" type="submit">注册</button>
                                            </div>
                                        </div>
                                        <div class="col-auto align-self-center">
                                            <div class="form-group">
                                                <ul class="additional-links">
                                                    <li>或 <a href="/customer/toLogin">登陆</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </form>
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
<%--<script src="${ctx}/assets/external/form/jquery.form.js"></script>--%>
<%--<script src="${ctx}/assets/external/form/jquery.validate.min.js"></script>--%>
<%--<script src="${ctx}/assets/external/form/jquery.form-init.js"></script>--%>
</html>