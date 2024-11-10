<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
pageContext.setAttribute("basePath", basePath);
%>
<form id="submitForm" class="form-horizontal"  > 
	<input name="id" value="${product.id}" type="text" hidden="hidden">
	<div class="form-group">
		<label class="col-sm-2 control-label" for="name"><font
			color="red">*</font>产品名称：</label>
		<div class="col-md-4">
			<input class="form-control" type="text" id="name" value="${product.name}"
				name="name" placeholder="请填写产品名称" />
		</div>
		<label class="col-sm-2 control-label" for="classifyId"><font
			color="red">*</font>产品分类：</label>
		<div class="col-md-4">
			<select class="form-control" name="classifyId" id="classifyId">
				<option value="">==所属分类==</option>
				<c:forEach items="${classifyList}" var="classify">
				    <c:if test="${classify.id == product.classifyId}">
						<option selected="selected"  value="${classify.id}">${classify.name}</option>
					</c:if>
					<c:if test="${classify.id != product.classifyId}">
						<option value="${classify.id}">${classify.name}</option>
					</c:if>
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
					<c:if test="${company.id == product.companyId}">
						<option selected="selected" value="${company.id}">${company.companyName}</option>
					</c:if>
					<c:if test="${company.id != product.companyId}">
						<option value="${company.id}">${company.companyName}</option>
					</c:if>
				</c:forEach>
			</select>
		</div>
		<label class="col-sm-2 control-label" for="productCode"><font
			color="red">*</font>产品号：</label>
		<div class="col-md-4">
			<input class="form-control" type="text" id="productCode" name="productCode" value="${product.productCode }"
				placeholder="产品号" />
			<div id="validation-username" class="validate-error help-block"></div>
		</div>
	</div>
	<div class="form-group">
		<label class="col-sm-2 control-label " for="brief" >产品简介：</label>
		<div class="col-md-10">
		 	<textarea class="form-control" rows="3"  id="brief" name="brief"  placeholder="产品简介"  >${product.brief }</textarea>
		</div>
	</div>
	<div class="form-group">
		<label class="col-sm-2 control-label " for="isHot" >是否热门：</label>
		<div class="col-md-4">
			<c:if test="${product.hot}">
			<input type="checkbox" checked="checked" id="isHot" name="isHot"  value="true"
				placeholder="是否热门" />
			</c:if>
			<c:if test="${!product.hot}">
				<input type="checkbox"  id="isHot" name="isHot"  value="true"
					placeholder="是否热门" />
			</c:if>
		</div>
		<label class="col-sm-2 control-label " for="productTag" >产品标签：</label>
		<div class="col-md-4">
			<input class="form-control" type="text" id="productTag" name="productTag"  value="${product.productTag}"
				placeholder="产品标签" />
		</div>
	</div>
	<div class="form-group">
		<label class="col-sm-2 control-label " for="price" >产品价格：</label>
		<div class="col-md-4">
			<input class="form-control" type="text" id="price" name="price"  value="${product.price}"
				placeholder="产品价格" />
		</div>
		<label class="col-sm-2 control-label " for="orderIndex" >显示顺序：</label>
		<div class="col-md-4">
			<input class="form-control" type="text" id="orderIndex" name="orderIndex"  value="${product.orderIndex}"
				placeholder="显示顺序" />
		</div>
	</div>
	<div class="form-group">
		<label class="col-sm-2 control-label " for="saleTotal" >销&emsp;量：</label>
		<div class="col-md-4">
			<input class="form-control" type="text" id="saleTotal" name="saleTotal"  value="${product.saleTotal}"
				placeholder="销量" />
		</div>
		<label class="col-sm-2 control-label" for="status"><font
			color="red">*</font>状&emsp;态：</label>
		<div class="col-md-4">
			<select class="form-control" name="status" id="status">
				<c:if test="${product.status==0}">
					<option value="0" selected="selected">下架</option>
					<option value="1">上架</option>
				</c:if>
				<c:if test="${product.status==1}">
					<option value="0" >下架</option>
					<option value="1" selected="selected">上架</option>
				</c:if>
			</select>
		</div>
	</div>

	<div class="form-group">
		<label class="col-sm-2 control-label" for="pic_1">图片：</label>
		<div class="col-md-4">
			 <input id="pic_1" name="pic_1" type="file" data-show-caption="true">  
             <p class="help-block">支持jpg、jpeg、png格式，大小不超过1.0M</p> 
             <input type="hidden" id="pic_1_hidden" name="pic_1_hidden"   value="${product.pic_1}" /> 
		</div>
	</div>
</form>
<script type="text/javascript">
	submit = function(){
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
					},
				 wrapper:".form-group"}
		);
		if(!test.validate()){
			return;
		}
		if($(".pic_1_cls").html()){
			 alert("热门图片上传异常");
			 return;
		}
		if($(".pic_2_cls").html()){
			 alert("列表图片上传异常");
			 return;
		}
		var data = $("#submitForm").serialize();
		ajaxRequest("bx/pd/update", data);
	}
	
	
	function initFileInput(ctrlName,imgPreview) {      
        var control = $('#' + ctrlName);   
        control.fileinput({  
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
            msgSizeTooLarge:"文件 \"{name}\" (<b>{size} KB</b>) 超过了允许大小 <b>{maxSize} KB</b>.",
            initialPreview: [   imgPreview
                    //预览图片的设置  
              //      "<img src='http://127.0.0.1:8080/NewsManageSys/plugin/umeditor1_2_2/jsp/upload/20161030/55061                       477813913474.jpg' class='file-preview-image' alt='肖像图片' title='肖像图片'>",  
            ],  
              
        }).on("filebatchselected", function(event, files) {  
            $(this).fileinput("upload");  
        }).on("fileuploaded", function(event, data) {  
                $("#"+ctrlName+"_hidden").val(data.response);  
        });  
    }  
	
    $(function () {  
    	var images1= "<img src=' ${basePath}${product.pic_1}' class='file-preview-image' style='width:100px;height:100px;' onerror=\"javascript:this.src='${basePath}h5/res/images/_sample_bx_squre.jpg';\">,"
    	var images2= "<img src='${basePath}${product.pic_2}' class='file-preview-image' style='width:100px;height:100px;' onerror=\"javascript:this.src='${basePath}h5/res/images/_sample_bx_squre.jpg';\">,"
        initFileInput("pic_1",images1);  
        initFileInput("pic_2",images2);  
    })  
</script>