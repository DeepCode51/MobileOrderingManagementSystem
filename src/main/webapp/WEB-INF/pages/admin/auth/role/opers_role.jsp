<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<div class="left-col col-md-3">
    <div class="list-group">
        <input type="hidden" value="0" id="curRoleId"/>
       	<c:forEach items="${roleList}" var="role">
       		<a href="javascript:loadOperations(${role.roleid})" class="list-group-item<c:if test="${role.roleid == roleid}"> active</c:if>" id="role—item-${role.roleid}">
				<h4 class="list-group-item-heading">${role.cname}</h4>
			</a>
       	</c:forEach>
    </div>
</div>

<div class="right-col col-md-9">
    <div class="profile-content">
    <ul id="profile-tabs" class="nav nav-tabs">
        <li class="dropdown pull-right tabdrop hide"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="fa fa-bars"></i> <b class="caret"></b></a><ul class="dropdown-menu"></ul></li>
        <li id="hasOperationLi" class="active">
            <a href="#profile-tabs-hasOperation" id="hasOperationHref" data-toggle="tab">已有权限<span class="label label-success" id="hasOpNum">${hasCount}</span></a>
        </li>
        <li id="noOperationLi" class="">
            <a href="#profile-tabs-noOperation" id="noOperationHref" data-toggle="tab">未有权限<span class="badge badge-danger" id="noOpNum">${noCount}</span></a>
        </li>
        <li class="">
            <a href="#profile-tabs-allOperation" data-toggle="tab">全部<span class="badge badge-info" id="allOpNum">${fn:length(operationList)}</span></a>
        </li>
    </ul>

   <div class="tab-content tab-content-bordered panel panel-padding panel-body">
       <div class="tab-pane panel no-padding no-border fade active widget-messages in" id="profile-tabs-hasOperation">

       </div>
       <div class="tab-pane panel no-padding no-border fade widget-messages" id="profile-tabs-noOperation">

       </div>
       <div class="tab-pane fade widget-followers" id="profile-tabs-allOperation">
           <div class="widget-support-tickets">
               <c:forEach items="${operationList}" var="operation" varStatus="status">
                 <div class="ticket">
                     <span class="info">
                     ${status.index + 1}&nbsp;&nbsp;&nbsp;&nbsp;${operation.opname}(${operation.opcode})${operation.ophref}
                     </span>
                 </div>
                </c:forEach>
           </div> <!-- / .tab-pane -->
        </div>
    </div>
</div>

    <script type="text/javascript">
        //点击角色加载权限
        loadOperations = function(roleid){
            $("#curRoleId").val(roleid);
            $(".list-group-item ").removeClass("active");
            $("#role—item-"+roleid).addClass("active");
            if ($("#hasOperationLi").hasClass("active")){
                loadHasOperation("");
            }
            if ($("#noOperationLi").hasClass("active")){
                loadNoOperation("");
            }
        }
        // 加载已有权限
        loadHasOperation = function(searchNameValue){
            var roleid =  $("#curRoleId").val();
            if(roleid == 0){
                $.Alt("请先选择一个角色");
                return;
            }
            var url =  _urlPath + "admin/role/hasOpers/"+roleid;
            getOperation(url, "profile-tabs-hasOperation","opname="+searchNameValue);
        }
        // 加载未有权限
        loadNoOperation = function(searchNameValue){
            var roleid = $("#curRoleId").val();
            if(roleid == 0){
                $.Alt("请先选择一个角色");
                return;
            }
            var url =  _urlPath + "admin/role/noOpers/"+roleid;
            getOperation(url, "profile-tabs-noOperation","opname="+searchNameValue);
        }

        getOperation = function(url, id, data) {
            $.ajax({
                url: url,
                data:data,
                type: "post",
                dataType: 'html',
                success: function (req) {
                    try {
                        $("#"+id).html(req);
                    }
                    catch (e) {
                        console.log(e);
                        $("#"+id).html("加载出错");
                    }
                },
                error: function () {
                    $("#"+id).html("加载出错");
                }
            });
        }
        $(function(){
            $("#hasOperationHref").click(function(){
                loadHasOperation("");
            });
            $("#noOperationHref").click(function(){
                loadNoOperation("");
            });
            if ('${roleid}' != 0){
                $("#curRoleId").val('${roleid}');
                loadHasOperation("");
            }
        });
    </script>