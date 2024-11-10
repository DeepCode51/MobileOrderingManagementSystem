//package com.xe.demo.common.job;
//
//import java.text.SimpleDateFormat;
//import java.util.Date;
//
//import org.quartz.Job;
//import org.quartz.JobExecutionContext;
//import org.quartz.JobExecutionException;
//
///**
// * 定义一个任务(定时输出)
// * @author CZH
// */
//public class ScheduledJob implements Job {
//	private SimpleDateFormat dateFormat() {
//		return new SimpleDateFormat("HH:mm:ss");
//	}
//
//	@Override
//	public void execute(JobExecutionContext context) throws JobExecutionException {
//		System.out.println("定时输出任务:" + dateFormat().format(new Date()));
//	}
//}
