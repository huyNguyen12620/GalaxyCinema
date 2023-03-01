import React from "react";
import { NavLink } from 'react-router-dom';

export default function Member() {
  return (
        <div className="container">
            <div className="member">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="member_btn active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Thể lệ
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="member_btn"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
           Quyền lợi
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="member_btn"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Hướng dẫn
          </button>
        </li>

        <li class="nav-item" role="presentation">
          <button
            class="member_btn"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-regist"
            type="button"
            role="tab"
            aria-controls="pills-regist"
            aria-selected="false"
          >
            Đăng ký
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
          <div className="rules_main">
                <div className="row">
                    <div className="col-8">
                        <div className="rule_title">
                            Thể lệ
                        </div>
                        <div className="rule_content">
                            <p>Chương trình khách hàng thân thiết Galaxy là chương trình ưu đãi dựa trên điểm tích lũy của các thành viên gồm Star, G-star, X-star. Với mỗi giao dịch tại hệ thống rạp Galaxy, bạn sẽ nhận được điểm thưởng tương ứng. Hình thức tích lũy như sau:</p>
                            <div className="rule_img">
                                <img src="https://picsum.photos/200/200" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                  <div className="support_buy_ticket">
                    <h2>Mua vé nhanh</h2>
                    <div className="support_buy_ticket_select">
                      <select
                        class="form-select "
                        aria-label="Default select example"
                      >
                        <option selected>Chọn phim</option>
                        <option value="1">Nhà bà nữ</option>
                        <option value="2">Vong nhi</option>
                        <option value="3">Chú bé đần</option>
                      </select>

                      <select
                        class="form-select "
                        aria-label="Default select example"
                      >
                        <option selected>Chọn rạp</option>
                        <option value="1">Galaxy Nguyễn Du</option>
                        <option value="2">Galaxy Kinh Dương Vương</option>
                        <option value="3">Galaxy Long Xuyen</option>
                      </select>

                      <select
                        class="form-select "
                        aria-label="Default select example"
                      >
                        <option selected>Chọn ngày</option>
                        <option value="1">Thứ 4, 22/02/2023</option>
                        <option value="2">Thứ 5, 23/02/2023</option>
                        <option value="3">Thứ 6, 24/02/2023</option>
                      </select>

                      <select
                        class="form-select "
                        aria-label="Default select example"
                      >
                        <option selected>Chọn suất</option>
                        <option value="1">2D - Phụ đề</option>
                        <option value="2">2D - Phụ đề</option>
                        <option value="3">2D - Phụ đề</option>
                      </select>
                    </div>
                    <button className="btnSupportBuyTicket">Mua vé</button>
                  </div>
                 
                  <div className="support_list_film">
                    <h2>Phim đang chiếu</h2>
                    <div className="support_list_film_item">
                    <img src="https://picsum.photos/200/200" alt="..." />
                      <NavLink to={""} className={"support_overlay"}>
                          <p>C13</p>
                          <button>Mua vé</button>
                      </NavLink>
                      <h3>ANT-MAN AND THE WASP: QUANTUMANIA</h3>
                    </div>

                    <div className="support_list_film_item">
                    <img src="https://picsum.photos/200/200" alt="..." />
                      <NavLink to={""} className={"support_overlay"}>
                          <p>C13</p>
                          <button>Mua vé</button>
                      </NavLink>
                      <h3>ANT-MAN AND THE WASP: QUANTUMANIA</h3>
                    </div>

                    <div className="support_list_film_item">
                    <img src="https://picsum.photos/200/200" alt="..." />
                      <NavLink to={""} className={"support_overlay"}>
                          <p>C13</p>
                          <button>Mua vé</button>
                      </NavLink>
                      <h3>ANT-MAN AND THE WASP: QUANTUMANIA</h3>
                    </div>

                    <div className="support_list_film_item">
                    <img src="https://picsum.photos/200/200" alt="..." />
                      <NavLink to={""} className={"support_overlay"}>
                          <p>C13</p>
                          <button>Mua vé</button>
                      </NavLink>
                      <h3>ANT-MAN AND THE WASP: QUANTUMANIA</h3>
                    </div>
                    <div className="allPage_support_btn">
                          <button>Xem thêm</button>
                      </div>
                  </div>
                </div>
                </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          ...
        </div>

        <div
          class="tab-pane fade show active"
          id="pills-regist"
          role="tabpanel"
          aria-labelledby="pills-regist-tab"
        >
          lô
        </div>
      </div>
    </div>
        </div>
  );
}
