<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div class="page-header" style="padding:10px 20px;margin:-18px 0px 0px">
  <div id="searchForm">
  	<div class="col-md-2" style="width: 200px">
		<input type="text" class="form-control search-query" name="username" placeholder="用户名">
	</div>
	<div class="col-md-2" style="padding-bottom: 0px;width: 200px;">
		<select class="form-control" name="type" onchange="javascript:formSubmit();">
			<option value="">==操作类型==</option>
			<option value="0">操作日志</option>
			<option value="1">异常日志</option>
		</select>
	</div>
    <div class="col-md-1" style="width: 105px;">
        <button id="searchBtn" class="btn btn-labeled btn-info" onclick="javascript:formSubmit();"><span class="btn-label icon fa fa-search"></span>搜索</button>
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
                {field:"id",text:"文件ID"},
                {field:"username", text:"操作人"},
                {field:"type", text:"日志类型", formatter:function(index, content, data){
                	return 1 == content ? "<font color='red'>异常日志</font>" : "<font color='blue'>操作日志</font>";
                }},
                {field:"url", text:"请求地址"},
                //{field:"method", text:"方法"},
                {field:"params", text:"请求参数",limit:15,formatter:function(index, content, data){
                	content = content.replace(/<(?:.|\s)*?>/g,"");
                	if(content.length > 30){
                		content = content.substr(0, 30) + "...";
                	}
                	return content;
                }},
                {field:"requestip", text:"访问IP"},
                {field:"description", text:"操作描述"},
                //{field:"detail", text:"异常详情"},
                {field:"operDate", text:"操作日期"}
            ],	
            cls: "",
            url: _urlPath + "admin/log/queryPage",
            sort:"id",
            order:"desc",
            pagination:true,
            onLoad:function(){
                $(".add-tooltip").tooltip();
            }
        });
    });
</script>