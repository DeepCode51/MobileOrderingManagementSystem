package com.xe.demo.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xe.demo.common.annotation.Authority;
import com.xe.demo.common.annotation.ControllerLog;
import com.xe.demo.common.pojo.AjaxResult;
import com.xe.demo.common.pojo.PageAjax;
import com.xe.demo.model.AuthRole;
import com.xe.demo.model.AuthUser;
import com.xe.demo.service.RoleService;
import com.xe.demo.service.UserService;

@Controller
@RequestMapping("/admin/user/")
public class UserController extends BaseController {

	@Autowired
	private UserService userService;
	@Autowired
	private RoleService roleService;

	@Authority(opCode = "0101", opName = "用户管理界面")
	@RequestMapping("mainPage")
	public String mainPage(Map<String, Object> map) {
		List<AuthRole> list = roleService.queryAll();
		map.put("list", list);
		return "admin/auth/user/main";
	}

	@RequestMapping("queryPage")
	@ResponseBody
	@Authority(opCode = "0101", opName = "查询用户列表")
	public PageAjax<AuthUser> queryPage(PageAjax<AuthUser> page, AuthUser user) {
		return userService.queryPage(page, user);
	}

	@Authority(opCode = "010101", opName = "添加用户页面")
	@RequestMapping("addPage")
	public String addPage(Map<String, Object> map) {
		List<AuthRole> list = roleService.queryAll();
		map.put("list", list);
		return "admin/auth/user/add";
	}

	@ControllerLog("添加用户")
	@RequestMapping("add")
	@ResponseBody
	@Authority(opCode = "010101", opName = "添加用户")
	public AjaxResult add(AuthUser user) {
		return userService.saveUser(user);
	}

	@Authority(opCode = "010102", opName = "更新用户页面")
	@RequestMapping("updatePage/{id}")
	public String updatePage(@PathVariable("id") int id, Map<String, Object> map) {
		List<AuthRole> list = roleService.queryAll();
		map.put("list", list);
		map.put("user", userService.queryByID(id));
		return "admin/auth/user/update";
	}

	@ControllerLog("修改用户")
	@RequestMapping("update")
	@ResponseBody
	@Authority(opCode = "010102", opName = "修改用户")
	public AjaxResult update(AuthUser user) {
		return userService.updateUser(user);
	}
	
	@Authority(opCode = "010103", opName = "重置用户密码页面")
	@RequestMapping("updatePwdPage")
	public String updatePwdPage(Map<String, Object> map, int id) {
		map.put("id", id);
		return "admin/auth/user/update_pwd";
	}

	@ControllerLog("重置用户密码")
	@RequestMapping("updatePwd")
	@ResponseBody
	@Authority(opCode = "010103", opName = "重置用户密码")
	public AjaxResult updatePwd(AuthUser user) {
		return userService.update(user);
	}
	
	@Authority(opCode = "010104", opName = "修改个人密码页面")
	@RequestMapping("updatePasswdPage")
	public String updatePasswdPage(Map<String, Object> map, int id) {
		map.put("id", id);
		return "admin/auth/user/update_passwd";
	}

	@ControllerLog("修改个人密码")
	@RequestMapping("updatePasswd")
	@ResponseBody
	@Authority(opCode = "010104", opName = "修改个人密码")
	public AjaxResult updatePasswd(HttpServletResponse response, HttpServletRequest request, int id, String oldPwd, String newPwd) {
		return userService.updatePwd(response, request, id, oldPwd, newPwd);
	}

	@ControllerLog("删除用户")
	@RequestMapping("deleteByID/{id}")
	@ResponseBody
	@Authority(opCode = "010104", opName = "删除用户")
	public AjaxResult deleteByID(@PathVariable("id") int id) {
		AuthUser user = new AuthUser();
		user.setId(id);
		user.setEnabled("0");
		return userService.updateUser(user);
	}




}
