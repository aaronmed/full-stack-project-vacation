package com.aaron.backend.query;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.aaron.backend.entity.models.Advert;
import com.aaron.backend.services.IAdvertService;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;

@Component
public class AdvertQuery implements GraphQLQueryResolver {
	
	@Autowired
	private IAdvertService advertService;
	
	public List<Advert> getAdverts(){
		return advertService.getAll();
	}
	
	public Optional<Advert> getAdvert(final long id){
		return advertService.getAdvertById(id);
	}
}
