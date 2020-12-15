package com.aaron.backend.query;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.aaron.backend.services.IAdvertService;
import com.aaron.backend.services.IBookService;
import com.aaron.backend.services.IReviewService;
import com.aaron.backend.services.IUserService;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;

import com.aaron.backend.entity.models.Advert;
import com.aaron.backend.entity.models.Book;
import com.aaron.backend.entity.models.Review;
import com.aaron.backend.entity.models.User;

@Component
public class Query implements GraphQLQueryResolver {
	
	@Autowired
	private IUserService userService;
	
	@Autowired
	private IAdvertService advertService;
	
	@Autowired
	private IBookService bookService;
	
	@Autowired
	private IReviewService reviewService;
	
	public List<Advert> getAdverts(){
		return advertService.getAll();
	}
	
	public Optional<Advert> getAdvert(final long id){
		return advertService.getAdvertById(id);
	}
	
	public List<User> getUsers(){
		return userService.getAll();
	}
	
	public Optional<User> getUser(final long id){
		return userService.getUserById(id);
	}
	
	public List<Book> getBooks(){
		return bookService.getAll();
	}
	
	public Optional<Book> getBook(final long id){
		return bookService.getBookById(id);
	}
	
	public List<Review> getReviews(){
		return reviewService.getAll();
	}
	
	public Optional<Review> getReview(final long id){
		return reviewService.getReviewById(id);
	}
	
	public List<Review> getAdvertReviews(int id){
		List<Review> allReviews = reviewService.getAll();
		List<Review> advertReviews = new ArrayList<Review>();
		for (Review r: allReviews) {
			if(r.getAdvert().getId() == id) {
				advertReviews.add(r);
			}
		}
		return advertReviews;
	}
	
	public String getAdvertAverageReviews(int id){
		List<Review> allReviews = reviewService.getAll();
		List<Review> advertReviews = new ArrayList<Review>();
		for (Review r: allReviews) {
			if(r.getAdvert().getId() == id) {
				advertReviews.add(r);
			}
		}
		int total = 0;
		
		for (Review r: advertReviews) {
			total += r.getStars();
		}
		float average = (float) total/advertReviews.size();
		
		String result = String.format("%.2f", average);
		if(result.equals("NaN")) {
			return "";
		} else {
			return result;
		}
	}
	
	public List<Advert> getAdvertFilters(String address, int guests){
		List<Advert> allAdverts = advertService.getAll();
		List<Advert> advertsWithFilters = new ArrayList<Advert>();
		for (Advert a: allAdverts) {
			if(a.getAddress().equals(address) && a.getGuests() == guests) {
				advertsWithFilters.add(a);
			}
		}
		return advertsWithFilters;
	}
	
	public List<Book> getBooksByUser(int idUser){
		List<Book> allBooks = bookService.getAll();
		List<Book> booksByUser = new ArrayList<Book>();
		for (Book b: allBooks) {
			if (b.getUser().getId() == idUser) {
				booksByUser.add(b);
			}
		}
		return booksByUser;
	}
	
	public List<Advert> getAdvertsByUser(int idUser){
		List<Advert> allAdverts = advertService.getAll();
		List<Advert> advertsByUser = new ArrayList<Advert>();
		for (Advert a: allAdverts) {
			if (a.getUser().getId() == idUser) {
				advertsByUser.add(a);
			}
		}
		return advertsByUser;
	}
	
	public boolean checkUserDelete(int idUser) {
		List<Advert> allAdverts = advertService.getAll();
		List<Book> allBooks = bookService.getAll();
		for (Advert a : allAdverts) {
			if (a.getUser().getId() == idUser) {
				return false;
			}
		}
		for (Book b : allBooks) {
			if (b.getUser().getId() == idUser) {
				return false;
			}
		}
		return true;
	}
}
