package com.xe.demo.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.page.PageMethod;
import com.xe.demo.common.annotation.ServiceLog;
import com.xe.demo.common.pojo.AjaxResult;
import com.xe.demo.common.pojo.PageAjax;
import com.xe.demo.common.utils.AppUtil;
import com.xe.demo.mapper.BXClassifyMapper;
import com.xe.demo.model.BXClassify;

@Service
public class BXClassifyService extends AbstratService<BXClassify> {

	@Autowired
	private BXClassifyMapper bxClassifyMapper;
	
	public BXClassify queryBXClassifyById(int id){
		return bxClassifyMapper.queryClassifyById(id);
	}
	
	public List<BXClassify> queryList(BXClassify bean){
		return bxClassifyMapper.queryList(bean);
	}
	
	@Override
	@ServiceLog("查询产品分类列表")
	public PageAjax<BXClassify> queryPage(PageAjax<BXClassify> page, BXClassify bean) {
		PageMethod.startPage(page.getPageNo(), page.getPageSize());
		List<BXClassify> list = bxClassifyMapper.queryList(bean);
		return AppUtil.returnPage(list);
	}

	@ServiceLog("新增产品分类")
	public AjaxResult saveBXClassify(BXClassify bean) {
		String result = null;
		BXClassify bxCompany = bxClassifyMapper.queryByClassifyName(bean.getName());
		if (null == bxCompany) {
			bean.setEnabled("1");
			result = bxClassifyMapper.insert(bean) > 0 ? null : "操作失败";
		} else {
			result = "产品分类已存在";
		}
		return AppUtil.returnObj(result);
	}

	@ServiceLog("更新产品分类")
	public AjaxResult updateBXClassify(BXClassify bean) {
		String result = null;
		BXClassify bxCompany = bxClassifyMapper.queryByClassifyName(bean.getName());
		if (null != bxCompany && bxCompany.getId() != bean.getId()) {
			result = "产品分类已存在";
		} else {
			bxClassifyMapper.update(bean);
		}
		return AppUtil.returnObj(result);
	}
}
