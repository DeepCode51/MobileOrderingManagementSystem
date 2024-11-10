package com.xe.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.page.PageMethod;
import com.xe.demo.common.annotation.ServiceLog;
import com.xe.demo.common.pojo.AjaxResult;
import com.xe.demo.common.pojo.PageAjax;
import com.xe.demo.common.utils.AppUtil;
import com.xe.demo.mapper.BXProductsMapper;
import com.xe.demo.model.BXProducts;

@Service
public class BXProductsService extends AbstratService<BXProducts> {

	@Autowired
	private BXProductsMapper bxProductMapper;
	
	public BXProducts queryBXProductById(int id){
		return bxProductMapper.queryProductById(id);
	}
	
	public List<BXProducts> queryList(BXProducts bean){
		return bxProductMapper.queryList(bean);
	}
	
	@Override
	@ServiceLog("查询产品列表")
	public PageAjax<BXProducts> queryPage(PageAjax<BXProducts> page, BXProducts bean) {
		PageMethod.startPage(page.getPageNo(), page.getPageSize());
		List<BXProducts> list = bxProductMapper.queryList(bean);
		return AppUtil.returnPage(list);
	}

	@ServiceLog("查询产品列表")
	public PageAjax<BXProducts> queryListByClassId(BXProducts bean) {
		List<BXProducts> list = bxProductMapper.queryList(bean);
		return AppUtil.returnPage(list);
	}
	
	public List<BXProducts> queryH5List(BXProducts bean){
		return bxProductMapper.queryH5List(bean);
	}

	@ServiceLog("新增产品")
	public AjaxResult saveBXProduct(BXProducts bean) {
		String result = null;
		BXProducts bxProduct = bxProductMapper.queryByProductName(bean.getName());
		if (null == bxProduct) {
			bean.setEnabled("1");
			result = bxProductMapper.insert(bean) > 0 ? null : "操作失败";
		} else {
			result = "产品已存在";
		}
		return AppUtil.returnObj(result);
	}

	@ServiceLog("更新产品")
	public AjaxResult updateBXProduct(BXProducts bean) {
		String result = null;
		BXProducts bxProduct = bxProductMapper.queryByProductName(bean.getName());
		if (null != bxProduct && bxProduct.getId() != bean.getId()) {
			result = "产品已存在";
		} else {
			int update = bxProductMapper.update(bean);
		}
		return AppUtil.returnObj(result);
	}

	@ServiceLog("获取最大的OrderIndex值")
	public Integer queryMaxOrderIndex() {
		return bxProductMapper.queryMaxOrderIndex();
	}
}
