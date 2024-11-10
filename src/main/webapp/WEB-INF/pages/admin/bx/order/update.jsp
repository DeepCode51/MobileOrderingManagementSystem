<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<form id="submitForm" class="form-horizontal">
	<input name="id" value="${orders.id}" type="text" hidden="hidden">
	
    <div class="form-group">
        <label class="col-sm-3 control-label" for="orderId"><font color="red">*</font>订单号：</label>
        <div class="col-sm-8">
            <input class="form-control" readonly type="text" id="orderId" name="orderId" value="${orders.orderId}"/>
            <div id="validation-orderId" class="validate-error help-block"></div>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 control-label" for="customerName"><font color="red">*</font>客户名：</label>
        <div class="col-sm-8">
            <input class="form-control" readonly type="text" id="customerName" name="customerName" value="${orders.customerName}"/>
            <div id="validation-customerName" class="validate-error help-block"></div>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 control-label" for="address"><font color="red">*</font>地址：</label>
        <div class="col-sm-8">
            <input class="form-control" readonly type="text" id="address" name="address" value="${orders.address}"/>
            <div id="validation-address" class="validate-error help-block"></div>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 control-label" for="phoneNo"><font color="red">*</font>客户电话：</label>
        <div class="col-sm-8">
            <input class="form-control" readonly type="text" id="phoneNo" name="phoneNo" value="${orders.phoneNo}"/>
            <div id="validation-username" class="validate-error help-block"></div>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 control-label" for="courier"><font color="red">*</font>派送员：</label>
        <div class="col-sm-8">
            <select class="form-control" name="courier" id="courier">
                <option value="">==选择派送员==</option>
                <c:forEach items="${courierList}" var="c">
                        <%--<c:if test=""--%>
                        <%--<option value="${c.id}">${c.username}</option>--%>
                    <c:if test="${c.id == orders.courier}">
                        <option selected="selected"  value="${c.id}">${c.username}</option>
                    </c:if>
                    <c:if test="${c.id != orders.courier}">
                        <option value="${c.id}">${c.username}</option>
                    </c:if>
                </c:forEach>
            </select>
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-3 control-label" for="status"><font color="red">*</font>配送状态：</label>
        <div class="col-sm-8">
            <select class="form-control" name="status" id="status">
                <option value="">==选择配送状态==</option>
                <c:forEach items="${courierList}" var="c">
                    <c:if test="${c.id == orders.courier}">
                        <option value="${orders.status}" selected="selected"><c:if test="${orders.status=='0'}">待配送</c:if><c:if test="${orders.status=='1'}">配送中</c:if><c:if test="${orders.status=='2'}">配送完成</c:if></option>

                    </c:if>
                </c:forEach>
                <c:if test="${orders.status!='0'}"><option value="0" >待配送</option></c:if>
                <c:if test="${orders.status!='1'}"><option value="1" >配送中</option></c:if>
                <c:if test="${orders.status!='2'}"><option value="2" >配送完成</option></c:if>
            </select>
        </div>
    </div>
</form>
<script type="text/javascript">
	submit = function(){
		frmValidate();
		var data = $("#submitForm").serialize();
		ajaxRequest("orders/update", data);
	}
</script>