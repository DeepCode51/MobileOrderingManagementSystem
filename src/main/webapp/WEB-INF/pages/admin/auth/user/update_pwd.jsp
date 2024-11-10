<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<form id="restSelfFrm" class="form-horizontal">
	<div class="form-group">
		<label class="col-sm-3 control-label" for="newPassword"><font color="red">*</font>新密码：</label>
		<div class="col-sm-8">
			<input class="form-control" maxlength="32" type="password" id="newPassword" placeholder="请输入新密码" />
			<div id="validation-newPassword" class="validate-error help-block"></div>
		</div>
	</div>
	<div class="form-group">
		<label class="col-sm-3 control-label" for="checkPassword"><font color="red">*</font>确认密码：</label>
		<div class="col-sm-8">
			<input class="form-control" maxlength="32" type="password" id="checkPassword" placeholder="请再次确认密码" />
			<div id="validation-checkPassword" class="validate-error help-block"></div>
		</div>
	</div>
</form>
<script type="text/javascript">
	function submit() {
		frmValidate();
		var newPassword = $("#newPassword").val().Trim();
		var checkPassword = $("#checkPassword").val().Trim();
		if(checkPassword != newPassword){
			frmFieldErr("checkPassword", "两次密码不一致");
			return;
		}
		var password = hex_md5(newPassword);
		var data = "id=${id}&password="+password;
		ajaxRequest("admin/user/updatePwd", data);
    }
</script>
