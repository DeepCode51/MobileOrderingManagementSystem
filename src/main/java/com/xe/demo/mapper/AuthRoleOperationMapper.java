package com.xe.demo.mapper;

import java.util.List;

import com.xe.demo.common.dao.MyMapper;
import com.xe.demo.model.AuthRoleOperation;

public interface AuthRoleOperationMapper extends MyMapper<AuthRoleOperation> {

	void batchInsert(List<AuthRoleOperation> list);

	void delRoleOpers(List<AuthRoleOperation> list);
}