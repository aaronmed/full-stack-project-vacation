package com.aaron.backend.entity.models;

import java.io.Serializable;
import java.util.Date;

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
	private Date reviewDate;
	
	@Column
	private long idAdvert;
	
	public Review() {
		
	}

	public Review(String description, int stars, Date reviewDate, long idAdvert) {
		super();
		this.description = description;
		this.stars = stars;
		this.reviewDate = reviewDate;
		this.idAdvert = idAdvert;
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

	public Date getReviewDate() {
		return reviewDate;
	}

	public void setReviewDate(Date reviewDate) {
		this.reviewDate = reviewDate;
	}

	public long getIdAdvert() {
		return idAdvert;
	}

	public void setIdAdvert(long idAdvert) {
		this.idAdvert = idAdvert;
	}
}
