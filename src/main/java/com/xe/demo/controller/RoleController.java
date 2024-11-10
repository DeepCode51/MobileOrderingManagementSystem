package com.xe.demo.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xe.demo.common.annotation.Authority;
import com.xe.demo.common.annotation.ControllerLog;
import com.xe.demo.common.pojo.AjaxResult;
import com.xe.demo.common.pojo.PageAjax;
import com.xe.demo.model.AuthOperation;
import com.xe.demo.model.AuthRole;
import com.xe.demo.model.AuthUser;
import com.xe.demo.service.RoleService;
import com.xe.demo.service.UserService;

@Controller
@RequestMapping("/admin/role/")
public class RoleController extends BaseController {

	@Autowired
	private RoleService roleService;
	@Autowired
	private UserService userService;

	@Authority(opCode = "0102", opName = "角色管理界面")
	@RequestMapping("mainPage")
	public String mainPage() {
		return "admin/auth/role/main";
	}

	//@ControllerLog("查询角色列表")
	@RequestMapping("queryPage")
	@ResponseBody
	@Authority(opCode = "0102", opName = "查询角色列表")
	public PageAjax<AuthRole> queryPage(PageAjax<AuthRole> page, AuthRole role) {
		role.setEnabled("1");
		return roleService.queryPage(page, role);
	}

	@Authority(opCode = "010201", opName = "添加角色页面")
	@RequestMapping("addPage")
	public String addPage() {
		return "admin/auth/role/add";
	}

	@ControllerLog("添加角色")
	@RequestMapping("add")
	@ResponseBody
	@Authority(opCode = "010201", opName = "添加角色")
	public AjaxResult add(AuthRole role) {
		return roleService.saveRole(role);
	}

	@Authority(opCode = "010202", opName = "更新角色页面")
	@RequestMapping("updatePage/{id}")
	public String updatePage(@PathVariable("id") int id, Map<String, Object> map) {
		AuthRole role = roleService.queryByID(id);
		map.put("role", role);
		return "admin/auth/role/update";
	}

	@ControllerLog("修改角色")
	@RequestMapping("update")
	@ResponseBody
	@Authority(opCode = "010202", opName = "修改角色")
	public AjaxResult update(AuthRole role) {
		return roleService.updateRole(role);
	}

	@ControllerLog("删除角色")
	@RequestMapping("deleteByID/{id}")
	@ResponseBody
	@Authority(opCode = "010203", opName = "删除角色")
	public AjaxResult deleteByID(@PathVariable("id") int id) {
		AuthRole role = new AuthRole();
		role.setRoleid(id);
		role.setEnabled("0");
		return roleService.updateRole(role);
	}

	@Authority(opCode = "010204", opName = "角色用户管理页面")
	@RequestMapping("bindUserPage/{roleid}")
	public String bindUserPage(@PathVariable("roleid")int roleid, Map<String, Object> map) {
		AuthRole role = roleService.queryByID(roleid);
        map.put("role", role);

        List<AuthUser> users = userService.queryAll();
        List<AuthUser> hasUsers = userService.queryRoleUsers(roleid);
        List<String> usernames = new ArrayList<String>();
        for(AuthUser user: hasUsers){
        	usernames.add(user.getUsername());
        }
        for (AuthUser user : users) {
            if (usernames.contains(user.getUsername())) {
                user.setStatus(1);
            }
        }
        map.put("users", users);
		return "admin/auth/role/role_user";
	}

	@ControllerLog("角色绑定用户")
	@RequestMapping("bindUser")
	@ResponseBody
	@Authority(opCode = "010204", opName = "角色绑定用户")
	public AjaxResult bindUser(int roleid, Integer[] ids) {
		return userService.bindUser(roleid, ids);
	}

	@Authority(opCode = "010205", opName = "角色权限管理页面")
	@RequestMapping("bindOperPage/{roleid}")
	public String bindOperPage(@PathVariable("roleid")int roleid, Map<String, Object> map) {
		List<AuthRole> roleList = roleService.queryNotAdmin();
		map.put("roleList", roleList);
		
		HttpServletRequest request = getRequest();
		// 当前登录的用户
		AuthUser loginUser = (AuthUser) request.getAttribute("loginUser");
		// 当前登录用户所属角色
		AuthRole loginRole = roleService.queryRoleById(loginUser.getRoleid());
		// 当前用户拥有的权限
		List<AuthOperation> operationList = loginRole.getOperations();
		map.put("operationList", operationList);
		
		// 角色拥有的权限
		List<AuthOperation> hasOperations = null;
		AuthRole role = roleService.queryRoleById(roleid);
		if (role != null) {
			hasOperations = role.getOperations();
		}

		// 角色没有的权限
		List<AuthOperation> noOperations = new ArrayList<AuthOperation>();
		for (AuthOperation operation : operationList) {
			if (!hasOperations.contains(operation)) {
				noOperations.add(operation);
			}
		}
		map.put("hasCount", hasOperations.size());
		map.put("noCount", noOperations.size());
		map.put("roleid", roleid);
		
		return "admin/auth/role/opers_role";
	}

	@Authority(opCode = "010206", opName = "角色已绑定权限")
    @RequestMapping("hasOpers/{roleid}")
    public String hasOpers(Map<String, Object> map, @PathVariable("roleid") int roleid, @RequestParam(defaultValue = "") String opname) {
		List<AuthOperation> hasOperations = new ArrayList<AuthOperation>();
		AuthRole role = roleService.queryRoleById(roleid);
		if (role != null) {
			//选择角色拥有的权限
			List<AuthOperation> operationList = role.getOperations();
			if (operationList != null) {
				// 筛选条件
				if (StringUtils.isNotEmpty(opname)) {
					for (AuthOperation operation : operationList) {
						if (operation.getOpcode().contains(opname) || operation.getOpcode().contains(opname)) {
							hasOperations.add(operation);
						}
					}
				} else {
					hasOperations = operationList;
				}
			}
		}
		//排序
		Collections.sort(hasOperations, new Comparator<AuthOperation>() {
			@Override
			public int compare(AuthOperation o1, AuthOperation o2) {
				return o1.getOpcode().compareTo(o2.getOpcode());
			}
		});
		map.put("hasOperations", hasOperations);
        map.put("roleid", roleid);
        map.put("opname", opname);
        return "admin/auth/role/opers_has";
    }

	@ControllerLog("绑定角色权限")
	@RequestMapping("bindOpers")
	@ResponseBody
	@Authority(opCode = "010205", opName = "绑定角色权限")
	public AjaxResult bindOpers(int roleid, int[]opids) {
		return roleService.bindOpers(roleid, opids);
	}
	
	@Authority(opCode = "010206", opName = "角色未绑定权限")
	@RequestMapping("noOpers/{roleid}")
	public String noOpers(Map<String, Object> map, @PathVariable("roleid") int roleid, @RequestParam(defaultValue = "") String opname) {
		HttpServletRequest request = getRequest();
		// 当前登录的用户
		AuthUser loginUser = (AuthUser) request.getAttribute("loginUser");
		// 当前登录用户所属角色
		AuthRole loginRole = roleService.queryRoleById(loginUser.getRoleid());
		// 当前用户拥有的权限
		List<AuthOperation> operationList = loginRole.getOperations();
		
		//选择角色拥有的权限
		AuthRole role = roleService.queryRoleById(roleid);
		List<String> opersCode = new ArrayList<String>();
		if (role != null) {
			List<AuthOperation> hasOperations = role.getOperations();
			for(AuthOperation operation : hasOperations){
				opersCode.add(operation.getOpcode());
			}
		}
		
		List<AuthOperation> noOperations = new ArrayList<AuthOperation>();
		//剔除角色拥有的权限
		for (AuthOperation operation : operationList) {
			if (!opersCode.contains(operation.getOpcode())) {
				// 搜索条件
				if (StringUtils.isNotEmpty(opname)) {
					if (operation.getOpname().contains(opname) || operation.getOpcode().contains(opname)) {
						noOperations.add(operation);
					}
				} else {
					noOperations.add(operation);
				}
			}
		}
		//排序
		Collections.sort(noOperations, new Comparator<AuthOperation>() {
			@Override
			public int compare(AuthOperation o1, AuthOperation o2) {
				return o1.getOpcode().compareTo(o2.getOpcode());
			}
		});
		map.put("noOperations", noOperations);
        map.put("roleid", roleid);
        map.put("opname", opname);
		return "admin/auth/role/opers_no";
	}

	@ControllerLog("解除角色权限")
	@RequestMapping("unbindOpers")
	@ResponseBody
	@Authority(opCode = "010206", opName = "解除角色权限")
	public AjaxResult unbindOpers(int roleid, int[]opids) {
		return roleService.unbindOpers(roleid, opids);
	}
}
