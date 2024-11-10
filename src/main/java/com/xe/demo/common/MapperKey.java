package com.xe.demo.common;

/**
 * Mapper映射Key
 * @author CZH
 * @2017年12月28日
 */
public class MapperKey {

	//###################################### 权限 ######################################
	/**查询所有权限*/
	public final static String OPERATION_queryAllOpers = "AuthOperationMapper.queryAllOpers";
	/**查询单个权限*/
	public final static String OPERATION_queryOperation = "AuthOperationMapper.queryOperation";
	/**批量保存权限*/
	public final static String OPERATION_batchSaveOper = "AuthOperationMapper.batchSaveOper";
	/**批量保存权限*/
	public final static String OPERATION_batchUpdateOper = "AuthOperationMapper.batchUpdateOper";
	/**批量删除权限*/
	public final static String OPERATION_batchDelOper = "AuthOperationMapper.batchDelOper";
	/**查询角色权限数量*/
	public final static String OPERATION_queryOperCount = "AuthOperationMapper.queryOperCount";
	/**批量绑定权限*/
	public final static String OPERATION_batchSaveGroupOper = "AuthOperationMapper.batchSaveGroupOper";
	/**添加|更新权限*/
	public final static String OPERATION_addOrUpdateOper = "AuthOperationMapper.addOrUpdateOper";
	/**批量绑定权限*/
	public final static String OPERATION_bindOpers = "AuthOperationMapper.bindOpers";

	/**添加管理员用户*/
	public static final String USER_addAdmin = "AuthUserMapper.addAdmin";
	/**查询管理员用户*/
	public static final String USER_queryByUsername = "AuthUserMapper.queryByUsername";
	
	/**添加管理员角色*/
	public static final String ROLE_addAdmin = "AuthRoleMapper.addAdmin";
	/**查询管理员角色*/
	public static final String ROLE_queryByRolename = "AuthRoleMapper.queryByRolename";
	
}
