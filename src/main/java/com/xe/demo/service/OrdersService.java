package com.xe.demo.service;

import com.github.pagehelper.page.PageMethod;
import com.xe.demo.common.annotation.ServiceLog;
import com.xe.demo.common.pojo.AjaxResult;
import com.xe.demo.common.pojo.PageAjax;
import com.xe.demo.common.support.DataCache;
import com.xe.demo.common.utils.AppUtil;
import com.xe.demo.mapper.CartMapper;
import com.xe.demo.mapper.OrdersMapper;
import com.xe.demo.mapper.OrdersProdcutMapper;
import com.xe.demo.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrdersService extends AbstratService<Orders> {

	@Autowired
	private OrdersMapper ordersMapper;

	@Autowired
	private CartMapper cartMapper;

	@Autowired
	private UserService userService;

	@Autowired
	private OrdersProdcutMapper ordersProdcutMapper;

	@Autowired
	private DataCache dataCache;

	public List<Cart> queryList(Cart bean){
		return cartMapper.queryList(bean);
	}

	@Override
	@ServiceLog("查询订单列表")
	public PageAjax<Orders> queryPage(PageAjax<Orders> page, Orders bean) {
		PageMethod.startPage(page.getPageNo(), page.getPageSize());

		List<Orders> list = ordersMapper.queryList(bean);
		List<Orders> orders = new ArrayList<>();
		for (Orders o:list) {
			List<AuthUser> users = userService.queryRoleUsers("派送员");
			for (AuthUser u:users) {
				if((o.getCourier()!=null?o.getCourier():"").equals(String.valueOf(u.getId()))){
					o.setCourierName(u.getUsername());
				}
			}
			orders.add(o);
		}
		return AppUtil.returnPage(orders);
	}

	@ServiceLog("添加购物车到订单列表")
	public Integer addOrders(Orders orders) {
		Integer integer = ordersMapper.addOrders(orders);
		return integer;
	}

	public Integer addOrdersProduct(OrdersProduct ordersProduct) {
		Integer integer = ordersProdcutMapper.addProductToOrderProdcut(ordersProduct);
		return integer;
	}

	@ServiceLog("清空购物车列表")
	public Integer clearCart(int customerId) {
		Integer integer = cartMapper.updateCartStatus(customerId);
		return integer;
	}


	@ServiceLog("获取订单产品")
	public List<OrdersProduct> queryOrdersProduct(OrdersProduct ordersProduct) {
		List<OrdersProduct> ordersProducts = ordersProdcutMapper.queryList(ordersProduct);
		return ordersProducts;
	}

	@ServiceLog("获取订单")
	public Orders queryOrders(String orderId) {
		Orders order = ordersMapper.findOrderByOrderId(orderId);
		return order;
	}

	@ServiceLog("修改订单状态")
	public Integer updateStatus(String orderId) {
		Integer integer = ordersMapper.updateStatus(orderId);
		return integer;
	}

	@ServiceLog("修改订单")
	public AjaxResult updateCourier(Orders order) {
		Integer orders = ordersMapper.updateCourier(order);
		return AppUtil.returnObj(null);
	}
}
