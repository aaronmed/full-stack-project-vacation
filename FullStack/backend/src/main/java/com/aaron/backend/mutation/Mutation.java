package com.aaron.backend.mutation;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import com.aaron.backend.entity.models.Advert;
import com.aaron.backend.entity.models.User;
import com.aaron.backend.services.IAdvertService;
import com.aaron.backend.services.IUserService;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;

import graphql.scalars.ExtendedScalars;
import graphql.schema.GraphQLScalarType;

@Component
public class Mutation implements GraphQLMutationResolver {
	
	@Autowired
	private IUserService userService;
	
	@Autowired
	private IAdvertService advertService;
	
	public User createUser(String username, String password, String name, String surname, String dni, String telephone) {
		return userService.addUser(new User(username, password, name, surname, dni, telephone));
	}
	
	public boolean deleteUser(long id) {
		userService.deleteUser(id);
		return true;
	}
	
	public User updateUser(long id, String username, String password, String name, String surname, String dni, String telephone) {
		return userService.updateUser(id, new User(username, password, name, surname, dni, telephone));
	}

	public Advert createAdvert(String description, String address, LocalDate datePublished, float priceByNight, int numGuest,
			int numBathroom, int numBedroom, int numBed, long idHostUser) {
		return advertService.addAdvert(new Advert(description, address, datePublished, priceByNight, numGuest,
				numBathroom, numBedroom, numBed, idHostUser));
	}
	
	public boolean deleteAdvert(long id) {
		advertService.deleteAdvert(id);
		return true;
	}
	
	@Bean
	public GraphQLScalarType date() {
	   return ExtendedScalars.Date;
	}
}
