<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<form id="submitForm" class="form-horizontal">
	<input name="id" value="${user.id}" type="text" hidden="hidden">
    <div class="form-group">
        <label class="col-sm-3 control-label" for="roleid">所属角色：</label>
		<div class="col-sm-8">
			<select class="form-control span2" id="roleid" name="roleid"">
				<c:forEach items="${list}" var="role">
					<option <c:if test="${user.roleid == role.roleid}">selected</c:if> value="${role.roleid}">${role.cname}</option>
				</c:forEach>
			</select>
		</div>
	</div>
	
    <div class="form-group">
        <label class="col-sm-3 control-label" for="username">用户名称：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="username" name="username" value="${user.username}"/>
            <div id="validation-username" class="validate-error help-block"></div>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 control-label" for="mobilephone">手机号码：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="mobilephone" name="mobilephone" value="${user.mobilephone}"/>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 control-label" for="idcard">身份证号码：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="idcard" name="idcard" value="${user.idcard}" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 control-label" for="email">电子邮箱：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="email" name="email" value="${user.email}" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 control-label" for="address">地址：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="address" name="address" value="${user.address}" />
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-3 control-label" for="useable">是否可用：</label>
        <div class="col-sm-8">
            <div class="radio">
				<label style="display: inline-block; width: 50px;">
					<input value="1" name="useable" type="radio" class="ace" <c:if test="${1 == user.useable}">checked</c:if>/>是
				</label>
				<label style="display: inline-block; width: 50px;">
					<input value="0" name="useable" type="radio" class="ace" <c:if test="${0 == user.useable}">checked</c:if>/>否
				</label>
			</div>
        </div>
    </div>
</form>
<script type="text/javascript">
	submit = function(){
		frmValidate();
		var data = $("#submitForm").serialize();
		ajaxRequest("admin/user/update", data);
	}
</script>