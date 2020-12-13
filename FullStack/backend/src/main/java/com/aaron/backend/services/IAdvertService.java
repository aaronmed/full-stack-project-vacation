package com.aaron.backend.services;

import java.util.List;
import java.util.Optional;

import com.aaron.backend.entity.models.Advert;

public interface IAdvertService {
	
	public List<Advert> getAll();
	
	public Optional<Advert> getAdvertById(long id);
	
	public Advert addAdvert(Advert advert);
	
	public void deleteAdvert(long id);
	
	public Advert updateAdvert(long id, Advert advert);
}
