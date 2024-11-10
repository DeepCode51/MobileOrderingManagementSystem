<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<form class="form-horizontal" role="form" id="resetFrm">
  	<input type="hidden" value="${role.roleid}" id="roleid"/>
	<div class="form-group">
		<label class="col-sm-3 control-label" for="cname">角色名称</label>
		<div class="col-sm-8">
            <input class="form-control" type="text" value="${role.cname}" name="cname"/>
        </div>
	</div>
	<div class="form-group">
		<label class="col-sm-3 control-label" for="ids">用户设置</label>
		<div class="col-sm-8">
			<select multiple="multiple" size="${fn:length(users)}" name="ids" id="ids">
				<c:forEach items="${users}" var="user">
		  			<option <c:if test="${1 == user.status}">selected</c:if> value="${user.id}">${user.username}</option>
		  		</c:forEach>
			</select>
		</div>
	</div>
</form>

<script type="text/javascript">
	jQuery(function($){
	    $("select[name='ids']").bootstrapDualListbox({
	    	moveAllLabel: "全部选中",
	    	removeAllLabel: "全部移除",
	    	infoTextEmpty: "没有记录",
	    	infoText: "{0}条记录",
	    	selectedListLabel: "已拥有用户",
	    	nonSelectedListLabel: "未拥有用户",
	    	showFilterInputs: false,
	    	filterPlaceHolder: "过滤",
	    	selectorMinimalHeight: 200,
	    	infoTextFiltered: "<span class='label label-purple label-lg'>Filtered</span>"
	    });
	});
	submit = function(){
		var data = "roleid=" + $("#roleid").val() + "&ids=";
		var ids = $("#ids").val();
		if(null != ids){
			data += ids;
		}
		ajaxRequest("admin/role/bindUser", data);
	}
</script>