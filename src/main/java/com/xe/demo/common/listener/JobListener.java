//package com.xe.demo.common.listener;
//
//import org.quartz.SchedulerException;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.ApplicationListener;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.event.ContextRefreshedEvent;
//import org.springframework.scheduling.quartz.SchedulerFactoryBean;
//
//import com.xe.demo.common.job.JobScheduler;
//
///**
// * 注册程序启动完成事件监听，用于启动job任务
// * @author CZH
// */
//@Configuration
//public class JobListener implements ApplicationListener<ContextRefreshedEvent>{
//
//	@Autowired
//	private JobScheduler job;
//	
//	@Override
//	public void onApplicationEvent(ContextRefreshedEvent event) {
//		try {
//			job.scheduleJobs();
//		} catch (SchedulerException e) {
//			e.printStackTrace();
//		}
//	}
//	
//	@Bean
//    public SchedulerFactoryBean schedulerFactoryBean(){
//        return new SchedulerFactoryBean(); 
//    }
//
//}
