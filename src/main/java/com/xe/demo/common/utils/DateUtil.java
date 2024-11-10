package com.xe.demo.common.utils;

import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.Map;
import java.util.TimeZone;

import org.apache.commons.lang3.StringUtils;

/**
 * 
 * Description:日期时间操作的工具类
 * 
 * @author CZH
 */
public class DateUtil {
	/** 日期格式(yyyy-MM-dd) */
	public static final String yyyy_MM_dd_EN = "yyyy-MM-dd";
	/** 日期格式(yyyy/MM/dd) */
	public static final String yyyy_MM_dd_decline = "yyyy/MM/dd";
	/** 日期格式(yyyyMMdd) */
	public static final String yyyyMMdd_EN = "yyyyMMdd";
	/** 日期格式(yyyy-MM) */
	public static final String yyyy_MM_EN = "yyyy-MM";
	/** 日期格式(yyyyMM) */
	public static final String yyyyMM_EN = "yyyyMM";
	/** 日期格式(yyyy-MM-dd HH:mm:ss) */
	public static final String yyyy_MM_dd_HH_mm_ss_EN = "yyyy-MM-dd HH:mm:ss";
	/** 日期格式(yyyy-MM-dd HH:mm:ss.S) */
	public static final String yyyy_MM_dd_HH_mm_ss_S_EN = "yyyy-MM-dd HH:mm:ss.S";
	/** 日期格式(yyyyMMddHHmmss) */
	public static final String yyyyMMddHHmmss_EN = "yyyyMMddHHmmss";
	/** 日期格式(yyyy年MM月dd日) */
	public static final String yyyy_MM_dd_CN = "yyyy年MM月dd日";
	/** 日期格式(yyyy年MM月dd日HH时mm分ss秒) */
	public static final String yyyy_MM_dd_HH_mm_ss_CN = "yyyy年MM月dd日HH时mm分ss秒";
	/** 日期格式(yyyy年MM月dd日HH时mm分) */
	public static final String yyyy_MM_dd_HH_mm_CN = "yyyy年MM月dd日HH时mm分";
	/** 北京boss订购接口报文头日期格式 */
	public static final String BJBOSS_DATE = "yyyy-MM-dd'T'HH:mm:ss'Z'";
	/** 日期格式(HH:mm:ss) */
	public static final String HH_mm_ss_EN = "HH:mm:ss";
	/** DateFormat缓存 */
	private static Map<String, DateFormat> dateFormatMap = new HashMap<String, DateFormat>();

	/**
	 * 获取DateFormat
	 * @param dateTimeStr
	 * @param formatStr
	 * @return
	 */
	public static DateFormat getDateFormat(String formatStr) {
		DateFormat df = dateFormatMap.get(formatStr);
		if (df == null) {
			df = new SimpleDateFormat(formatStr);
			dateFormatMap.put(formatStr, df);
		}
		return df;
	}

	public static Date getDate() {
		return Calendar.getInstance().getTime();
	}

	/**
	 * 按照默认formatStr的格式，转化dateTimeStr为Date类型 dateTimeStr必须是formatStr的形式
	 * @param dateTimeStr
	 * @param formatStr
	 * @return
	 */
	public static Date getDate(String dateTimeStr, String formatStr) {
		try {
			if (dateTimeStr == null || dateTimeStr.equals("")) {
				return null;
			}
			DateFormat sdf = DateUtil.getDateFormat(formatStr);
			return sdf.parse(dateTimeStr);
		} catch (ParseException e) {
			throw new RuntimeException(e);
		}
	}

	/**
	 * 转化dateTimeStr为Date类型
	 * @param dateTimeStr
	 * @param formatStr
	 * @return
	 */
	public static Date convertDate(String dateTimeStr) {
		try {
			if (dateTimeStr == null || dateTimeStr.equals("")) {
				return null;
			}
			DateFormat sdf = DateUtil.getDateFormat(yyyy_MM_dd_EN);
			Date d = sdf.parse(dateTimeStr);
			return d;
		} catch (ParseException e) {
			throw new RuntimeException(e);
		}
	}

	/**
	 * 按照默认显示日期时间的格式"yyyy-MM-dd"，转化dateTimeStr为Date类型
	 * dateTimeStr必须是"yyyy-MM-dd"的形式
	 * @param dateTimeStr
	 * @return
	 */
	public static Date getDate(String dateTimeStr) {
		return getDate(dateTimeStr, yyyy_MM_dd_EN);
	}

	/**
	 * 将YYYYMMDD转换成Date日期
	 * @param date
	 * @return
	 * @throws BusinessException
	 */
	public static Date transferDate(String date) throws Exception {
		if (date == null || date.length() < 1)
			return null;

		if (date.length() != 8)
			throw new Exception("日期格式错误");
		String con = "-";

		String yyyy = date.substring(0, 4);
		String mm = date.substring(4, 6);
		String dd = date.substring(6, 8);

		int month = Integer.parseInt(mm);
		int day = Integer.parseInt(dd);
		if (month < 1 || month > 12 || day < 1 || day > 31)
			throw new Exception("日期格式错误");

		String str = yyyy + con + mm + con + dd;
		return DateUtil.getDate(str, DateUtil.yyyy_MM_dd_EN);
	}

	/**
	 * 将Date转换成字符串“yyyy-mm-dd hh:mm:ss”的字符串
	 * @param date
	 * @return
	 */
	public static String dateToDateString(Date date) {
		return dateToDateString(date, yyyy_MM_dd_HH_mm_ss_EN);
	}

	/**
	 * 将Date转换成字符串“yyyymmddhhmmss”的字符串
	 * @param date
	 * @return
	 */
	public static String dateToDateFullString(Date date) {
		if (null == date)
			return null;
		else
			return dateToDateString(date, yyyyMMddHHmmss_EN);
	}

	/**
	 * 将Date转换成formatStr格式的字符串
	 * @param date
	 * @param formatStr
	 * @return
	 */
	public static String dateToDateString(Date date, String formatStr) {
		DateFormat df = getDateFormat(formatStr);
		return df.format(date);
	}

	/**
	 * 将String转换成formatStr格式的字符串
	 * @param dateTime
	 * @param formatStr1
	 * @param formatStr2
	 * @return
	 */
	public static String stringToDateString(String date, String formatStr1, String formatStr2) {
		Date d = getDate(date, formatStr1);
		DateFormat df = getDateFormat(formatStr2);
		return df.format(d);
	}

	/**
	 * 获取当前日期yyyy-MM-dd的形式
	 * @return
	 */
	public static String getCurDate() {
		return dateToDateString(new Date(), yyyy_MM_dd_EN);
	}

	/**
	 * 获取当前日期
	 * @return
	 */
	public static String getCurDate(String formatStr) {
		return dateToDateString(new Date(), formatStr);
	}

	/**
	 * 获取当前日期yyyy年MM月dd日的形式
	 * @return
	 */
	public static String getCurCNDate() {
		return dateToDateString(new Date(), yyyy_MM_dd_CN);
	}

	/**
	 * 获取当前日期时间yyyy-MM-dd HH:mm:ss的形式
	 * @return
	 */
	public static String getCurDateTime() {
		return dateToDateString(new Date(), yyyy_MM_dd_HH_mm_ss_EN);
	}

	/**
	 * 获取当前日期时间yyyy年MM月dd日HH时mm分ss秒的形式
	 * @return
	 */
	public static String getCurZhCNDateTime() {
		return dateToDateString(new Date(), yyyy_MM_dd_HH_mm_ss_CN);
	}

	/**
	 * 比较两个"yyyy-MM-dd HH:mm:ss"格式的日期，之间相差多少毫秒,time2-time1
	 * @param time1
	 * @param time2
	 * @return
	 */
	public static long compareDateStr(String time1, String time2) {
		Date d1 = getDate(time1);
		Date d2 = getDate(time2);
		return d2.getTime() - d1.getTime();
	}
	
	/**
	 * 比较任意格式时间相差毫秒数
	 * @param time1
	 * @param time2
	 * @param format
	 * @return
	 */
	public static long compareDateStr(String time1, String time2, String format){
		Date d1 = getDate(time1, format);
		Date d2 = getDate(time2, format);
		return d2.getTime() - d1.getTime();
	}
	
	/**
	 * 比较起始时间与当前时间相差毫秒数
	 * @param time
	 * @param format
	 * @return
	 */
	public static long compareDateNow(String time, String format){
		Date date = getDate(time, format);
		return new Date().getTime() - date.getTime();
	}

	/**
	 * 比较两个"yyyy-MM-dd HH:mm:ss"格式的日期，之间相差多少毫秒,time2-time1
	 * @param time1
	 * @param time2
	 * @return
	 */
	public static long compareDateStr(Date time1, Date time2) {
		return time2.getTime() - time1.getTime();
	}

	/**
	 * nows时间大于date时间 为true
	 * @param nows
	 * @param date
	 * @return
	 */
	public static boolean isTimeBefor(Date nows, Date date) {
		long hous = nows.getTime() - date.getTime();
		if (hous > 0) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 将小时数换算成返回以毫秒为单位的时间
	 * @param hours
	 * @return
	 */
	public static long getMicroSec(BigDecimal hours) {
		BigDecimal bd;
		bd = hours.multiply(new BigDecimal(3600 * 1000));
		return bd.longValue();
	}

	/**
	 * 获取当前日期years年后的一个(formatStr)的字符串
	 * @param months
	 * @param formatStr
	 * @return
	 */
	public static String getDateStringOfYear(int years, String formatStr) {
		Calendar now = Calendar.getInstance(TimeZone.getDefault());
		now.setTime(new Date());
		now.add(Calendar.YEAR, years);
		return dateToDateString(now.getTime(), formatStr);
	}

	/**
	 * 获取当前日期mon月后的一个(formatStr)的字符串
	 * @param months
	 * @param formatStr
	 * @return
	 */
	public static String getDateStringOfMon(int months, String formatStr) {
		Calendar now = Calendar.getInstance(TimeZone.getDefault());
		now.setTime(new Date());
		now.add(Calendar.MONTH, months);
		return dateToDateString(now.getTime(), formatStr);
	}

	/**
	 * 获取当前日期days天后的一个(formatStr)的字符串
	 * @param days
	 * @param formatStr
	 * @return
	 */
	public static String getDateStringOfDay(int days, String formatStr) {
		Calendar now = Calendar.getInstance(TimeZone.getDefault());
		now.setTime(new Date());
		now.add(Calendar.DATE, days);
		return dateToDateString(now.getTime(), formatStr);
	}
	
	/**
	 * 判断日期是否是今天
	 * @param date
	 * @return
	 */
	public static int theDateIsToday(String date, String format){
		String theDate = stringToDateString(date, format, yyyyMMdd_EN);
		String today = getDateStringOfDay(0, yyyyMMdd_EN);
		if(theDate.equals(today)){
			return 1;
		}else{
			return 0;
		}
	}

	/**
	 * 获取当前日期hours小时后的一个(formatStr)的字符串
	 * @param hours
	 * @param formatStr
	 * @return
	 */
	public static String getDateStringOfHour(int hours, String formatStr) {
		Calendar now = Calendar.getInstance(TimeZone.getDefault());
		now.setTime(new Date());
		now.add(Calendar.HOUR_OF_DAY, hours);
		return dateToDateString(now.getTime(), formatStr);
	}

	/**
	 * 获取指定日期mon月后的一个(formatStr)的字符串
	 * @param date
	 * @param mins
	 * @param formatStr
	 * @return
	 */
	public static String getDateOfMon(String date, int mon, String formatStr) {
		Calendar now = Calendar.getInstance(TimeZone.getDefault());
		now.setTime(DateUtil.getDate(date, formatStr));
		now.add(Calendar.MONTH, mon);
		return dateToDateString(now.getTime(), formatStr);
	}

	/**
	 * 获取指定日期day天后的一个(formatStr)的字符串
	 * @param date
	 * @param mins
	 * @param formatStr
	 * @return
	 */
	public static String getDateOfDay(String date, int day, String formatStr) {
		Calendar now = Calendar.getInstance(TimeZone.getDefault());
		now.setTime(DateUtil.getDate(date, formatStr));
		now.add(Calendar.DATE, day);
		return dateToDateString(now.getTime(), formatStr);
	}
	
	public static Date getDate(Date beginDate,int ds){
		if(ds == 0) return new Date();
		try {
			SimpleDateFormat dft = new SimpleDateFormat("yyyy-MM-dd");
			Calendar date = Calendar.getInstance();
			date.setTime(beginDate);
			date.set(Calendar.DATE, date.get(Calendar.DATE) - ds);
			Date endDate = dft.parse(dft.format(date.getTime()));
			return endDate;
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return new Date();
	}

	public static String getAfterNDays(Date date, int n, String formateStr) {
		SimpleDateFormat sdf = new SimpleDateFormat(formateStr);
		Calendar calendar = new GregorianCalendar();
		calendar.setTime(date);
		calendar.add(Calendar.DATE, n);
		return sdf.format(calendar.getTime());
	}

	/**
	 * 获取指定日期mins分钟后的一个(formatStr)的字符串
	 * @param date
	 * @param mins
	 * @param formatStr
	 * @return
	 */
	public static String getDateOfMin(String date, int mins, String formatStr) {
		Calendar now = Calendar.getInstance(TimeZone.getDefault());
		now.setTime(DateUtil.getDate(date, formatStr));
		now.add(Calendar.SECOND, mins * 60);
		return dateToDateString(now.getTime(), formatStr);
	}

	/**
	 * 获取指定日期mins分钟后的一个日期
	 * @param date
	 * @param mins
	 * @param formatStr
	 * @return
	 */
	public static Date getDateOfMin(Date date, int mins) {
		Calendar now = Calendar.getInstance(TimeZone.getDefault());
		now.setTime(date);
		now.add(Calendar.SECOND, mins * 60);
		return now.getTime();
	}

	/**
	 * 获取当前日期mins分钟后的一个(formatStr)的字符串
	 * @param mins
	 * @param formatStr
	 * @return
	 */
	public static String getDateStringOfMin(int mins, String formatStr) {
		Calendar now = Calendar.getInstance(TimeZone.getDefault());
		now.setTime(new Date());
		now.add(Calendar.MINUTE, mins);
		return dateToDateString(now.getTime(), formatStr);
	}

	/**
	 * 获取当前日期mins分钟后的一个日期
	 * @param mins
	 * @return
	 */
	public static Date getDateOfMin(int mins) {
		Calendar now = Calendar.getInstance(TimeZone.getDefault());
		now.setTime(new Date());
		now.add(Calendar.MINUTE, mins);
		return now.getTime();
	}

	/**
	 * 获取当前日期sec秒后的一个(formatStr)的字符串
	 * @param sec
	 * @param formatStr
	 * @return
	 */
	public static String getDateStringOfSec(int sec, String formatStr) {
		Calendar now = Calendar.getInstance(TimeZone.getDefault());
		now.setTime(new Date());
		now.add(Calendar.SECOND, sec);
		return dateToDateString(now.getTime(), formatStr);
	}

	/**
	 * 获得指定日期月份的天数
	 * @return
	 */
	public static int getMonthDay(Date date) {
		Calendar c = Calendar.getInstance();
		c.setTime(date);
		return c.getActualMaximum(Calendar.DAY_OF_MONTH);

	}

	/**
	 * 获得系统当前月份的天数
	 * @return
	 */
	public static int getCurentMonthDay() {
		Date date = Calendar.getInstance().getTime();
		return getMonthDay(date);
	}

	/**
	 * 获得指定日期月份的天数 yyyy-mm-dd
	 * @return
	 */
	public static int getMonthDay(String date) {
		Date strDate = getDate(date, yyyy_MM_dd_EN);
		return getMonthDay(strDate);
	}

	/**
	 * 获取19xx,20xx形式的年
	 * @param d
	 * @return
	 */
	public static int getYear(Date d) {
		Calendar now = Calendar.getInstance(TimeZone.getDefault());
		now.setTime(d);
		return now.get(Calendar.YEAR);
	}

	/**
	 * 获取月份，1-12月
	 * @param d
	 * @return
	 */
	public static int getMonth(Date d) {
		Calendar now = Calendar.getInstance(TimeZone.getDefault());
		now.setTime(d);
		return now.get(Calendar.MONTH) + 1;
	}

	/**
	 * 获取xxxx-xx-xx的日
	 * @param d
	 * @return
	 */
	public static int getDay(Date d) {
		Calendar now = Calendar.getInstance(TimeZone.getDefault());
		now.setTime(d);
		return now.get(Calendar.DAY_OF_MONTH);
	}

	/**
	 * 获取Date中的小时(24小时)
	 * @param d
	 * @return
	 */
	public static int getHour(Date d) {
		Calendar now = Calendar.getInstance(TimeZone.getDefault());
		now.setTime(d);
		return now.get(Calendar.HOUR_OF_DAY);
	}

	/**
	 * 获取Date中的分钟
	 * @param d
	 * @return
	 */
	public static int getMin(Date d) {
		Calendar now = Calendar.getInstance(TimeZone.getDefault());
		now.setTime(d);
		return now.get(Calendar.MINUTE);
	}

	/**
	 * 获取Date中的秒
	 * @param d
	 * @return
	 */
	public static int getSecond(Date d) {
		Calendar now = Calendar.getInstance(TimeZone.getDefault());
		now.setTime(d);
		return now.get(Calendar.SECOND);
	}

	/**
	 * 得到本周周一
	 * @return yyyy-MM-dd
	 */
	public static String getMondayOfThisWeek() {
		Calendar c = Calendar.getInstance();
		int day_of_week = c.get(Calendar.DAY_OF_WEEK) - 1;
		if (day_of_week == 0)
			day_of_week = 7;
		c.add(Calendar.DATE, -day_of_week + 1);
		return dateToDateString(c.getTime(), yyyy_MM_dd_EN);
	}

	/**
	 * 得到本周周日
	 * @return yyyy-MM-dd
	 */
	public static String getSundayOfThisWeek() {
		Calendar c = Calendar.getInstance();
		int day_of_week = c.get(Calendar.DAY_OF_WEEK) - 1;
		if (day_of_week == 0)
			day_of_week = 7;
		c.add(Calendar.DATE, -day_of_week + 7);
		return dateToDateString(c.getTime());
	}

	/**
	 * 得到本周周(*)
	 * @return yyyy-MM-dd
	 */
	public static String getDayOfThisWeek(int num) {
		Calendar c = Calendar.getInstance();
		int day_of_week = c.get(Calendar.DAY_OF_WEEK) - 1;
		if (day_of_week == 0)
			day_of_week = 7;
		c.add(Calendar.DATE, -day_of_week + num);
		return dateToDateString(c.getTime(), yyyy_MM_dd_EN);
	}

	/**
	 * 得到本月指定天
	 * @return yyyy-MM-dd
	 */
	public static String getDayOfThisMoon(String num) {
		String date = dateToDateString(new Date(), yyyy_MM_EN);
		date = date + "-" + num;
		return date;
	}

	/**
	 * 获取两个日期相差的天数
	 * @param beginDate
	 * @param endDate
	 * @return
	 */
	public static long getQuotByDays(String beginDate, String endDate) {
		long quot = 0;
		DateFormat df = getDateFormat(yyyy_MM_dd_EN);
		try {
			Date d1 = df.parse(beginDate);
			Date d2 = df.parse(endDate);
			quot = d2.getTime() - d1.getTime();
			quot = quot / 1000 / 60 / 60 / 24;
		} catch (ParseException e) {
			throw new RuntimeException(e);
		}
		return quot;
	}

	/**
	 * 根据日期追加的天数，得到一个新日期
	 * @param date
	 * @param days
	 * @return
	 */
	public static String getDateAddDay(String date, int days, String format) {
		DateFormat df = getDateFormat(format);
		try {
			Calendar cal = Calendar.getInstance();
			cal.setTime(df.parse(date));
			cal.set(Calendar.DAY_OF_YEAR, cal.get(Calendar.DAY_OF_YEAR) + days);

			date = df.format(cal.getTime());
		} catch (ParseException e) {
			throw new RuntimeException(e);
		}
		return date;
	}

	/**
	 * 获取当前月的最后一天
	 * @return
	 */
	public static Date getLastDayOfCurrMonth() {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.MONTH, 1);
		cal.set(Calendar.DAY_OF_MONTH, 0);

		return cal.getTime();
	}

	/**
	 * 根据日期追加的天数，得到一个新日期
	 * @param date
	 * @param days
	 * @return
	 */
	public static String getDateAddMonth(String date, int m) {
		DateFormat df = getDateFormat(yyyyMM_EN);
		try {
			Calendar cal = Calendar.getInstance();
			cal.setTime(df.parse(date));
			cal.add(Calendar.MONTH, m);
			date = df.format(cal.getTime());
		} catch (ParseException e) {
			throw new RuntimeException(e);
		}
		return date;
	}

	/**
	 * 获取指定年月的第一天
	 * @param year
	 * @param month
	 * @return
	 */
	public static String getFirstDayOfMonth(int year, int month) {
		Calendar cal = Calendar.getInstance();
		// 设置年份
		cal.set(Calendar.YEAR, year);
		// 设置月份
		cal.set(Calendar.MONTH, month - 1);
		// 获取某月最小天数
		int lastDay = cal.getActualMinimum(Calendar.DAY_OF_MONTH);
		// 设置日历中月份的最大天数
		cal.set(Calendar.DAY_OF_MONTH, lastDay);
		// 格式化日期
		DateFormat df = getDateFormat(yyyy_MM_dd_EN);
		return df.format(cal.getTime());
	}
	
	/**
	 * 获取指定年月的第一天
	 * @param year
	 * @param month
	 * @return
	 */
	public static String getLastDayOfMonth(int year, int month) {
		Calendar cal = Calendar.getInstance();
		// 设置年份
		cal.set(Calendar.YEAR, year);
		// 设置月份
		cal.set(Calendar.MONTH, month - 1);
		// 获取某月最大天数
		int lastDay = cal.getActualMaximum(Calendar.DAY_OF_MONTH);
		// 设置日历中月份的最大天数
		cal.set(Calendar.DAY_OF_MONTH, lastDay);
		// 格式化日期
		DateFormat df = getDateFormat(yyyy_MM_dd_EN);
		return df.format(cal.getTime());
	}

	/**
	 * 获取昨天日期
	 * @param date
	 * @return
	 * @throws ParseException
	 */
	public static String getYesterday(Date date) throws ParseException {
		DateFormat df = getDateFormat(yyyy_MM_dd_EN);
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(df.parse(df.format(date)));
		calendar.add(Calendar.DAY_OF_MONTH, -1);
		return df.format(calendar.getTime());
	}
	
//	public static List<Date> getThisWeekDates(){
//		List<Date> list = new ArrayList<Date>();
//        Calendar c = Calendar.getInstance();
//        // 今天是一周中的第几天
//        int dayOfWeek = c.get(Calendar.DAY_OF_WEEK );
// 
//        if (c.getFirstDayOfWeek() == Calendar.SUNDAY) {
//            c.add(Calendar.DAY_OF_MONTH, 1);
//        }
//        // 计算一周开始的日期
//        c.add(Calendar.DAY_OF_MONTH, -dayOfWeek);
//         
//        for (int i=1;i<=7;i++) {
//            c.add(Calendar.DAY_OF_MONTH, 1);
//            if(DateUtils.isSameDay(c.getTime(), new Date())) 
//            	break;
//            list.add(c.getTime());
//        }
//        return list;
//	}
	
	/**
	 * 10位时间戳转时间
	 * @param dateInt
	 * @param pattern
	 * @return
	 */
	public static String getIntToStr(String dateInt, String format){
		DateFormat df = getDateFormat(format);
		long times = Integer.parseInt(dateInt) * 1000L;
		Date date = new Date(times);
		return df.format(date);
	}
	
	/**
	 * 获取 10位时间戳
	 * @return
	 */
	public static Integer getDateInt(){
		return (int) (System.currentTimeMillis() / 1000);
	}
	
	/**
	 * 13位时间戳转时间
	 * @param time
	 * @param format
	 * @return
	 */
	public static String getLongToStr(long time, String format){
		Date date = new Date(time);
		return dateToDateString(date, format);
	}
	
	/**
	 * 获取两个小时间的间隔秒杀
	 * @param start
	 * @param end
	 * @return
	 */
	public static int getIntervalSec(int start, int end){
		return (end - start) * 60 * 60;
	}
	
	/**
	 * 毫秒时间戳毫秒加小数点
	 * @param time
	 * @return
	 */
	public static String getMillsStr(long time){
		String timeStr = String.valueOf(time);
		String suffix = timeStr.substring(0, timeStr.length() - 3);
		String prefix = timeStr.substring(timeStr.length() - 3, timeStr.length());
		return suffix + "." + prefix;
	}
	
	/**
	 * 带小数点的毫秒时间戳转时间格式
	 * @param timeStr
	 * @param formatStr
	 * @return
	 */
	public static String longToString(String timeStr, String formatStr){
		long times = Long.parseLong(timeStr.replace(".", ""));
		Date date = new Date(times);
		return dateToDateString(date, formatStr);
	}
	
	/**
	 * 获取当天起始时间
	 * @return
	 */
	public static Long getTodayTime(){
		Calendar todayStart = Calendar.getInstance();
		todayStart.set(Calendar.HOUR_OF_DAY, 0);
		todayStart.set(Calendar.MINUTE, 0);
		todayStart.set(Calendar.SECOND, 0);
		todayStart.set(Calendar.MILLISECOND, 0);
		return todayStart.getTime().getTime();
	}
	
	public static Integer getTodayInt(){
		return (int) (getTodayTime() / 1000);
	}
	
	/**
	 * 获取当天结束时间
	 * @return
	 */
	public static Long getEndTime(){
		Calendar todayEnd = Calendar.getInstance();
		todayEnd.set(Calendar.HOUR, 23);
		todayEnd.set(Calendar.MINUTE, 59);
		todayEnd.set(Calendar.SECOND, 59);
		todayEnd.set(Calendar.MILLISECOND, 999);
		return todayEnd.getTime().getTime();
	}
	
	public static Integer getTomorrowInt(){
		return (int) (getTomorrowTime() / 1000);
	}
	
	/**
	 * 获取第二天起始时间
	 * @return
	 */
	public static Long getTomorrowTime(){
		Calendar cal = Calendar.getInstance();
        cal.setTime(new Date());
        cal.set(Calendar.HOUR_OF_DAY, 0);
        cal.set(Calendar.MINUTE, 0);
        cal.set(Calendar.SECOND, 0);
        cal.set(Calendar.MILLISECOND, 0);
        cal.add(Calendar.DAY_OF_MONTH, 1);
        return  cal.getTime().getTime();
	}
	
	/**
	 * 获取当天指定小时的时间
	 * @param hour
	 * @return
	 */
	public static Long getPointHourTime(int hour){
		Calendar todayStart = Calendar.getInstance();
		todayStart.set(Calendar.HOUR_OF_DAY, hour);
		todayStart.set(Calendar.MINUTE, 0);
		todayStart.set(Calendar.SECOND, 0);
		todayStart.set(Calendar.MILLISECOND, 0);
		return todayStart.getTime().getTime();
	}
	
	/**
	 * 获取当天n天后的h小时
	 * @param days
	 * @param hour
	 * @return
	 */
	public static Long getPointDateHourTime(int days, int hour){
		Calendar todayStart = Calendar.getInstance();
		todayStart.add(Calendar.DATE, days);
		todayStart.set(Calendar.HOUR_OF_DAY, hour);
		todayStart.set(Calendar.MINUTE, 0);
		todayStart.set(Calendar.SECOND, 0);
		todayStart.set(Calendar.MILLISECOND, 0);
		return todayStart.getTime().getTime();
	}
	
	/**
	 * 时分秒转成秒数
	 * @param time
	 * @return
	 */
	public static Integer hourTosec(String time){
		if("null".equals(time) || StringUtils.isEmpty(time)){
			return null;
		}
		if(time.length() <= 5){
			time += ":00";
		}
		int index1 = time.indexOf(":");
		int index2 = time.indexOf(":",index1+1);
		int hh = Integer.parseInt(time.substring(0,index1));
		int mi = Integer.parseInt(time.substring(index1+1, index2));
		int ss = Integer.parseInt(time.substring(index2+1));
		return hh*60*60 + mi*60 + ss;
	}
	
	/**
	 * 时分秒转成秒数
	 * @param time
	 * @return
	 */
	public static Integer minTosec(String time){
		if(time.length() <= 5){
			time += ":00";
		}
		int index1 = time.indexOf(":");
		int index2 = time.indexOf(":",index1+1);
		int mi = Integer.parseInt(time.substring(0,index1));
		int ss = Integer.parseInt(time.substring(index1+1, index2));
		return mi*60 + ss;
	}
	
	public static void main(String[] args) {
		System.out.println(isInDate(getDate("2016-08-01 09:02:00", "yyyy-MM-dd HH:mm:ss"), "09:00:00", "23:00:00"));
		System.out.println(isInDate("2016-08-01 09:02:00", "09:00:00", "23:00:00"));
//		System.out.println(getFirstDayOfMonth(2016, 5));
//		System.out.println(getLastDayOfMonth(2016, 5));
//		System.out.println(getYear(new Date()));
//		System.out.println(getMonth(new Date()));
//		System.out.println(getLongToStr(1463381088088L, yyyy_MM_dd_HH_mm_ss_EN));
//		System.out.println(getLongToStr(1463381148088L, yyyy_MM_dd_HH_mm_ss_EN));
//		System.out.println(getDateOfMin("2015-06-07 10:06:00", 5, "yyyy-MM-dd HH:mm:ss"));
//		DateFormat df = getDateFormat("yyyy-MM-dd HH:mm:ss");
//		System.out.println(df.format(getPointHourTime(2)));
//		System.out.println(getDateStringOfDay(-1, "yyyy-MM-dd HH:mm:ss"));
//		System.out.println(getLongToStr(getPointDateHourTime(1, 9), "yyyy-MM-dd HH:mm:ss"));
	}
	
	public static boolean isDate(String dateTimeStr, String formatStr) {
		DateFormat df = getDateFormat(formatStr);
		try {
			df.parse(dateTimeStr);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	/**
	 * 判断时间是否在时间段内
	 * @param date			当前时间 yyyy-MM-dd HH:mm:ss
	 * @param strDateBegin 	开始时间 00:00:00
	 * @param strDateEnd 	结束时间 00:05:00
	 * @return
	 */
	public static boolean isInDate(String strDate, String strDateBegin, String strDateEnd) {
		// 截取当前时间时分秒
		int strDateH = Integer.parseInt(strDate.substring(11, 13));
		int strDateM = Integer.parseInt(strDate.substring(14, 16));
		int strDateS = Integer.parseInt(strDate.substring(17, 19));
		// 截取开始时间时分秒
		int strDateBeginH = Integer.parseInt(strDateBegin.substring(0, 2));
		int strDateBeginM = Integer.parseInt(strDateBegin.substring(3, 5));
		int strDateBeginS = Integer.parseInt(strDateBegin.substring(6, 8));
		// 截取结束时间时分秒
		int strDateEndH = Integer.parseInt(strDateEnd.substring(0, 2));
		int strDateEndM = Integer.parseInt(strDateEnd.substring(3, 5));
		int strDateEndS = Integer.parseInt(strDateEnd.substring(6, 8));
		if ((strDateH >= strDateBeginH && strDateH <= strDateEndH)) {
			// 当前时间小时数在开始时间和结束时间小时数之间
			if (strDateH > strDateBeginH && strDateH < strDateEndH) {
				return true;
				// 当前时间小时数等于开始时间小时数，分钟数在开始和结束之间
			} else if (strDateH == strDateBeginH && strDateM >= strDateBeginM && strDateM <= strDateEndM) {
				return true;
				// 当前时间小时数等于开始时间小时数，分钟数等于开始时间分钟数，秒数在开始和结束之间
			} else if (strDateH == strDateBeginH && strDateM == strDateBeginM && strDateS >= strDateBeginS && strDateS <= strDateEndS) {
				return true;
			}
			// 当前时间小时数大等于开始时间小时数，等于结束时间小时数，分钟数小等于结束时间分钟数
			else if (strDateH >= strDateBeginH && strDateH == strDateEndH && strDateM <= strDateEndM) {
				return true;
				// 当前时间小时数大等于开始时间小时数，等于结束时间小时数，分钟数等于结束时间分钟数，秒数小等于结束时间秒数
			} else if (strDateH >= strDateBeginH && strDateH == strDateEndH && strDateM == strDateEndM && strDateS <= strDateEndS) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
	
	/**
	 * 判断时间是否在时间段内
	 * @param date 当前时间 yyyy-MM-dd HH:mm:ss
	 * @param strDateBegin 开始时间 00:00:00
	 * @param strDateEnd 结束时间 00:05:00
	 * @return
	 */
	public static boolean isInDate(Date date, String strDateBegin,
			String strDateEnd) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String strDate = sdf.format(date);
		// 截取当前时间时分秒
		int strDateH = Integer.parseInt(strDate.substring(11, 13));
		int strDateM = Integer.parseInt(strDate.substring(14, 16));
		int strDateS = Integer.parseInt(strDate.substring(17, 19));
		// 截取开始时间时分秒
		int strDateBeginH = Integer.parseInt(strDateBegin.substring(0, 2));
		int strDateBeginM = Integer.parseInt(strDateBegin.substring(3, 5));
		int strDateBeginS = Integer.parseInt(strDateBegin.substring(6, 8));
		// 截取结束时间时分秒
		int strDateEndH = Integer.parseInt(strDateEnd.substring(0, 2));
		int strDateEndM = Integer.parseInt(strDateEnd.substring(3, 5));
		int strDateEndS = Integer.parseInt(strDateEnd.substring(6, 8));
		if ((strDateH >= strDateBeginH && strDateH <= strDateEndH)) {
			// 当前时间小时数在开始时间和结束时间小时数之间
			if (strDateH > strDateBeginH && strDateH < strDateEndH) {
				return true;
				// 当前时间小时数等于开始时间小时数，分钟数在开始和结束之间
			} else if (strDateH == strDateBeginH && strDateM >= strDateBeginM
					&& strDateM <= strDateEndM) {
				return true;
				// 当前时间小时数等于开始时间小时数，分钟数等于开始时间分钟数，秒数在开始和结束之间
			} else if (strDateH == strDateBeginH && strDateM == strDateBeginM
					&& strDateS >= strDateBeginS && strDateS <= strDateEndS) {
				return true;
			}
			// 当前时间小时数大等于开始时间小时数，等于结束时间小时数，分钟数小等于结束时间分钟数
			else if (strDateH >= strDateBeginH && strDateH == strDateEndH
					&& strDateM <= strDateEndM) {
				return true;
				// 当前时间小时数大等于开始时间小时数，等于结束时间小时数，分钟数等于结束时间分钟数，秒数小等于结束时间秒数
			} else if (strDateH >= strDateBeginH && strDateH == strDateEndH
					&& strDateM == strDateEndM && strDateS <= strDateEndS) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
	
	public static boolean isInTime(int time, int begin, int end){
		if(time >= begin && time < end){
			return true;
		}
		return false;
	}
	
	public static int getMinutest(String begin, String format){
		String nowMinutes = DateUtil.getCurDate("HH:mm");
		long time = DateUtil.compareDateStr("09:00", nowMinutes, "HH:mm");
		return (int) time;
	}

}
