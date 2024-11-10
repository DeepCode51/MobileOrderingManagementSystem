<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div class="openAppGrid">
	<div id="openAppGrid"></div>
</div>
<script type="text/javascript">
    $(function (){
        $("#openAppGrid").sgrid({
            columns:[
                {field:"opid",text:"权限ID", sortColumn:"opid"},
                {field:"opcode", text:"权限码"},
                {field:"opname", text:"权限名称"},
                {field:"ophref", text:"链接地址"},
                {field:"opseq", text:"排序"}
            ],
            cls: "",
            url: _urlPath + "admin/oper/queryPage",
            sort:"id",
            order:"desc",
            pagination:true,
            onLoad:function(){
                $(".add-tooltip").tooltip();
            }
        });
    });
</script>