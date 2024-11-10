<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div class="modal  fade"  id="modalAddToCartProduct" tabindex="-1" role="dialog" aria-label="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content ">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="icon icon-clear"></span></button>
			</div>
			<div class="modal-body">
				<div class="tt-modal-addtocart mobile">
					<div class="tt-modal-messages">
						<i class="icon-f-68"></i> 商品已加入购物车!
					</div>
					<a href="#" class="btn-link btn-close-popup">继续购物</a>
					<a href="/cart/toCart" class="btn-link">打开购物车</a>
				</div>
				<div class="tt-modal-addtocart desctope">
					<div class="row">
						<div class="col-12 col-lg-6">
							<div class="tt-modal-messages">
								<i class="icon-f-68"></i> 商品已加入购物车!
							</div>
							<div class="tt-modal-product">
								<div class="tt-img">
									<img src="${svg}/assets/images/loader.svg" data-src="${svg}/assets/images/product/product-01.jpg" alt="">
								</div>
								<h2 class="tt-title"><a href="product.html">蓝衣服</a></h2>
								<div class="tt-qty">
									数量: <span>1</span>
								</div>
							</div>
							<div class="tt-product-total">
								<div class="tt-total">
									总价: <span class="tt-price">$324</span>
								</div>
							</div>
						</div>
						<div class="col-12 col-lg-6">
							<a href="#" class="tt-cart-total">
								购物车有	1	件商品
								<div class="tt-total">
									总价: <span class="tt-price">$324</span>
								</div>
							</a>
							<a href="/" class="btn btn-border btn-close-popup">继续购物</a>
							<a href="/cart/toCart" class="btn btn-border">查看购物车</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
