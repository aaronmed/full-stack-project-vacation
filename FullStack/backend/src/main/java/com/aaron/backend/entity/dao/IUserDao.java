package com.aaron.backend.entity.dao;

import org.springframework.data.repository.CrudRepository;
import com.aaron.backend.entity.models.User;

public interface IUserDao extends CrudRepository<User,Long>{
	User findByUsername(String username);
}
