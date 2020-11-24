package com.aaron.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aaron.backend.entity.dao.IUserDao;
import com.aaron.backend.entity.models.User;

@Service
public class UserServiceImpl implements IUserService {
	
	@Autowired
	private IUserDao userDao;
	
	@Override
	public List<User> getAll(){
		return (List<User>) userDao.findAll();
	}
	
	@Override
	public User addUser(User user) {
		return userDao.save(user);
	}

	@Override
	public void deleteUser(long id) {
		userDao.deleteById(id);
	}

	@Override
	public void updateUser(long id, User user) {
		Optional<User> userInDB = userDao.findById(id);
		
		if(userInDB.isPresent()) {
			user.setId(userInDB.get().getId());
			userDao.save(user);
		}
	}

	@Override
	public Optional<User> getUserById(long id) {
		return userDao.findById(id);
	}

}
