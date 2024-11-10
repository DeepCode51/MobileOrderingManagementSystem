<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="page-header" style="padding:10px 20px;margin:-18px 0px 0px">
  <div id="searchForm">
  	<div class="col-md-2" style="width: 200px">
		<input type="text" class="form-control search-query" name="orderId" placeholder="订单名称">
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
                {field:"orderId",text:"订单编号", sortColumn:"orderId"},
                {field:"customerName", text:"用户"},
                {field:"address", text:"客户地址"},
                {field:"phoneNo", text:"客户电话"},
                {field:"isPay", text:"是否支付",formatter:function(index, content, data){
                        return content ==1?"是":"否";
                    }},
                {field:"status", text:"配送状态",formatter:function(index, content, data){
                    if(content =='0'){
                        return '待配送';
                    }
                    if(content =='1'){
                        return '配送中';
                    }
                    if(content =='2'){
                        return '已配送';
                    }
                }},
                {field:"courierName", text:"配送员"},
                {field:"createTime", text:"创建时间",sortColumn:"createtime"},
                {field:"orderId", text:"操作",width:80, style:"text-align:center", formatter:function(index, content, data){
                        console.log(data);
	                    var editUrl = "orders/updatePage/" + content;
	                    var delUrl = "orders/deleteByID/" + content;
	                    if(data.isPay=="1"){
                            return "<a href='javascript:showModal(\"更新订单\", \""+editUrl+"\");' data-original-title='修改' class='btn btn-xs btn-warning add-tooltip'><i class='fa fa-pencil'>修改</i></a>"
                                + "&nbsp;<a href='javascript:showCfm(\"确定删除该记录\", \""+delUrl+"\");'  data-original-title='删除' class='btn btn-xs btn-danger add-tooltip'><i class='fa fa-times'>删除</i></a>";
                        }else{
                            return "" +
                                "<a href='javascript:showCfm(\"确定删除该记录\", \""+delUrl+"\");'  data-original-title='删除' class='btn btn-xs btn-danger add-tooltip'><i class='fa fa-times'>删除</i></a>";
                        }

                }}
            ],
            cls: "",
            url: _urlPath + "orders/queryPage",
            sort:"id",
            order:"desc",
            pagination:true,
            onLoad:function(){
                $(".add-tooltip").tooltip();
            }
        });
    });
</script>