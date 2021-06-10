import React from 'react';
import NavBarMenu from '../../../components/Navbar/navbar-top';
import NavBarMenu2 from '../../../components/Navbar/navbar-bot';
import DatChoCuaToi from '../../../components/DatChoCuaToi/DatChoCuaToi';
import './VeMayBay.scss';

function VeMayBay(){
    return(
        <div className="Body">
            <div>
                <NavBarMenu />
                <NavBarMenu2 />
            </div>
            <div className="Body_DCCT">
                <DatChoCuaToi />
                <div className="Body_DCCT_Right">
                    <div className="box_vmb">
                        <div className="box_vmb_txt1">Sau khi gửi biểu mẫu bên dưới, chúng tôi sẽ gửi vé điện tử trực tiếp đến địa chỉ email bạn đã sử dụng khi đặt chỗ. Biểu mẫu này cũng có thể sử dụng để hoàn thành các giao dịch chưa thanh toán của bạn.</div>
                        <div className="box_vmb_txt2">Khôi phục đặt chỗ</div>

                        <div className="box_vmb_bottom">
                            <div className="box_vmb_bottom_7dGjd">
                                <div className="_3hahX">
                                    <div className="_8ycys">
                                        <p className="_hUDc7">Mã đặt chỗ Oka</p>
                                        {/* <Link>Bạn quên mã đặt chỗ?</Link> */}
                                    </div>
                                    <input className="_8cS79" type="text"/>
                                </div>

                                <div className="_a6d5a">
                                    <p>Ngày bay</p>
                                    <input className="_8cS79" type="date"/>
                                </div>

                                <div className="_jkdu8y">
                                    <div className="_hcwt6">
                                        <p>Số điện thoại</p>
                                        <input className="_8cS79n" type="number" />
                                    </div>
                                    <div className="_jhd37">
                                        <input className="_Udsak1" type="submit" value="Khôi phục đặt chỗ"/>
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

export default VeMayBay;