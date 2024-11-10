<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="page-header" style="padding:10px 20px;margin:-18px 0px 0px">
  <div id="searchForm">
  	<div class="col-md-2" style="width: 200px">
		<input type="text" class="form-control search-query" name="name" placeholder="分类名称">
	</div>
    <div class="col-md-1" style="width: 105px;">
        <button id="searchBtn" class="btn btn-labeled btn-info" onclick="javascript:formSubmit();"><span class="btn-label icon fa fa-search"></span>搜索</button>
    </div>
    <div class="col-md-3" style="text-align: left;padding-bottom: unset">
        <button id="addBtn" class="btn btn-labeled btn-primary" onclick="javascript:showModal('添加分类', 'bx/class/addPage');"><span class="btn-label icon fa fa-plus"></span>添加分类</button>
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
                {field:"id",text:"产品分类ID", sortColumn:"id"},
                {field:"name", text:"产品分类名称"},
                {field:"orderIndex", text:"顺序"},
                {field:"createtime", text:"创建时间"},
                {field:"updatetime", text:"修改时间"},
                {field:"id", text:"操作",width:80, style:"text-align:center", formatter:function(index, content, data){
	                    var editUrl = "bx/class/updatePage/" + content;
	                    var delUrl = "bx/class/deleteByID/" + content;
	                    return "<a href='javascript:showModal(\"更新分类\", \""+editUrl+"\");' data-original-title='修改' class='btn btn-xs btn-warning add-tooltip'><i class='fa fa-pencil'>修改</i></a>"
	                        + "&nbsp;<a href='javascript:showCfm(\"确定删除该记录\", \""+delUrl+"\");'  data-original-title='删除' class='btn btn-xs btn-danger add-tooltip'><i class='fa fa-times'>删除</i></a>";
                }}
            ],
            cls: "",
            url: _urlPath + "bx/class/queryPage",
            sort:"id",
            order:"desc",
            pagination:true,
            onLoad:function(){
                $(".add-tooltip").tooltip();
            }
        });
    });
</script>