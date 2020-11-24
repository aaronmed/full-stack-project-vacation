package com.aaron.backend.services;

import java.util.List;
import java.util.Optional;

import com.aaron.backend.entity.models.User;

public interface IUserService {
	
	public List<User> getAll();
	
	public Optional<User> getUserById(long id);
	
	public User addUser(User user);
	
	public void deleteUser(long id);

	public void updateUser(long id, User user);
}
