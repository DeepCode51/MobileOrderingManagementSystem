package com.xe.demo.common.datasource;

import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.MutablePropertyValues;
import org.springframework.beans.PropertyValues;
import org.springframework.beans.factory.support.BeanDefinitionRegistry;
import org.springframework.beans.factory.support.GenericBeanDefinition;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.bind.RelaxedDataBinder;
import org.springframework.boot.bind.RelaxedPropertyResolver;
import org.springframework.context.EnvironmentAware;
import org.springframework.context.annotation.ImportBeanDefinitionRegistrar;
import org.springframework.core.env.Environment;
import org.springframework.core.type.AnnotationMetadata;

/**
 * 动态数据源注册
 * @author CZH
 */
public class DynamicDataSourceRegister implements ImportBeanDefinitionRegistrar, EnvironmentAware {

	private static final Logger logger = LoggerFactory.getLogger(DynamicDataSourceRegister.class);

	// 数据源配置信息
	private PropertyValues dataSourcePropertyValues;
	// 默认数据源
	private DataSource defaultDataSource;
	// 动态数据源
	private Map<String, DataSource> dynamicDataSources = new HashMap<>();

	/**
	 * 加载多数据源配置
	 */
	@Override
	public void setEnvironment(Environment env) {
		RelaxedPropertyResolver propertyResolver = new RelaxedPropertyResolver(env, "jdbc.");
		String dsPrefixs = propertyResolver.getProperty("datasources");
		for (String dsPrefix : dsPrefixs.split(",")) {// 多个数据源
			Map<String, Object> map = propertyResolver.getSubProperties(dsPrefix + ".");
			DataSource ds = initDataSource(map);
			// 设置默认数据源
			if ("ds".equals(dsPrefix)) {
				defaultDataSource = ds;
			} else {
				dynamicDataSources.put(dsPrefix, ds);
			}
			dataBinder(ds, env);
		}
	}

	/**
	 * 初始化数据源
	 * @param map
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public DataSource initDataSource(Map<String, Object> map) {
		String driverClassName = map.get("driverClassName").toString();
		String url = map.get("url").toString();
		String username = map.get("username").toString();
		String password = map.get("password").toString();
		
		String dsType = map.get("dsType").toString();
		Class<DataSource> dataSourceType;
		DataSource dataSource = null;
		try {
			dataSourceType = (Class<DataSource>) Class.forName(dsType);

			dataSource = DataSourceBuilder.create().driverClassName(driverClassName).url(url)
					.username(username).password(password).type(dataSourceType).build();;
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		return dataSource;
	}

	/**
	 * 加载数据源配置信息
	 * @param dataSource
	 * @param env
	 */
	private void dataBinder(DataSource dataSource, Environment env) {
		RelaxedDataBinder dataBinder = new RelaxedDataBinder(dataSource);
		dataBinder.setIgnoreNestedProperties(false);// false
		dataBinder.setIgnoreInvalidFields(false);// false
		dataBinder.setIgnoreUnknownFields(true);// true
		if (dataSourcePropertyValues == null) {
			Map<String, Object> values = new RelaxedPropertyResolver(env, "datasource").getSubProperties(".");
			dataSourcePropertyValues = new MutablePropertyValues(values);
		}
		dataBinder.bind(dataSourcePropertyValues);
	}

	/**
	 * 注册数据源been
	 */
	@Override
	public void registerBeanDefinitions(AnnotationMetadata importingClassMetadata, BeanDefinitionRegistry registry) {
		Map<Object, Object> targetDataSources = new HashMap<Object, Object>();
		// 将主数据源添加到更多数据源中
		targetDataSources.put("dataSource", defaultDataSource);
		// 添加更多数据源
		targetDataSources.putAll(dynamicDataSources);

		// 创建DynamicDataSource
		GenericBeanDefinition beanDefinition = new GenericBeanDefinition();
		beanDefinition.setBeanClass(DynamicDataSource.class);
		beanDefinition.setSynthetic(true);
		MutablePropertyValues mpv = beanDefinition.getPropertyValues();
		mpv.addPropertyValue("defaultTargetDataSource", defaultDataSource);
		mpv.addPropertyValue("targetDataSources", targetDataSources);
		registry.registerBeanDefinition("dataSource", beanDefinition);

		logger.info("多数据源注册成功");
	}

}
