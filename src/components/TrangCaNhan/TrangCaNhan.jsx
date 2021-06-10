import React from 'react';
import {Link} from 'react-router-dom';
import './TrangCaNhan.scss';

function TrangCaNhan(){
    function LogOut(){
        localStorage.clear();
    }
    return(
        <div className="Body_TCN_Left">
            <div>
                <div className="Body_TCN_Left_Top">
                    {/* Thông tin cá nhấn */}
                </div>

                <div className="Body_TCN_Left_Middle">                    
                    <Link to="/DiemThuongCuaToi">
                        <div><img alt="iconDiemThuong" src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_product_duotone_points_24px-065ef870fb5ec16205d863d2342aad24.svg"/></div>
                        <div className="txt_item">Điểm thưởng của tôi</div>
                    </Link>
                    
                    <Link>
                        <div><img alt="iconThe" src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_payment_credit_card_24px-9fe4abe64401132265e82b23a523c51b.svg" /></div>
                        <div className="txt_item">Thẻ của tôi</div>
                    </Link>                  
                </div>

                <div className="/Body_TCN_Left_Bottom">
                    <Link>
                        <div><img alt="iconDatCho" src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_user_booking_24px-e122f4f56ce1573ccc85faa381a35fc3.svg" /></div>
                        <div className="txt_item">Đặt chỗ của tôi</div>
                    </Link>
                    <Link to="/DanhSachGiaoDich">
                        <div><img alt="iconDSGiaoDich" src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_user_receipt_24px-242b9943eb1487d4887473a1626ca259.svg"/></div>
                        <div className="txt_item">Danh sách giao dịch</div>
                    </Link>
                    <Link to="/ThongBaoGiaVeMayBay">
                        <div><img alt="iconThongBaoVMB" src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_system_alert_24px-afa9b406235e09b9982331c2b37634d4.svg" /></div>
                        <div className="txt_item">Thông báo vé máy bay</div>
                    </Link>
                    <Link to="/PassengerQuickPick">
                        <div><img alt="iconPassengerQuickPick" src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_system_guest_passenger_24px-9679b65101281540f5224349d0ba4c7c.svg" /></div>
                        <div className="txt_item">Passenger Quick Pick</div>
                    </Link>
                    <Link>
                        <div><img alt="iconKhuyenMai" src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_contact_mail_24px-ef50e195abdec0217f078209109f59b8.svg" /></div>
                        <div className="txt_item">Khuyến mãi</div>
                    </Link>                   
                </div>

                <div>
                    <Link to="/TaiKhoan">
                        <div><img alt="iconTaiKhoan" src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_system_setting_24px-afcd92242e7f7285e0ed341397803f03.svg" /></div>
                        <div className="txt_item" to="/TaiKhoan">Tài khoản</div>
                    </Link>
                    <Link to="/" onClick={LogOut}>
                        <div><img alt="iconDangXuat" src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_user_sign_out_log_out_24px-7ec14b5d488e14032a5dc261f41b8da5.svg" /></div>
                        <div className="txt_item">Đăng xuất</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TrangCaNhan;