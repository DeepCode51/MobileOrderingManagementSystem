package com.xe.demo.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Table(name = "auth_user")
public class AuthUser {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String username;

    private String password;
    
    private String mobilephone; //手机号码 
    
    private String idcard; //身份证号码 
    
    private String address; //地址
    
    private String enabled; //是否有效：0无效；1有效

    private String email;
    
    @Transient
    private AuthRole role;
    
    @Transient
    private int status;

    /**
     * 是否可用(0禁用,1可用)
     */
    private Integer useable;

    /**
     * 所属角色
     */
    private Integer roleid;

    /**
     * 创建时间
     */
    private String addtime;

    /**
     * 登陆时间
     */
    private String logintime;

    /**
     * 登陆IP
     */
    private String loginip;

    /**
     * @return id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * @return username
     */
    public String getUsername() {
        return username;
    }

    /**
     * @param username
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * @return password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * 获取是否可用(0禁用,1可用)
     *
     * @return useable - 是否可用(0禁用,1可用)
     */
    public Integer getUseable() {
        return useable;
    }

    /**
     * 设置是否可用(0禁用,1可用)
     *
     * @param useable 是否可用(0禁用,1可用)
     */
    public void setUseable(Integer useable) {
        this.useable = useable;
    }

    /**
     * 获取所属角色
     *
     * @return roleid - 所属角色
     */
    public Integer getRoleid() {
        return roleid;
    }

    /**
     * 设置所属角色
     *
     * @param roleid 所属角色
     */
    public void setRoleid(Integer roleid) {
        this.roleid = roleid;
    }

    /**
     * 获取创建时间
     *
     * @return addtime - 创建时间
     */
    public String getAddtime() {
        return addtime;
    }

    /**
     * 设置创建时间
     *
     * @param addtime 创建时间
     */
    public void setAddtime(String addtime) {
        this.addtime = addtime;
    }

    /**
     * 获取登陆时间
     *
     * @return logintime - 登陆时间
     */
    public String getLogintime() {
        return logintime;
    }

    /**
     * 设置登陆时间
     *
     * @param logintime 登陆时间
     */
    public void setLogintime(String logintime) {
        this.logintime = logintime;
    }

    /**
     * 获取登陆IP
     *
     * @return loginip - 登陆IP
     */
    public String getLoginip() {
        return loginip;
    }

    /**
     * 设置登陆IP
     *
     * @param loginip 登陆IP
     */
    public void setLoginip(String loginip) {
        this.loginip = loginip;
    }

	public AuthRole getRole() {
		return role;
	}

	public void setRole(AuthRole role) {
		this.role = role;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getMobilephone() {
		return mobilephone;
	}

	public void setMobilephone(String mobilephone) {
		this.mobilephone = mobilephone;
	}

	public String getIdcard() {
		return idcard;
	}

	public void setIdcard(String idcard) {
		this.idcard = idcard;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEnabled() {
		return enabled;
	}

	public void setEnabled(String enabled) {
		this.enabled = enabled;
	}
}