<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<form id="submitForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-sm-3 control-label" for="name"><font color="red">*</font>分类名称：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="name" name="name" placeholder="请填写分类名称"/>
            <div id="validation-username" class="validate-error help-block"></div>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 control-label" for="orderIndex"><font color="red">*</font>排序：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="orderIndex" name="orderIndex" placeholder="请填写顺序"/>
            <div id="validation-username" class="validate-error help-block"></div>
        </div>
    </div>
    
</form>
<script type="text/javascript">
	submit = function(){
		frmValidate();
		var test = $.scojs_valid('#submitForm',
				{rules: 
					{
						name: ['not_empty',{'max_length': 50}],
						orderIndex: ['not_empty','numeric',{'max_length': 10}],
					},
				 wrapper:".form-group"}
		);
		
		if(!test.validate()){
			return;
		}
		var data = $("#submitForm").serialize();
		ajaxRequest("bx/class/add", data);
	}
</script>