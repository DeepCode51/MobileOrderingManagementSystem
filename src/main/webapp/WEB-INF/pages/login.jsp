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
	<script type="text/javascript">
			window.jQuery || document.write("<script src='${ctx}/assets/js/jquery.js'>"+"<"+"/script>");
		</script>
		<script src="${ctx}/assets/js/jquery.cookie.js"></script>
		<script src="${ctx}/assets/js/util/md5.js"></script>

</head>
<body>
<jsp:include page="common/header.jsp" flush="true"/>
<div class="tt-breadcrumb">
    <div class="container">
        <ul>
            <li><a href="index.html">首页</a></li>
            <li>注册</li>
        </ul>
    </div>
</div>
<div id="tt-pageContent">
    <div class="container-indent">
        <div class="container">
            <h1 class="tt-title-subpages noborder">准备注册?</h1>
            <div class="tt-login-form">
                <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <div class="tt-item">
                            <h2 class="tt-title">新用户</h2>
                            <p>
                                通过在我们的商店创建帐户，您将能够更快地完成结帐过程，存储发货地址，查看和跟踪您的帐户中的订单等
                            </p>
                            <div class="form-group">
                                <a href="/customer/toRegister" class="btn btn-top btn-border">创建账号</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <div class="tt-item">
                            <h2 class="tt-title">登陆</h2>
                            如果您在我们这里有账户，请登录。
                            <div class="form-default form-top">
                                <form id="customer_login" action="/customer/login" method="post" novalidate="novalidate">
                                    <div class="form-group">
                                        <label for="loginInputStuNumber">账号 *</label>
                                        <div class="tt-required">* 必填项</div>
                                        <input type="text" name="stuNumber" class="form-control" id="loginInputStuNumber" placeholder="请输入账号">
                                    </div>
                                    <div class="form-group">
                                        <label for="loginInputEmail">密码 *</label>
                                        <input type="text" name="passoword" class="form-control" id="loginInputEmail" placeholder="请输入密码">
                                    </div>
                                    <div class="row">
                                        <div class="col-auto mr-auto">
                                            <div class="form-group">
                                                <button class="btn btn-border" type="submit"> 会员登陆</button>
                                            </div>
                                        </div>
                                         <div class="row">
                                        <div class="col-auto mr-auto">
                                            <div class="form-group">
                                                <button class="btn btn-border" type="button" onclick="javascript:login();">管理员登陆</button>
                                            </div>
                                        </div>
                                        
                                        <%--<div class="col-auto align-self-end">--%>
                                            <%--<div class="form-group">--%>
                                                <%--<ul class="additional-links">--%>
                                                    <%--<li><a href="#">忘记密码?</a></li>--%>
                                                <%--</ul>--%>
                                            <%--</div>--%>
                                        <%--</div>--%>
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
    <script type="text/javascript">
		//点击图片刷新验证码
		function vcodeclick() {
			$("#vcode").select();
			$("#vimg").attr("src", "${ctx}/getVcode?random=" + Math.random());
		}
		/* //获取cookie值设置到文本框
		function setValue(){
			var namevalue = $("#loginInputStuNumber").val();
			if("" != namevalue){
				var cookieName = namevalue + "userinfo";
				var userinfo = $.cookie(cookieName);
				if(undefined != userinfo && "" != userinfo){
					var infos = userinfo.split("&");
					for(var i in infos){
						if(0 == i){
							$("#loginInputStuNumber").val(infos[i]);
						}else if(1 == i){
							$("#loginInputEmail").val(infos[i]);
						}
					}
				}
			}else{
				var username = $.cookie("username");
				alert(username);
				if(undefined != username && "" != username){
					$("#loginInputStuNumber").val(username);
				}
				var password = $.cookie("password");
				if(undefined != password && "" != password){
					$("#loginInputEmail").val(password);
				}
			}
		}
		setValue();
		 */
		$("#loginInputStuNumber").blur(function(){
			setValue();
		});
		function login(){
			$("#errDiv").hide();
			$("#err").html("");
			var username = $("#loginInputStuNumber").val();
			if("" == username){
				$("#errDiv").show();
				$("#err").html("用户名不能为空");
				$("#loginInputStuNumber").focus();
				return;
			}
			var password = $("#loginInputEmail").val();
			if("" == password){
				$("#errDiv").show();
				$("#err").html("密码不能为空");
				$("#loginInputEmail").focus();
				return;
			}
			if(password.length <= 20){
				password = hex_md5(password);
			}
			var data = "username=" + username + "&password=" + password;
			var vcode = $("#vcode").val();
	/* 		if(undefined != vcode){
				if("" == vcode){
					$("#errDiv").show();
					$("#err").html("验证码不能为空");
					$("#vcode").focus();
					return;
				}
				data += "&vcode=" + vcode;
			} */
			$(".z-loading-wrap").show();
			$.ajax({
				url: "${ctx}/ht/login",
				data: data,
				type: "post",
				dataType: "json",
				beforeSend: function(xhr){
					xhr.setRequestHeader("vcode","1");
				},
				success: function(req){
					if(req.retcode == 1){
						var remenber = $("#setcheck").is(":checked");
						var cookieName = username + ":userinfo";
						if(remenber){
							var cookieValue = username + "&" + password;
							//设置cookie值有效期30天
							$.cookie(cookieName, cookieValue, {expires:30});
							$.cookie("username", username, {expires:30});
							$.cookie("password", password, {expires:30});
						}else{
							$.cookie(cookieName, "");
							$.cookie("username", "");
							$.cookie("password", "");
						}
						window.location.href = "${ctx}/ht/main"
					} else {
						$(".z-loading-wrap").hide();
						$("#vcode").select();
						$("#vimg").attr("src", "${ctx}/getVcode?random=" + Math.random());
						var msg = req.retmsg;
						var end = msg.lastIndexOf("|");
						if(end > 0){
							var errTimes = msg.substring(end + 1, msg.length);
							if(3 <= errTimes && undefined == vcode){
								var html = [];
						        html.push('<input type="text" name="vcode" id="vcode" maxlength="4" class="form-control" placeholder="验证码">');
						        html.push('<img class="z-code" id="vimg" src="${ctx}/getVcode" onclick="vcodeclick()" title="验证码" alt="验证码">');
						        $("#showVcode").append(html.join(''));
							}
							msg = msg.substring(0, end);
						}
						$("#err").html(msg);
					}
				},
				error: function(req){
					$(".z-loading-wrap").hide();
					$("#vcode").select();
					$("#vimg").attr("src", "${ctx}/getVcode?random=" + Math.random());
					$("#errDiv").show();
					$("#err").html("系统异常");
				}
			});
		}
		
	    $(function (){
	       $("#loginForm").keydown(function(e){
	           var e = e || event, keycode = e.which || e.keyCode;
	           if (keycode == 13) {
	               login();
	            }
	       })
	    });
		
		jQuery(function($) {
			$(document).on('click', '.toolbar a[data-target]', function(e) {
				e.preventDefault();
				var target = $(this).data('target');
				$('.widget-box.visible').removeClass('visible');//hide others
				$(target).addClass('visible');//show target
			});
		});

		//you don't need this, just used for changing background
		jQuery(function($) {
			$('#btn-login-dark').on('click', function(e) {
				$('body').attr('class', 'login-layout');
				$('#id-text2').attr('class', 'white');
				$('#id-company-text').attr('class', 'blue');

				e.preventDefault();
			});
			$('#btn-login-light').on('click', function(e) {
				$('body').attr('class', 'login-layout light-login');
				$('#id-text2').attr('class', 'grey');
				$('#id-company-text').attr('class', 'blue');

				e.preventDefault();
			});
			$('#btn-login-blur').on('click', function(e) {
				$('body').attr('class', 'login-layout blur-login');
				$('#id-text2').attr('class', 'white');
				$('#id-company-text').attr('class', 'light-blue');

				e.preventDefault();
			});

		});
		
	</script>
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