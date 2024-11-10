package com.xe.demo.model;

import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "auth_role_operation")
public class AuthRoleOperation {
    /**
     * 角色ID
     */
    @Id
    private Integer roleid;

    /**
     * 权限ID
     */
    @Id
    private Integer opid;

    /**
     * 获取角色ID
     *
     * @return roleid - 角色ID
     */
    public Integer getRoleid() {
        return roleid;
    }

    /**
     * 设置角色ID
     *
     * @param roleid 角色ID
     */
    public void setRoleid(Integer roleid) {
        this.roleid = roleid;
    }

    /**
     * 获取权限ID
     *
     * @return opid - 权限ID
     */
    public Integer getOpid() {
        return opid;
    }

    /**
     * 设置权限ID
     *
     * @param opid 权限ID
     */
    public void setOpid(Integer opid) {
        this.opid = opid;
    }
}