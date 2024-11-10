package com.xe.demo.model;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Table(name = "bxproducts")
public class BXProducts {
	/**
	 * 主键
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String name; // 产品名称

	private Integer classifyId; // 所属产品的分类ID
	
	private String classifyName; // 所属产品的分类名称

	private Integer companyId; // 所属店铺ID
	
	private String companyName; // 所属店铺名称

	private String productCode;// 产品代码

	private String pic_1;// 产品图片1（首页列表用）

	private String pic_2;// 产品图片2（首页顶部热门列表用）

	private String brief;// 产品简单介绍，

	private boolean isHot;// 是否热门产品(热门产品将显示在首页顶部)

	private String productTag;// 产品标签(首页上显示在标题名称前面的两个字，如“精选”，首页带有标签的将显示在前面)

	private BigDecimal price;// 产品价格(小数点保留两位)

	private Integer orderIndex;// 显示顺序

	private String createDateTime;// 创建时间

	private String publishDateTime;// 发布时间（发布时间，产品列表默认按这个时间倒序显示）

	private Integer status;// 产品状态： (0：下架 1：上架)

	private Integer saleTotal;// 销量（可以在后台填写销量数值）

	private String url_1;//  详情页地址

	private String url_2;//  详情页地址（测试）

	private String url_3;// 理赔地址

	private String url_4;// 保单电子版地址

	private String enabled; // 是否可用，1为可用，0为不可用

	private String createuser;

	private String updatetime;

	private String updateuser;

	private String remark;

	/**
	 * 角色权限
	 */
	@Transient
	private List<AuthOperation> operations = new ArrayList<AuthOperation>();

	public List<AuthOperation> getOperations() {
		return operations;
	}

	public void setOperations(List<AuthOperation> operations) {
		this.operations = operations;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getClassifyId() {
		return classifyId;
	}

	public void setClassifyId(Integer classifyId) {
		this.classifyId = classifyId;
	}

	public String getClassifyName() {
		return classifyName;
	}

	public void setClassifyName(String classifyName) {
		this.classifyName = classifyName;
	}

	public Integer getCompanyId() {
		return companyId;
	}

	public void setCompanyId(Integer companyId) {
		this.companyId = companyId;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getProductCode() {
		return productCode;
	}

	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

	public String getPic_1() {
		return pic_1;
	}

	public void setPic_1(String pic_1) {
		this.pic_1 = pic_1;
	}

	public String getPic_2() {
		return pic_2;
	}

	public void setPic_2(String pic_2) {
		this.pic_2 = pic_2;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}

	public boolean isHot() {
		return isHot;
	}

	public void setHot(boolean isHot) {
		this.isHot = isHot;
	}

	public String getProductTag() {
		return productTag;
	}

	public void setProductTag(String productTag) {
		this.productTag = productTag;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public Integer getOrderIndex() {
		return orderIndex;
	}

	public void setOrderIndex(Integer orderIndex) {
		this.orderIndex = orderIndex;
	}

	public String getCreateDateTime() {
		return createDateTime;
	}

	public void setCreateDateTime(String createDateTime) {
		this.createDateTime = createDateTime;
	}

	public String getPublishDateTime() {
		return publishDateTime;
	}

	public void setPublishDateTime(String publishDateTime) {
		this.publishDateTime = publishDateTime;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Integer getSaleTotal() {
		return saleTotal;
	}

	public void setSaleTotal(Integer saleTotal) {
		this.saleTotal = saleTotal;
	}

	public String getUrl_1() {
		return url_1;
	}

	public void setUrl_1(String url_1) {
		this.url_1 = url_1;
	}

	public String getUrl_2() {
		return url_2;
	}

	public void setUrl_2(String url_2) {
		this.url_2 = url_2;
	}

	public String getUrl_3() {
		return url_3;
	}

	public void setUrl_3(String url_3) {
		this.url_3 = url_3;
	}

	public String getUrl_4() {
		return url_4;
	}

	public void setUrl_4(String url_4) {
		this.url_4 = url_4;
	}

	public String getEnabled() {
		return enabled;
	}

	public void setEnabled(String enabled) {
		this.enabled = enabled;
	}

	public String getCreateuser() {
		return createuser;
	}

	public void setCreateuser(String createuser) {
		this.createuser = createuser;
	}

	public String getUpdatetime() {
		return updatetime;
	}

	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}

	public String getUpdateuser() {
		return updateuser;
	}

	public void setUpdateuser(String updateuser) {
		this.updateuser = updateuser;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}
}