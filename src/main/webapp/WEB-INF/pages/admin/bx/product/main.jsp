<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
pageContext.setAttribute("basePath", basePath);
%>
<style>
<!--
table thead{display: block;}
  table tbody{}
 .openAppGrid .sgrid {/* table-layout:fixed; */ overflow:auto;}
-->
</style>
<div class="page-header" style="padding:10px 20px;margin:-18px 0px 0px">
  <div id="searchForm">
		<div class="col-md-1" style="width: 200px">
			<input type="text" class="form-control search-query" name="companyName" placeholder="店铺">
		</div>
		<div class="col-md-1"  style="width: 200px">
			<select class="form-control" name="classifyId" id="classifyId">
				<option value="" selected="selected">==请选择产品分类==</option>
				<c:forEach items="${classifyList}" var="classify">
					<option value="${classify.id}">${classify.name}</option>
				</c:forEach>
			</select>
		</div>
		<div class="col-md-1"  style="width: 200px">
			<select class="form-control" name="isHot" id="isHot">
				<option value="" selected="selected">==请选择是否热门==</option>
				<option value="true" >热门</option>
				<option value="false" >非热门</option>
			</select>
		</div>
		<div class="col-md-1" style="width: 200px">
			<input type="text" class="form-control search-query" name="productTag" placeholder="产品标签">
		</div>
		<div class="col-md-1"  style="width: 200px">
			<select class="form-control" name="status" id="status">
				<option value="" selected="selected">==请选择发布状态==</option>
				<option value="1" >上架</option>
				<option value="0" >下架</option>
			</select>
		</div>
	
	    <div class="col-md-1" style="width: 105px;">
	        <button id="searchBtn" class="btn btn-labeled btn-info" onclick="javascript:formSubmit();"><span class="btn-label icon fa fa-search"></span>搜索</button>
	    </div>
	    <div class="col-md-1"  style="width: 156px;">
	        <button id="addBtn" class="btn btn-labeled btn-primary"  onclick="javascript:showModal('添加产品', 'bx/pd/addPage',750);"><span class="btn-label icon fa fa-plus"></span>添加产品</button>
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
                {field:"id",text:"编号", },
                {field:"name", text:"产品名称"},
                {field:"classifyName", text:"产品分类"},
                {field:"companyName", text:"店铺"},
                {field:"productCode", text:"产品号"},
                {field:"pic_1", text:"热门图片", style:"width:80px;height:80px;", formatter:function(index, content, data){
                	  var imgPath="${basePath}"+content;
                    return "<img src="+imgPath+" class='thumbnail'  onerror=\"javascript:this.src='${basePath}h5/res/images/_sample_bx_squre.jpg';\" style=\"width: 100%;height: 100%;\"/>";
          	  }},

                {field:"brief", text:"产品简介", formatter:function(index, content, data){
                    if(content){
                     	 return "<div style='width:140px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;' title='"+content+"'>"+content+"</div>";
                      }else{
                      	return content;
                      }
             		}},
                {field:"hot", text:"是否热门",formatter:function(index, content, data){
                    return content?"是":"否";
          	  }},
                {field:"productTag", text:"产品标签"},
                {field:"price", text:"产品价格"},
                {field:"orderIndex", text:"显示顺序"},
                {field:"saleTotal", text:"销量"},
       /*          {field:"url_1", text:"详情页地址", formatter:function(index, content, data){
                    if(content){
                   	 return "<div style='width:80px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;' title='"+content+"'>"+content+"</div>";
                    }else{
                    	return content;
                    }
           		}},
                {field:"url_2", text:"详情页地址", formatter:function(index, content, data){
                    if(content){
                      	 return "<div style='width:120px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;' title='"+content+"'>"+content+"</div>";
                       }else{
                       	return content;
                       }
              		}},
                {field:"url_3", text:"理赔地址", formatter:function(index, content, data){
                    if(content){
                      	 return "<div style='width:80px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;' title='"+content+"'>"+content+"</div>";
                       }else{
                       	return content;
                       }
              		}},
                {field:"url_4", text:"保单电子版", formatter:function(index, content, data){
                    if(content){
                      	 return "<div style='width:80px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;' title='"+content+"'>"+content+"</div>";
                       }else{
                       	return content;
                       }
              		}}, */
                {field:"createDateTime", text:"创建时间",sortColumn:"createDateTime"},
                {field:"publishDateTime", text:"发布时间"},
                {field:"status", text:"发布状态", style:"text-align:center", formatter:function(index, content, data){
	                     if(data.status==1){
	                    	 return "上架";
	                     }else{
	                    	 var publishStatusUrl = "bx/pd/modifyPublishStatus/" + data.id+"/1";
	                    	 return "下架";
	                     }
	            }},
                {field:"id", text:"操作",style:"text-align:center", formatter:function(index, content, data){
	                    var editUrl = "bx/pd/updatePage/" + content;
	                    var delUrl = "bx/pd/deleteByID/" + content;
	                    if(data.status==1){
	                    	 var publishStatusUrl = "bx/pd/modifyPublishStatus/" + data.id+"/0";
	                    	 return	"<a href='javascript:showCfm(\"下架\", \""+publishStatusUrl+"\");' class='btn btn-xs btn-success'><i class='ace-icon fa fa-download'>下架</i></a>"
	                    		+ "&nbsp;<a href='javascript:showModal(\"更新店铺\", \""+editUrl+"\",750);' data-original-title='修改' class='btn btn-xs btn-warning add-tooltip'><i class='fa fa-pencil'>修改</i></a>"
		                        + "&nbsp;<a href='javascript:showCfm(\"确定删除该记录\", \""+delUrl+"\");'  data-original-title='删除' class='btn btn-xs btn-danger add-tooltip'><i class='fa fa-times'>删除</i></a>";
	                    	    
	                     }else{
	                    	 var publishStatusUrl = "bx/pd/modifyPublishStatus/" + data.id+"/1";
	                    	 return "<a href='javascript:showCfm(\"上架\", \""+publishStatusUrl+"\");' class='btn btn-xs btn-success'><i class='ace-icon fa fa-upload'>上架</i></a>"
	                    	 + "&nbsp;<a href='javascript:showModal(\"更新店铺\", \""+editUrl+"\",750);' data-original-title='修改' class='btn btn-xs btn-warning add-tooltip'><i class='fa fa-pencil'>修改</i></a>"
		                        + "&nbsp;<a href='javascript:showCfm(\"确定删除该记录\", \""+delUrl+"\");'  data-original-title='删除' class='btn btn-xs btn-danger add-tooltip'><i class='fa fa-times'>删除</i></a>";
	                     }
                }}
            ],
            cls: "break",
            url: _urlPath + "bx/pd/queryPage",
            sort:"createDateTime",
            order:"desc",
            pagination:true,
            fixedColumns: true,
            fixedNumber: 3,
            onLoad:function(){
                $(".add-tooltip").tooltip();
            }
        });
    });
</script>