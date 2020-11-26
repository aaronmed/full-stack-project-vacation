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
@Table(name ="book")
public class Book implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column
	private long user;
	
	@Column
	private long advert;
	
	@Column
	private LocalDate start;
	
	@Column
	private LocalDate end;
	
	public Book() {
		
	}

	public Book(long user, long advert, LocalDate start, LocalDate end) {
		super();
		this.user = user;
		this.advert = advert;
		this.start = start;
		this.end = end;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getUser() {
		return user;
	}

	public void setUser(long user) {
		this.user = user;
	}

	public long getAdvert() {
		return advert;
	}

	public void setAdvert(long advert) {
		this.advert = advert;
	}

	public LocalDate getStart() {
		return start;
	}

	public void setStart(LocalDate start) {
		this.start = start;
	}

	public LocalDate getEnd() {
		return end;
	}

	public void setEnd(LocalDate end) {
		this.end = end;
	}
}
