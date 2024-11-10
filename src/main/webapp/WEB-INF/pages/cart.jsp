<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta charset="utf-8" />

    <title>首页</title>
    <meta name="description" content="首页">
    <meta name="keywords" content="HTML5 Template">
    <meta name="description" content="Wokiee - Responsive HTML5 Template">
    <meta name="author" content="wokiee">
    <link rel="shortcut icon" href="${ctx}/assets/images/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="${ctx}/assets/css/theme.css">
    <script src="${ctx}/assets/js/jquery.js"></script>

</head>
<body>
<jsp:include page="common/header.jsp" flush="true"/>
<div class="tt-breadcrumb">
    <div class="container">
        <ul>
            <li><a href="/">首页</a></li>
            <li>购物车</li>
        </ul>
    </div>
</div>
<div id="tt-pageContent">
    <div class="container-indent">
        <div class="container">
            <h1 class="tt-title-subpages noborder">购物车</h1>
            <div class="tt-shopcart-table-02">
                <table>
                    <tbody>
                    <%--<tr>--%>
                        <%--<td>--%>
                            <%--<div class="tt-product-img">--%>
                                <%--<img src="images/loader.svg" data-src="images/product/product-01.jpg" alt="">--%>
                            <%--</div>--%>
                        <%--</td>--%>
                        <%--<td>--%>
                            <%--<h2 class="tt-title">--%>
                                <%--<a href="#">Flared Shift Dress</a>--%>
                            <%--</h2>--%>
                            <%--<ul class="tt-list-description">--%>
                                <%--<li>Size: 22</li>--%>
                                <%--<li>Color: Green</li>--%>
                            <%--</ul>--%>
                            <%--<ul class="tt-list-parameters">--%>
                                <%--<li>--%>
                                    <%--<div class="tt-price">--%>
                                        <%--$124--%>
                                    <%--</div>--%>
                                <%--</li>--%>
                                <%--<li>--%>
                                    <%--<div class="detach-quantity-mobile"></div>--%>
                                <%--</li>--%>
                                <%--<li>--%>
                                    <%--<div class="tt-price subtotal">--%>
                                        <%--$124--%>
                                    <%--</div>--%>
                                <%--</li>--%>
                            <%--</ul>--%>
                        <%--</td>--%>
                        <%--<td>--%>
                            <%--<div class="tt-price">--%>
                                <%--$124--%>
                            <%--</div>--%>
                        <%--</td>--%>
                        <%--<td>--%>
                            <%--<div class="detach-quantity-desctope">--%>
                                <%--<div class="tt-input-counter style-01">--%>
                                    <%--<span class="minus-btn"></span>--%>
                                    <%--<input type="text" value="1" size="5">--%>
                                    <%--<span class="plus-btn"></span>--%>
                                <%--</div>--%>
                            <%--</div>--%>
                        <%--</td>--%>
                        <%--<td>--%>
                            <%--<div class="tt-price subtotal">--%>
                                <%--$124--%>
                            <%--</div>--%>
                        <%--</td>--%>
                        <%--<td>--%>
                            <%--<a href="#" class="tt-btn-close"></a>--%>
                        <%--</td>--%>
                    <%--</tr>--%>
                    </tbody>
                </table>
                <div class="tt-shopcart-btn">
                    <div class="col-left">
                        <a class="btn-link" href="/"><i class="icon-e-19"></i>继续购物</a>
                    </div>
                    <div class="col-right">
                        <a class="btn-link" href="/cart/clearCart"><i class="icon-h-02"></i>清空购物车</a>
                    </div>
                </div>
            </div>
            <div class="tt-shopcart-col">
                <div class="row">
                    <div class="col-md-6 col-lg-4">
                        <div class="tt-shopcart-box tt-boredr-large">
                            <table class="tt-shopcart-table01">
                                <tfoot>
                                <tr>
                                    <th>总计</th>
                                    <td class="total_price"></td>
                                </tr>
                                </tfoot>
                            </table>
                            <a href="/orders/subOrder"  class="btn btn-lg"><span class="icon icon-check_circle"></span>下单</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<a href="#" class="tt-back-to-top">返回顶部</a>
<!-- modal (AddToCartProduct) -->
<jsp:include page="common/modalCart.jsp" flush="true"/>
</body>

<script src="${ctx}/assets/external/bootstrap/js/bootstrap.min.js"></script>
<script src="${ctx}/assets/external/slick/slick.min.js"></script>
<script src="${ctx}/assets/external/perfect-scrollbar/perfect-scrollbar.min.js"></script>
<script src="${ctx}/assets/external/panelmenu/panelmenu.js"></script>
<script src="${ctx}/assets/external/instafeed/instafeed.min.js"></script>
<script src="${ctx}/assets/external/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
<script src="${ctx}/assets/external/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
<script src="${ctx}/assets/external/countdown/jquery.plugin.min.js"></script>
<script src="${ctx}/assets/external/countdown/jquery.countdown.min.js"></script>
<script src="${ctx}/assets/external/lazyLoad/lazyload.min.js"></script>
<script src="${ctx}/assets/js/main.js"></script>
<!-- form validation and sending to mail -->
<script src="${ctx}/assets/external/form/jquery.form.js"></script>
<script src="${ctx}/assets/external/form/jquery.validate.min.js"></script>
<script src="${ctx}/assets/external/form/jquery.form-init.js"></script>
<script type="text/javascript">


    $.ajax({ //实时获取数据
        url : "/cart/queryCart",
        type : "post",
        dataType : "json",
        error : function() {
        },
        success : function(result) {
            var html = '';
            var totalPrice=0;
            $.each(result.rows,function(i,item){
                totalPrice=totalPrice+item.price*item.number;
                html +='<tr>';
                html +='   <td>';
                html +='        <div class="tt-product-img">';
                html +='           <img src="${ctx}'+item.pic_1+'" alt="">';
                html +='        </div>';
                html +='    </td>';
                html +='    <td>';
                html +='       <h2 class="tt-title">';
                html +='           <a href="#">'+item.name+'</a>';
                html +='        </h2>';
                html +='        <ul class="tt-list-parameters">';
                html +='           <li>';
                html +='               <div class="tt-price">';
                html +='                   ￥'+item.price+'';
                html +='               </div>';
                html +='                </li>';
                html +='                    <li>';
                html +='                    <div class="detach-quantity-mobile"></div>';
                html +='                    </li>';
                html +='               <li>';
                html +='                <div class="tt-price subtotal">';
                html +='                    ￥'+item.price*item.number+'';
                html +='                </div>';
                html +='            </li>';
                html +='         </ul>';
                html +='    </td>';
                html +='    <td>';
                html +='       <div class="tt-price">';
                html +='           ￥'+item.price+'';
                html +='        </div>';
                html +='    </td>';
                html +='     <td>';
                html +='       <div class="detach-quantity-desctope">';
                html +='           <div class="tt-input-counter style-01">';
                // html +='               <span class="minus-btn"></span>';
                html +='                   <input  type="text" readonly value="'+item.number+'">';
                // html +='               <span class="plus-btn"></span>';
                html +='            </div>';
                html +='        </div>';
                html +='    </td>';
                html +='    <td>';
                html +='       <div class="tt-price subtotal">';
                html +='          ￥'+item.price*item.number+'';
                html +='       </div>';
                html +='    </td>';
                html +='</tr>';
            });

            $('.tt-shopcart-table-02 table tbody').append(html);
            $('.total_price').append('￥'+totalPrice);
        }
    });



</script>
</html>