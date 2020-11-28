package com.aaron.backend.services;

import java.util.List;
import java.util.Optional;

import com.aaron.backend.entity.models.Review;

public interface IReviewService {

	public List<Review> getAll();

	public Optional<Review> getReviewById(long id);

	public Review addReview(Review review);

	public void deleteReview(long id);

	public Review updateReview(long id, Review review);
}
