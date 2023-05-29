import React, { useState } from 'react';
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
    Sign Up
  </button>

      <div className="modal fade" id="exampleModal" tabIndex={-1}  aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                  {/* <h3>Let's create your account.</h3> */}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
              <div className="modal-body">
              {/* <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="rating">Rating:</label>
                    <Rating
                      id="rating"
                      ratingValue={rating}
                      onClick={(value) => setRating(value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                      id="comment"
                      value={comment}
                      onChange={(event) => setComment(event.target.value)}
                    />
                  </div>
                  <button type="submit">Submit</button>
              </form> */}

               
                {/* <div class="modal-footer"> */}
              
              </div>
            </div>
          </div>
        </div>








    
    </>
  );
}

export default ReviewForm;
