package com.xe.demo.common.utils;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.UUID;

import org.apache.commons.lang3.StringUtils;

import com.xe.demo.common.pojo.AjaxResult;
import com.xe.demo.common.pojo.PageAjax;
import com.xe.demo.common.pojo.ParamData;

/**
 * 参数工具
 * 
 * @author gilbert
 * @2017年11月11日
 */
public class AppUtil {

	/**
	 * 检验参数
	 * @param key
	 * @param data
	 * @return
	 */
	public static String checkParam(ParamData params, String[] args) {
		String result = null;
		if(null != args && args.length > 0){
			int size = args.length;
			for (int i = 0; i < size; i++) {
				String param = args[i];
				if (!params.containsKey(param)) {// 检验参数是否传递
					result = "缺少参数:" + param;
					break;
				}
				if (null == params.get(param)) {// 检验参数是否为空
					result = "参数" + param + "不能为空";
					break;
				}
			}
		}
		return result;
	}

	/**
	 * 封装接口返回数据
	 * @param result
	 * @return
	 */
	public static AjaxResult returnObj(String result) {
		if (StringUtils.isEmpty(result)) {
			return new AjaxResult();
		}
		return new AjaxResult(result);
	}

	/**
	 * 封装带数据的返回
	 * @param result
	 * @param data
	 * @return
	 */
	public static AjaxResult returnObj(String result, Object data) {
		if (StringUtils.isEmpty(result)) {
			return new AjaxResult(data);
		}
		return new AjaxResult(result);
	}

	/**
	 * 封装带集合的返回
	 * @param result
	 * @param T
	 * @return
	 */
	public static <T> AjaxResult returnList(String result, List<T> list) {
		if (StringUtils.isEmpty(result)) {
			return returnObj(result, list);
		}
		list = new ArrayList<T>();
		return new AjaxResult(0, result, list);
	}

	/**
	 * 封装分页查询返回
	 * @param result
	 * @param list
	 * @return
	 */
	public static <T> AjaxResult returnPage(String result, List<T> list) {
		return returnObj(result, new PageAjax<T>(list));
	}
	
	/**
	 * 封装分页查询返回
	 * @param list
	 * @return
	 */
	public static <T> PageAjax<T> returnPage(List<T> list){
		return new PageAjax<T>(list);
	}

	/**
	 * 比较两个实体类属性值是否相等
	 * @param source
	 * @param target
	 * @return
	 * @throws Exception
	 */
	public static boolean entityIsEquals(Object source, Object target) throws Exception {
		if (source == null || target == null) {
			return false;
		}
		boolean ret = true;
		Class<?> srcClass = source.getClass();
		Field[] fields = srcClass.getDeclaredFields();
		String nameKey = null;
		String srcValue = null;
		String tarValue = null;
		for (Field field : fields) {
			nameKey = field.getName();
			srcValue = getClassValue(source, nameKey) == null ? "" : getClassValue(source, nameKey).toString();
			tarValue = getClassValue(target, nameKey) == null ? "" : getClassValue(target, nameKey).toString();
			if (!srcValue.equals(tarValue)) {
				ret = false;
				break;
			}
		}
		return ret;
	}

	/**
	 * 根据字段名称取值
	 * @param obj
	 * @param fieldName
	 * @return
	 * @throws Exception
	 */
	private static Object getClassValue(Object obj, String fieldName) throws Exception {
		@SuppressWarnings("rawtypes")
		Class beanClass = obj.getClass();
		Method[] ms = beanClass.getMethods();
		for(Method method: ms){
			// 非get方法不取
			if(method.getName().startsWith("get")){
				Object objValue = method.invoke(obj, new Object[] {});
				if(null != objValue){
					if(method.getName().toUpperCase().equals(fieldName.toUpperCase()) || method.getName().substring(3).toUpperCase().equals(fieldName.toUpperCase())){
						return objValue;
					}
				}
			}
		}
		return null;
	}

	/**
	 * 生成N位随机数
	 * @param length
	 * @return
	 */
	public static String getRandomString(int length) {
		Random random = new Random();
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < length; ++i) {
			int number = random.nextInt(3);
			long result = 0;

			switch (number) {
			case 0:
				result = Math.round(Math.random() * 25 + 65);
				sb.append(String.valueOf((char) result));
				break;
			case 1:
				result = Math.round(Math.random() * 25 + 97);
				sb.append(String.valueOf((char) result));
				break;
			case 2:
				sb.append(String.valueOf(new Random().nextInt(10)));
				break;
			}
		}
		return sb.toString();
	}

	/**
	 * 生成N位纯数字验证码
	 * @return
	 */
	public static String getVerificationCode(int n) {
		final Random random = new Random();
		String verificationCode = "";
		for (int i = 0; i < n; i++) {
			verificationCode += random.nextInt(10);
		}
		return verificationCode;
	}

	/**
	 * 生产注单号
	 * @return
	 */
	public static String getOrdercode() {
		String time = String.valueOf(System.currentTimeMillis());
		return time + time.subSequence(2, 6) + getVerificationCode(1);
	}

	/**
	 * 生成32位UUID
	 * @return
	 */
	public static String getUuid() {
		return UUID.randomUUID().toString().replace("-", "");
	}

	/** 
	 * 随机ID生成器，由数字、小写字母和大写字母组成 
	 * @param size 
	 * @return 
	 */
	public static String getUUID(int size) {
		final char[] digits = { '0', '1', '2', '3', '4', '5', '6', '7', '8',
				'9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
				'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
				'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
				'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',
				'Z' };
		Random random = new Random();
		char[] cs = new char[size];
		for (int i = 0; i < cs.length; i++) {
			cs[i] = digits[random.nextInt(digits.length)];
		}
		return new String(cs);
	}
	
	/**
	 * 相除
	 * @param num1
	 * @param num2
	 * @return
	 */
	public static String divide(Object num1, Object num2){
		Float num = Float.parseFloat(num1.toString());
		BigDecimal b1 = new BigDecimal(num);
		BigDecimal b2 = new BigDecimal(num2.toString());
		Double result = b1.divide(b2, 2, RoundingMode.HALF_UP).doubleValue();
		return new DecimalFormat("#,##0.00").format(result);
	}
	
	public static String formatValue(double source){
		return new DecimalFormat("###0.00").format(source);
	}
	
	public static Double formatDouble(double source){
		return Double.parseDouble(formatValue(source));
	}

	public static void main(String[] args) {
		for(int i = 1; i <= 5; i++){
			System.out.println(getUuid());
		}
//		System.out.println(getUUID(5));
		// Set<String> sets = new HashSet<String>();
		// for(int i = 0; i < 1000000; i ++){
		// sets.add(getRandomString(20));
		// }
		// System.out.println(sets.size());
		// System.out.println(getRandomString(20));
//		AuthOperation op1 = new AuthOperation();
//		op1.setOpCode("002");
//		op1.setOpid(1);
//
//		AuthOperation op2 = new AuthOperation();
//		op2.setOpCode("002");
//		op2.setOpid(1);
//		try {
//			System.out.println(entityIsEquals(op1, op2));
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		System.out.println(divide(10, "0.75"));
	}

}
