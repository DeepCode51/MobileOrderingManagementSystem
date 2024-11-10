<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<form id="submitForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-sm-3 control-label" for="roleid"><font color="red">*</font>所属角色：</label>
		<div class="col-sm-8">
			<select class="form-control span2" id="roleid" name="roleid"">
				<c:forEach items="${list}" var="role">
					<option value="${role.roleid}">${role.cname}</option>
				</c:forEach>
			</select>
		</div>
	</div>
	
    <div class="form-group">
        <label class="col-sm-3 control-label" for="username"><font color="red">*</font>用户名称：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="username" name="username" placeholder="请填写用户名称"/>
            <div id="validation-username" class="validate-error help-block"></div>
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-3 control-label" for="password"><font color="red">*</font>登录密码：</label>
        <div class="col-sm-8">
            <input class="form-control" type="password" id="password" placeholder="请填写登录密码" />
            <div id="validation-password" class="validate-error help-block"></div>
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-3 control-label" for="rePass"><font color="red">*</font>确认密码：</label>
        <div class="col-sm-8">
            <input class="form-control" type="password" id="rePass" placeholder="请填写确认密码" />
            <div id="validation-password" class="validate-error help-block"></div>
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-3 control-label" for="mobilephone">手机号码：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="mobilephone" name="mobilephone" placeholder="请填写手机号码" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 control-label" for="idcard">身份证号码：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="idcard" name="idcard" placeholder="请填写身份证号码" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 control-label" for="email">电子邮箱：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="email" name="email" placeholder="请填写电子邮箱" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 control-label" for="address">地址：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="address" name="address" placeholder="请填写地址" />
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-3 control-label" for="useable">是否可用：</label>
        <div class="col-sm-8">
            <div class="radio">
				<label style="display: inline-block; width: 50px;">
					<input checked value="1" name="useable" type="radio" class="ace"/>是
				</label>
				<label style="display: inline-block; width: 50px;">
					<input value="0" name="useable" type="radio" class="ace"/>否
				</label>
			</div>
        </div>
    </div>
</form>
<script type="text/javascript">
	submit = function(){
		frmValidate();
		var password = $("#password").val();
		var rePass = $("#rePass").val();
		if(password != rePass){
			modalErr("两次密码不一致");
			return;
		}
		password = hex_md5(password);
		var test = $.scojs_valid('#submitForm',
				{rules: 
					{
						username: ['not_empty',{'max_length': 50}],
					},
				 wrapper:".form-group"}
		);
		
		if(!test.validate()){
			return;
		}
		var data = $("#submitForm").serialize() + "&password="+password;
		ajaxRequest("admin/user/add", data);
	}
</script>