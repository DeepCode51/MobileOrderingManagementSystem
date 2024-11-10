<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<form id="submitForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-sm-3 control-label" for="rolename"><font color="red">*</font>角色名称：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="rolename" name="rolename" placeholder="请填写角色名称"/>
            <div id="validation-rolename" class="validate-error help-block"></div>
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-3 control-label" for="cname"><font color="red">*</font>中文名称：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="cname" name="cname" placeholder="请填写中文名称" />
            <div id="validation-cname" class="validate-error help-block"></div>
        </div>
    </div>
</form>
<script type="text/javascript">
	submit = function(){
		frmValidate();
		var test = $.scojs_valid('#submitForm',
				{rules: 
					{
						rolename: ['not_empty',{'max_length': 50}],
						cname: ['not_empty',{'max_length': 50}],
					},
				 wrapper:".form-group"}
		);
		
		if(!test.validate()){
			return;
		}
		var data = $("#submitForm").serialize();
		ajaxRequest("admin/role/add", data);
	}
</script>