package com.xe.demo.mapper;

import com.xe.demo.common.dao.MyMapper;
import com.xe.demo.model.AuthUser;
import com.xe.demo.model.Cart;
import com.xe.demo.model.Customer;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface CartMapper extends MyMapper<Cart> {

    List<Cart> queryList(@Param("cart")Cart cart);

    Integer  updateCartStatus(@Param("customerId")int customerId);

    Integer  updateCartNumber(@Param("productId")int productId);

    int addProductToCart(Cart cart);

    Cart findCartByProductId(@Param("productId")int productId);

}