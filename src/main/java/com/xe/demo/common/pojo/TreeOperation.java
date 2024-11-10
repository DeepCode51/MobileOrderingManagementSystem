package com.xe.demo.common.pojo;

import java.util.ArrayList;
import java.util.List;

import com.xe.demo.model.AuthOperation;

public class TreeOperation {
	private int opId;
	private String opCode;
	private String opName;
	private Integer ishas;   //0代表未用于，1代表已拥有
	private List<TreeOperation> records;
	public String getOpCode() {
		return opCode;
	}
	public void setOpCode(String opCode) {
		this.opCode = opCode;
	}
	public String getOpName() {
		return opName;
	}
	public void setOpName(String opName) {
		this.opName = opName;
	}
	public List<TreeOperation> getRecords() {
		return records;
	}
	public void setRecords(List<TreeOperation> records) {
		this.records = records;
	}
	public TreeOperation(){
	}
	public TreeOperation(AuthOperation aOperation){
		this.opCode = aOperation.getOpcode();
		this.opName = aOperation.getOpname();
		this.opId = aOperation.getOpid();
		this.ishas = 1;
		this.records = new ArrayList<TreeOperation>();
	}
	public int getOpId() {
		return opId;
	}
	public void setOpId(int opId) {
		this.opId = opId;
	}
	public Integer getIshas() {
		return ishas;
	}
	public void setIshas(Integer ishas) {
		this.ishas = ishas;
	}
}
