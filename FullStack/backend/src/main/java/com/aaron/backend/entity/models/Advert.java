package com.aaron.backend.entity.models;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "advert")
public class Advert implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	private long id;
	
	@Column
	private String description;
	
	@Column
	private String address;
	
	@Column
	private Date datePublished;
	
	@Column
	private float priceByNight;
	
	@Column
	private int numGuest;
	
	@Column
	private int numBathroom;
	
	@Column
	private int numBedroom;
	
	@Column
	private int numBed;
	
	@Column
	private long idHostUser;
	
	public Advert() {
		
	}

	public Advert(String description, String address, Date datePublished, float priceByNight, int numGuest,
			int numBathroom, int numBedroom, int numBed, long idHostUser) {
		super();
		this.description = description;
		this.address = address;
		this.datePublished = datePublished;
		this.priceByNight = priceByNight;
		this.numGuest = numGuest;
		this.numBathroom = numBathroom;
		this.numBedroom = numBedroom;
		this.numBed = numBed;
		this.idHostUser = idHostUser;
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

	public Date getDatePublished() {
		return datePublished;
	}

	public void setDatePublished(Date datePublished) {
		this.datePublished = datePublished;
	}

	public float getPriceByNight() {
		return priceByNight;
	}

	public void setPriceByNight(float priceByNight) {
		this.priceByNight = priceByNight;
	}

	public int getNumGuest() {
		return numGuest;
	}

	public void setNumGuest(int numGuest) {
		this.numGuest = numGuest;
	}

	public int getNumBathroom() {
		return numBathroom;
	}

	public void setNumBathroom(int numBathroom) {
		this.numBathroom = numBathroom;
	}

	public int getNumBedroom() {
		return numBedroom;
	}

	public void setNumBedroom(int numBedroom) {
		this.numBedroom = numBedroom;
	}

	public int getNumBed() {
		return numBed;
	}

	public void setNumBed(int numBed) {
		this.numBed = numBed;
	}

	public long getIdHostUser() {
		return idHostUser;
	}

	public void setIdHostUser(long idHostUser) {
		this.idHostUser = idHostUser;
	}
}
