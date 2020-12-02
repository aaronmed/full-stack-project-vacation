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
@Table(name = "advert")
public class Advert implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column
	private String description;

	@Column
	private String address;

	@Column
	private LocalDate published;

	@Column
	private float price;

	@Column
	private int guests;

	@Column
	private int bathrooms;

	@Column
	private int bedrooms;

	@Column
	private int beds;
	
	@ManyToOne
	@JoinColumn(name = "user")
	private User user;

	public Advert() {

	}

	public Advert(String description, String address, LocalDate published, float price, int guests, int bathrooms,
			int bedrooms, int beds, User user) {
		super();
		this.description = description;
		this.address = address;
		this.published = published;
		this.price = price;
		this.guests = guests;
		this.bathrooms = bathrooms;
		this.bedrooms = bedrooms;
		this.beds = beds;
		this.user = user;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public LocalDate getPublished() {
		return published;
	}

	public void setPublished(LocalDate published) {
		this.published = published;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getGuests() {
		return guests;
	}

	public void setGuests(int guests) {
		this.guests = guests;
	}

	public int getBathrooms() {
		return bathrooms;
	}

	public void setBathrooms(int bathrooms) {
		this.bathrooms = bathrooms;
	}

	public int getBedrooms() {
		return bedrooms;
	}

	public void setBedrooms(int bedrooms) {
		this.bedrooms = bedrooms;
	}

	public int getBeds() {
		return beds;
	}

	public void setBeds(int beds) {
		this.beds = beds;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}
