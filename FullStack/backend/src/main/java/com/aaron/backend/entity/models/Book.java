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
@Table(name ="book")
public class Book implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column
	private long idUser;
	
	@Column
	private long idAdvert;
	
	@Column
	private Date startDate;
	
	@Column
	private Date endDate;
	
	public Book() {
		
	}

	public Book(long idUser, long idAdvert, Date startDate, Date endDate) {
		super();
		this.idUser = idUser;
		this.idAdvert = idAdvert;
		this.startDate = startDate;
		this.endDate = endDate;
	}

	public long getIdUser() {
		return idUser;
	}

	public void setIdUser(long idUser) {
		this.idUser = idUser;
	}

	public long getIdAdvert() {
		return idAdvert;
	}

	public void setIdAdvert(long idAdvert) {
		this.idAdvert = idAdvert;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
}
