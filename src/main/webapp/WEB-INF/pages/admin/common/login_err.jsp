<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>

<div class="breadcrumbs" id="breadcrumbs">
	<ul class="breadcrumb">
		<li>
			<i class="ace-icon fa fa-home home-icon"></i>
		</li>
		<li>系统设置</li>
		<li class="active">登录失效</li>
	</ul>
</div>

<div class="page-content">
	<div class="row">
		<div class="alert alert-danger">
		    <strong>${err}</strong>&nbsp;&nbsp;<a href="javascript:goLogin()">点击返回登录</a>
		</div>
	</div>
</div>
<script type="text/javascript">
    function goLogin(){
        window.location.href = "../../../..";
    }
</script>