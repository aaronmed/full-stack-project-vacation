package com.aaron.backend.query;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.aaron.backend.services.IUserService;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;

import com.aaron.backend.entity.models.User;

@Component
public class UserQuery implements GraphQLQueryResolver {
	
	@Autowired
	private IUserService userService;
	
	public List<User> getUsers(){
		return userService.getAll();
	}
	
	public Optional<User> getUser(final long id){
		return userService.getUserById(id);
	}

}
