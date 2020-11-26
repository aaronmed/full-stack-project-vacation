package com.aaron.backend.entity.models;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "review")
public class Review implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column
	private String description;
	
	@Column
	private int stars;
	
	@Column
	private LocalDate date;
	
	@Column
	private long advert;
	
	public Review() {
		
	}

	public Review(String description, int stars, LocalDate date, long advert) {
		super();
		this.description = description;
		this.stars = stars;
		this.date = date;
		this.advert = advert;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getStars() {
		return stars;
	}

	public void setStars(int stars) {
		this.stars = stars;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public long getAdvert() {
		return advert;
	}

	public void setAdvert(long advert) {
		this.advert = advert;
	}
}
