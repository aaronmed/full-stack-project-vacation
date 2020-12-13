package com.aaron.backend.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.aaron.backend.entity.models.Book;

public interface IBookDao extends CrudRepository<Book, Long>{

}
