package com.xe.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.xe.demo.common.dao.MyMapper;
import com.xe.demo.model.AuthUser;

public interface AuthUserMapper extends MyMapper<AuthUser> {

	AuthUser queryByUsername(@Param("username") String username);

	List<AuthUser> queryList(@Param("user")AuthUser user);

	List<AuthUser> queryPaisongList(@Param("roleName")String roleName);

	List<Integer> queryRoleUids(@Param("roleid")int roleid);
}