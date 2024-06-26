import "./StarRating.css"
export default function StarRating() {
  return (
    <div class="container-wrapper">
      <div class="container d-flex align-items-center justify-content-center">
        <div class="row justify-content-center">
          <div class="rating-wrapper">
            <input
              type="radio"
              id="5-star-rating"
              name="star-rating"
              value="5"
            />
            <label for="5-star-rating" class="star-rating">
              <i class="fas fa-star d-inline-block"></i>
            </label>

            <input
              type="radio"
              id="4-star-rating"
              name="star-rating"
              value="4"
            />
            <label for="4-star-rating" class="star-rating star">
              <i class="fas fa-star d-inline-block"></i>
            </label>

            <input
              type="radio"
              id="3-star-rating"
              name="star-rating"
              value="3"
            />
            <label for="3-star-rating" class="star-rating star">
              <i class="fas fa-star d-inline-block"></i>
            </label>

            <input
              type="radio"
              id="2-star-rating"
              name="star-rating"
              value="2"
            />
            <label for="2-star-rating" class="star-rating star">
              <i class="fas fa-star d-inline-block"></i>
            </label>

            <input
              type="radio"
              id="1-star-rating"
              name="star-rating"
              value="1"
            />
            <label for="1-star-rating" class="star-rating star">
              <i class="fas fa-star d-inline-block"></i>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
