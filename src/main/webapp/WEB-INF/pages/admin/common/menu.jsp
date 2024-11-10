<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div id="main-menu" role="navigation">
	<div id="main-menu-inner">
		<div class="menu-content top" id="menu-content-demo">
		    <div>
		        <div class="text-bg"><span class="text-semibold">${loginUser.username}</span></div>
		        <img src="${ctx}/assets/images/user-head-default.png" alt="" class="">
		        <div class="btn-group">
		            <a href="javascript:showModal('修改密码', 'admin/user/updatePasswdPage?id=${loginUser.id}');" data-original-title="修改密码" class="btn btn-xs btn-primary btn-outline dark add-tooltip"><i class="fa fa-cog"></i></a>
		            <a href="javascript:logout()" data-original-title="退出" class="btn btn-xs btn-danger btn-outline dark add-tooltip"><i class="fa fa-power-off"></i></a>
		            <!-- <a href="javascript:index()" data-original-title="Druid监控" class="btn btn-xs btn-danger btn-outline dark add-tooltip"><i class="fa fa-home fa-fw"></i></a> -->
		        </div>
		        <a href="#" class="close">&times;</a>
		    </div>
		</div>
		<ul class="navigation">
		    <li class="mm-dropdown" opCode="01">
		        <a href="#"><i class="menu-icon fa fa-cogs"></i><span class="mm-text">权限管理</span></a>
		        <ul>
		            <li opCode="0101">
		                <a tabindex="-1" href="javascript:goPage('admin/user/mainPage')"><span class="mm-text">用户管理</span></a>
		            </li>
		            <li opCode="0102">
		                <a tabindex="-1" href="javascript:goPage('admin/role/mainPage')"> <span class="mm-text">角色管理</span></a>
		            </li>
		            <li opCode="0103">
		                <a tabindex="-1" href="javascript:goPage('admin/oper/mainPage')"> <span class="mm-text">操作管理</span></a>
		            </li>
		        </ul>
		    </li>
		    <li class="mm-dropdown" opCode="02">
		        <a href="#"><i class="menu-icon fa fa-barcode"></i><span class="mm-text">店铺管理</span></a>
		        <ul>
		            <li opCode="0201">
		                <a tabindex="-1" href="javascript:goPage('bx/cp/mainPage')"><span class="mm-text">店铺管理</span></a>
		            </li>
		            <li opCode="0202">
		                <a tabindex="-1" href="javascript:goPage('bx/class/mainPage')"><span class="mm-text">产品分类管理</span></a>
		            </li>
		            <li opCode="0203">
		                <a tabindex="-1" href="javascript:goPage('bx/pd/mainPage')"><span class="mm-text">产品管理</span></a>
		            </li>
					<li opCode="0204">
						<a tabindex="-1" href="javascript:goPage('orders/mainPage')"><span class="mm-text">订单管理</span></a>
					</li>
		        </ul>
		    </li>
		    <li class="mm-dropdown" opCode="03">
		        <a href="#"><i class="menu-icon fa fa-credit-card"></i><span class="mm-text">系统管理</span></a>
		        <ul>
		            <li opCode="0301">
		                <a tabindex="-1" href="javascript:goPage('admin/log/mainPage')"><span class="mm-text">用户日志</span></a>
		            </li>
		        </ul>
		    </li>
		</ul>
	</div>
</div>
