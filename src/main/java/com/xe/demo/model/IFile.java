package com.xe.demo.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 文件信息表
 * @author CZH
 */
@Table(name = "i_file")
public class IFile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	/**文件原名*/
	private String filename;
	/**文件名称*/
	private String nowname;
	/**存放位置*/
	private String savepath;
	/**访问地址*/
	private String url;
	/**文件类型*/
	private String filetype;
	/**文件大小*/
	private long filesize;
	/**添加时间*/
	private String addtime;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	public String getNowname() {
		return nowname;
	}
	public void setNowname(String nowname) {
		this.nowname = nowname;
	}
	public String getSavepath() {
		return savepath;
	}
	public void setSavepath(String savepath) {
		this.savepath = savepath;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getFiletype() {
		return filetype;
	}
	public void setFiletype(String filetype) {
		this.filetype = filetype;
	}
	public long getFilesize() {
		return filesize;
	}
	public void setFilesize(long filesize) {
		this.filesize = filesize;
	}
	public String getAddtime() {
		return addtime;
	}
	public void setAddtime(String addtime) {
		this.addtime = addtime;
	}
	
}
