package com.xe.demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Import;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xe.demo.common.datasource.DynamicDataSourceRegister;

/**
 * springboot启动器
 * @author CZH
 */
@Controller
// 开启缓存
@EnableCaching
@MapperScan(basePackages = "com.xe.*.mapper")
@Import(DynamicDataSourceRegister.class)
@SpringBootApplication
public class Application extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(Application.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@RequestMapping("/")
	String home() {
		return "index";
	}
	
	@RequestMapping("/404")
	String notFound() {
		return "common/404";
	}
	
	@RequestMapping("/500")
	String error() {
		return "common/500";
	}
}
