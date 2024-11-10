package com.xe.demo.common.exception;

/**
 * 请求频繁异常
 * @author CZH
 */
@SuppressWarnings("serial")
public class MalciousException extends RuntimeException {
	private int key;
	private String message;

	public MalciousException() {
	}

	public MalciousException(String message) {
		this.message = message;
	}

	public MalciousException(int key, String message) {
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
