import React from 'react';
import NavbarMenu2 from './navbar-bot';
import NavbarMenu from './navbar-top';
import { useForm } from "react-hook-form";
import axios from "axios";
import { NavLink, useHistory, Link } from "react-router-dom";



import './DangKy.css'

// {/* <img className="image" src='https://ik.imagekit.io/tvlk/image/imageResource/2018/07/03/1530614231070-0f61666d276f6892958421d263381c08.svg?tr=q-75' alt="traveloka" />
                
//                 <img className="image" src='https://ik.imagekit.io/tvlk/image/imageResource/2018/07/03/1530614234486-955449d244902e8387895898ad126485.svg?tr=q-75' alt="traveloka" /> */}
let buttons;
export default function DangKy() {

  let history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios
        .post("https://oka1kh.azurewebsites.net/api/user", data)
        .then((res) => res.data)
        .catch((err) => err);
      
      

      if (response.status === "SUCCES") {
        console.log('đăng kí thành công');
        buttons = alert('Đăng Kí Thành Công')
        history.push("/DangNhap");
      } else {
        buttons = alert("Tài Khoản Đã Được Đăng Kí !!!");
      }
    } catch (error) {
      console.log("error.response.data.message", error.response.data.message);
    }
  };

    return (
        <div>
            <NavbarMenu />
            <NavbarMenu2 />
            <div className="_2yVTH">
                <div className="_3qrbf">
                    <div className="_38kkJ">Đăng ký thành viên của Traveloka và trải nghiệm ưu đãi hấp dẫn!</div>
                    <div className="_3cG4P">Thật nhanh và an toàn, hãy đăng ký ngay để được:</div>
                </div>
            </div>
        <div className="_3DYMw">
                    <div className="_1Kezy._2PW7o._3giYk">
                    <div>
                        <div style={{display: "block"}}>
                            <div className="_2O2XO _2PW7o">
                                <div className="_1UnXz">
                                    <div className="_1VjjY">
                                        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/07/03/1530614225701-39530c6a0da573b6c3e09f76039ca6d4.svg?tr=q-75" width="65" height="65" />

                                    </div>
                                    <div className="Akafz">
                                            <h4 className="_3mVAu">Nhận thưởng cho mỗi đặt chỗ</h4>
                                    </div>
                                            <p className="_2SMPc">Tích điểm cho mỗi đặt vé máy bay và phòng khách sạn. Quy đổi để du lịch tiết kiệm hơn! 
                                                <a href="loyalty-points" target="_blank"> Tìm hiểu thêm  
                                                </a>
                                            </p>
                                </div>
                            
                                <div className="_1UnXz">
                                    <div className="_1VjjY">
                                        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/07/03/1530614228123-9d71e6132b3ad5abe5fa845c3d98e809.svg?tr=q-75" width="65" height="65" />
                                    </div>
                                    <div className="Akafz">
                                        <h4 className="_3mVAu">Thanh toán không cần thẻ với travelokaPay</h4>
                                    </div>
                                    <p className="_2SMPc">Lưu thông tin thẻ trong My Cards để thanh toán an toàn và thuận tiện cho lần sau.<a href="travelokaPay/help" target="_blank"> Tìm hiểu thêm  </a>
                                    </p>
                                </div>
                                </div>
                                <div className="_2O2XO _2PW7o">
                                    <div className="_1UnXz">
                                        <div className="_1VjjY">
                                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/07/03/1530614231070-0f61666d276f6892958421d263381c08.svg?tr=q-75" width="65" height="65" />
                                        </div>
                                        <div className="Akafz">
                                            <h4 className="_3mVAu">Tiện lợi ngay cả sau khi đặt chỗ</h4>
                                        </div>
                                        <p className="_2SMPc">Xem vé điện tử và phiếu thanh toán khi không có kết nối mạng. Hoàn tiền hoặc đổi lịch dễ dàng khi bạn phải thay đổi kế hoạch.<a href="reschedule" target="_blank"> Tìm hiểu thêm  </a>
                                        </p>
                                    </div>
                                    <div className="_1UnXz">
                                        <div className="_1VjjY">
                                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/07/03/1530614234486-955449d244902e8387895898ad126485.svg?tr=q-75" width="65" height="65" />
                                        </div>
                                        <div className="Akafz">
                                            <h4 className="_3mVAu">Trải nghiệm đặt chỗ suôn sẻ</h4></div>
                                            <p className="_2SMPc">Tính năng Thông báo giá giúp bạn dễ dàng đặt vé vào thời điểm thích hợp nhất. Điền thông tin hành khách trong nháy mắt với Passenger Quick Pick.<a href="quickpick" target="_blank"> Tìm hiểu thêm </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
            </div>
                        

            <div className='_bigform1 _2PW7o'>
            
            <div className='_form1'>
                
                <div className="_form2">
                    <form method="post" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="hkthB">Đăng ký thành viên Traveloka!</h1>
                        <div className="biglabel">
                          
                        <div className="_ThongTin1">Thông tin của bạn hoàn toàn được bảo mật.</div>
                      

                        <label className="title-email">Nhập Email</label> 
        <input
          id="txtusername"
          {...register("email", { required: true })}
          className="enter-email"
        />{" "}
        <br />
        <span style={{ color: "red" }}>
          {errors.email === "required" && "User is required"}
        </span>
        <label className="title-password" htmlFor="password">Mật khẩu</label> 
        <input className="enter-password" type="password" {...register("pass")} /> <br />
        <button className="btn-dangky" type="submit" onChange={{ buttons }}>
          {" "}
          Đăng Ký{" "}
        </button>
        
                            <div className="K6u2Z"></div>
                        </div>
                        <p className="_1L5c_">Bạn đã đăng ký? <a href="/DangNhap">Đăng nhập</a></p>
                        <div className="hkthB"><p>
                            Bằng việc đăng ký, tôi đồng ý với các <a target="_blank" id="TnC" href="/termsandconditions">Điều khoản &amp; Điều kiện</a> và <a target="_blank" id="PP" href="/privacypolicy">Chính sách về quyền riêng tư</a> của Traveloka.
                        </p>
                        </div>
                    </form>
                    </div>
                    </div>
                </div>

            </div>
        </div>
        
        
        
    )
}