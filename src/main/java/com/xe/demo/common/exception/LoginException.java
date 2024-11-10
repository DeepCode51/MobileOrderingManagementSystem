package com.xe.demo.common.exception;

/**
 * 登录异常
 * @author CZH
 */
@SuppressWarnings("serial")
public class LoginException extends RuntimeException {
	private int key;
	private String message;

	public LoginException() {
	}

	public LoginException(String message) {
		this.message = message;
	}

	public LoginException(int key, String message) {
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
