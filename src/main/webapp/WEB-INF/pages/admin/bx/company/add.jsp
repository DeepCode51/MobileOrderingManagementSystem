<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<form id="submitForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-sm-3 control-label" for="companyName"><font color="red">*</font>公司名称：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="companyName" name="companyName" placeholder="请填写公司名称"/>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 control-label" for="phone"><font color="red">*</font>服务电话：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="phone" name="phone" placeholder="请填写服务电话"/>
        </div>
    </div>
    
</form>
<script type="text/javascript">
	submit = function(){
		frmValidate();
		
		var test = $.scojs_valid('#submitForm',
				{rules: 
					{
					    companyName: ['not_empty',{'max_length': 50}],
					    phone: ['not_empty',{'max_length': 20}],
					},
				 wrapper:".form-group"}
		);
		
		if(!test.validate()){
			return;
		}
		
		var data = $("#submitForm").serialize();
		ajaxRequest("bx/cp/add", data);
	}
</script>