package com.xe.demo.controller;

import com.xe.demo.common.Constant;
import com.xe.demo.common.annotation.Authority;
import com.xe.demo.common.annotation.ControllerLog;
import com.xe.demo.common.pojo.AjaxResult;
import com.xe.demo.common.pojo.PageAjax;
import com.xe.demo.common.utils.DateUtil;
import com.xe.demo.model.*;
import com.xe.demo.service.CartService;
import com.xe.demo.service.CustomerService;
import com.xe.demo.service.OrdersService;
import com.xe.demo.service.UserService;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;

@Controller
@RequestMapping("/orders/")
public class OrdersController extends BaseController {

	@Autowired
	private OrdersService ordersService;

	@Autowired
	private CustomerService customerService;

	@Autowired
	private UserService userService;

	/**
	 * 跳转到购物车
	 */
//	@RequestMapping("toCart")
//	public String toCart() {
//		return "cart";
//	}

	/**
	 *	下单
	 */
	@RequestMapping("subOrder")
	public String subOrder(PageAjax<Cart> page, Orders orders, Map<String, Object> map, HttpServletRequest request) {
		Integer customerId = (Integer) request.getSession().getAttribute("customerId");
		if(customerId == null ){
			return "login";
		}
		Cart cart = new Cart();
		cart.setCustomerId(customerId);
		List<Cart> carts = ordersService.queryList(cart);
		if(carts.isEmpty()){
			return "index";
		}
		int payPrice = 0;
		for (Cart ct:carts ) {
			payPrice = payPrice + ct.getPrice();
		}
		String uuid = UUID.randomUUID().toString().replaceAll("-", "");
		orders.setOrderId(uuid);
		orders.setCustomerId(customerId);
		orders.setPayPrice(payPrice);
		orders.setStatus("0");
		orders.setEnabled(0);
		ordersService.addOrders(orders);

		for (Cart ct:carts ) {
			OrdersProduct ordersProduct = new OrdersProduct();
			ordersProduct.setNumber(ct.getNumber());
			ordersProduct.setOrderId(uuid);
			ordersProduct.setPrice(ct.getPrice()*ct.getNumber());
			ordersProduct.setProductId(ct.getProductId());
			ordersService.addOrdersProduct(ordersProduct);
		}
		ordersService.clearCart(customerId);
		map.put("orderId",uuid);
		return "redirect:/orders/queryOrder/"+uuid;
	}



	/**
	 * 订单详情
	 */
	@RequestMapping("queryOrder/{orderId}")
	public String queryOrder(@PathVariable("orderId")String orderId,Map<String, Object> map) {
		OrdersProduct ordersProduct = new OrdersProduct();
		ordersProduct.setOrderId(orderId);
		List<OrdersProduct> ordersProducts = ordersService.queryOrdersProduct(ordersProduct);
		Orders orders = ordersService.queryOrders(orderId);
		map.put("orders",orders);
		map.put("orderId",orderId);
		map.put("orderProduct",ordersProducts);
		return "order";
	}

	/**
	 * updateStatus切换为已支付
	 */
	@RequestMapping("updateStatus/{orderId}")
	public String updateStatus(@PathVariable("orderId")String orderId,Map<String, Object> map,HttpServletRequest request) {
		Integer customerId = (Integer) request.getSession().getAttribute("customerId");
		if(customerId == null ){
			return "login";
		}
		ordersService.updateStatus(orderId);
		Orders orders=new Orders();
		orders.setCustomerId(customerId);
		List<Orders> ordersList = customerService.queryList(orders);
		Customer customer = customerService.queryByCustomerId(customerId);
		map.put("customer",customer);
		map.put("ordersList",ordersList);
		return "personal";
	}

	@Authority(opCode = "0205", opName = "订单界面")
	@RequestMapping("mainPage")
	public String mainPage() {
		return "admin/bx/order/main";
	}

	@RequestMapping("queryPage")
	@ResponseBody
	@Authority(opCode = "0205", opName = "查询订单列表")
	public PageAjax<Orders> queryPage(PageAjax<Orders> page, Orders bean) {
//		bean.setEnabled("1");
		return ordersService.queryPage(page, bean);
	}

	@Authority(opCode = "020501", opName = "修改订单页面")
	@RequestMapping("updatePage/{id}")
	public String updatePage(@PathVariable("id") String id, Map<String, Object> map) {
		Orders orders = ordersService.queryOrders(id);
		map.put("orders", orders);
		List<AuthUser> courier = userService.queryRoleUsers("派送员");
		map.put("courierList",courier);
		return "admin/bx/order/update";
	}

	@ControllerLog("修改订单")
	@RequestMapping("update")
	@ResponseBody
	@Authority(opCode = "020501", opName = "修改订单")
	public AjaxResult update(Orders bean) {
//		bean.setEnabled(0);
		return ordersService.updateCourier(bean);
	}

	@ControllerLog("删除订单")
	@RequestMapping("deleteByID/{id}")
	@ResponseBody
	@Authority(opCode = "020502", opName = "删除订单")
	public AjaxResult deleteByID(@PathVariable("id") int id) {
		Orders bean = new Orders();
		bean.setId(id);

		return ordersService.update(bean);
	}

}
