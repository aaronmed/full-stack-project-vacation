package com.aaron.backend.mutation;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import com.aaron.backend.entity.models.Advert;
import com.aaron.backend.entity.models.Book;
import com.aaron.backend.entity.models.Review;
import com.aaron.backend.entity.models.User;
import com.aaron.backend.services.IAdvertService;
import com.aaron.backend.services.IBookService;
import com.aaron.backend.services.IReviewService;
import com.aaron.backend.services.IUserService;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;

import graphql.scalars.ExtendedScalars;
import graphql.schema.GraphQLScalarType;

@Component
public class Mutation implements GraphQLMutationResolver {

	@Autowired
	private IUserService userService;

	@Autowired
	private IAdvertService advertService;

	@Autowired
	private IBookService bookService;

	@Autowired
	private IReviewService reviewService;

	public User createUser(String username, String password, String name, String surname, String dni,
			String telephone) {
		return userService.addUser(new User(username, password, name, surname, dni, telephone));
	}

	public User updateUser(long id, String username, String password, String name, String surname, String dni,
			String telephone) {
		return userService.updateUser(id, new User(username, password, name, surname, dni, telephone));
	}

	public boolean deleteUser(long id) {
		userService.deleteUser(id);
		return true;
	}

	public Advert createAdvert(String description, String address, String published, float price, int guests,
			int bathrooms, int bedrooms, int beds, long user) {
		return advertService.addAdvert(new Advert(description, address, LocalDate.parse(published), price, guests,
				bathrooms, bedrooms, beds, user));
	}

	public Advert updateAdvert(long id, String description, String address, String published, float price, int guests,
			int bathrooms, int bedrooms, int beds, long user) {
		return advertService.updateAdvert(id, new Advert(description, address, LocalDate.parse(published), price,
				guests, bathrooms, bedrooms, beds, user));
	}

	public boolean deleteAdvert(long id) {
		advertService.deleteAdvert(id);
		return true;
	}

	public Book createBook(long user, long advert, String start, String end) {
		return bookService.addBook(new Book(user, advert, LocalDate.parse(start), LocalDate.parse(end)));
	}

	public Book updateBook(long id, long user, long advert, String start, String end) {
		return bookService.updateBook(id, new Book(user, advert, LocalDate.parse(start), LocalDate.parse(end)));
	}

	public boolean deleteBook(long id) {
		bookService.deleteBook(id);
		return true;
	}

	public Review createReview(String description, int stars, String published, long advert) {
		return reviewService.addReview(new Review(description, stars, LocalDate.parse(published), advert));
	}

	public Review updateReview(long id, String description, int stars, String published, long advert) {
		return reviewService.updateReview(id, new Review(description, stars, LocalDate.parse(published), advert));
	}

	public boolean deleteReview(long id) {
		reviewService.deleteReview(id);
		return true;
	}

	@Bean
	public GraphQLScalarType date() {
		return ExtendedScalars.Date;
	}
}
