package com.aaron.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

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
}
