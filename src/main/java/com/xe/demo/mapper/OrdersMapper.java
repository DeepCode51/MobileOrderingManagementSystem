package com.xe.demo.mapper;

import com.xe.demo.common.dao.MyMapper;
import com.xe.demo.model.Cart;
import com.xe.demo.model.Orders;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface OrdersMapper extends MyMapper<Orders> {

    List<Orders> queryList(@Param("orders")Orders orders);

    int addOrders(Orders orders);
    Integer  updateCourier(Orders orders);
    Integer  updateStatus(@Param("orderId")String orderId);
    Orders findOrderByOrderId(@Param("orderId")String orderId);

}