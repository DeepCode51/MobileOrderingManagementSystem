package com.xe.demo.common.exception;

/**
 * Ajax请求异常
 * @author CZH
 */
@SuppressWarnings("serial")
public class AjaxPermissionException extends RuntimeException {
	private int key;
	private String message;

	public AjaxPermissionException() {
	}

	public AjaxPermissionException(String message) {
		this.message = message;
	}

	public AjaxPermissionException(int key, String message) {
		this.key = key;
		this.message = message;
	}

	public int getKey() {
		return key;
	}

	public void setKey(int key) {
		this.key = key;
	}

	@Override
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
