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
import com.xe.demo.model.BXClassify;
import com.xe.demo.service.BXClassifyService;

@Controller
@RequestMapping("/bx/class/")
public class BXClassifyController extends BaseController {

	@Autowired
	private BXClassifyService bxClassifyService;

	@Authority(opCode = "0202", opName = "产品分类界面")
	@RequestMapping("mainPage")
	public String mainPage() {
		return "admin/bx/class/main";
	}

	@RequestMapping("queryPage")
	@ResponseBody
	@Authority(opCode = "0202", opName = "查询产品分类列表")
	public PageAjax<BXClassify> queryPage(PageAjax<BXClassify> page, BXClassify bean) {
		bean.setEnabled("1");
		return bxClassifyService.queryPage(page, bean);
	}

	@RequestMapping("queryPageHead")
	@ResponseBody
	public PageAjax<BXClassify> queryPageHead(PageAjax<BXClassify> page, BXClassify bean) {
		bean.setEnabled("1");
		return bxClassifyService.queryPage(page, bean);
	}

	@Authority(opCode = "020201", opName = "添加产品分类")
	@RequestMapping("addPage")
	public String addPage() {
		return "admin/bx/class/add";
	}

	@ControllerLog("添加产品分类")
	@RequestMapping("add")
	@ResponseBody
	@Authority(opCode = "020201", opName = "添加产品分类")
	public AjaxResult add(BXClassify bean) {
		AuthUser user = (AuthUser)getRequest().getSession().getAttribute(Constant.USER);
		if(user != null){
			bean.setCreateuser(String.valueOf(user.getId()));
		}
		return bxClassifyService.saveBXClassify(bean);
	}

	@Authority(opCode = "020202", opName = "修改产品分类页面")
	@RequestMapping("updatePage/{id}")
	public String updatePage(@PathVariable("id") int id, Map<String, Object> map) {
		BXClassify bean = bxClassifyService.queryBXClassifyById(id);
		map.put("classify", bean);
		return "admin/bx/class/update";
	}

	@ControllerLog("修改产品分类")
	@RequestMapping("update")
	@ResponseBody
	@Authority(opCode = "020202", opName = "修改产品分类")
	public AjaxResult update(BXClassify bean) {
		AuthUser user = (AuthUser)getRequest().getSession().getAttribute(Constant.USER);
		if(user != null){
			bean.setUpdateuser(String.valueOf(user.getId()));
			bean.setUpdatetime(DateUtil.getCurDate());
		}
		return bxClassifyService.updateBXClassify(bean);
	}

	@ControllerLog("删除产品分类")
	@RequestMapping("deleteByID/{id}")
	@ResponseBody
	@Authority(opCode = "020203", opName = "删除产品分类")
	public AjaxResult deleteByID(@PathVariable("id") int id) {
		BXClassify bean = new BXClassify();
		bean.setId(id);
		bean.setEnabled("0");
		AuthUser user = (AuthUser)getRequest().getSession().getAttribute(Constant.USER);
		if(user != null){
			bean.setUpdateuser(String.valueOf(user.getId()));
			bean.setUpdatetime(DateUtil.getCurDate());
		}
		return bxClassifyService.updateBXClassify(bean);
	}
}
