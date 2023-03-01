import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu-main">
      <div className="container">
        <div className="menu-list">
          <ul>
            <li><NavLink to={'/buyticket'}>Mua vé</NavLink></li>
            <li>
              <div class="dropdown">
                <div class="drop">Phim</div>
                <div class="dropdown-content ">
                  <div className="dropdown-movies1">
                    
                  <div className="dropdown-title">
                  <p>Phim đang chiếu</p>
                  </div>
                  <div className="row">
                    <div className="col-3 ">
                      <div className="item-dropdown">
                      <div className="dropdown-movies-img">
                        <img src="https://picsum.photos/200/200" alt="..." />
                        <p>Nhà bà nữ</p>
                      </div>
                      <div className="dropdown-movies-overlay"> 
                        <div className="btn-overlay">
                          <button>Mua vé</button>
                        </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                      <div className="item-dropdown">
                      <div className="dropdown-movies-img">
                        <img src="https://picsum.photos/200/200" alt="..." />
                        <p>Chị chị em em 2</p>
                      </div>
                      <div className="dropdown-movies-overlay"> 
                        <div className="btn-overlay">
                          <button>Mua vé</button>
                        </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                      <div className="item-dropdown">
                      <div className="dropdown-movies-img">
                        <img src="https://picsum.photos/200/200" alt="..." />
                        <p>Vong nhi</p>
                      </div>
                      <div className="dropdown-movies-overlay"> 
                        <div className="btn-overlay">
                          <button>Mua vé</button>
                        </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                      <div className="item-dropdown">
                      <div className="dropdown-movies-img">
                        <img src="https://picsum.photos/200/200" alt="..." />
                        <p>KNOCK AT THE CABIN</p>
                      </div>
                      <div className="dropdown-movies-overlay"> 
                        <div className="btn-overlay">
                          <button>Mua vé</button>
                        </div>
                        </div>
                        </div>
                    </div>
                  </div>

                  </div>

                 
                 <div className="dropdown-movies2">
                 <div className="dropdown-title">
                  <p>Phim sắp chiếu</p>
                  </div>
                  <div className="row">
                  <div className="col-3 ">
                      <div className="item-dropdown">
                      <div className="dropdown-movies-img">
                        <img src="https://picsum.photos/200/200" alt="..." />
                        <p>Titanic</p>
                      </div>
                      <div className="dropdown-movies-overlay"> 
                        <div className="btn-overlay">
                          <button>Mua vé</button>
                        </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                      <div className="item-dropdown">
                      <div className="dropdown-movies-img">
                        <img src="https://picsum.photos/200/200" alt="..." />
                        <p>Ditto</p>
                      </div>
                      <div className="dropdown-movies-overlay"> 
                        <div className="btn-overlay">
                          <button>Mua vé</button>
                        </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                      <div className="item-dropdown">
                      <div className="dropdown-movies-img">
                        <img src="https://picsum.photos/200/200" alt="..." />
                        <p>TO EVERY YOU I'VE LOVED BEFORE</p>
                      </div>
                      <div className="dropdown-movies-overlay"> 
                        <div className="btn-overlay">
                          <button>Mua vé</button>
                        </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                      <div className="item-dropdown">
                      <div className="dropdown-movies-img">
                        <img src="https://picsum.photos/200/200" alt="..." />
                        <p>TO ME, THE ONE WHO LOVED YOU</p>
                      </div>
                      <div className="dropdown-movies-overlay"> 
                        <div className="btn-overlay">
                          <button btn btn-danger>Mua vé</button>
                        </div>
                        </div>
                        </div>
                    </div>
                  </div>
                 </div>



                </div>
              </div>
            </li>
            <li>
              <div class="dropdown">
                <div class="drop">Góc điện ảnh</div>
                <div class="dropdown-content">
                  <NavLink to={''}>Thể loại phim</NavLink>
                  <NavLink to={''}>Diễn viên</NavLink>
                  <NavLink to={''}>Đạo diễn</NavLink>
                  <NavLink to={''}>Bình luận phim</NavLink>
                  <NavLink to={''}>Blog điện ảnh</NavLink>

                </div>
              </div>
            </li>
            <li>
              <div class="dropdown">
                <div class="drop">Sự kiện</div>
                <div class="dropdown-content">
                  <NavLink to={''}>Ưu đãi</NavLink>
                  <NavLink to={''}>Phim hay tháng</NavLink>
                
                </div>
              </div>
            </li>
            <li><NavLink to={'/theaterandticket'}>Rạp/Giá vé</NavLink></li>
            <li><NavLink to={'/support'}>Hỗ trợ</NavLink></li>
            <li><NavLink to={'/member'}>Thành viên</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
