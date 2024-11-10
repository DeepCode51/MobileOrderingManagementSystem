package com.xe.demo.service;

import com.github.pagehelper.page.PageMethod;
import com.xe.demo.common.Constant;
import com.xe.demo.common.annotation.ServiceLog;
import com.xe.demo.common.pojo.AjaxResult;
import com.xe.demo.common.pojo.PageAjax;
import com.xe.demo.common.support.DataCache;
import com.xe.demo.common.utils.AppUtil;
import com.xe.demo.common.utils.CookieUtil;
import com.xe.demo.common.utils.DateUtil;
import com.xe.demo.common.utils.IPUtil;
import com.xe.demo.mapper.AuthRoleMapper;
import com.xe.demo.mapper.AuthUserMapper;
import com.xe.demo.mapper.CustomerMapper;
import com.xe.demo.mapper.OrdersMapper;
import com.xe.demo.model.*;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

@Service
public class CustomerService extends AbstratService<Customer> {

	@Autowired
	private CustomerMapper customerMapper;

	@Autowired
	private OrdersMapper ordersMapper;

	@Autowired
	private DataCache dataCache;

	public List<Orders> queryList(Orders bean){
		return ordersMapper.queryList(bean);
	}

	@ServiceLog("查询用户")
	public Customer queryByCustomerId(int customerId) {
		Customer customer = customerMapper.queryByCustomerId(customerId);
		return customer;
	}

	public Customer login(String stuNumber,String password) {
		Customer customer = customerMapper.login(stuNumber,password);
		return customer;
	}


	public int register(Customer customer) {
		int register = customerMapper.register(customer);
		return register;
	}
}
