package com.cadastropessoas.cadastropessoas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;


@ComponentScan({"com.cadastropessoas.controller", "com.cadastropessoas.service", 
"com.cadastropessoas.configuration"})
@PropertySource("classpath:application.properties")
@EntityScan("com.cadastropessoas.models")
@SpringBootApplication
public class CadastropessoaApplication {

	public static void main(String[] args) {
		SpringApplication.run(CadastropessoaApplication.class, args);
	}

}
