package com.aaron.backend.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aaron.backend.entity.models.User;

public interface IUserDao extends JpaRepository<User,Long>{

}
