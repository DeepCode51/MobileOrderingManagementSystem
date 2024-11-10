//package com.xe.demo.common.job;
//
//import org.quartz.CronScheduleBuilder;
//import org.quartz.CronTrigger;
//import org.quartz.JobBuilder;
//import org.quartz.JobDetail;
//import org.quartz.Scheduler;
//import org.quartz.SchedulerException;
//import org.quartz.TriggerBuilder;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.scheduling.quartz.SchedulerFactoryBean;
//import org.springframework.stereotype.Component;
//
///**
// * 任务调度器
// * @author CZH
// */
//@Component
//public class JobScheduler {
//	@Autowired
//	SchedulerFactoryBean schedulerFactoryBean;
//
//	public void scheduleJobs() throws SchedulerException {
//		Scheduler scheduler = schedulerFactoryBean.getScheduler();
//		startJob1(scheduler);
//	}
//
//	/**
//	 * 
//	 * @param scheduler
//	 * @throws SchedulerException
//	 */
//	private void startJob1(Scheduler scheduler) throws SchedulerException {
//		JobDetail jobDetail = JobBuilder.newJob(ScheduledJob.class).withIdentity("job", "group").build();
//		CronScheduleBuilder scheduleBuilder = CronScheduleBuilder.cronSchedule("0/5 * * * * ?");
//		CronTrigger cronTrigger = TriggerBuilder.newTrigger().withIdentity("trigger", "group").withSchedule(scheduleBuilder).build();
//		scheduler.scheduleJob(jobDetail, cronTrigger);
//	}
//}
