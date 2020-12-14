package com.aaron.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import graphql.scalars.ExtendedScalars;
import graphql.schema.GraphQLScalarType;

@SpringBootApplication
public class VacationApplication {

	public static void main(String[] args) {
		SpringApplication.run(VacationApplication.class, args);
	}
	
	@Bean
	public GraphQLScalarType date() {
		return ExtendedScalars.Date;
	}
	
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/auth/login").allowedOrigins("http://localhost:8100");
				registry.addMapping("/graphql").allowedOrigins("http://localhost:8100");
			}
		};
	}
	
}
