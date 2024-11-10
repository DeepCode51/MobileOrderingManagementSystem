package com.xe.demo.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Table(name = "auth_role")
public class AuthRole {
	/**
	 * 主键
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer roleid;

	/**
	 * 角色名称
	 */
	private String rolename;

	/**
	 * 中文名
	 */
	private String cname;
	
	private String enabled; //是否有效：0无效；1有效
	
	/**
	 * 角色权限
	 */
	@Transient
	private List<AuthOperation> operations = new ArrayList<AuthOperation>();

	/**
	 * 获取主键
	 *
	 * @return id - 主键
	 */
	public Integer getRoleid() {
		return roleid;
	}

	/**
	 * 设置主键
	 *
	 * @param id 主键
	 */
	public void setRoleid(Integer roleid) {
		this.roleid = roleid;
	}

	/**
	 * 获取角色名称
	 *
	 * @return rolename - 角色名称
	 */
	public String getRolename() {
		return rolename;
	}

	/**
	 * 设置角色名称
	 *
	 * @param rolename 角色名称
	 */
	public void setRolename(String rolename) {
		this.rolename = rolename;
	}

	/**
	 * 获取中文名
	 *
	 * @return cname - 中文名
	 */
	public String getCname() {
		return cname;
	}

	/**
	 * 设置中文名
	 *
	 * @param cname 中文名
	 */
	public void setCname(String cname) {
		this.cname = cname;
	}

	public List<AuthOperation> getOperations() {
		return operations;
	}

	public void setOperations(List<AuthOperation> operations) {
		this.operations = operations;
	}

	public String getEnabled() {
		return enabled;
	}

	public void setEnabled(String enabled) {
		this.enabled = enabled;
	}
}