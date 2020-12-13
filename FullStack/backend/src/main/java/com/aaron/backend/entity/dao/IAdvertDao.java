package com.aaron.backend.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.aaron.backend.entity.models.Advert;

public interface IAdvertDao extends CrudRepository<Advert,Long> {

}
