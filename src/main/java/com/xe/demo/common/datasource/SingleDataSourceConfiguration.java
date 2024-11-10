//package com.xe.demo.common.datasource;
//
//import javax.sql.DataSource;
//
//import org.springframework.boot.context.properties.ConfigurationProperties;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import com.alibaba.druid.pool.DruidDataSource;
//
///**
// * 单数据源配置
// * @author CZH
// */
//@Configuration
//public class SingleDataSourceConfiguration {
//
//    @Bean
//    @ConfigurationProperties(prefix = "jdbc.ds")
//    public DataSource readDataSource() {
//        return new DruidDataSource();
//    }
//}
