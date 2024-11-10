package com.xe.demo.controller;

import com.xe.demo.common.annotation.Authority;
import com.xe.demo.common.annotation.ControllerLog;
import com.xe.demo.common.pojo.AjaxResult;
import com.xe.demo.common.pojo.PageAjax;
import com.xe.demo.model.AuthRole;
import com.xe.demo.model.AuthUser;
import com.xe.demo.model.Cart;
import com.xe.demo.service.CartService;
import com.xe.demo.service.CustomerService;
import com.xe.demo.service.RoleService;
import com.xe.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Controller
@RequestMapping("/cart/")
public class CartController extends BaseController {

	@Autowired
	private CartService cartService;

	/**
	 * 跳转到购物车
	 */
	@RequestMapping("toCart")
	public String toCart() {
		return "cart";
	}

	/**
	 * 查询购物车列表
	 * @param page
	 * @param cart
	 * @return
	 */
	@RequestMapping("queryCart")
	@ResponseBody
	public PageAjax<Cart> queryCart(PageAjax<Cart> page, Cart cart,HttpServletRequest request) {
		Integer customerId = (Integer)request.getSession().getAttribute("customerId");
		cart.setCustomerId(customerId);
		return cartService.queryPage(null, cart);
	}

	/**
	 * 清空购物车列表
	 * @param page
	 * @param cart
	 * @return
	 */
	@RequestMapping("clearCart")
	public String clearCart( Cart cart,HttpServletRequest request) {
		Integer customerId = (Integer)request.getSession().getAttribute("customerId");
		cartService.clearCart(customerId);
		return "index";
	}

	/**
	 * 添加商品购物车列表
	 * @param cart
	 * @return
	 */
	@RequestMapping("addProduct/{productId}")
	public String addProduct(@PathVariable("productId")int productId,HttpServletRequest request) {
		Integer customerId = (Integer) request.getSession().getAttribute("customerId");
		if(customerId == null ){
			return "login";
		}
		Cart cart = cartService.findCartByProductId(productId);
		boolean flag = Objects.isNull(cart);
		if(flag){
			Cart c = new Cart();
			c.setCustomerId(customerId);
			c.setProductId(productId);
			c.setNumber(1);
			cartService.addProduct(c);
		}else{
			cartService.updateCartNumber(productId);
		}
		return "redirect:/cart/toCart/";
	}
}
