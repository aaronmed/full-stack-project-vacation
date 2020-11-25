package com.aaron.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aaron.backend.entity.dao.IAdvertDao;
import com.aaron.backend.entity.models.Advert;

@Service
public class AdvertServiceImpl implements IAdvertService {
	
	@Autowired
	private IAdvertDao advertDao;
	
	@Override
	public List<Advert> getAll(){
		return (List<Advert>) advertDao.findAll();
	}
	
	@Override
	public Advert addAdvert(Advert advert) {
		return advertDao.save(advert);
	}
	
	@Override
	public void deleteAdvert(long id) {
		advertDao.deleteById(id);
	}
	
	@Override
	public void updateAdvert(long id, Advert advert) {
		Optional<Advert> advertInDB = advertDao.findById(id);
		
		if(advertInDB.isPresent()) {
			advert.setId(advertInDB.get().getId());
			advertDao.save(advert);
		}
	}
	
	@Override
	public Optional<Advert> getAdvertById(long id){
		return advertDao.findById(id);
	}

}
