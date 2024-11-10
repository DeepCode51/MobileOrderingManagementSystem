<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<div class="col-md-2 no-padding">
    <button id="cancelHasOperationBtn" class="btn btn-labeled btn-danger"><span class="btn-label icon fa fa-unlink"></span>取消</button>
</div>
<div class="col-md-10">
    <div class="has-feedback">
        <input type="text" name="opname" value="${opname}" id="hasSearchName" placeholder="权限名称/权限码" class="form-control">
        <i class="fa fa-search form-control-feedback add-tooltip" data-original-title="" onclick="searchHasOperation()" style="cursor: pointer;top:1px"></i>
    </div>
</div>
<form id="hasOperationForm">
<input type="hidden" value="${roleid}" name="roleid">
<div class="checkbox">
   <label>
       <input type="checkbox" name="" value="" class="px" onclick="hasOperationSelectAll(this)"/>
       <span class="lbl">&nbsp;全选</span>
   </label>
</div>
		
<c:forEach items="${hasOperations}" var="operation">
    <div class="message unread" >
        <div class="checkbox">
            <label>
                <input type="checkbox" class="px" value="${operation.opid}" name="opids"  opCode = "${operation.opcode}" onclick="selectHasBox('${operation.opcode}', this)">
                <span class="lbl">${operation.opname}</span>
            </label>
        </div>
    </div>
</c:forEach>
</form>

<script type="text/javascript">
    $(function(){
        $('.add-tooltip').tooltip();
        $("#cancelHasOperationBtn").click(function(){
            cancelHasOperations();
        });
        
		<c:if test="${opname == ''}">
			var hasOpNum = "${fn:length(hasOperations)}";
			$("#hasOpNum").html(hasOpNum);
			var allOpNum = $("#allOpNum").html();
			$("#noOpNum").html(allOpNum - hasOpNum);
		</c:if>

        $(document).delegate("#hasSearchName",'keydown', function (){
            var e = e || event, keycode = e.which || e.keyCode;
            if (keycode == 13) {
                searchHasOperation();
            }
        });
    });
    hasOperationSelectAll = function(obj){
        var hasRoleIds = document.getElementsByName("opids");
        if(obj.checked){
            for(var i = 0; i < hasRoleIds.length; i++){
                hasRoleIds[i].checked = true;
            }
        }
        else{
            for(var i = 0; i < hasRoleIds.length; i++){
                hasRoleIds[i].checked = false;
            }
        }

    }
    cancelHasOperations = function(){
        var data = $("#hasOperationForm").serialize();
        if (data != ""){
            $.ajax({
                url:_urlPath + "admin/role/unbindOpers",
                data:data,
                type:"post",
                dataType:"json",
                success: function (req){
                    if (req.retcode == 1) {
                        $.growl.notice({title:'成功', message: req.retmsg });
                        loadHasOperation("");
                    }
                    else {
                        $.Err(req.retmsg);
                     }
                }
            });
        }
    }
    searchHasOperation = function(){
        var opname =$("#hasSearchName").val();
        loadHasOperation(opname);
    }

    selectHasBox = function(opCode, obj) {
        var hasRoleIds = document.getElementsByName("opids");
        var isChecked = obj.checked;
        for(var i = 0; i < hasRoleIds.length; i++){
            var childOpAttr = hasRoleIds[i].attributes["opCode"];
            if (childOpAttr == undefined){
                continue;
            }
            var childOpCode = childOpAttr.value;
            if (childOpCode != undefined && childOpCode.length >= opCode.length
                    && childOpCode.substr(0, opCode.length) == opCode){
                if (isChecked == true){
                    hasRoleIds[i].checked = true;
                }
                else {
                    hasRoleIds[i].checked = false;
                }

            }
        }
    }
</script>