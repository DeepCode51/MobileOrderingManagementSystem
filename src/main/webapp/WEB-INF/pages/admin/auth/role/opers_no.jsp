<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<div class="col-md-2 no-padding">
	<button id="addNoOperationBtn" class="btn btn-labeled btn-success">
		<span class="btn-label icon fa fa-link"></span>添加
	</button>
</div>
<div class="col-md-10">
	<div class="has-feedback">
		<input type="text" name="opname" id="noSearchName" value="${opname}"
			placeholder="权限名称/权限码" class="form-control"> <i
			class="fa fa-search form-control-feedback add-tooltip"
			data-original-title="" onclick="searchNoOperation()"
			style="cursor: pointer;top:1px"></i>
	</div>
</div>
<form id="noOperationForm" style="padding-top:25px;">
	<input type="hidden" value="${roleid}" name="roleid">
	<div class="checkbox">
		<label> <input type="checkbox" name="" value="" class="px"
			onclick="noOperationSelectAll(this)" /> <span class="lbl">&nbsp;全选</span>
		</label>
	</div>
	<c:forEach items="${noOperations}" var="operation">
		<div class="message unread">
			<div class="checkbox">
				<label> <input type="checkbox" class="px"
					value="${operation.opid}" name="opids" opCode="${operation.opcode}"
					onclick="selectNoBox('${operation.opcode}',this)"> <span
					class="lbl">${operation.opname}</span>
				</label>
			</div>
		</div>
	</c:forEach>
</form>

<script type="text/javascript">
	$(function(){
	    $('.add-tooltip').tooltip();
	    $("#addNoOperationBtn").click(function(){
	        addNoOperations();
	    });

	    <c:if test="${opname == ''}">
			var noOpNum = ${fn:length(noOperations)};
			$("#noOpNum").html(noOpNum);
			var allOpNum = $("#allOpNum").html();
			$("#hasOpNum").html(allOpNum - noOpNum);
	    </c:if>
	    $(document).delegate("#noSearchName",'keydown', function (){
	        var e = e || event, keycode = e.which || e.keyCode;
	        if (keycode == 13) {
	            searchNoOperation();
	        }
	    });
	});
	noOperationSelectAll = function(obj){
	    var noRoleIds = document.getElementsByName("opids");
	    if(obj.checked){
	        for(var i = 0; i < noRoleIds.length; i++){
	            noRoleIds[i].checked = true;
	        }
	    } else{
	        for(var i = 0; i < noRoleIds.length; i++){
	            noRoleIds[i].checked = false;
	        }
	    }
	}
	
	addNoOperations = function() {
	    var data = $("#noOperationForm").serialize();
	    if (data != ""){
	        $.ajax({
	            url:_urlPath + "admin/role/bindOpers",
	            data:data,
	            type:"post",
	            dataType:"json",
	            success: function (req){
	                if (req.retcode == 1) {
	                    $.growl.notice({title:"成功", message: req.retmsg });
	                    loadNoOperation("");
	                } else {
	                    $.Err(req.retmsg);
	                }
	            }
	        });
	    }
	}
	
	searchNoOperation = function() {
	    var opname =$("#noSearchName").val();
	    loadNoOperation(opname);
	}
	
	selectNoBox = function(opCode, obj) {
	    var hasRoleIds = document.getElementsByName("opids");
	    var isChecked = obj.checked;
	    for(var i = 0; i < hasRoleIds.length; i++){
	        var childOpAttr = hasRoleIds[i].attributes["opCode"];
	        if (childOpAttr == undefined){
	            continue;
	        }
	        var childOpCode = childOpAttr.value;
	        if (childOpCode != undefined && (childOpCode.substr(0, opCode.length) == opCode || opCode.substr(0, childOpCode.length) == childOpCode)){
	            if (isChecked == true){
	                hasRoleIds[i].checked = true;
	            } else {
	                hasRoleIds[i].checked = false;
	            }
	        }
	    }
	}
</script>