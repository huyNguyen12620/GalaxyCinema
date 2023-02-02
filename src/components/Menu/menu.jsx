import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu-main">
      <div className="container">
        <div className="menu-list">
          <ul>
            <li><NavLink to={''}>Mua vé</NavLink></li>
            <li>
              <div class="dropdown">
                <div class="drop">Phim</div>
                <div class="dropdown-content">
                  <NavLink to={''}>Link 1</NavLink>
                  <NavLink to={''}>Link 2</NavLink>
                  <NavLink to={''}>Link 3</NavLink>
                </div>
              </div>
            </li>
            <li>
              <div class="dropdown">
                <div class="drop">Góc điện ảnh</div>
                <div class="dropdown-content">
                  <NavLink to={''}>Link 1</NavLink>
                  <NavLink to={''}>Link 2</NavLink>
                  <NavLink to={''}>Link 3</NavLink>
                </div>
              </div>
            </li>
            <li>
              <div class="dropdown">
                <div class="drop">Sự kiện</div>
                <div class="dropdown-content">
                  <NavLink to={''}>Link 1</NavLink>
                  <NavLink to={''}>Link 2</NavLink>
                  <NavLink to={''}>Link 3</NavLink>
                </div>
              </div>
            </li>
            <li><NavLink to={''}>Rạp/Giá vé</NavLink></li>
            <li><NavLink to={''}>Hỗ trợ</NavLink></li>
            <li><NavLink to={''}>Thành viên</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
