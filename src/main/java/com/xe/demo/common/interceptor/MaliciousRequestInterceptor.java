package com.xe.demo.common.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.xe.demo.common.Constant;
import com.xe.demo.common.exception.MalciousException;
import com.xe.demo.common.support.DataCache;
import com.xe.demo.common.utils.IPUtil;

/**
 * 恶意请求拦截器
 * @author CZH
 */
public class MaliciousRequestInterceptor extends HandlerInterceptorAdapter {
	@Autowired
	private DataCache dataCache;
	private static final Logger logger = LoggerFactory.getLogger(MaliciousRequestInterceptor.class);
	
	private final static boolean allRequest = false; // 拦截所有请求,否则拦截相同请求
	private final static long minRequestIntervalTime = 1000; // 允许的最小请求间隔(1秒)
	private final static int maxMaliciousTimes = 5; // 允许的最大恶意请求次数(5次)

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		//启动支持@Autowired注解
		WebApplicationContextUtils.getRequiredWebApplicationContext(request.getServletContext()).getAutowireCapableBeanFactory().autowireBean(this);
		
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Methods", "POST,GET,PUT,OPTIONS,DELETE");
		response.setHeader("Access-Control-Allow-Headers", "x-requested-with,Access-Control-Allow-Origin,EX-SysAuthToken,EX-JSESSIONID");

		//同一个IP
		String requestIp = IPUtil.getIpAdd(request);
		String url = request.getServletPath();
		//上次请求地址
		String preRequestPath = dataCache.getString(requestIp + Constant.PRE_REQUEST_PATH);
		//上次请求时间
		Long preRequestTime = dataCache.getLong(requestIp + Constant.PRE_REQUEST_TIME);
		//当前时间
		long nowtime = System.currentTimeMillis();
		if (preRequestPath != null && preRequestTime != null) { // 过滤频繁操作
			if ((url.equals(preRequestPath) || allRequest) && nowtime - preRequestTime < minRequestIntervalTime) {
				//非法请求次数
				Integer malRequestTimes = dataCache.getInteger(requestIp + Constant.MAL_REQUEST_TIMES);
				if (malRequestTimes == null) {
					malRequestTimes = 1;
				} else {
					malRequestTimes ++;
				}
				dataCache.setValue(requestIp + Constant.MAL_REQUEST_TIMES, malRequestTimes);
				if (malRequestTimes > maxMaliciousTimes) {
					logger.warn("频繁请求 : {}", url);
					throw new MalciousException(207, "您的请求过于频繁");
				}
			} else {
				dataCache.setValue(requestIp + Constant.MAL_REQUEST_TIMES, 0);
			}
		}
		dataCache.setValue(requestIp + Constant.PRE_REQUEST_PATH, url);
		dataCache.setValue(requestIp + Constant.PRE_REQUEST_TIME, nowtime);
		return super.preHandle(request, response, handler);
	}
}
