package com.aaron.backend.entity.models;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
	private LocalDate published;
	
	@ManyToOne
	@JoinColumn(name = "advert")
	private Advert advert;
	
	public Review() {
		
	}

	public Review(String description, int stars, LocalDate published, Advert advert) {
		super();
		this.description = description;
		this.stars = stars;
		this.published = published;
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

	public LocalDate getPublished() {
		return published;
	}

	public void setPublished(LocalDate published) {
		this.published = published;
	}

	public Advert getAdvert() {
		return advert;
	}

	public void setAdvert(Advert advert) {
		this.advert = advert;
	}
}
