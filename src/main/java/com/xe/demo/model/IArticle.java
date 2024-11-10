package com.xe.demo.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 文章信息
 * @author CZH
 */
@Table(name = "i_article")
public class IArticle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	/**用户id*/
	private Integer uid;
	/**标题*/
	private String title;
	/**标题颜色*/
	private String color;
	/**封面*/
	private String cover;
	/**内容*/
	private String content;
	/**发表时间*/
	private String posttime;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getUid() {
		return uid;
	}
	public void setUid(Integer uid) {
		this.uid = uid;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getCover() {
		return cover;
	}
	public void setCover(String cover) {
		this.cover = cover;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getPosttime() {
		return posttime;
	}
	public void setPosttime(String posttime) {
		this.posttime = posttime;
	}
	
}
