<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<form id="submitForm" class="form-horizontal">
	<input name="id" value="${company.id}" type="text" hidden="hidden">
	
    <div class="form-group">
        <label class="col-sm-3 control-label" for="companyName"><font color="red">*</font>公司名称：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="companyName" name="companyName" value="${company.companyName}"/>
            <div id="validation-username" class="validate-error help-block"></div>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 control-label" for="phone"><font color="red">*</font>服务电话：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="phone" name="phone" value="${company.phone}"/>
            <div id="validation-username" class="validate-error help-block"></div>
        </div>
    </div>
</form>
<script type="text/javascript">
	submit = function(){
		frmValidate();
		var data = $("#submitForm").serialize();
		ajaxRequest("bx/cp/update", data);
	}
</script>