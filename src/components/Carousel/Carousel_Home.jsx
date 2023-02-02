import React from "react";

export default function Carousel_Home() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={4}
            aria-label="Slide 5"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={5}
            aria-label="Slide 6"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={6}
            aria-label="Slide 7"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={7}
            aria-label="Slide 8"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={8}
            aria-label="Slide 9"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://picsum.photos/200/200"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/200/200"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/200/200"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/200/200"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/200/200"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/200/200"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/200/200"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/200/200"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="quick-buy-ticket">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link "
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Theo phim
            </button>
           
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Profile
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Contact
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
          <div className="select-ticket">
<div className="select-all">
  <ul>
    <li>
      <select name="" id="">
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
      </select>
    </li>
    <li>
      <select name="" id="">
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
      </select>
    </li>
    <li>
      <select name="" id="">
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
      </select>
    </li>
    <li>
      <select name="" id="">
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
      </select>
    </li>
  </ul>
</div>
  <button className="btn-buy-ticket">
    Mua vé
  </button>
</div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="select-ticket">
<div className="select-all">
  <ul>
    <li>
      <select name="" id="">
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
      </select>
    </li>
    <li>
      <select name="" id="">
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
      </select>
    </li>
    <li>
      <select name="" id="">
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
      </select>
    </li>
    <li>
      <select name="" id="">
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
      </select>
    </li>
  </ul>
</div>
  <button className="btn-buy-ticket">
    Mua vé
  </button>
</div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div className="select-ticket">
<div className="select-all">
  <ul>
    <li>
      <select name="" id="">
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
      </select>
    </li>
    <li>
      <select name="" id="">
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
      </select>
    </li>
    <li>
      <select name="" id="">
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
      </select>
    </li>
    <li>
      <select name="" id="">
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
        <option value="">Chọn phim</option>
      </select>
    </li>
  </ul>
</div>
  <button className="btn-buy-ticket">
    Mua vé
  </button>
</div>
          </div>
        </div>
      </div>
    </>
  );
}
