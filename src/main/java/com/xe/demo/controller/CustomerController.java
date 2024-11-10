package com.xe.demo.controller;

import com.xe.demo.model.AuthRole;
import com.xe.demo.model.Customer;
import com.xe.demo.model.Orders;
import com.xe.demo.service.CartService;
import com.xe.demo.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Controller
@RequestMapping("/customer/")
public class CustomerController extends BaseController{

    @Autowired
    private CustomerService customerService;



    /**
     * 跳转到个人中心
     */
    @RequestMapping("toPersonal")
    public String toPersonal(Map<String, Object> map,HttpServletRequest request) {
        Integer customerId = (Integer) request.getSession().getAttribute("customerId");
        if(customerId == null ){
            return "login";
        }
        Orders orders=new Orders();
        orders.setCustomerId(customerId);
        List<Orders> ordersList = customerService.queryList(orders);
        Customer customer = customerService.queryByCustomerId(customerId);
        map.put("customer",customer);
        map.put("ordersList",ordersList);
        return "personal";
    }

    /**
     * 跳转到登录页
     */
    @RequestMapping("toLogin")
    public String toLogin(Map<String, Object> map) {
        return "login";
    }

    /**
     * 跳转到注册页
     */
    @RequestMapping("toRegister")
    public String toRegister(Map<String, Object> map) {
        return "register";
    }

    /**
     * 退出系统
     */
    @RequestMapping("preLogin")
    public String preLogin(Map<String, Object> map,HttpServletRequest request) {
        Integer customerId = (Integer) request.getSession().getAttribute("customerId");
        if(customerId == null ){
            return "login";
        }
        request.getSession().removeAttribute("customerId");
        return "index";
    }



    /**
     *  登录系统
     */
    @RequestMapping("login")
    public String login(HttpServletRequest request, HttpServletResponse response, Map<String, Object> map) {
        String stuNumber = request.getParameter("stuNumber");
        String passoword = request.getParameter("passoword");
        Customer customer = customerService.login(stuNumber, passoword);
        if(Objects.isNull(customer)){
            return "login";
        }else{
            HttpSession session = request.getSession();
            session.setAttribute("customerId",customer.getId());
        }
        return "redirect:/customer/toPersonal";
    }

    /**
     *  注册
     */
    @RequestMapping("register")
    public String register(HttpServletRequest request, HttpServletResponse response, Map<String, Object> map) {
        String customerName = request.getParameter("customerName");
        String email = request.getParameter("email");
        String password = request.getParameter("passoword");
        String address = request.getParameter("address");
        String stuNumber = request.getParameter("stuNumber");
        String phoneNo = request.getParameter("phoneNo");
        if(customerName ==null||email==null||password==null||address==null||stuNumber==null||phoneNo==null){
            return "register";
        }
        Customer customer = new Customer();
        customer.setAddress(address);
        customer.setCustomerName(customerName);
        customer.setEmail(email);
        customer.setPassword(password);
        customer.setPhoneNo(phoneNo);
        customer.setStuNumber(stuNumber);
        int i = customerService.register(customer);
        if(i<0){
            return "register";
        }else{
            HttpSession session = request.getSession();
            session.setAttribute("customer",customer);
        }
        return "redirect:/customer/toPersonal";
    }
}
