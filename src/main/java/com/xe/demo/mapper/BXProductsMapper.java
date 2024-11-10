package com.xe.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.xe.demo.common.dao.MyMapper;
import com.xe.demo.model.BXProducts;

public interface BXProductsMapper extends MyMapper<BXProducts> {
	
	BXProducts queryProductById(@Param("id")Integer id);
	
	BXProducts queryByProductName(@Param("productName") String productName);
	
	List<BXProducts> queryList(@Param("product")BXProducts product);
	
	List<BXProducts> queryH5List(@Param("product")BXProducts product);
	
	int insert(BXProducts product);
	
	int update(BXProducts bean);
	
	int queryMaxOrderIndex();
}