package com.xe.demo.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xe.demo.common.Constant;
import com.xe.demo.common.annotation.Authority;
import com.xe.demo.common.annotation.ControllerLog;
import com.xe.demo.common.pojo.AjaxResult;
import com.xe.demo.common.pojo.PageAjax;
import com.xe.demo.common.utils.DateUtil;
import com.xe.demo.model.AuthUser;
import com.xe.demo.model.BXCompany;
import com.xe.demo.service.BXCompanyService;

@Controller
@RequestMapping("/bx/cp/")
public class BXCompanyController extends BaseController {

	@Autowired
	private BXCompanyService bxCompanyService;

	@Authority(opCode = "0201", opName = "店铺界面")
	@RequestMapping("mainPage")
	public String mainPage() {
		return "admin/bx/company/main";
	}

	@RequestMapping("queryPage")
	@ResponseBody
	@Authority(opCode = "0201", opName = "查询店铺列表")
	public PageAjax<BXCompany> queryPage(PageAjax<BXCompany> page, BXCompany bean) {
		bean.setEnabled("1");
		return bxCompanyService.queryPage(page, bean);
	}

	@Authority(opCode = "020101", opName = "添加店铺")
	@RequestMapping("addPage")
	public String addPage() {
		return "admin/bx/company/add";
	}

	@ControllerLog("添加店铺")
	@RequestMapping("add")
	@ResponseBody
	@Authority(opCode = "020101", opName = "添加店铺")
	public AjaxResult add(BXCompany bean) {
		AuthUser user = (AuthUser)getRequest().getSession().getAttribute(Constant.USER);
		if(user != null){
			bean.setCreateuser(String.valueOf(user.getId()));
		}
		return bxCompanyService.saveBXCompany(bean);
	}

	@Authority(opCode = "020102", opName = "修改店铺页面")
	@RequestMapping("updatePage/{id}")
	public String updatePage(@PathVariable("id") int id, Map<String, Object> map) {
		BXCompany bean = bxCompanyService.queryBXCompanyById(id);
		map.put("company", bean);
		return "admin/bx/company/update";
	}

	@ControllerLog("修改店铺")
	@RequestMapping("update")
	@ResponseBody
	@Authority(opCode = "020102", opName = "修改店铺")
	public AjaxResult update(BXCompany bean) {
		AuthUser user = (AuthUser)getRequest().getSession().getAttribute(Constant.USER);
		if(user != null){
			bean.setUpdateuser(String.valueOf(user.getId()));
			bean.setUpdatetime(DateUtil.getCurDate());
		}
		return bxCompanyService.updateBXCompany(bean);
	}

	@ControllerLog("删除店铺")
	@RequestMapping("deleteByID/{id}")
	@ResponseBody
	@Authority(opCode = "010203", opName = "删除店铺")
	public AjaxResult deleteByID(@PathVariable("id") int id) {
		BXCompany bean = new BXCompany();
		bean.setId(id);
		bean.setEnabled("0");
		AuthUser user = (AuthUser)getRequest().getSession().getAttribute(Constant.USER);
		if(user != null){
			bean.setUpdateuser(String.valueOf(user.getId()));
			bean.setUpdatetime(DateUtil.getCurDate());
		}
		return bxCompanyService.updateBXCompany(bean);
	}
}
