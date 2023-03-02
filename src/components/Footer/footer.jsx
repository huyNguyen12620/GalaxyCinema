import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer-cinema'>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="list-contact">
                <h2>Giới thiệu</h2>
                <ul>
                  <li><NavLink to={''}><i class="fa-solid fa-chevron-right"></i> Về chúng tôi</NavLink></li>
                  <li><NavLink to={''}><i class="fa-solid fa-chevron-right"></i> Thỏa thuận sử dụng</NavLink></li>
                  <li><NavLink to={''}><i class="fa-solid fa-chevron-right"></i> Quy chế hoạt động</NavLink></li>
                  <li><NavLink to={''}><i class="fa-solid fa-chevron-right"></i> Chính sách bảo mật</NavLink></li>
                </ul>
              </div>
            </div>

            <div className="col-3">
              <div className="list-contact">
                <h2>Góc điện ảnh</h2>
                <ul>
                  <li><NavLink to={''}><i class="fa-solid fa-chevron-right"></i> Về chúng tôi</NavLink></li>
                  <li><NavLink to={''}><i class="fa-solid fa-chevron-right"></i> Thỏa thuận sử dụng</NavLink></li>
                  <li><NavLink to={''}><i class="fa-solid fa-chevron-right"></i> Quy chế hoạt động</NavLink></li>
                  <li><NavLink to={''}><i class="fa-solid fa-chevron-right"></i> Chính sách bảo mật</NavLink></li>
                </ul>
              </div>
            </div>

            <div className="col-3">
              <div className="list-contact">
                <h2>Hỗ trợ</h2>
                <ul>
                  <li><NavLink to={''}><i class="fa-solid fa-chevron-right"></i> Về chúng tôi</NavLink></li>
                  <li><NavLink to={''}><i class="fa-solid fa-chevron-right"></i> Thỏa thuận sử dụng</NavLink></li>
                  <li><NavLink to={''}><i class="fa-solid fa-chevron-right"></i> Quy chế hoạt động</NavLink></li>
                  <li><NavLink to={''}><i class="fa-solid fa-chevron-right"></i> Chính sách bảo mật</NavLink></li>
                </ul>
              </div>
            </div>

            <div className="col-3">
              <div className="list-contact">
                <h2>Kết nối galaxy cinema</h2>
                <ul>
                  <li>
                   <NavLink to={'https://www.facebook.com/galaxycinevn/'} target={'_blank'}> <i class="fa-brands fa-square-facebook"></i></NavLink>
                   <NavLink to={'https://www.youtube.com/user/galaxymovies'} target={'_blank'}> <i class="fa-brands fa-youtube"></i></NavLink>
                    <NavLink to={'https://www.instagram.com/galaxycinema/'} target={'_blank'}><i class="fa-brands fa-instagram"></i></NavLink>
                  </li>
                  <li><h2>Download app</h2></li>
                  <li>
                  <NavLink to={'https://apps.apple.com/vn/app/galaxy-cinema/id593312549?l=vi'} target={'_blank'}><i class="fa-brands fa-apple"></i></NavLink>
                 <NavLink to={'https://play.google.com/store/apps/details?id=com.galaxy.cinema&hl=vi&pli=1'} target={'_blank'}> <i class="fa-brands fa-google-play"></i></NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
