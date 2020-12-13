package com.aaron.backend.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.aaron.backend.entity.models.Review;

public interface IReviewDao extends CrudRepository<Review, Long> {

}
