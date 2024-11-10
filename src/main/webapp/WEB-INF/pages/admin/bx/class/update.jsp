<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<form id="submitForm" class="form-horizontal">
	<input name="id" value="${classify.id}" type="text" hidden="hidden">
	
    <div class="form-group">
        <label class="col-sm-3 control-label" for="name"><font color="red">*</font>分类名称：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="name" name="name" value="${classify.name}"/>
            <div id="validation-username" class="validate-error help-block"></div>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 control-label" for="orderIndex"><font color="red">*</font>排序：</label>
        <div class="col-sm-8">
            <input class="form-control" type="text" id="orderIndex" name="orderIndex" value="${classify.orderIndex}"/>
            <div id="validation-username" class="validate-error help-block"></div>
        </div>
    </div>
</form>
<script type="text/javascript">
	submit = function(){
		frmValidate();
		var data = $("#submitForm").serialize();
		ajaxRequest("bx/class/update", data);
	}
</script>