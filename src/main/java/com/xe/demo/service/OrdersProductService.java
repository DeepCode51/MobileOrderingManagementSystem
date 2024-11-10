package com.xe.demo.service;

import com.xe.demo.common.annotation.ServiceLog;
import com.xe.demo.common.support.DataCache;
import com.xe.demo.mapper.OrdersMapper;
import com.xe.demo.mapper.OrdersProdcutMapper;
import com.xe.demo.model.Cart;
import com.xe.demo.model.Orders;
import com.xe.demo.model.OrdersProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdersProductService extends AbstratService<OrdersProduct> {

	@Autowired
	private OrdersProdcutMapper ordersProdcutMapper;
	@Autowired
	private DataCache dataCache;

	@ServiceLog("添加商品到购物车列表")
	public Integer addProductToOrderProduct(OrdersProduct ordersProduct) {
		Integer integer = ordersProdcutMapper.addProductToOrderProdcut(ordersProduct);
		return integer;
	}

	@ServiceLog("获取订单产品")
	public List<OrdersProduct> queryOrdersProduct(OrdersProduct ordersProduct) {
		List<OrdersProduct> ordersProducts = ordersProdcutMapper.queryList(ordersProduct);
		return ordersProducts;
	}
}
