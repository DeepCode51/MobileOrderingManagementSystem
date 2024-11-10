<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<form id="submitForm" class="form-horizontal">
	<input name="roleid" value="${role.roleid}" type="text" hidden="hidden">
    <div class="form-group">
        <label class="col-sm-3 control-label" for="rolename"><font color="red">*</font>角色名称：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="rolename" name="rolename" value="${role.rolename}"/>
            <div id="validation-rolename" class="validate-error help-block"></div>
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-3 control-label" for="cname"><font color="red">*</font>中文名称：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="cname" name="cname" value="${role.cname}"/>
            <div id="validation-cname" class="validate-error help-block"></div>
        </div>
    </div>
</form>
<script type="text/javascript">
	submit = function(){
		frmValidate();
		var data = $("#submitForm").serialize();
		ajaxRequest("admin/role/update", data);
	}
</script>