package com.xe.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.page.PageMethod;
import com.xe.demo.common.annotation.ServiceLog;
import com.xe.demo.common.pojo.AjaxResult;
import com.xe.demo.common.pojo.PageAjax;
import com.xe.demo.common.utils.AppUtil;
import com.xe.demo.mapper.BXCompanyMapper;
import com.xe.demo.model.BXCompany;

@Service
public class BXCompanyService extends AbstratService<BXCompany> {

	@Autowired
	private BXCompanyMapper bxCompanyMapper;
	
	public BXCompany queryBXCompanyById(int id){
		return bxCompanyMapper.queryCompanyById(id);
	}
	
	public List<BXCompany> queryList(BXCompany bean){
		return bxCompanyMapper.queryList(bean);
	}
	
	@Override
	@ServiceLog("查询店铺列表")
	public PageAjax<BXCompany> queryPage(PageAjax<BXCompany> page, BXCompany bean) {
		PageMethod.startPage(page.getPageNo(), page.getPageSize());
		List<BXCompany> list = bxCompanyMapper.queryList(bean);
		return AppUtil.returnPage(list);
	}

	@ServiceLog("新增店铺")
	public AjaxResult saveBXCompany(BXCompany bean) {
		String result = null;
		BXCompany bxCompany = bxCompanyMapper.queryByCompanyName(bean.getCompanyName());
		if (null == bxCompany) {
			bean.setEnabled("1");
			result = bxCompanyMapper.insert(bean) > 0 ? null : "操作失败";
		} else {
			result = "店铺已存在";
		}
		return AppUtil.returnObj(result);
	}

	@ServiceLog("更新店铺")
	public AjaxResult updateBXCompany(BXCompany bean) {
		String result = null;
		BXCompany bxCompany = bxCompanyMapper.queryByCompanyName(bean.getCompanyName());
		if (null != bxCompany && bxCompany.getId() != bean.getId()) {
			result = "店铺已存在";
		} else {
			bxCompanyMapper.update(bean);
		}
		return AppUtil.returnObj(result);
	}
}
