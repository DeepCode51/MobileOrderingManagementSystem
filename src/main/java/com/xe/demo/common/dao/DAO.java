package com.xe.demo.common.dao;

import java.util.List;
import java.util.Map;

public interface DAO {

	/**
	 * 保存对象
	 * @param str
	 * @param obj
	 * @return
	 * @throws Exception
	 */
	public int save(String str, Object obj);

	/**
	 * 修改对象
	 * @param str
	 * @param obj
	 * @return
	 * @throws Exception
	 */
	public  int update(String str, Object obj);

	/**
	 * 删除对象
	 * @param str
	 * @param obj
	 * @return
	 * @throws Exception
	 */
	public  int delete(String str, Object obj);

	/**
	 * 查找对象
	 * @param <T>
	 * @param str
	 * @param obj
	 * @return
	 * @throws Exception
	 */
	public <T> T findForObject(String str, Object obj);

	/**
	 * 查找对象集合
	 * @param str
	 * @param obj
	 * @return
	 * @throws Exception
	 */
	public List<?> findForList(String str, Object obj);

	/**
	 * 查找对象封装成Map
	 * @param s
	 * @param obj
	 * @return
	 * @throws Exception
	 */
	public Map<?, ?> findForMap(String sql, Object obj, String key);

}
