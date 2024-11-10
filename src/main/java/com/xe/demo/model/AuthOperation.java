package com.xe.demo.model;

import javax.persistence.*;

@Table(name = "auth_operation")
public class AuthOperation {
    /**
     * 主键
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer opid;

    /**
     * 权限值
     */
    private String opcode;

    /**
     * 权限名称
     */
    private String opname;

    /**
     * 权限操作链接
     */
    private String ophref;

    /**
     * 显示顺序
     */
    private Integer opseq;

    /**
     * 获取主键
     *
     * @return id - 主键
     */
    public Integer getOpid() {
        return opid;
    }

    /**
     * 设置主键
     *
     * @param id 主键
     */

    public void setOpid(Integer opid) {
		this.opid = opid;
	}

    /**
     * 获取权限值
     *
     * @return opcode - 权限值
     */
    public String getOpcode() {
        return opcode;
    }

	/**
     * 设置权限值
     *
     * @param opcode 权限值
     */
    public void setOpcode(String opcode) {
        this.opcode = opcode;
    }

    /**
     * 获取权限名称
     *
     * @return opname - 权限名称
     */
    public String getOpname() {
        return opname;
    }

    /**
     * 设置权限名称
     *
     * @param opname 权限名称
     */
    public void setOpname(String opname) {
        this.opname = opname;
    }

    /**
     * 获取权限操作链接
     *
     * @return ophref - 权限操作链接
     */
    public String getOphref() {
        return ophref;
    }

    /**
     * 设置权限操作链接
     *
     * @param ophref 权限操作链接
     */
    public void setOphref(String ophref) {
        this.ophref = ophref;
    }

    /**
     * 获取显示顺序
     *
     * @return opseq - 显示顺序
     */
    public Integer getOpseq() {
        return opseq;
    }

    /**
     * 设置显示顺序
     *
     * @param opseq 显示顺序
     */
    public void setOpseq(Integer opseq) {
        this.opseq = opseq;
    }
}