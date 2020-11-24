package com.aaron.backend.mutation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.aaron.backend.entity.models.User;
import com.aaron.backend.services.IUserService;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;

@Component
public class UserMutation implements GraphQLMutationResolver {
	
	@Autowired
	private IUserService userService;
	
	public User createUser(String username, String password, String name, String surname, String dni, String telephone) {
		return userService.addUser(new User(username, password, name, surname, dni, telephone));
	}
}
