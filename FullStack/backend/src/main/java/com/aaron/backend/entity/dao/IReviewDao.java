package com.aaron.backend.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aaron.backend.entity.models.Review;

public interface IReviewDao extends JpaRepository<Review, Long> {

}
