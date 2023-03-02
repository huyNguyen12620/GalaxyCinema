import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuFilm() {
  return (
    <div className="movies-menu">
      <div className="container">
        <div className="movies-list">
          <nav>
            <div className="nav movies-select" id="nav-tab" role="tablist">
              <button
                className="movies-btn active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Phim đang chiếu
              </button>
              <button
                className="movies-btn"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Phim sắp chiếu
              </button>
            </div>
          </nav>
          <div className="tab-content list-film" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="movies1">
                <div className="list-card-item">
                  <div className="row">
                    <div className="col-4">
                      <div className="card-img">
                        <img src="https://picsum.photos/200/200" alt="" />
                        <div className="card-overlay">
                          <div className="card-overlay-content">
                            <p>C18</p>
                            <button>Mua vé</button>
                          </div>
                        </div>
                      </div>
                      <div className="card-name">
                        <p>Nhà bà nữ</p>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="card-img">
                        <img src="https://picsum.photos/200/200" alt="" />
                        <div className="card-overlay">
                          <div className="card-overlay-content">
                            <p>C18</p>
                            <button>Mua vé</button>
                          </div>
                        </div>
                      </div>
                      <div className="card-name">
                        <p>Nhà bà nữ</p>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="card-img">
                        <img src="https://picsum.photos/200/200" alt="" />
                        <div className="card-overlay">
                          <div className="card-overlay-content">
                            <p>C18</p>
                            <button>Mua vé</button>
                          </div>
                        </div>
                      </div>
                      <div className="card-name">
                        <p>Nhà bà nữ</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="list-card-item">
                  <div className="row">
                    <div className="col-4">
                      <div className="card-img">
                        <img src="https://picsum.photos/200/200" alt="" />
                        <div className="card-overlay">
                          <div className="card-overlay-content">
                            <p>C18</p>
                            <button>Mua vé</button>
                          </div>
                        </div>
                      </div>
                      <div className="card-name">
                        <p>Nhà bà nữ</p>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="card-img">
                        <img src="https://picsum.photos/200/200" alt="" />
                        <div className="card-overlay">
                          <div className="card-overlay-content">
                            <p>C18</p>
                            <button>Mua vé</button>
                          </div>
                        </div>
                      </div>
                      <div className="card-name">
                        <p>Nhà bà nữ</p>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="card-img">
                        <img src="https://picsum.photos/200/200" alt="" />
                        <div className="card-overlay">
                          <div className="card-overlay-content">
                            <p>C18</p>
                            <button>Mua vé</button>
                          </div>
                        </div>
                      </div>
                      <div className="card-name">
                        <p>Nhà bà nữ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="movies1">
                <div className="list-card-item">
                  <div className="row">
                    <div className="col-4">
                      <div className="card-img">
                        <img src="https://picsum.photos/200/200" alt="" />
                        <div className="card-overlay">
                          <div className="card-overlay-content">
                            <p>C18</p>
                            <button>Mua vé</button>
                          </div>
                        </div>
                      </div>
                      <div className="card-name">
                        <p>Vong nhi</p>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="card-img">
                        <img src="https://picsum.photos/200/200" alt="" />
                        <div className="card-overlay">
                          <div className="card-overlay-content">
                            <p>C18</p>
                            <button>Mua vé</button>
                          </div>
                        </div>
                      </div>
                      <div className="card-name">
                        <p>Vong nhi</p>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="card-img">
                        <img src="https://picsum.photos/200/200" alt="" />
                        <div className="card-overlay">
                          <div className="card-overlay-content">
                            <p>C18</p>
                            <button>Mua vé</button>
                          </div>
                        </div>
                      </div>
                      <div className="card-name">
                        <p>Vong nhi</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="list-card-item">
                  <div className="row">
                    <div className="col-4">
                      <div className="card-img">
                        <img src="https://picsum.photos/200/200" alt="" />
                        <div className="card-overlay">
                          <div className="card-overlay-content">
                            <p>C18</p>
                            <button>Mua vé</button>
                          </div>
                        </div>
                      </div>
                      <div className="card-name">
                        <p>Vong nhi</p>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="card-img">
                        <img src="https://picsum.photos/200/200" alt="" />
                        <div className="card-overlay">
                          <div className="card-overlay-content">
                            <p>C18</p>
                            <button>Mua vé</button>
                          </div>
                        </div>
                      </div>
                      <div className="card-name">
                        <p>Vong nhi</p>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="card-img">
                        <img src="https://picsum.photos/200/200" alt="" />
                        <div className="card-overlay">
                          <div className="card-overlay-content">
                            <p>C18</p>
                            <button>Mua vé</button>
                          </div>
                        </div>
                      </div>
                      <div className="card-name">
                        <p>Vong nhi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="more-btn">
            Xem thêm <i class="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>

        <div className="movies-content">
          <div className="row">
            <div className="col-6">
              <h2 className="movies-content-title">
                <NavLink to={""}>Bình luận phim</NavLink>
              </h2>
              <div className="movies-comment">
                <div
                  className="card mb-3 card-comment"
                  style={{ maxWidth: 540 }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div className="comment-img">
                        <img
                          src="https://picsum.photos/200/200"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                        <div className="comment-img-overlay"></div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="card-title">
                          <NavLink to={""}>
                            [Review] M3GAN: Khi "Cúp Bế" Trỗi Dậy Làm Chủ Con
                            Người
                          </NavLink>
                        </div>
                        <p className="card-text">
                          <div className="card-text-item">
                            <i class="fa fa-eye">
                              {" "}
                              <p>1878</p>
                            </i>
                            <i class="fas fa-star">
                              <p> 8.8 / 10</p>
                            </i>
                          </div>
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Vừa hấp dẫn, vừa giải trí, M3GAN hoàn toàn xứng đáng
                            với những lời khen từ đại chúng và các nhà phê bình.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="card mb-3 card-comment"
                  style={{ maxWidth: 540 }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div className="comment-img">
                        <img
                          src="https://picsum.photos/200/200"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                        <div className="comment-img-overlay"></div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="card-title">
                          <NavLink to={""}>
                            [Review] M3GAN: Khi "Cúp Bế" Trỗi Dậy Làm Chủ Con
                            Người
                          </NavLink>
                        </div>
                        <p className="card-text">
                          <div className="card-text-item">
                            <i class="fa fa-eye">
                              {" "}
                              <p>1878</p>
                            </i>
                            <i class="fas fa-star">
                              <p> 8.8 / 10</p>
                            </i>
                          </div>
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Vừa hấp dẫn, vừa giải trí, M3GAN hoàn toàn xứng đáng
                            với những lời khen từ đại chúng và các nhà phê bình.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="card mb-3 card-comment"
                  style={{ maxWidth: 540 }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div className="comment-img">
                        <img
                          src="https://picsum.photos/200/200"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                        <div className="comment-img-overlay"></div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="card-title">
                          <NavLink to={""}>
                            [Review] M3GAN: Khi "Cúp Bế" Trỗi Dậy Làm Chủ Con
                            Người
                          </NavLink>
                        </div>
                        <p className="card-text">
                          <div className="card-text-item">
                            <i class="fa fa-eye">
                              {" "}
                              <p>1878</p>
                            </i>
                            <i class="fas fa-star">
                              <p> 8.8 / 10</p>
                            </i>
                          </div>
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Vừa hấp dẫn, vừa giải trí, M3GAN hoàn toàn xứng đáng
                            với những lời khen từ đại chúng và các nhà phê bình.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6">
              <h2 className="movies-content-title">
                <NavLink to={""}> Blog điện ảnh</NavLink>
              </h2>
              <div className="movies-comment">
                <div
                  className="card mb-3 card-comment"
                  style={{ maxWidth: 540 }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div className="comment-img">
                        <img
                          src="https://picsum.photos/200/200"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                        <div className="comment-img-overlay"></div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="card-title">
                          <NavLink to={""}>
                            [Review] M3GAN: Khi "Cúp Bế" Trỗi Dậy Làm Chủ Con
                            Người
                          </NavLink>
                        </div>
                        <p className="card-text">
                          <div className="card-text-item">
                            <i class="fa fa-eye">
                              {" "}
                              <p>1878</p>
                            </i>
                            <i class="fas fa-star">
                              <p> 8.8 / 10</p>
                            </i>
                          </div>
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Vừa hấp dẫn, vừa giải trí, M3GAN hoàn toàn xứng đáng
                            với những lời khen từ đại chúng và các nhà phê bình.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="card mb-3 card-comment"
                  style={{ maxWidth: 540 }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div className="comment-img">
                        <img
                          src="https://picsum.photos/200/200"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                        <div className="comment-img-overlay"></div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="card-title">
                          <NavLink to={""}>
                            [Review] M3GAN: Khi "Cúp Bế" Trỗi Dậy Làm Chủ Con
                            Người
                          </NavLink>
                        </div>
                        <p className="card-text">
                          <div className="card-text-item">
                            <i class="fa fa-eye">
                              {" "}
                              <p>1878</p>
                            </i>
                            <i class="fas fa-star">
                              <p> 8.8 / 10</p>
                            </i>
                          </div>
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Vừa hấp dẫn, vừa giải trí, M3GAN hoàn toàn xứng đáng
                            với những lời khen từ đại chúng và các nhà phê bình.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="card mb-3 card-comment"
                  style={{ maxWidth: 540 }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div className="comment-img">
                        <img
                          src="https://picsum.photos/200/200"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                        <div className="comment-img-overlay"></div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="card-title">
                          <NavLink to={""}>
                            [Review] M3GAN: Khi "Cúp Bế" Trỗi Dậy Làm Chủ Con
                            Người
                          </NavLink>
                        </div>
                        <p className="card-text">
                          <div className="card-text-item">
                            <i class="fa fa-eye">
                              {" "}
                              <p>1878</p>
                            </i>
                            <i class="fas fa-star">
                              <p> 8.8 / 10</p>
                            </i>
                          </div>
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Vừa hấp dẫn, vừa giải trí, M3GAN hoàn toàn xứng đáng
                            với những lời khen từ đại chúng và các nhà phê bình.
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="promotion">
          <div className="promotion-title">
            <NavLink to={""}>Tin khuyến mãi</NavLink>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="promotion-item">
                <div className="promotion-item-img">
                  <img src="https://picsum.photos/200/200" alt="" />
                </div>
                <div className="promotion-item-overlay">
                  <div className="overlay-item">
                    <NavLink to={""}>
                      <div className="info">
                      <h3>Chào 2023 đón mưa quà</h3>
                      <p>
                     <i> Chỉ cần là thành viên Galaxy Cinema, nhận ngay 1 bắp 2
                      nước!</i>
                      </p>
                      </div>
                    </NavLink>
                    <div className="promotion-detail-btn">
                <button>
                  <NavLink to={''}>Chi tiết</NavLink>
                </button>
                </div>
                  </div>
                </div>
               
              </div>
            </div>

            <div className="col-3">
            <div className="promotion-item">
                <div className="promotion-item-img">
                  <img src="https://picsum.photos/200/200" alt="" />
                </div>
                <div className="promotion-item-overlay">
                  <div className="overlay-item">
                    <NavLink to={""}>
                      <div className="info">
                      <h3>Chào 2023 đón mưa quà</h3>
                      <p>
                     <i> Chỉ cần là thành viên Galaxy Cinema, nhận ngay 1 bắp 2
                      nước!</i>
                      </p>
                      </div>
                    </NavLink>
                    <div className="promotion-detail-btn">
                <button>
                  <NavLink to={''}>Chi tiết</NavLink>
                </button>
                </div>
                  </div>
                </div>
               
              </div>
            </div>

            <div className="col-3">
            <div className="promotion-item">
                <div className="promotion-item-img">
                  <img src="https://picsum.photos/200/200" alt="" />
                </div>
                <div className="promotion-item-overlay">
                  <div className="overlay-item">
                    <NavLink to={""}>
                      <div className="info">
                      <h3>Chào 2023 đón mưa quà</h3>
                      <p>
                     <i> Chỉ cần là thành viên Galaxy Cinema, nhận ngay 1 bắp 2
                      nước!</i>
                      </p>
                      </div>
                    </NavLink>
                    <div className="promotion-detail-btn">
                <button>
                  <NavLink to={''}>Chi tiết</NavLink>
                </button>
                </div>
                  </div>
                </div>
               
              </div>
            </div>

            <div className="col-3">
            <div className="promotion-item">
                <div className="promotion-item-img">
                  <img src="https://picsum.photos/200/200" alt="" />
                </div>
                <div className="promotion-item-overlay">
                  <div className="overlay-item">
                    <NavLink to={""}>
                      <div className="info">
                      <h3>Chào 2023 đón mưa quà</h3>
                      <p>
                     <i> Chỉ cần là thành viên Galaxy Cinema, nhận ngay 1 bắp 2
                      nước!</i>
                      </p>
                      </div>
                    </NavLink>
                    <div className="promotion-detail-btn">
                <button>
                  <NavLink to={''}>Chi tiết</NavLink>
                </button>
                </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>

          <div className="col-3">
          <div className="promotion-item">
                <div className="promotion-item-img">
                  <img src="https://picsum.photos/200/200" alt="" />
                </div>
                <div className="promotion-item-overlay">
                  <div className="overlay-item">
                    <NavLink to={""}>
                      <div className="info">
                      <h3>Chào 2023 đón mưa quà</h3>
                      <p>
                     <i> Chỉ cần là thành viên Galaxy Cinema, nhận ngay 1 bắp 2
                      nước!</i>
                      </p>
                      </div>
                    </NavLink>
                    <div className="promotion-detail-btn">
                <button>
                  <NavLink to={''}>Chi tiết</NavLink>
                </button>
                </div>
                  </div>
                </div>
               
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
