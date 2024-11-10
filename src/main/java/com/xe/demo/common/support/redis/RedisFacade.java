//package com.xe.demo.common.support.redis;
//
//import java.util.concurrent.TimeUnit;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.redis.core.RedisTemplate;
//import org.springframework.stereotype.Component;
//
//import com.alibaba.fastjson.JSON;
//
///**
// * redis操作类
// * @author CZH
// */
//@Component
//public class RedisFacade {
//
//	private RedisFacade() {
//
//	}
//
//	@Autowired
//	private RedisTemplate<String, Object> redisTemplate;
//	
//	/**
//	 * 设置缓存
//	 * @param key
//	 * @param value
//	 * @param minutes
//	 */
//	public void setValue(String key, Object value, int minutes){
//		String str = null;
//		if(!(value instanceof String)){//非String类型的转json格式的String字符串
//			str = JSON.toJSONString(value);
//		}
//		if(0 == minutes){
//			redisTemplate.boundValueOps(key).set(str);
//		}else{//设置有时间限制的缓存
//			redisTemplate.boundValueOps(key).set(str, minutes, TimeUnit.MINUTES);
//		}
//	}
//	
//	/**
//	 * 获取缓存的值
//	 * @param key
//	 * @return
//	 */
//	public String getValue(String key){
//		Object value = redisTemplate.boundValueOps(key).get();
//		if(null != value){
//			return value.toString();
//		}
//		return null;
//	}
//	
//	/**
//	 * 获取缓存的实体
//	 * @param key
//	 * @param clazz
//	 * @return
//	 */
//	public <T> T getValue(String key, T t){
//		return JSON.parseObject(getValue(key), t.getClass());
//	}
//
//}
