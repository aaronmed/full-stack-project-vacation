package com.aaron.backend.query;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.aaron.backend.services.IAdvertService;
import com.aaron.backend.services.IUserService;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.aaron.backend.entity.models.Advert;
import com.aaron.backend.entity.models.User;

@Component
public class Query implements GraphQLQueryResolver {
	
	@Autowired
	private IUserService userService;
	
	@Autowired
	private IAdvertService advertService;
	
	public List<Advert> getAdverts(){
		return advertService.getAll();
	}
	
	public Optional<Advert> getAdvert(final long id){
		return advertService.getAdvertById(id);
	}
	
	public List<User> getUsers(){
		return userService.getAll();
	}
	
	public Optional<User> getUser(final long id){
		return userService.getUserById(id);
	}
	
}
