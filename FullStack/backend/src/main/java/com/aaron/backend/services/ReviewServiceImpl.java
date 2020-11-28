package com.aaron.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aaron.backend.entity.dao.IReviewDao;
import com.aaron.backend.entity.models.Review;

@Service
public class ReviewServiceImpl implements IReviewService {

	@Autowired
	private IReviewDao reviewDao;

	@Override
	public List<Review> getAll() {
		return (List<Review>) reviewDao.findAll();
	}

	@Override
	public Review addReview(Review review) {
		return reviewDao.save(review);
	}

	@Override
	public void deleteReview(long id) {
		reviewDao.deleteById(id);
	}

	@Override
	public Review updateReview(long id, Review review) {
		Optional<Review> reviewInDB = reviewDao.findById(id);

		if (reviewInDB.isPresent()) {
			review.setId(reviewInDB.get().getId());
		}
		return reviewDao.save(review);
	}

	@Override
	public Optional<Review> getReviewById(long id) {
		return reviewDao.findById(id);
	}

}
