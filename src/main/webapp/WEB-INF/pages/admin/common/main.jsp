<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html class="gt-ie8 gt-ie9 not-ie">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <title>商城后台管理</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <!-- Pixel Admin's stylesheets -->
    <link href="${ctx}/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
	<link href="${ctx}/assets/css/bootstrap-duallistbox.css" rel="stylesheet" />
    <link href="${ctx}/assets/css/pixel-admin.min.css" rel="stylesheet" type="text/css">
    <link href="${ctx}/assets/css/widgets.min.css" rel="stylesheet" type="text/css">
    <link href="${ctx}/assets/css/rtl.min.css" rel="stylesheet" type="text/css">
    <link href="${ctx}/assets/css/themes.min.css" rel="stylesheet" type="text/css">
    <link href="${ctx}/assets/css/grid/openplat.css" rel="stylesheet">
    <link href="${ctx}/assets/css/sco.css" rel="stylesheet">
    <link href="${ctx}/assets/css/jquery/jquery.webui-popover.min.css" rel="stylesheet">
    <link href="${ctx}/assets/css/morris/morris.css" rel="stylesheet">
	<link href="${ctx}/assets/js/bootstrap-fileinput/css/fileinput.min.css" rel="stylesheet" />
	<style>
	.sgrid table tr {
		height: 36px
	}
	
	.z-loading-wrap {
		overflow: hidden;
		position: absolute;
		top: 45%;
		left: 50%;
		z-index: 1000;
		width: 100px;
		height: 100px;
		display: none;
		margin-left: -50px;
	}
	
	.z-loading-wrap img {
		width: 60px;
		height: 60px;
	}
	</style>
	<script>var _urlPath = "${ctx}/";</script>
    <script type="text/javascript"> window.jQuery || document.write("<script src='${ctx}/assets/js/jquery-1.12.4.min.js'>"+"<"+"/script>"); </script>
    <script type="text/javascript">
        console.log(${loginUser}'11');
    </script>
    <link href="${ctx}/assets/js/colorpicker/jquery.bigcolorpicker.css" rel="stylesheet">
    <script src="${ctx}/assets/js/colorpicker/jquery.bigcolorpicker.js"></script>
    <script>
        // 影藏popover
        function hideJwpopover(){
            $('.jwpopover').each(function(index, obj){
                $(obj).webuiPopover('hide');
            });
        }
        $.ajaxSetup({
            beforeSend:function(XMLHttpRequest){
                hideJwpopover();
            }
        });
        $(function(){ 
			$(document).ajaxStart(function(){
				$(".z-loading-wrap").show();
			}); 
			$(document).ajaxComplete(function(){
				$(".z-loading-wrap").hide();
			});
        });
    </script>
    <script src="${ctx}/assets/js/bootstrap.min.js"></script>
	<script src="${ctx}/assets/js/jquery.bootstrap-duallistbox.js"></script>
    <script src="${ctx}/assets/js/jquery/jquery.webui-popover.js"></script>
    <script src="${ctx}/assets/js/grid/spagination.js"></script>
    <script src="${ctx}/assets/js/grid/sgrid.js"></script>
    <script src="${ctx}/assets/js/grid/model.js"></script>
    <script src="${ctx}/assets/js/grid/utils.js"></script>
    <script src="${ctx}/assets/js/util/JsUtil.js"></script>
    <script src="${ctx}/assets/js/util/form.js"></script>
    <!-- Pixel Admin's javascripts -->
    <script src="${ctx}/assets/js/pixel-admin.min.js"></script>
    <script src="${ctx}/assets/js/quote.js"></script>
    <script src="${ctx}/assets/js/morris/raphael-min.js"></script>
    <script src="${ctx}/assets/js/morris/morris.min.js"></script>
    <script src="${ctx}/assets/js/util/ajaxupload.3.6.js"></script>
    <script src="${ctx}/assets/js/util/imgbox.js"></script>
    <script src="${ctx}/assets/js/util/md5.js"></script>
	<script src="${ctx}/assets/js/bootstrap-fileinput/js/fileinput.min.js"></script>
	<script src="${ctx}/assets/js/bootstrap-fileinput/js/fileinput_locale_zh.js"></script>
	<script src="${ctx}/assets/js/ueditor/ueditor.config.js" type="text/javascript"></script>
	<script src="${ctx}/assets/js/ueditor/ueditor.all.min.js" type="text/javascript"> </script>
	<script src="${ctx}/assets/js/ueditor/lang/zh-cn/zh-cn.js" type="text/javascript"></script>
	<script src="${ctx}/assets/js/Sco.js"></script>
    <style type="text/css"> 
		#iconview{display:none;}
		#imgview{display:none;}
		.form-group{margin-bottom: unset;}
	</style>
</head>
<body class="theme-default main-menu-animated">
<div class="z-loading-wrap">
     <div class="spinner">
       <img src="${ctx}/assets/images/loading2.gif" />
     </div>
     <div class="z-msg">拼命加载中...</div>
 </div>

<script>
	var init = [];
	/* var operations = [
	    <c:if test="${fn:length(operations) != 0}">
		    <c:forEach items="${operations}" var="oper">"${oper.opcode}",</c:forEach>
	    </c:if>
	]; */
	//var operations = [<#list operations as operation><#if operation_index != 0>,</#if>'${operation.opcode}'</#list>];
</script>
<%-- <script src="${ctx}/assets/demo/demo.js"></script> --%>
<script src="${ctx}/assets/js/util/lunarUtil.js"></script>
<script src="${ctx}/assets/js/util/Util.js"></script>
<div id="main-wrapper" style="vertical-align: unset;">
<%@include file="navigation.jsp" %>
<%@include file="menu.jsp" %>
<%@include file="content.jsp" %>
</div><!-- / #main-wrapper -->
<script type="text/javascript">
    init.push(function () {

    });
    window.PixelAdmin.start(init);

	/* $(function(){
	    enterSubmitForm("searchForm", formSubmit);
	    $("li", ".navigation").each(function(index, obj){
	       var opCode = $(obj).attr("opCode");
	       if(opCode && opCode != undefined) {
	          // 权限列表中没有该权限
	          if ($.inArray(opCode, operations) == -1){
	              $(obj).remove();
	          };
	       }
	    });
	}); */

	function goIndex(){
        window.location.href = "${ctx}/ht/main";
    }

    $(function(){
        $('.mm-dropdown li').bind('click',function(){
            $('.mm-dropdown li').removeClass('active');
            $('.mmc-dropdown-delay li').removeClass('active');
            $(this).addClass('active');
        });
        $('.add-tooltip').tooltip();
    })

	function logout() {
		$.Cfm("确定注销登录?", function() {
			$.ajax({
				url : '${ctx}/ht/logout',
				type : "post",
				dataType : "json",
				success : function(req) {
					if (req.retcode == 1) {
						window.location.href = "../../../..";
					} else {
						$.Err("退出失败！");
					}
				},
				error : function() {
					$.Err("系统异常！");
				}
			});
		});
	}

	function index(){
    	//window.open("../druid/login.html");
    }
    
    /*var headBtn = $("#headBtn");
	new AjaxUpload(headBtn,{
		action: _urlPath+"/admin/uploadPic?type=1&id=" + ${loginUser.id},
		name: "picfile",
		responseType: "json",
		onSubmit: function(file,ext){
			if (!(ext && /^(jpg|png|jpeg|gif)$/.test(ext))){
                modalErr("请选择图片格式文件");
				return false;
			}
			headBtn.text('头像上传中...');
		},
		onComplete: function(file,response){
			if("S" == response.status){
				//goIndex();
			}
		}
	});*/
</script>
</body>
</html>