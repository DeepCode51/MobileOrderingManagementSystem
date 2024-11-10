//package com.xe.demo.common.aspect;
//
//import javax.servlet.http.HttpServletRequest;
//
//import org.aspectj.lang.ProceedingJoinPoint;
//import org.aspectj.lang.annotation.Around;
//import org.aspectj.lang.annotation.Aspect;
//import org.aspectj.lang.annotation.Pointcut;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.context.request.RequestContextHolder;
//import org.springframework.web.context.request.ServletRequestAttributes;;
//
//@Aspect // 定义一个切面
//@Configuration
//public class LogRecordAspect {
//	private static final Logger logger = LoggerFactory.getLogger(LogRecordAspect.class);
//
//	// 定义切点Pointcut
//	@Pointcut("execution(* com.xe.demo.controller.*Controller.*(..))")
//	public void excudeService() {
//	}
//
//	@Around("excudeService()")
//	public Object doAround(ProceedingJoinPoint pjp) throws Throwable {
//		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
//		String url = request.getRequestURL().toString();
//		String params = request.getQueryString();
//		logger.info("请求开始: url={}, params={}", url, params);
//
//		// result的值就是被拦截方法的返回值
//		Object result = pjp.proceed();
//		logger.info("请求结束,返回结果: " + result);
//		return result;
//	}
//}
