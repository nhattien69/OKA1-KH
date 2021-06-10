import React, { Component } from 'react';
import { LayoutTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import plane from '../../Images/plane.png';
import hotel from '../../Images/hotel.png';
import './DatChoCuaToi.scss';

function DatChoCuaToi(){

        // var date = new Date().toLocaleDateString();
        //  document.getElementById("_date").placeholder = 'Date';
         window.addEventListener('load', () => {
            // document.getElementById("_date").placeholder = 'Date';
            // document.getElementById("txtXinChao").innerHTML = "Xin chào " + localStorage.getItem("Ten");
        })

    return(
        // <div className="Body">
        //     <div>
        //         <NavbarMenu />
        //         <NavBarMenu2 />
        //     </div>
            
            // <div className="Body_DCCT">
                <div className="Body_DCCT_Left">
                    
                    <div>
                        <div className="Giao_Dich">
                            <h2>Giao dịch đang tiến hành</h2>
                            <div>
                                <Link to="/DatChoCuaToi/TatCaSanPham">
                                    <div><LayoutTwoTone /></div>
                                    <div className="itemTxt">Tất cả các sản phẩm</div>
                                </Link>            
                            </div>
                        </div>

                        <div className="Khoi_Phuc">
                            <h2>Khôi phục đặt chỗ</h2>
                            <Link to="/DatChoCuaToi/VeMayBay">
                                <div><img alt="plane" src={plane} /></div>    
                                <div className="itemTxt">Vé máy bay</div>
                            </Link>
                            <Link to="/DatChoCuaToi/KhachSan">
                                <div><img alt="hotel" src={hotel} /></div>
                                <div className="itemTxt">Khách sạn</div>
                            </Link>
                        </div>
                    </div>
                </div>

                // <div className="Body_DCCT_Right">
                //     <div>
                //         {/* <div className="box_tccsp">
                //             <img alt="img" src="https://ik.imagekit.io/tvlk/image/imageResource/2020/07/10/1594367281441-5ec1b573d106b7aec243b19efa02ac56.svg?tr=h-96,q-75,w-96" />
                //             <div className="box_txt">
                //                 <h3>Không có giao dịch đang tiến hành</h3>
                //                 <div>Bạn không có giao dịch đang tiến hành nào từ phiên dịch trước. Những giao dịch chưa hoàn thành được lưu tại đây.</div>
                //             </div>
                //         </div> */}

                        // <div className="box_vmb">
                        //     <div className="box_vmb_txt1">Sau khi gửi biểu mẫu bên dưới, chúng tôi sẽ gửi vé điện tử trực tiếp đến địa chỉ email bạn đã sử dụng khi đặt chỗ. Biểu mẫu này cũng có thể sử dụng để hoàn thành các giao dịch chưa thanh toán của bạn.</div>
                        //     <div className="box_vmb_txt2">Khôi phục đặt chỗ</div>

                        //     <div className="box_vmb_bottom">
                        //         <div className="box_vmb_bottom_7dGjd">
                        //             <div className="_3hahX">
                        //                 <div className="_8ycys">
                        //                     <p className="_hUDc7">Mã đặt chỗ Oka</p>
                        //                     {/* <Link>Bạn quên mã đặt chỗ?</Link> */}
                        //                 </div>
                        //                 <input className="_8cS79" type="text"/>
                        //             </div>

                        //             <div className="_a6d5a">
                        //                 <p>Ngày bay</p>
                        //                 <input className="_8cS79" type="date"/>
                        //             </div>

                        //             <div className="_jkdu8y">
                        //                 <div className="_hcwt6">
                        //                     <p>Số điện thoại</p>
                        //                     <input className="_8cS79n" type="number" />
                        //                 </div>
                        //                 <div className="_jhd37">
                        //                     <input className="_Udsak1" type="submit" value="Khôi phục đặt chỗ"/>
                        //                 </div>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>

            //         </div>
            //     </div>
        //     </div>
        // </div>
    );
}

export default DatChoCuaToi;