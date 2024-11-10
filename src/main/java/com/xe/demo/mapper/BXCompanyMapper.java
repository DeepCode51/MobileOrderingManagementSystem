package com.xe.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.xe.demo.common.dao.MyMapper;
import com.xe.demo.model.BXCompany;

public interface BXCompanyMapper extends MyMapper<BXCompany> {
	
	BXCompany queryCompanyById(@Param("id")Integer id);
	
	BXCompany queryByCompanyName(@Param("companyName") String companyName);
	
	List<BXCompany> queryList(@Param("company")BXCompany company);
	
	int insert(BXCompany bean);
	
	int update(BXCompany bean);

}