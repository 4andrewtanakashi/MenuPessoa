package com.cadastroPessoa.configuration;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;

@Configuration
public class DataConfiguration {
	@Bean
	public DataSource dataSource () {
		System.out.println("AQUI11");
		System.out.println("AQUI11");
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
		dataSource.setUrl("jdbc:mysql://localhost:3306/cadastroPessoa?useSSL=false&createDatabaseIfNotExist=true");
		dataSource.setUsername("root");
		dataSource.setPassword("CcEngmect8246->BioincEngmecarm");
		return dataSource;
	}
	
	@Bean
	public JpaVendorAdapter jpaVendorAdapter () {
		System.out.println("AQUI22");
		System.out.println("AQUI22");
		HibernateJpaVendorAdapter adapter = new HibernateJpaVendorAdapter();
		adapter.setDatabase(Database.MYSQL);
		adapter.setShowSql(true);
		adapter.setGenerateDdl(true);
		adapter.setDatabasePlatform("org.hibernate.dialect.MYSQLDialect");
		adapter.setPrepareConnection(true);
		return adapter;
	}
}
