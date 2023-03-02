import React from 'react'
import { NavLink } from 'react-router-dom';

export default function BuyTicket() {
  return (
    <div className='buyTicket-main'>
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
                Theo phim
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
               Theo rạp
              </button>
            </div>
          </nav>
          <div className="tab-content " id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
                <div className="menuTicket1">
                      <div className="row">
                        <div className="col-4">
                          <div className="film">
                          <h1>Chọn phim</h1>
                          <NavLink to={''} className="film-list">
                              <div className="film-list-content">
                              <div className="film-img">
                                <img src="https://picsum.photos/200/200" alt="..." />
                              </div> 
                              <div className="film-title">
                                <p>Nhà bà nữ</p>
                               
                              </div>
                              <div className="film-number">
                                  <p>C16</p>
                              </div>
                              </div>
                              </NavLink>
                              <NavLink to={''} className="film-list">
                              <div className="film-list-content">
                              <div className="film-img">
                                <img src="https://picsum.photos/200/200" alt="..." />
                              </div> 
                              <div className="film-title">
                                <p>Nhà bà nữ</p>
                               
                              </div>
                              <div className="film-number">
                                  <p>C16</p>
                              </div>
                              </div>
                              </NavLink>

                              <NavLink to={''} className="film-list">
                              <div className="film-list-content">
                              <div className="film-img">
                                <img src="https://picsum.photos/200/200" alt="..." />
                              </div> 
                              <div className="film-title">
                                <p>Nhà bà nữ</p>
                               
                              </div>
                              <div className="film-number">
                                  <p>C16</p>
                              </div>
                              </div>
                              </NavLink>

                              <NavLink to={''} className="film-list">
                              <div className="film-list-content">
                              <div className="film-img">
                                <img src="https://picsum.photos/200/200" alt="..." />
                              </div> 
                              <div className="film-title">
                                <p>Nhà bà nữ</p>
                               
                              </div>
                              <div className="film-number">
                                  <p>C16</p>
                              </div>
                              </div>
                              </NavLink>
                         
                          </div>
                        </div>
                        <div className="col-4">
                         <div className="theater">
                         <h1>Chọn rạp</h1>
                            <div className="movie-theater-content">
                            
                            <NavLink to={''}><p>Galaxy Nguyễn Du</p></NavLink>
                            
                            </div>
                            <div className="movie-theater-content">
                            <NavLink to={''} >
                              <p>Galaxy Nguyễn Du</p>
                            </NavLink>
                            </div>
                            <div className="movie-theater-content">
                            <NavLink to={''} >
                              <p>Galaxy Nguyễn Du</p>
                            </NavLink>
                            </div>
                            <div className="movie-theater-content">
                            <NavLink to={''} >
                              <p>Galaxy Nguyễn Du</p>
                            </NavLink>
                            </div>
                            <div className="movie-theater-content">
                            <NavLink to={''} >
                              <p>Galaxy Nguyễn Du</p>
                            </NavLink>
                            </div>
                            <div className="movie-theater-content">
                            <NavLink to={''} >
                              <p>Galaxy Nguyễn Du</p>
                            </NavLink>
                            </div>
                            <div className="movie-theater-content">
                            <NavLink to={''} >
                              <p>Galaxy Nguyễn Du</p>
                            </NavLink>
                            </div>
                         </div>
                        </div> <div className="col-4">
                              <div className="rate">
                              <h1>Chọn suất</h1>
                          <div className="movie-time">
                                <div className="movie-time-content">
                                <h4>Thứ tư, 15/02/2023</h4>
                                   <div className="movie-time-text">
                                   <p>2D - Phụ đề</p>
                                   <div className="movie-time-btn">
                                    <button>22:15</button>
                                    <button>22:15</button>
                                    <button>22:15</button>
                                    <button>22:15</button>
                                    <button>22:15</button>

                                    </div>
                                   </div>
                                    
                                </div>
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
             <div className="menuTicket2">
             <div className="row">
              <div className="col-4">
                         <div className="theater">
                         <h1>Chọn rạp</h1>
                            <div className="movie-theater-content">
                            
                            <NavLink to={''}><p>Galaxy Nguyễn Du</p></NavLink>
                            
                            </div>
                            <div className="movie-theater-content">
                            <NavLink to={''} >
                              <p>Galaxy Nguyễn Du</p>
                            </NavLink>
                            </div>
                            <div className="movie-theater-content">
                            <NavLink to={''} >
                              <p>Galaxy Nguyễn Du</p>
                            </NavLink>
                            </div>
                            <div className="movie-theater-content">
                            <NavLink to={''} >
                              <p>Galaxy Nguyễn Du</p>
                            </NavLink>
                            </div>
                            <div className="movie-theater-content">
                            <NavLink to={''} >
                              <p>Galaxy Nguyễn Du</p>
                            </NavLink>
                            </div>
                            <div className="movie-theater-content">
                            <NavLink to={''} >
                              <p>Galaxy Nguyễn Du</p>
                            </NavLink>
                            </div>
                            <div className="movie-theater-content">
                            <NavLink to={''} >
                              <p>Galaxy Nguyễn Du</p>
                            </NavLink>
                            </div>
                         </div>
                        </div> 

                        <div className="col-4">
                          <div className="film">
                          <h1>Chọn phim</h1>
                          <NavLink to={''} className="film-list">
                              <div className="film-list-content">
                              <div className="film-img">
                                <img src="https://picsum.photos/200/200" alt="..." />
                              </div> 
                              <div className="film-title">
                                <p>Nhà bà nữ</p>
                               
                              </div>
                              <div className="film-number">
                                  <p>C16</p>
                              </div>
                              </div>
                              </NavLink>
                              <NavLink to={''} className="film-list">
                              <div className="film-list-content">
                              <div className="film-img">
                                <img src="https://picsum.photos/200/200" alt="..." />
                              </div> 
                              <div className="film-title">
                                <p>Nhà bà nữ</p>
                               
                              </div>
                              <div className="film-number">
                                  <p>C16</p>
                              </div>
                              </div>
                              </NavLink>

                              <NavLink to={''} className="film-list">
                              <div className="film-list-content">
                              <div className="film-img">
                                <img src="https://picsum.photos/200/200" alt="..." />
                              </div> 
                              <div className="film-title">
                                <p>Nhà bà nữ</p>
                               
                              </div>
                              <div className="film-number">
                                  <p>C16</p>
                              </div>
                              </div>
                              </NavLink>

                              <NavLink to={''} className="film-list">
                              <div className="film-list-content">
                              <div className="film-img">
                                <img src="https://picsum.photos/200/200" alt="..." />
                              </div> 
                              <div className="film-title">
                                <p>Nhà bà nữ</p>
                               
                              </div>
                              <div className="film-number">
                                  <p>C16</p>
                              </div>
                              </div>
                              </NavLink>
                         
                          </div>
                        </div>

                        <div className="col-4">
                              <div className="rate">
                              <h1>Chọn suất</h1>
                          <div className="movie-time">
                                <div className="movie-time-content">
                                <h4>Thứ tư, 15/02/2023</h4>
                                   <div className="movie-time-text">
                                   <p>2D - Phụ đề</p>
                                   <div className="movie-time-btn">
                                    <button>22:15</button>
                                    <button>22:15</button>
                                    <button>22:15</button>
                                    <button>22:15</button>
                                    <button>22:15</button>

                                    </div>
                                   </div>
                                    
                                </div>
                          </div>
                              </div>
                        </div>
              </div>
             </div>
              
            </div>
          </div>

         
        </div>
        </div>
      </div>
  )
}
