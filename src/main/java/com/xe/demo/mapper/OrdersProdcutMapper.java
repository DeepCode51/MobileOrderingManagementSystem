package com.xe.demo.mapper;

import com.xe.demo.common.dao.MyMapper;
import com.xe.demo.model.Cart;
import com.xe.demo.model.Orders;
import com.xe.demo.model.OrdersProduct;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface OrdersProdcutMapper extends MyMapper<OrdersProduct> {

    List<OrdersProduct> queryList(@Param("ordersProduct")OrdersProduct ordersProduct);
    int addProductToOrderProdcut(OrdersProduct ordersProduct);
}