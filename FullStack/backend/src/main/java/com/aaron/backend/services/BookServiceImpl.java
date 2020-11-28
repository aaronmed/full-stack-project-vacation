package com.aaron.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aaron.backend.entity.dao.IBookDao;
import com.aaron.backend.entity.models.Book;

@Service
public class BookServiceImpl implements IBookService {

	@Autowired
	private IBookDao bookDao;

	@Override
	public List<Book> getAll() {
		return (List<Book>) bookDao.findAll();
	}

	@Override
	public Book addBook(Book book) {
		return bookDao.save(book);
	}

	@Override
	public void deleteBook(long id) {
		bookDao.deleteById(id);
	}

	@Override
	public Book updateBook(long id, Book book) {
		Optional<Book> bookInDB = bookDao.findById(id);

		if (bookInDB.isPresent()) {
			book.setId(bookInDB.get().getId());
		}
		return bookDao.save(book);
	}

	@Override
	public Optional<Book> getBookById(long id) {
		return bookDao.findById(id);
	}

}
