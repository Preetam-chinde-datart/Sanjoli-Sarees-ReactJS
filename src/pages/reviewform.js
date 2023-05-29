import React, { useState } from 'react';
import "bootstrap";
import './reviewform.css'
import {Rating} from 'react-simple-star-rating';

function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the rating and comment to the server
  };

  return (


    <>
    <button
    type="button"
    className="btn btn-primary "
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    data-bs-whatever="@mdo"
  >
   Add Review
  </button>

      <div className="modal fade" id="exampleModal" tabIndex={-1}  aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                  
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
              <div className="modal-body">
              <form onSubmit={handleSubmit}>

                  <h5>Add review</h5>
                  <h6 className='text-grey'>We would love to read your feedbacks. </h6>
                  <div>
                    <label htmlFor="rating" className='text-grey'>Rating:</label><br></br>
                    <Rating
                      id="rating"
                      ratingValue={rating}
                      className='star'
                      onClick={(value) => setRating(value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="comment" className='text-grey'>Your Review</label><br></br>
                    <textarea
                      id="comment"
                      value={comment}
                      onChange={(event) => setComment(event.target.value)}
                      className='review-area text-grey'
                    />
                  </div>
                  <button type="submit" className='review-btn'>Submit</button>
              </form>

               
                {/* <div class="modal-footer"> */}
              
              </div>
            </div>
          </div>
        </div>








    
    </>
  );
}

export default ReviewForm;
