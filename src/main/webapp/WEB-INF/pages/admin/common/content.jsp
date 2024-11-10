<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div id="content-wrapper">
	<div class="col-sm-3 panel panel-success" style="padding: unset;">
		<div class="panel-heading">
			<h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">个人信息</a></h4>
		</div>
		<div id="collapseOne" class="panel-collapse collapse in">
			<div class="panel-body" style="padding: unset; margin: unset">
				<table class="table-condensed" style="padding: unset; margin: unset">
					<tr class="active"><td class="text-right">用户名：</td><td>${loginUser.username}</td></tr>
					<tr class="active"><td class="text-right">角　色：</td><td>${loginUser.role.cname}</td></tr>
					<tr class="active"><td class="text-right">电子邮箱：</td><td>${loginUser.email}</td></tr>
					<tr class="active"><td class="text-right">最后登录IP：</td><td>${loginUser.loginip}</td></tr>
					<tr class="active"><td class="text-right">最后登录时间：</td><td>${loginUser.logintime}</td></tr>
				</table>
			</div>
		</div>
	</div>
</div>
<div id="main-menu-bg"></div>
