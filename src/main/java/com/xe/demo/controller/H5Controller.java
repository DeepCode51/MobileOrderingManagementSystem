package com.xe.demo.controller;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xe.demo.common.pojo.AjaxResult;
import com.xe.demo.common.pojo.PageAjax;
import com.xe.demo.common.utils.AppUtil;
import com.xe.demo.model.BXClassify;
import com.xe.demo.model.BXCompany;
import com.xe.demo.model.BXProducts;
import com.xe.demo.service.BXClassifyService;
import com.xe.demo.service.BXCompanyService;
import com.xe.demo.service.BXProductsService;

@Controller
@RequestMapping("/h5/")
public class H5Controller extends BaseController {

	@Autowired
	private BXCompanyService bxCompanyService;
	
	@Autowired
	private BXClassifyService bxClassifyService;
	
	@Autowired
	private BXProductsService bxProductsService;
	
	@RequestMapping("index")
	public String index() {
		BXClassify bean = new BXClassify();
		bean.setEnabled("1");
		List<BXClassify>  list = bxClassifyService.queryList(bean);
		getRequest().setAttribute("list", list);
		return "admin/index";
	}
	
	@RequestMapping("queryBXCompany")
	@ResponseBody
	public AjaxResult queryBXCompany(PageAjax<BXCompany> page) {
		BXCompany bean = new BXCompany();
		bean.setEnabled("1");
		return AppUtil.returnList(null, bxCompanyService.queryList(bean));
	}
	
	@RequestMapping("queryBXClassify")
	@ResponseBody
	public AjaxResult queryBXClassify(PageAjax<BXClassify> page) {
		BXClassify bean = new BXClassify();
		bean.setEnabled("1");
		return AppUtil.returnList(null, bxClassifyService.queryList(bean));
	}
	
	@RequestMapping("queryProducts")
	@ResponseBody
	public AjaxResult queryProducts(PageAjax<BXProducts> page) {
		BXProducts bean = new BXProducts();
		bean.setEnabled("1");
		bean.setStatus(1);
		if("1".equals(getRequest().getParameter("isHot")))
			bean.setHot(true);
		if(StringUtils.isNotEmpty(getRequest().getParameter("classifyName"))){
			bean.setClassifyName(getRequest().getParameter("classifyName"));
		}
		return AppUtil.returnList(null, bxProductsService.queryH5List(bean));
	}
}
