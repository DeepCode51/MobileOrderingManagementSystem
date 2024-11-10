package com.xe.demo.mapper;

import com.xe.demo.common.dao.MyMapper;
import com.xe.demo.model.AuthUser;
import com.xe.demo.model.Cart;
import com.xe.demo.model.Customer;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface CustomerMapper extends MyMapper<Customer> {

	Customer queryByCustomerId(@Param("customerId")int customerId);
	Customer login(@Param("stuNumber")String stuNumber,@Param("password")String password);
	int register(Customer customer);
}