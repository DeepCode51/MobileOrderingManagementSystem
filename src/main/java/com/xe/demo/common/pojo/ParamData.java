package com.xe.demo.common.pojo;

import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.xe.demo.common.utils.IPUtil;

/**
 * 封装请求参数
 * @author gilbert
 */
@SuppressWarnings("rawtypes")
public class ParamData extends HashMap implements Map {

	private static final long serialVersionUID = 1L;

	/**参数封装*/
	Map<Object, Object> map = null;
	HttpServletRequest request;

	public ParamData(Map<Object, Object> map) {
		this.map = map;
	}

	public ParamData() {
		this.request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
		Map<String, String[]> properties = request.getParameterMap();
		Map<Object, Object> returnMap = new HashMap<Object, Object>();
		Iterator entries = properties.entrySet().iterator();
		Map.Entry entry;
		String name = "";
		String value = "";
		while (entries.hasNext()) {
			entry = (Map.Entry) entries.next();
			name = (String) entry.getKey();
			Object valueObj = entry.getValue();
			if (null == valueObj) {
				value = "";
			} else if (valueObj instanceof String[]) {
				String[] values = (String[]) valueObj;
				for (int i = 0; i < values.length; i++) {
					value = values[i] + ",";
				}
				value = value.substring(0, value.length() - 1);
			} else {
				value = valueObj.toString();
			}
			returnMap.put(name, value);
		}
		// 登录IP
		returnMap.put("loginIp", IPUtil.getIpAdd(request));
		map = returnMap;
	}

	@Override
	public Object get(Object key) {
		Object obj = null;
		if (map.get(key) instanceof Object[]) {
			Object[] arr = (Object[]) map.get(key);
			obj = request == null ? arr : (request.getParameter((String) key) == null ? arr : arr[0]);
		} else {
			obj = map.get(key);
		}
		return obj;
	}

	public String getString(Object key) {
		Object value = get(key);
		String str = null;
		if (null != value) {
			str = String.valueOf(get(key));
		}
		return str;
	}

	public int getInt(Object key) {
		int num = 0;
		String str = getString(key);
		if (null != str) {
			num = Integer.parseInt(str);
		}
		return num;
	}

	public double getDouble(Object key) {
		double num = 0;
		String str = getString(key);
		if (null != str) {
			num = Double.parseDouble(str);
		}
		return num;
	}

	@Override
	public Object put(Object key, Object value) {
		return map.put(key, value);
	}

	@Override
	public Object remove(Object key) {
		return map.remove(key);
	}

	@Override
	public void clear() {
		map.clear();
	}

	@Override
	public boolean containsKey(Object key) {
		return map.containsKey(key);
	}

	@Override
	public boolean containsValue(Object value) {
		return map.containsValue(value);
	}

	@Override
	public Set entrySet() {
		return map.entrySet();
	}

	@Override
	public boolean isEmpty() {
		return map.isEmpty();
	}

	@Override
	public Set keySet() {
		return map.keySet();
	}

	@Override
	@SuppressWarnings("unchecked")
	public void putAll(Map t) {
		map.putAll(t);
	}

	@Override
	public int size() {
		return map.size();
	}

	@Override
	public Collection values() {
		return map.values();
	}

}
