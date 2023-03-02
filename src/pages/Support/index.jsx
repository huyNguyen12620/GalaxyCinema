import React from "react";
import { NavLink } from "react-router-dom";

export default function Support() {
  return (
    <div className="support-main">
      <div className="container">
        <div className="support">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class=" support-btn-title "
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                
              >
               Tuyển dụng
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="support-btn-title"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Góp ý
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="support-btn-title"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Giải đáp
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
              <div className="row">
                <div className="col-8">
                  <div className="support_work_list">
                    <div className="support_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >
                       <i class="fa-solid fa-plus"></i> Giám sát hoạt động rạp chiếu phim galaxy Galaxy Huỳnh Tấn Phát (Quận 7)
                      </button>
                      <div class="collapse" id="collapseExample1">
                        <div class="support-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Quản lý & đào tạo nghiệp vụ nhân viên Guest service</p>
                            <p>- Hỗ trợ Quản Lý Rạp kiểm soát và tuân thủ quy trình hoạt động, hướng đến sự tăng trưởng và phát triển của đơn vị kinh doanh đạt kết quả cao nhất có thể. </p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Điều hành các hoạt động hàng ngày, phối hợp làm việc với các đối tác và phòng ban nội bộ công ty</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
                    </div>

                    <div className="support_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample2"
                        aria-expanded="false"
                        aria-controls="collapseExample2"
                      >
                       <i class="fa-solid fa-plus"></i> Giám sát hoạt động rạp chiếu phim Galaxy Kinh Dương Vương (Quận 6)
                      </button>
                      <div class="collapse" id="collapseExample2">
                        <div class="support-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Quản lý & đào tạo nghiệp vụ nhân viên Guest service</p>
                            <p>- Hỗ trợ Quản Lý Rạp kiểm soát và tuân thủ quy trình hoạt động, hướng đến sự tăng trưởng và phát triển của đơn vị kinh doanh đạt kết quả cao nhất có thể. </p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Điều hành các hoạt động hàng ngày, phối hợp làm việc với các đối tác và phòng ban nội bộ công ty</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
                    </div>

                    <div className="support_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample3"
                        aria-expanded="false"
                        aria-controls="collapseExample3"
                      >
                       <i class="fa-solid fa-plus"></i> Giám sát hoạt động rạp chiếu phim Galaxy Trường Chinh (Quận Tân Phú)
                      </button>
                      <div class="collapse" id="collapseExample3">
                        <div class="support-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Quản lý & đào tạo nghiệp vụ nhân viên Guest service</p>
                            <p>- Hỗ trợ Quản Lý Rạp kiểm soát và tuân thủ quy trình hoạt động, hướng đến sự tăng trưởng và phát triển của đơn vị kinh doanh đạt kết quả cao nhất có thể. </p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Điều hành các hoạt động hàng ngày, phối hợp làm việc với các đối tác và phòng ban nội bộ công ty</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
                    </div>

                    <div className="support_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample4"
                        aria-expanded="false"
                        aria-controls="collapseExample4"
                      >
                       <i class="fa-solid fa-plus"></i> Giám sát hoạt động rạp chiếu phim Galaxy Linh Trung (Thủ Đức)
                      </button>
                      <div class="collapse" id="collapseExample4">
                        <div class="support-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Quản lý & đào tạo nghiệp vụ nhân viên Guest service</p>
                            <p>- Hỗ trợ Quản Lý Rạp kiểm soát và tuân thủ quy trình hoạt động, hướng đến sự tăng trưởng và phát triển của đơn vị kinh doanh đạt kết quả cao nhất có thể. </p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Điều hành các hoạt động hàng ngày, phối hợp làm việc với các đối tác và phòng ban nội bộ công ty</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
                    </div>

                    <div className="support_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample5"
                        aria-expanded="false"
                        aria-controls="collapseExample5"
                      >
                       <i class="fa-solid fa-plus"></i> Giám sát hoạt động rạp chiếu phim Galaxy Nguyễn Du (Quận 1)
                      </button>
                      <div class="collapse" id="collapseExample5">
                        <div class="support-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Quản lý & đào tạo nghiệp vụ nhân viên Guest service</p>
                            <p>- Hỗ trợ Quản Lý Rạp kiểm soát và tuân thủ quy trình hoạt động, hướng đến sự tăng trưởng và phát triển của đơn vị kinh doanh đạt kết quả cao nhất có thể. </p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Điều hành các hoạt động hàng ngày, phối hợp làm việc với các đối tác và phòng ban nội bộ công ty</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
                    </div>

                    <div className="support_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample6"
                        aria-expanded="false"
                        aria-controls="collapseExample6"
                      >
                       <i class="fa-solid fa-plus"></i> Senior Sales Executive
                      </button>
                      <div class="collapse" id="collapseExample6">
                        <div class="support-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Thực hiện các nhiệm vụ được giao bởi cấp trên trực tiếp;</p>
                            <p>- Đảm bảo đáp ứng được chỉ tiêu doanh số quản lý đặt ra;  </p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Theo dõi và thực hiện công tác chăm sóc khách hàng cùng với các nhân sự phòng kinh doanh theo sự phân công của cấp trên trực tiếp.</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
                    </div>

                    <div className="support_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample7"
                        aria-expanded="false"
                        aria-controls="collapseExample7"
                      >
                       <i class="fa-solid fa-plus"></i> Giám sát hoạt động hệ thống rạp chiếu phim Galaxy Long Xuyên (An Giang)
                      </button>
                      <div class="collapse" id="collapseExample7">
                        <div class="support-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Thực hiện các nhiệm vụ được giao bởi cấp trên trực tiếp;</p>
                            <p>- Đảm bảo đáp ứng được chỉ tiêu doanh số quản lý đặt ra;</p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Điều hành các hoạt động hàng ngày, phối hợp làm việc với các đối tác và phòng ban nội bộ công ty</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
                    </div>

                    <div className="support_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample8"
                        aria-expanded="false"
                        aria-controls="collapseExample8"
                      >
                       <i class="fa-solid fa-plus"></i>Đăng ký ứng tuyển vị trí: Nhân viên phục vụ bán thời gian
                      </button>
                      <div class="collapse" id="collapseExample8">
                        <div class="support-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Quản lý & đào tạo nghiệp vụ nhân viên Guest service</p>
                            <p>- Hỗ trợ Quản Lý Rạp kiểm soát và tuân thủ quy trình hoạt động, hướng đến sự tăng trưởng và phát triển của đơn vị kinh doanh đạt kết quả cao nhất có thể. </p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Điều hành các hoạt động hàng ngày, phối hợp làm việc với các đối tác và phòng ban nội bộ công ty</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
                    </div>

                    <div className="support_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample9"
                        aria-expanded="false"
                        aria-controls="collapseExample9"
                      >
                       <i class="fa-solid fa-plus"></i> Nhân viên kỹ thuật rạp chiếu phim Trường Chinh
                      </button>
                      <div class="collapse" id="collapseExample9">
                        <div class="support-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Quản lý & đào tạo nghiệp vụ nhân viên Guest service</p>
                            <p>- Hỗ trợ Quản Lý Rạp kiểm soát và tuân thủ quy trình hoạt động, hướng đến sự tăng trưởng và phát triển của đơn vị kinh doanh đạt kết quả cao nhất có thể. </p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Điều hành các hoạt động hàng ngày, phối hợp làm việc với các đối tác và phòng ban nội bộ công ty</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
                    </div>

                    <div className="support_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1_1"
                        aria-expanded="false"
                        aria-controls="collapseExample1_1"
                      >
                       <i class="fa-solid fa-plus"></i> Thư ký kỹ thuật
                      </button>
                      <div class="collapse" id="collapseExample1_1">
                        <div class="support-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Quản lý & đào tạo nghiệp vụ nhân viên Guest service</p>
                            <p>- Hỗ trợ Quản Lý Rạp kiểm soát và tuân thủ quy trình hoạt động, hướng đến sự tăng trưởng và phát triển của đơn vị kinh doanh đạt kết quả cao nhất có thể. </p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Điều hành các hoạt động hàng ngày, phối hợp làm việc với các đối tác và phòng ban nội bộ công ty</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
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

            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="support_feedback">
                <div className="row">
                  <div className="col-8">
                    <div className="support_feedback_title">
                    <h3>Bạn có gì muốn nhắn nhủ Galaxy Cinema ?</h3>
                    <div className="support_feedback_contact">
                    <NavLink to={''}> <i class="fa-solid fa-envelope"></i> supports@galaxy.com.vn</NavLink>
                    <NavLink to={''}><i class="fa-solid fa-phone"></i> 19002224</NavLink>
                    </div>
                    </div>
                    <div className="support_feedback_form mt-3">
                      <div className="row">
                        <div className="col-4">
                          <input type="text" className="form-control mt-3" placeholder="Họ và tên"/>
                        </div>

                        <div className="col-4">
                          <input type="text" className="form-control mt-3" placeholder="Email"/>
                        </div>

                        <div className="col-4">
                          <input type="text" className="form-control mt-3" placeholder="Số điện thoại"/>
                        </div>
                      </div>
                      <textarea
                        className="mt-2"
                        name=""
                        id=""
                        cols="96"
                        rows="10"
                        placeholder="Nội dung"
                      ></textarea>
                      
                      <div className="support_feedback_btn">
                      <button>Gửi</button>
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
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="support_FAQ">
                <div className="row">
                  <div className="col-8">
                    <div className="FAQ_left">
                    <div className="support_FAQ_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1_2"
                        aria-expanded="false"
                        aria-controls="collapseExample1_2"
                      >
                       <i class="fa-solid fa-plus"></i> Tôi có thể dùng tài khoản thành viên của mình để mua vé nhóm được không ?
                      </button>
                      <div class="collapse" id="collapseExample1_2">
                        <div class="support-FAQ-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Quản lý & đào tạo nghiệp vụ nhân viên Guest service</p>
                            <p>- Hỗ trợ Quản Lý Rạp kiểm soát và tuân thủ quy trình hoạt động, hướng đến sự tăng trưởng và phát triển của đơn vị kinh doanh đạt kết quả cao nhất có thể. </p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Điều hành các hoạt động hàng ngày, phối hợp làm việc với các đối tác và phòng ban nội bộ công ty</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_FAQ_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
                    </div>

                    <div className="support_FAQ_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1_3"
                        aria-expanded="false"
                        aria-controls="collapseExample1_3"
                      >
                       <i class="fa-solid fa-plus"></i> Làm sao để đặt vé online ?
                      </button>
                      <div class="collapse" id="collapseExample1_3">
                        <div class="support-FAQ-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Quản lý & đào tạo nghiệp vụ nhân viên Guest service</p>
                            <p>- Hỗ trợ Quản Lý Rạp kiểm soát và tuân thủ quy trình hoạt động, hướng đến sự tăng trưởng và phát triển của đơn vị kinh doanh đạt kết quả cao nhất có thể. </p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Điều hành các hoạt động hàng ngày, phối hợp làm việc với các đối tác và phòng ban nội bộ công ty</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_FAQ_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
                    </div>

                    <div className="support_FAQ_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1_4"
                        aria-expanded="false"
                        aria-controls="collapseExample1_4"
                      >
                       <i class="fa-solid fa-plus"></i> Làm sao để khiếu nại hoặc góp ý với Galaxy ?
                      </button>
                      <div class="collapse" id="collapseExample1_4">
                        <div class="support-FAQ-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Quản lý & đào tạo nghiệp vụ nhân viên Guest service</p>
                            <p>- Hỗ trợ Quản Lý Rạp kiểm soát và tuân thủ quy trình hoạt động, hướng đến sự tăng trưởng và phát triển của đơn vị kinh doanh đạt kết quả cao nhất có thể. </p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Điều hành các hoạt động hàng ngày, phối hợp làm việc với các đối tác và phòng ban nội bộ công ty</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_FAQ_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
                    </div>

                    <div className="support_FAQ_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1_5"
                        aria-expanded="false"
                        aria-controls="collapseExample1_5"
                      >
                       <i class="fa-solid fa-plus"></i> Thanh toán online đã bị trừ tiền nhưng không nhận được mã đặt vé ?
                      </button>
                      <div class="collapse" id="collapseExample1_5">
                        <div class="support-FAQ-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Quản lý & đào tạo nghiệp vụ nhân viên Guest service</p>
                            <p>- Hỗ trợ Quản Lý Rạp kiểm soát và tuân thủ quy trình hoạt động, hướng đến sự tăng trưởng và phát triển của đơn vị kinh doanh đạt kết quả cao nhất có thể. </p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Điều hành các hoạt động hàng ngày, phối hợp làm việc với các đối tác và phòng ban nội bộ công ty</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_FAQ_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
                    </div>

                    <div className="support_FAQ_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1_6"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >
                       <i class="fa-solid fa-plus"></i> Tôi có thể hủy hoặc thay đổi thông tin của vé đã mua online được không ?
                      </button>
                      <div class="collapse" id="collapseExample1_6">
                        <div class="support-FAQ-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Quản lý & đào tạo nghiệp vụ nhân viên Guest service</p>
                            <p>- Hỗ trợ Quản Lý Rạp kiểm soát và tuân thủ quy trình hoạt động, hướng đến sự tăng trưởng và phát triển của đơn vị kinh doanh đạt kết quả cao nhất có thể. </p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Điều hành các hoạt động hàng ngày, phối hợp làm việc với các đối tác và phòng ban nội bộ công ty</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_FAQ_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
                    </div>

                    <div className="support_FAQ_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1_7"
                        aria-expanded="false"
                        aria-controls="collapseExample1_7"
                      >
                       <i class="fa-solid fa-plus"></i> Vé liệt kê trên Website áp dụng đối tượng nào
                      </button>
                      <div class="collapse" id="collapseExample1_7">
                        <div class="support-FAQ-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Quản lý & đào tạo nghiệp vụ nhân viên Guest service</p>
                            <p>- Hỗ trợ Quản Lý Rạp kiểm soát và tuân thủ quy trình hoạt động, hướng đến sự tăng trưởng và phát triển của đơn vị kinh doanh đạt kết quả cao nhất có thể. </p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Điều hành các hoạt động hàng ngày, phối hợp làm việc với các đối tác và phòng ban nội bộ công ty</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_FAQ_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
                    </div>

                    <div className="support_FAQ_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1_8"
                        aria-expanded="false"
                        aria-controls="collapseExample1_8"
                      >
                       <i class="fa-solid fa-plus"></i> Khi mua vé online tôi có được tích điểm hay không ?
                      </button>
                      <div class="collapse" id="collapseExample1_8">
                        <div class="support-FAQ-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Quản lý & đào tạo nghiệp vụ nhân viên Guest service</p>
                            <p>- Hỗ trợ Quản Lý Rạp kiểm soát và tuân thủ quy trình hoạt động, hướng đến sự tăng trưởng và phát triển của đơn vị kinh doanh đạt kết quả cao nhất có thể. </p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Điều hành các hoạt động hàng ngày, phối hợp làm việc với các đối tác và phòng ban nội bộ công ty</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_FAQ_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
                    </div>

                    <div className="support_FAQ_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1_9"
                        aria-expanded="false"
                        aria-controls="collapseExample1_9"
                      >
                       <i class="fa-solid fa-plus"></i> Trường hợp tôi có nhiều tài khoản thành viên, tôi có thể tích các Star vào 1 tài khoản không ?
                      </button>
                      <div class="collapse" id="collapseExample1_9">
                        <div class="support-FAQ-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Quản lý & đào tạo nghiệp vụ nhân viên Guest service</p>
                            <p>- Hỗ trợ Quản Lý Rạp kiểm soát và tuân thủ quy trình hoạt động, hướng đến sự tăng trưởng và phát triển của đơn vị kinh doanh đạt kết quả cao nhất có thể. </p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Điều hành các hoạt động hàng ngày, phối hợp làm việc với các đối tác và phòng ban nội bộ công ty</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_FAQ_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
                    </div>

                    <div className="support_FAQ_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample2_1"
                        aria-expanded="false"
                        aria-controls="collapseExample2_1"
                      >
                       <i class="fa-solid fa-plus"></i> Trường hợp để kiểm tra số lượng Stars trong tài khoản, tôi phải liên hệ ai ?
                      </button>
                      <div class="collapse" id="collapseExample2_1">
                        <div class="support-FAQ-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Quản lý & đào tạo nghiệp vụ nhân viên Guest service</p>
                            <p>- Hỗ trợ Quản Lý Rạp kiểm soát và tuân thủ quy trình hoạt động, hướng đến sự tăng trưởng và phát triển của đơn vị kinh doanh đạt kết quả cao nhất có thể. </p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Điều hành các hoạt động hàng ngày, phối hợp làm việc với các đối tác và phòng ban nội bộ công ty</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_FAQ_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
                    </div>

                    <div className="support_FAQ_button">
                      <button
                        class=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample2_2"
                        aria-expanded="false"
                        aria-controls="collapseExample2_2"
                      >
                       <i class="fa-solid fa-plus"></i> Làm thế nào để sử dụng số Stars trong tài khoản để đổi quà
                      </button>
                      <div class="collapse" id="collapseExample2_2">
                        <div class="support-FAQ-text">
                            <h5>Mô tả công việc</h5>
                            <p>- Quản lý & đào tạo nghiệp vụ nhân viên Guest service</p>
                            <p>- Hỗ trợ Quản Lý Rạp kiểm soát và tuân thủ quy trình hoạt động, hướng đến sự tăng trưởng và phát triển của đơn vị kinh doanh đạt kết quả cao nhất có thể. </p>
                            <p>- Quản lý vận hành quầy vé & quầy căn-tin, nhập xuất hàng hóa, nhận hóa đơn chứng từ kế toán và xác nhận doanh thu</p>
                            <p>- Điều hành các hoạt động hàng ngày, phối hợp làm việc với các đối tác và phòng ban nội bộ công ty</p>

                            <p>- Duy trì chất lượng dịch vụ, chất lượng cơ sở vật chất - vệ sinh, giải quyết và hỗ trợ nhu cầu khách hàng </p>
                            <p>- Tham gia vào quá trình tuyển dụng, đào tạo và đánh giá nhân sự của đơn vị kinh doanh</p>
                            <p>- Hỗ trợ Quản Lý Rạp xây dựng và phát triển cách làm việc nhóm, xây dựng văn hóa trong nội bộ.</p>
                            <p>- Hỗ trợ Quản Lý Rạp ghi nhận, theo dõi, kiểm soát doanh thu và các loại chi phí.</p>
                            <p>- Hỗ trợ xét duyệt các vấn đề liên quan đến hành chính nhân sự trong các nhóm công việc được giao.</p>
                            <p>- Quản lý và nắm bắt cơ chế phối hợp làm việc với các đối tác, phòng ban.</p>
                            <p>- Quản lý hiệu quả các chương trình Marketing, đề xuất và đưa ra các phản hồi kịp thời, mang tính chất xây dựng để nâng cao chất lượng các hoạt động Marketing tại Rạp.</p>
                            <p>- Giải quyết các vấn đề phát sinh liên quan đến khách hàng, hỗ trợ khách hàng, xử lý sự cố vận hành</p>
                            <p>- Phân bổ công việc, đôn đốc, hướng dẫn, giám sát thực hiện và có điều chỉnh nhân sự hợp lý trong các nhóm công việc được giao.</p>
                            <p>- Thường xuyên cập nhật kiến thức chuyên môn về quản lý, tham gia các hoạt động đào tạo nhằm nâng cao năng lực nghiệp vụ.</p>
                            <p>- Thực hiện các yêu cầu khác theo yêu cầu của Quản lý trực tiếp.</p>
                            <h5>Yêu cầu công việc</h5>
                            <p>Tối thiểu tốt nghiệp cao đẳng.
                                <br />
                                Tối thiếu 2 năm kinh nghiệm trong ngành dịch vụ, nhà hàng khách sạn.
                                <br />
                                Tối thiểu 2 năm kinh nghiệm ở vị trí giám sát quản lý từ 5 tới 10 nhân viên.
                            </p>
                        
                            <br />
                        
                            <p>Có khả năng giao tiếp tiếng Anh tốt (bắt buộc).
                                <br />
                                Có khả năng kiểm soát, giải quyết vấn đề phát sinh mà không cần xin ý kiến cấp trên.
                                <br />
                                Có khả năng phân tích, trình bày, diễn giải và training.
                                <br />
                                Có thể làm việc theo ca (8h-16h/ 16h-0h).
                                <br />
                                Tác phong chỉnh tề, lịch sự.
                            </p>
                        </div>
                            <div className="support_FAQ_text_btn">
                            <button>Nộp đơn</button>
                            </div>
                      </div>
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
          </div>
          

        </div>
        
      </div>
      
    </div>

    
  );
}
