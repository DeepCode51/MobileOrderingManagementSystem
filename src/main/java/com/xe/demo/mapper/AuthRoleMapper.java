package com.xe.demo.mapper;

import org.apache.ibatis.annotations.Param;

import com.xe.demo.common.dao.MyMapper;
import com.xe.demo.model.AuthRole;

public interface AuthRoleMapper extends MyMapper<AuthRole> {

	AuthRole queryRoleById(@Param("roleid")Integer roleid);
	
	AuthRole queryByRolename(@Param("rolename") String rolename);
}