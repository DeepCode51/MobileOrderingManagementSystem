<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<style>
</style>
 <input id="basePathId" name="basePath" type="hidden"  value="<%=basePath%>">  
<form id="submitForm" class="form-horizontal"  > 
	<div class="form-group">
		<label class="col-sm-2 control-label" for="name"><font
			color="red">*</font>产品名称：</label>
		<div class="col-md-4">
			<input class="form-control" type="text" id="name"
				name="name" placeholder="请填写产品名称" />
		</div>
		<label class="col-sm-2 control-label" for="classifyId"><font
			color="red">*</font>产品分类：</label>
		<div class="col-md-4">
			<select class="form-control" name="classifyId" id="classifyId">
				<option value="">==所属分类==</option>
				<c:forEach items="${classifyList}" var="classify">
					<option value="${classify.id}">${classify.name}</option>
				</c:forEach>
			</select>
		</div>
	 </div>
	 <div class="form-group">
		<label class="col-sm-2 control-label" for="companyId"><font
			color="red">*</font>店铺：</label>
		<div class="col-md-4">
			<select class="form-control" name="companyId" id="companyId">
				<option value="">==所属店铺==</option>
				<c:forEach items="${companyList}" var="company">
					<option value="${company.id}">${company.companyName}</option>
				</c:forEach>
			</select>
		</div>
		<label class="col-sm-2 control-label" for="productCode"><font
			color="red">*</font>险种代码：</label>
		<div class="col-md-4">
			<input class="form-control" type="text" id="productCode" name="productCode"
				placeholder="险种代码" />
		</div>
	</div>
	<div class="form-group">
		<label class="col-sm-2 control-label " for="brief" >产品简介：</label>
		<div class="col-md-10">
		 	<textarea class="form-control" rows="3"  id="brief" name="brief"  placeholder="产品简介" ></textarea>
		</div>
	</div>
	<div class="form-group">
		<label class="col-sm-2 control-label " for="isHot" >是否热门：</label>
		<div class="col-md-4">
			<input type="checkbox" id="isHot" name="isHot"  value="true"
				placeholder="是否热门" />
		</div>
		<label class="col-sm-2 control-label " for="productTag" >产品标签：</label>
		<div class="col-md-4">
			<input class="form-control" type="text" id="productTag" name="productTag" 
				placeholder="产品标签" />
		</div>
	</div>
	<div class="form-group">
		<label class="col-sm-2 control-label " for="price" ><font
			color="red">*</font>产品价格：</label>
		<div class="col-md-4">
			<input class="form-control" type="text" id="price" name="price" 
				placeholder="产品价格" />
		</div>
		<label class="col-sm-2 control-label " for="orderIndex" >显示顺序：</label>
		<div class="col-md-4">
			<input class="form-control" type="text" id="orderIndex" name="orderIndex"  value="${maxOrderIndex }"
				placeholder="显示顺序" />
		</div>
	</div>
	<div class="form-group">
		<label class="col-sm-2 control-label " for="saleTotal" >销&emsp;量：</label>
		<div class="col-md-4">
			<input class="form-control" type="text" id="saleTotal" name="saleTotal" 
				placeholder="销量" />
			<div id="validation-username" class="validate-error help-block"></div>
		</div>
		<label class="col-sm-2 control-label" for="status"><font
			color="red">*</font>状&emsp;态：</label>
		<div class="col-md-4">
			<select class="form-control" name="status" id="status">
				<option value="0" selected="selected">下架</option>
				<option value="1">上架</option>
			</select>
		</div>
	 </div>
	 <div class="form-group">
		<label class="col-sm-2 control-label " for="url_1" >详情地址1：</label>
		<div class="col-md-10">
			<input class="form-control" type="text" id="url_1" name="url_1" 
				placeholder="详情页地址" />
		</div>
	  </div>
	  <div class="form-group">
		<label class="col-sm-2 control-label " for="url_2" >详情地址2：</label>
		<div class="col-md-10">
			<input class="form-control" type="text" id="url_2" name="url_2" 
				placeholder="详情页地址(测试)" />
		</div>
	  </div>
	  <div class="form-group">
		<label class="col-sm-2 control-label " for="url_3" >理赔地址：</label>
		<div class="col-md-10">
			<input class="form-control" type="text" id="url_3" name="url_3" 
				placeholder="理赔地址" />
		</div>
	</div>
	<div class="form-group">
		<label class="col-sm-2 control-label " for="url_4" >电子版地址：</label>
		<div class="col-md-10">
			<input class="form-control" type="text" id="url_4" name="url_4" 
				placeholder="保单电子版地址" />
		</div>
	 </div>
	 <div class="form-group">
		<label class="col-sm-2 control-label" for="pic_1">热门图片：</label>
		<div class="col-md-4">
			 <input id="pic_1" name="pic_1" type="file" data-show-caption="true">  
             <p class="help-block">支持jpg、jpeg、png格式，大小不超过1.0M</p> 
             <input type="hidden" id="pic_1_hidden" name="pic_1_hidden"   /> 
		</div>
		<label class="col-sm-2 control-label " for="pic_2" >列表图片：</label>
		<div class="col-md-4">
			 <input id="pic_2" name="pic_2" type="file" data-show-caption="true">  
              <p class="help-block">支持jpg、jpeg、png格式，大小不超过1.0M</p>  
              	<input type="hidden" id="pic_2_hidden" name="pic_2_hidden"   />
		</div>
	</div>
</form>
<script type="text/javascript">
	submit = function() {
		frmValidate();
		var test = $.scojs_valid('#submitForm',
				{rules: 
					{
						productName: ['not_empty',{'max_length': 100}],
						product: ['not_empty'],
						company: ['not_empty'],
						productCode: ['not_empty'],
						brief:[{'max_length': 1024}],
						price: ['not_empty','numeric',{'max_length': 18}],
						orderIndex:['digit',{'max_length': 11}],
						saleTotal:['digit',{'max_length': 11}],
						url_1:[{regex:/^((http[s]?:\/\/.*)|(\s*))$/},{'max_length': 2000}],
						url_2:[{regex: /^((http[s]?:\/\/.*)|(\s*))$/},{'max_length': 2000}],
						url_3:[{regex: /^((http[s]?:\/\/.*)|(\s*))$/},{'max_length': 2000}],
						url_4:[{regex: /^((http[s]?:\/\/.*)|(\s*))$/},{'max_length': 2000}],
					},
					messages:{
						price:{numeric:"请输入数字"},
						orderIndex:{digit:"请输入数字"},
						saleTotal:{digit:"请输入数字"},
						url_1:{regex:"请输入有效的URL地址"},
						url_2:{regex:"请输入有效的URL地址"},
						url_3:{regex:"请输入有效的URL地址"},
						url_4:{regex:"请输入有效的URL地址"},
					}}
		);
		if(!test.validate()){
			return;
		}
		if($(".pic_1_cls").html()){
			$.Mod({
		    	title: "热门图片上传异常，请重新上传",
			});
			 return;
		}
		if($(".pic_2_cls").html()){
			 $.Mod({
			    	title: "列表图片上传异常，请重新上传",
				});
			 return;
		}
		var data = $("#submitForm").serialize();
		ajaxRequest("bx/pd/add", data);
	}
	
	function initFileInput(ctrlName) {      
        var control = $('#' + ctrlName);   
        var upload=control.fileinput({  
            language: 'zh', //设置语言  
            uploadUrl: "<%=basePath%>bx/pd/upload",  //上传地址  
            showUpload: false, //是否显示上传按钮  
            showRemove:false,
            showPreview :true, //是否显示预览
            uploadExtraData:{"fileControlName":ctrlName},
            dropZoneEnabled: false,  
            showCaption: true,//是否显示标题  
            allowedPreviewTypes: ['image'],  
            allowedFileTypes: ['image'],  
            allowedFileExtensions:  ['jpg', 'png'],  
            maxFileSize : 1000,  
            maxFileCount: 1,  
            msgValidationErrorClass:"text-danger "+ctrlName+"_cls",
            msgSizeTooLarge:"文件 \"{name}\" (<b>{size} KB</b>) 超过了允许大小 <b>{maxSize} KB</b>."
            //initialPreview: [   
                    //预览图片的设置  
              //      "<img src='http://127.0.0.1:8080/NewsManageSys/plugin/umeditor1_2_2/jsp/upload/20161030/55061                       477813913474.jpg' class='file-preview-image' alt='肖像图片' title='肖像图片'>",  
            //],  
              
        }).on("filebatchselected", function(event, files) {  
           $(this).fileinput("upload");  
        }).on("fileuploaded", function(event, data) {  
               $("#"+ctrlName+"_hidden").val(data.response);  
        });  
    }  
	
    $(function () {  
        initFileInput("pic_1");  
        initFileInput("pic_2");  
    })  
</script>