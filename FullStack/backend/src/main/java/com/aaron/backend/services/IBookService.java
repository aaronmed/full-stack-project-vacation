package com.aaron.backend.services;

import java.util.List;
import java.util.Optional;

import com.aaron.backend.entity.models.Book;

public interface IBookService {

	public List<Book> getAll();

	public Optional<Book> getBookById(long id);

	public Book addBook(Book book);

	public void deleteBook(long id);

	public Book updateBook(long id, Book book);
}
