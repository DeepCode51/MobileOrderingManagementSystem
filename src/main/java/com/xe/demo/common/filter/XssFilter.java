package com.xe.demo.common.filter;

import java.io.IOException;
import java.util.Enumeration;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 非法字符过滤器（防SQL注入，防XSS漏洞）
 * @author CZH
 */
public class XssFilter implements Filter {
	private static final Logger logger = LoggerFactory.getLogger(XssFilter.class);

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain filter) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;
		String pathInfo = req.getPathInfo() == null ? "" : req.getPathInfo();
		String url = req.getServletPath() + pathInfo;

		// 获取请求所有参数，校验防止SQL注入，防止XSS漏洞
//		Enumeration<?> params = req.getParameterNames();
//		String paramName = null;
//		String paramVale = null;
//		while (params.hasMoreElements()) {
//			paramName = (String) params.nextElement();
//			paramVale = xssEncode(req.getParameter(paramName));
//			// 校验是否存在SQL注入信息
//			if (checkSQLInject(paramVale, url)) {
//				res.setContentType("text/html; charset=UTF-8");
//				res.setStatus(200);
//				IOUtils.write("{\"retcode\": \"0\",\"retmsg\": \"参数不能包含非法字符\"}", res.getWriter());
//				return;
//			}
//		}
//		// 获取请求头参数，校验防止SQL注入，防止XSS漏洞
//		Enumeration<?> headers = req.getHeaderNames();
//		while (headers.hasMoreElements()) {
//			paramName = (String) headers.nextElement();
//			paramVale = xssEncode(req.getParameter(paramName));
//			// 校验是否存在SQL注入信息
//			if (checkSQLInject(paramVale, url)) {
//				res.setContentType("text/html; charset=UTF-8");
//				res.setStatus(200);
//				IOUtils.write("{\"retcode\": \"0\",\"retmsg\": \"参数不能包含非法字符\"}", res.getWriter());
//				return;
//			}
//		}

		filter.doFilter(req, res);
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
	}

	@Override
	public void destroy() {
	}

	/**
	 * 将容易引起xss漏洞的半角字符直接替换成全角字符
	 * @param str
	 * @return
	 */
	private String xssEncode(String str) {
		if (StringUtils.isEmpty(str)) {
			return str;
		}
		StringBuilder sb = new StringBuilder(str.length() + 16);
		for (int i = 0; i < str.length(); i++) {
			char c = str.charAt(i);
			switch (c) {
			case '>':
				sb.append('＞');// 全角大于号
				break;
			case '<':
				sb.append('＜');// 全角小于号
				break;
			case '\'':
				sb.append('‘');// 全角单引号
				break;
			case '\"':
				sb.append('“');// 全角双引号
				break;
			case '&':
				sb.append('＆');// 全角
				break;
			case '\\':
				sb.append('＼');// 全角斜线
				break;
			case '#':
				sb.append('＃');// 全角井号
				break;
			case '(':
				sb.append('（');//
				break;
			case ')':
				sb.append('）');//
				break;
			default:
				sb.append(c);
				break;
			}
		}
		return sb.toString();
	}

	/**
	 * 
	 * 检查是否存在非法字符，防止SQL注入
	 * @param str 被检查的字符串
	 * @return ture-字符串中存在非法字符，false-不存在非法字符
	 */
	public static boolean checkSQLInject(String str, String url) {
		if (StringUtils.isEmpty(str)) {
			return false;// 如果传入空串则认为不存在非法字符
		}

		// 判断黑名单
		String[] inj_stra = { "script", "mid", "master", "truncate", "insert", "select", "delete", "update", "declare",
				"iframe", "'", "onreadystatechange", "alert", "atestu", "xss", ";", "'", "\"", "<", ">", "(", ")", ",",
				"\\", "svg", "confirm", "prompt", "onload", "onmouseover", "onfocus", "onerror" };

		str = str.toLowerCase(); // sql不区分大小写

		for (int i = 0; i < inj_stra.length; i++) {
			if (str.indexOf(inj_stra[i]) >= 0) {
				logger.info("xss防攻击拦截url:" + url + "，原因：特殊字符，传入str=" + str + ",包含特殊字符：" + inj_stra[i]);
				return true;
			}
		}
		return false;
	}
}
