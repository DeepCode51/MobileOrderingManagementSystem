//package com.xe.demo.common.support.redis;
//
//import java.util.HashMap;
//import java.util.Map;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.cache.CacheManager;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.redis.cache.RedisCacheManager;
//import org.springframework.data.redis.connection.RedisConnectionFactory;
//import org.springframework.data.redis.core.RedisTemplate;
//import org.springframework.data.redis.serializer.StringRedisSerializer;
//
///**
// * redis配置
// * @author CZH
// */
//@Configuration
//public class RedisConfiguration {
//	
//	@Value("${redis.defaultExpiration}")
//	private long defaultExpiration;
//	@Bean
//	public CacheManager cacheManager(RedisTemplate<String, Object> redisTemplate) {
//		RedisCacheManager cacheManager = new RedisCacheManager(redisTemplate);
//		cacheManager.setDefaultExpiration(defaultExpiration);
//		Map<String, Long> expires = new HashMap<String, Long>();
//		cacheManager.setExpires(expires);
//		return cacheManager;
//	}
//
//	@Bean
//	public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory factory) {
//		RedisTemplate<String, Object> template = new RedisTemplate<String, Object>();
//		template.setConnectionFactory(factory);
//		template.setKeySerializer(new StringRedisSerializer());
//		template.setValueSerializer(new RedisObjectSerializer());
//		return template;
//	}
//
////	@Bean
////	public RedisTemplate<?, ?> redisTemplate(RedisConnectionFactory factory) {
////
////		final StringRedisTemplate template = new StringRedisTemplate(factory);
////
////		Jackson2JsonRedisSerializer<Object> jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer<Object>(Object.class);
////		ObjectMapper oMapper = new ObjectMapper();
////
////		oMapper.setVisibility(PropertyAccessor.ALL, Visibility.ANY);
////
////		oMapper.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
////
////		jackson2JsonRedisSerializer.setObjectMapper(oMapper);
////
////		template.setValueSerializer(jackson2JsonRedisSerializer);
////
////		template.afterPropertiesSet();
////
////		return template;
////
////	}
//}
