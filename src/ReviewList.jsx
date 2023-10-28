import { useState } from 'react';

const ReviewList = () => {
  const [reviews] = useState([
    'Great service! The staff was very helpful.',
    'The product quality is excellent. Will buy again!',
    'Fast shipping and great packaging. Highly recommended!',
  ]);

  return (
    <div>
      <h2>Reviews:</h2>
      <ul>
        {reviews.length === 0 ? (
          <li>No reviews yet.</li>
        ) : (
          reviews.map((review, index) => <li key={index}>{review}</li>)
        )}
      </ul>
    </div>
  );
};

export default ReviewList;
