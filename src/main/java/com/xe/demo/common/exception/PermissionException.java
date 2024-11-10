package com.xe.demo.common.exception;

/**
 * 权限异常
 * @author CZH
 */
@SuppressWarnings("serial")
public class PermissionException extends RuntimeException {
	private int key;
	private String message;

	public PermissionException() {
	}

	public PermissionException(String message) {
		this.message = message;
	}

	public PermissionException(int key, String message) {
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
