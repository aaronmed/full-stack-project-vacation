package com.aaron.backend.mutation;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.aaron.backend.entity.models.Advert;
import com.aaron.backend.services.IAdvertService;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;

@Component
public class AdvertMutation implements GraphQLMutationResolver {

	@Autowired
	private IAdvertService advertService;

	public Advert createAdvert(String description, String address, Date datePublished, float priceByNight, int numGuest,
			int numBathroom, int numBedroom, int numBed, long idHostUser) {
		return advertService.addAdvert(new Advert(description, address, datePublished, priceByNight, numGuest,
				numBathroom, numBedroom, numBed, idHostUser));
	}
}
