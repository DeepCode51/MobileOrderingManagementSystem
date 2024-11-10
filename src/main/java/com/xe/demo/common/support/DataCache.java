package com.xe.demo.common.support;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Component;

import com.xe.demo.common.Constant;
import com.xe.demo.common.MapperKey;
import com.xe.demo.common.dao.DaoSupport;
import com.xe.demo.model.AuthOperation;

@Component
public class DataCache {

	@Autowired
	private DaoSupport dao;
	private Map<String, Object> dataMap = new HashMap<String, Object>();

	/** 
	 * 初始化 
	 */
	@PostConstruct
	public void init() {
		@SuppressWarnings("unchecked")
		List<AuthOperation> list = (List<AuthOperation>) dao.findForList(MapperKey.OPERATION_queryAllOpers, null);
		dataMap.put(Constant.SESSION_OPERATIONS, list);
	}

	public String getString(String key) {
		Object value = getValue(key);
		String ret = null;
		if (null != value) {
			ret = String.valueOf(value);
		}
		return ret;
	}

	public int getInt(String key) {
		String str = getString(key);
		int ret = 0;
		if (null != str) {
			ret = Integer.parseInt(str);
		}
		return ret;
	}

	public Integer getInteger(String key) {
		String str = getString(key);
		Integer ret = null;
		if (null != str) {
			ret = Integer.parseInt(str);
		}
		return ret;
	}

	public Long getLong(String key) {
		String value = getString(key);
		Long ret = null;
		if (null != value) {
			ret = Long.parseLong(value);
		}
		return ret;
	}

	/** 
	 * 查询 
	 * 如果数据没有缓存,那么从dataMap里面获取,如果缓存了, 
	 * 那么从CACHE_KEY里面获取 
	 * 并且将缓存的数据存入到 CACHE_KEY里面 
	 * 其中key 为 #key
	 */
	@Cacheable(value = Constant.CACHE_KEY, key = "#key")
	public Object getValue(String key) {
		return dataMap.get(key);
	}

	/** 
	 * 插入 或者更新 
	 * 插入或更新数据到dataMap中 
	 * 并且缓存到 CACHE_KEY中 
	 * 如果存在了那么更新缓存中的值 
	 * 其中key 为 #key
	 */
	@CachePut(value = Constant.CACHE_KEY, key = "#key")
	public Object setValue(String key, Object value) {
		dataMap.put(key, value);
		return value;
	}

	/** 
	 * 删除 
	 * 删除dataMap里面的数据 
	 * 并且删除缓存CACHE_KEY中的数据 
	 * 其中key 为 #key
	 */
	@CacheEvict(value = Constant.CACHE_KEY, key = "#key")
	public void remove(String key) {
		dataMap.remove(key);
	}

}