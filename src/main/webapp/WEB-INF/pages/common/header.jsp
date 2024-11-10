<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
	Object customerId =request.getSession().getAttribute("customerId");
%>
<script src="${ctx}/assets/js/jquery.js"></script>
<script type="text/javascript">
	$.ajax({ //实时获取数据
		url : "/bx/class/queryPageHead",
		type : "post",
		dataType : "json",
		error : function() {
		},
		success : function(result) {
			var html = '';
			$.each(result.rows,function(i,item){
				html+='<li><a href="/bx/pd/toProductIndex/'+item.id+'">'+item.name+'</a></li>';
			});

			$('.category_all').append(html);
			$('.tt-megamenu-submenu').append(html);
		}
	});

</script>
<div id="loader-wrapper">
	<div id="loader">
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
	</div>
</div>

<header>
	<!-- tt-mobile menu -->
	<nav class="panel-menu mobile-main-menu">
		<ul>
			<li>
				<a href="/">首页</a>
			</li>
			<li>
				<a href="#">分类</a>
				<ul class="category_all">

				</ul>
			</li>
		</ul>
		<div class="mm-navbtn-names">
			<div class="mm-closebtn">关闭</div>
			<div class="mm-backbtn">返回</div>
		</div>
	</nav>
	<!-- tt-mobile-header -->
	<div class="tt-mobile-header">
		<div class="container-fluid">
			<div class="tt-header-row">
				<div class="tt-mobile-parent-menu">
					<div class="tt-menu-toggle">
						<i class="icon-03"></i>
					</div>
				</div>
				<!-- cart -->
				<div class="tt-mobile-parent-cart tt-parent-box"></div>
				<!-- /cart -->
				<!-- account -->
				<div class="tt-mobile-parent-account tt-parent-box"></div>
				<!-- /account -->
			</div>
		</div>
		<div class="container-fluid tt-top-line">
			<div class="row">
				<div class="tt-logo-container">
					<!-- mobile logo -->
					<a class="tt-logo tt-logo-alignment" href="/"><img src="${svg}/assets/images/custom/logo.png" alt=""></a>
					<!-- /mobile logo -->
				</div>
			</div>
		</div>
	</div>
	<!-- tt-desktop-header -->
	<div class="tt-desktop-header">
		<div class="container">
			<div class="tt-header-holder">
				<div class="tt-col-obj tt-obj-logo">
					<!-- logo -->
					<a class="tt-logo tt-logo-alignment" href="/"><img src="${svg}/assets/images/custom/logo.png" alt=""></a>
					<!-- /logo -->
				</div>
				<div class="tt-col-obj tt-obj-menu">
					<!-- tt-menu -->
					<div class="tt-desctop-parent-menu tt-parent-box">
						<div class="tt-desctop-menu">
							<nav>
								<ul>
									<li class="dropdown tt-megamenu-col-02 selected">
										<a href="/">首页</a>
									</li>
									<li class="dropdown megamenu">
										<a href="#">分类</a>
										<div class="dropdown-menu">
											<div class="row tt-col-list">
												<div class="col">
													<!-- <h6 class="tt-title-submenu">LISTING STYLES</h6> -->
													<ul class="tt-megamenu-submenu">

													</ul>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</nav>
						</div>
					</div>
					<!-- /tt-menu -->
				</div>
				<div class="tt-col-obj tt-obj-options obj-move-right">
					<!-- tt-cart -->
					<div class="tt-desctop-parent-cart tt-parent-box">
						<div class="tt-cart tt-dropdown-obj" data-tooltip="Cart" data-tposition="bottom">
							<button class="tt-dropdown-toggle">
								<i class="icon-f-39"></i>
							</button>
							<div class="tt-dropdown-menu">
								<div class="tt-mobile-add">
									<h6 class="tt-title">购物车</h6>
									<button class="tt-close">关闭</button>
								</div>
								<div class="tt-dropdown-inner">
									<div class="tt-cart-layout">
										<!-- layout emty cart -->
										<!-- <a href="empty-cart.html" class="tt-cart-empty">
                                            <i class="icon-f-39"></i>
                                            <p>No Products in the Cart</p>
                                        </a> -->
										<div class="tt-cart-content">
											<div class="tt-cart-btn">
												<div class="tt-item">
													<a href="/cart/toCart" class="btn">去购物车</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /tt-cart -->
					<!-- tt-account -->
					<div class="tt-desctop-parent-account tt-parent-box">
						<div class="tt-account tt-dropdown-obj">
							<button class="tt-dropdown-toggle"  data-tooltip="My Account" data-tposition="bottom"><i class="icon-f-94"></i></button>
							<div class="tt-dropdown-menu">
								<div class="tt-mobile-add">
									<button class="tt-close">关闭</button>
								</div>
								<div class="tt-dropdown-inner">
									<ul>
										<li><a href="/customer/toPersonal"><i class="icon-f-94"></i>个人中心</a></li>
										<li id="login_flag"><a href="/customer/toLogin"><i class="icon-f-76"></i>登录</a></li>
										<li><a href="/customer/toRegister"><i class="icon-f-94"></i>注册</a></li>
										<li><a href="/customer/preLogin"><i class="icon-f-77"></i>退出系统</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<!-- /tt-account -->
				</div>
			</div>
		</div>
	</div>
	<!-- stuck nav -->
	<div class="tt-stuck-nav">
		<div class="container">
			<div class="tt-header-row ">
				<div class="tt-stuck-parent-menu"></div>
				<div class="tt-stuck-parent-search tt-parent-box"></div>
				<div class="tt-stuck-parent-cart tt-parent-box"></div>
				<div class="tt-stuck-parent-account tt-parent-box"></div>
				<div class="tt-stuck-parent-multi tt-parent-box"></div>
			</div>
		</div>
	</div>
</header>
<script type="text/javascript">
	console.log('<%=customerId%>');
	if('<%=customerId%>'!='null'){
		$("#login_flag").hide();
	}

</script>
