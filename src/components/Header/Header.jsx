import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Header() {
  return (
  <div className="container">

     <div className='galaxy-header'>
        <div className="galaxy-header-item">
              <h1 ><NavLink to="" className={'galaxy-title'}>GalxyCinema</NavLink></h1>
        </div>

        <div className="galaxy-header-item">
              <input   name="" id="" className='form-control ' placeholder='Tìm tên phim, diễn viên'/>
        </div>

        <div className="galaxy-header-item login">
              <NavLink className={'login-btn'} to="">Đăng nhập</NavLink>
              <p  className='login-language'>VN | EN</p>
        </div>
        

   </div>

  </div>
  )
}
