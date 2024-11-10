package com.xe.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.xe.demo.common.dao.MyMapper;
import com.xe.demo.model.BXClassify;

public interface BXClassifyMapper extends MyMapper<BXClassify> {
	
	BXClassify queryClassifyById(@Param("id")Integer id);
	
	BXClassify queryByClassifyName(@Param("name") String name);
	
	List<BXClassify> queryList(@Param("classify")BXClassify classify);
	
	int insert(BXClassify bean);
	
	int update(BXClassify bean);

}