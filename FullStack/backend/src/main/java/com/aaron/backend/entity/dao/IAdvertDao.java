package com.aaron.backend.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aaron.backend.entity.models.Advert;

public interface IAdvertDao extends JpaRepository<Advert,Long> {

}
