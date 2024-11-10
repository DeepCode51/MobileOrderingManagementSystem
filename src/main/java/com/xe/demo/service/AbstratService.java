package com.xe.demo.service;

import java.util.List;
import java.util.Map;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.page.PageMethod;
import com.xe.demo.common.annotation.ServiceLog;
import com.xe.demo.common.dao.DaoSupport;
import com.xe.demo.common.pojo.AjaxResult;
import com.xe.demo.common.pojo.PageAjax;
import com.xe.demo.common.pojo.ParamData;
import com.xe.demo.common.utils.AppUtil;

import tk.mybatis.mapper.common.Mapper;

/**
 * 通用接口
 * @param <T>
 */
@Service
public abstract class AbstratService<T> {

    @Autowired
    protected DaoSupport dao;

    /**
     * 通用查询对象
     * @param str
     * @param args
     * @return
     */
    public AjaxResult findForObject(String str, String[] args) {
     	ParamData params = new ParamData();
    	//校验参数
    	String result = AppUtil.checkParam(params, args);
    	Object data = null;
    	if(StringUtils.isEmpty(result)){
    		data = dao.findForObject(str, params);
    	}
    	return AppUtil.returnObj(result, data);
    }

    /**
     * 通用查询列表
     * @param str
     * @param args
     * @return
     */
    public AjaxResult findForList(String str, String[] args) {
    	ParamData params = new ParamData();
    	//校验参数
    	String result = AppUtil.checkParam(params, args);
    	List<?> list = null;
    	if(StringUtils.isEmpty(result)){
    		list = dao.findForList(str, params);
    	}
    	return AppUtil.returnList(result, list);
    }
    
    /**
     * 通用查询分页
     * @param str
     * @param args
     * @return
     */
    public AjaxResult findForPage(String str, String[] args) {
    	ParamData params = new ParamData();
    	//校验参数
    	String result = AppUtil.checkParam(params, args);
    	List<?> list = null;
    	if(StringUtils.isEmpty(result)){
    		startPage(params);
    		list = dao.findForList(str, params);
    	}
    	return AppUtil.returnPage(result, list);
    }
    
    /**
     * 查询指定字段的值
     */
    public Map<?, ?> findForMap(String str, String key) {
    	return dao.findForMap(str, new ParamData(), key);
    }
    
    /**
     * 通用保存
     * @param str
     * @param args
     * @return
     */
    public AjaxResult save(String str, String[] args) {
    	ParamData params = new ParamData();
    	//校验参数
    	String result = AppUtil.checkParam(params, args);
    	if(StringUtils.isEmpty(result)){
    		int ret = saveInfo(str, params);
    		if(ret < 1){
    			result = "添加失败";
    		}
    	}
		return AppUtil.returnObj(result);
    }
    
    public int saveInfo(String str, ParamData params){
    	return dao.save(str, params);
    }
    
    /**
     * 通用批量保存
     * @param str
     * @param list
     * @return
     */
    public AjaxResult batchSave(String str, List<?> list) {
    	String result = "添加失败";
    	if(CollectionUtils.isNotEmpty(list)){
        	int ret = saveList(str, list);
        	if(ret > 0){
        		result = null;
        	}
    	}
    	return AppUtil.returnObj(result);
    }
    
    public int saveList(String str, List<?> list){
    	return dao.batchSave(str, list);
    }
    
    /**
     * 通用修改
     * @param str
     * @param args
     * @return
     */
    public AjaxResult update(String str, String[] args) {
    	ParamData params = new ParamData();
    	//校验参数
    	String result = AppUtil.checkParam(params, args);
    	if(StringUtils.isEmpty(result)){
    		int ret = updateBy(str, params);
    		if(ret < 1){
    			result = "修改失败";
    		}
    	}
		return AppUtil.returnObj(result);
    }
    
    public int updateBy(String str, ParamData params){
    	return dao.update(str, params);
    }
    
    /**
     * 通用批量修改
     * @param str
     * @param list
     * @return
     */
    public AjaxResult batchUpdate(String str, List<?> list) {
    	String result = "修改失败";
    	if(CollectionUtils.isNotEmpty(list)){
        	int ret = batUpdate(str, list);
        	if(ret > 0){
        		result = null;
        	}
    	}
    	return AppUtil.returnObj(result);
    }
    
    public int batUpdate(String str, List<?> list){
    	return dao.batchUpdate(str, list);
    }
    
    /**
     * 通用删除
     * @param str
     * @param args
     * @return
     */
    public AjaxResult delete(String str, String[] args) {
    	ParamData params = new ParamData();
    	//校验参数
    	String result = AppUtil.checkParam(params, args);
    	if(StringUtils.isEmpty(result)){
    		int ret = delBy(str, params);
    		if(ret < 1){
    			result = "删除失败";
    		}
    	}
    	return AppUtil.returnObj(result);
    }
    
    public int delBy(String str, ParamData params){
    	return dao.delete(str, params);
    }
    
    /**
     * 通用批量删除
     * @param str
     * @param list
     * @return
     */
    public AjaxResult batchDelete(String str, int[] ids) {
    	String result = "删除失败";
    	if(null != ids && ids.length > 0){
        	int ret = batchDel(str, ids);
        	if(ret > 0){
        		result = null;
        	}
    	}
    	return AppUtil.returnObj(result);
    }
    
    public int batchDel(String str, int[] ids){
    	return dao.batchDelete(str, ids);
    }

	/**
	 * 开始分页
	 * @param params
	 */
	public static void startPage(ParamData params) {
		int pageNo = 1;
		int pageSize = 10;
		if (null != params.get("pageNo") && null != params.get("pageSize")) {
			pageNo = params.getInt("pageNo");
			pageSize = params.getInt("pageSize");
		}
		PageMethod.startPage(pageNo, pageSize);
	}

    @Autowired
    protected Mapper<T> mapper;

    public Mapper<T> getMapper() {
        return mapper;
    }

    public T queryByID(Object key) {
        return mapper.selectByPrimaryKey(key);
    }
    
    public List<T> queryList(T entity){
    	return mapper.select(entity);
    }
    
    public T queryOne(T entity){
    	return mapper.selectOne(entity);
    }
    
    public int queryCount(T entity){
    	return mapper.selectCount(entity);
    }

    public List<T> queryByParams(Object example) {
        return mapper.selectByExample(example);
    }
    
    public List<T> queryAll(){
    	return mapper.selectAll();
    }

	@ServiceLog("分页查询")
    public PageAjax<T> queryPage(PageAjax<T> page, T entity){
    	PageMethod.startPage(page.getPageNo(), page.getPageSize());
    	List<T> list = queryList(entity);
        return new PageAjax<T>(list);
    }

	@ServiceLog("新增数据")
    public AjaxResult save(T entity) {
        int ret = insert(entity);
        String result = null;
        if(ret <= 0){
        	result = "添加失败";
        }
    	return AppUtil.returnObj(result);
    }
	
	public int insert(T entity){
		return mapper.insert(entity);
	}

	@ServiceLog("新增数据")
    public AjaxResult saveNotNull(T entity) {
    	int ret = insertSelective(entity);
        String result = null;
        if(ret <= 0){
        	result = "更新失败";
        }
    	return AppUtil.returnObj(result);
    }
	
	public int insertSelective(T entity){
		return mapper.insertSelective(entity);
	}

	@ServiceLog("删除数据")
    public AjaxResult deleteByID(Object key) {
        int ret = delById(key);
        String result = null;
        if(ret <= 0){
        	result = "删除失败";
        }
    	return AppUtil.returnObj(result);
    }
	
	public int delById(Object key){
		return mapper.deleteByPrimaryKey(key);
	}

	@ServiceLog("更新数据")
    public AjaxResult update(T entity) {
    	int ret = updateByID(entity);
        String result = null;
        if(ret <= 0){
        	result = "更新失败";
        }
    	return AppUtil.returnObj(result);
    }
	
	public int updateByID(T entity){
		return mapper.updateByPrimaryKeySelective(entity);
	}

}
