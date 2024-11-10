package com.xe.demo.service;

import com.xe.demo.common.annotation.ServiceLog;
import com.xe.demo.common.pojo.AjaxResult;
import com.xe.demo.common.pojo.PageAjax;
import com.xe.demo.common.support.DataCache;
import com.xe.demo.common.utils.AppUtil;
import com.xe.demo.mapper.CartMapper;
import com.xe.demo.mapper.CustomerMapper;
import com.xe.demo.model.AuthUser;
import com.xe.demo.model.Cart;
import com.xe.demo.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService extends AbstratService<Cart> {

	@Autowired
	private CartMapper cartMapper;
	@Autowired
	private DataCache dataCache;

	@Override
	@ServiceLog("查询购物车列表")
	public PageAjax<Cart> queryPage(PageAjax<Cart> page, Cart cart) {
		List<Cart> list = cartMapper.queryList(cart);
		return AppUtil.returnPage(list);
	}

	@ServiceLog("清空购物车列表")
	public Integer clearCart(int customerId) {
		Integer integer = cartMapper.updateCartStatus(customerId);
		return integer;
	}

	@ServiceLog("添加商品到购物车列表")
	public Integer addProduct(Cart cart) {
		Integer integer = cartMapper.addProductToCart(cart);
		return integer;
	}

	@ServiceLog("修改购物车商品数量")
	public Integer updateCartNumber(int product) {
		Integer integer = cartMapper.updateCartNumber(product);
		return integer;
	}

	@ServiceLog("查询购物车商品")
	public Cart findCartByProductId(int productId) {
		Cart cart = cartMapper.findCartByProductId(productId);
		return cart;
	}


}
