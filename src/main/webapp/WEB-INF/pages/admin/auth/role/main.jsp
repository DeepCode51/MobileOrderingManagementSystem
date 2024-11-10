<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div class="page-header" style="padding:10px 20px;margin:-18px 0px 0px">
  <div id="searchForm">
    <div class="col-md-3" style="text-align: left;padding-bottom: unset">
        <button id="addBtn" class="btn btn-labeled btn-primary" onclick="javascript:showModal('添加角色', 'admin/role/addPage', 450);"><span class="btn-label icon fa fa-plus"></span>添加角色</button>
    </div>
  </div>
</div>
<div class="openAppGrid">
	<div id="openAppGrid"></div>
</div>
<script type="text/javascript">
    $(function (){
        $("#openAppGrid").sgrid({
            columns:[
                {field:"roleid",text:"角色ID", sortColumn:"roleid"},
                {field:"rolename", text:"角色名称"},
                {field:"cname", text:"中文名称"},
                {field:"roleid", text:"操作", style:"text-align:center", formatter:function(index, content, data){
                    var editUrl = "admin/role/updatePage/" + content;
                    var delUrl = "admin/role/deleteByID/" + content;
					var roleUserPageUrl = "admin/role/bindUserPage/" + content;
					var roleOperPageUrl = "admin/role/bindOperPage/" + content;
                    return "<a href='javascript:showModal(\"更新角色\", \""+editUrl+"\");' class='btn btn-xs btn-warning add-tooltip'><i class='fa fa-pencil'>修改</i></a>"
                        + "&nbsp;<a href='javascript:showCfm(\"确定删除该记录\", \""+delUrl+"\");' class='btn btn-xs btn-danger add-tooltip'><i class='fa fa-times'>删除</i></a>"
                        + "&nbsp;<a href='javascript:showModal(\"绑定角色用户\", \""+roleUserPageUrl+"\");' class='btn btn-xs btn-success'><i class='ace-icon fa fa-user'>分配用户</i></a>"
	                    + "&nbsp;<a href='javascript:goPage(\""+roleOperPageUrl+"\");' class='btn btn-xs btn-info'><i class='ace-icon fa fa-th-list'>分配权限</i></a>";
                }}
            ],
            cls: "",
            url: _urlPath + "admin/role/queryPage",
            sort:"id",
            order:"desc",
            pagination:true,
            onLoad:function(){
                $(".add-tooltip").tooltip();
            }
        });
    });
</script>