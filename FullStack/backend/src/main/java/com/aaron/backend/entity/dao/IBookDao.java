package com.aaron.backend.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aaron.backend.entity.models.Book;

public interface IBookDao extends JpaRepository<Book, Long>{

}
