import React from 'react';
import './footer.css';
import 'antd/dist/antd.css';
import Facebook from "../../Images/ft/facebook01.png"
import Twitter from "../../Images/ft/twitter01.png"
import Instagram from "../../Images/ft/instagram01.png"
import Youtube from "../../Images/ft/youtube01.png"
import registered from '../../Images/ft/registered.png';
import sponsors from '../../Images/ft/sponsors.png';
import GP from '../../Images/ft/GGP.png';
import AS from '../../Images/ft/AS.png';
import { Row, Col } from 'antd';

function Footer(){
    return(
        <div className ="ft">
            <Row>
                <Col span={4}></Col>
                <Col span={4}>
                    <img src={registered} alt="registered" width="200"/>;<br></br>
                    <h2 className="title">Đối tác thanh toán</h2><br></br>
                    <img src={sponsors} alt="sponsors" width="200"/>;
                </Col>
                <Col span={4}>
                    <h2 className="title">Về Traveloka</h2>
                    <div>
                        <a className="link" href="https://www.traveloka.com/en-vn/howto">Cách đặt chỗ</a><br></br>
                        <a className="link" href="https://www.traveloka.com/en-vn/contactus">Liên hệ chúng tôi</a><br></br>
                        <a className="link"href="https://www.traveloka.com/en-vn/faq"> Trợ giúp</a><br></br>
                        <a className="link" href="https://www.traveloka.com/en-vn/careers">Tuyển dụng</a><br></br>
                        <a className="link" href="https://www.traveloka.com/en-vn/about-us">Về chúng tôi</a><br></br>
                    </div>
                    <h2 className="title">Theo dõi chúng tôi trên</h2>
                    <div>
                        <img src={Facebook} alt="social" width="20"/>
                        <a className="link" href="https://twitter.com/TravelokaVN">Facebook</a><br></br>
                        <img src={Twitter} alt="social" width="20"/>
                        <a className="link" href="https://www.facebook.com/TravelokaVN">Twitter</a><br></br>
                        <img src={Instagram} alt="social" width="20"/>
                        <a className="link" href="https://instagram.com/traveloka">Instagram</a><br></br>
                        <img src={Youtube} alt="socialS" width="20"/>
                        <a className="link" href="https://www.youtube.com/Traveloka">YouTube</a><br></br>
                    </div>
                </Col>
                <Col span={4}>
                    <h2 className="title">Sản phẩm</h2>
                    <div>
                        <a className="link" href="https://www.traveloka.com/vi-vn/flight">Vé máy bay</a><br></br>
                        <a className="link" href="https://www.traveloka.com/vi-vn/hotel">Khách sạn</a><br></br>
                        <a className="link" href="https://www.traveloka.com/vi-vn/packages">Combo tiết kiệm</a><br></br>
                        <a className="link" href="https://www.traveloka.com/vi-vn/activities">Xperience</a><br></br>
                        <a className="link" href="https://www.traveloka.com/vi-vn/airport-transfer">Đưa đón sân bay</a><br></br>
                        <a className="link" href="https://www.traveloka.com/vi-vn/accommodation/villa">Biệt thự</a><br></br>
                        <a className="link" href="https://www.traveloka.com/vi-vn/accommodation/apartment">Căn hộ</a><br></br>
                        <a className="link" href="https://www.traveloka.com/vi-vn/car-rental">Car Rental</a><br></br>
                        <a className="link" href="https://www.traveloka.com/vi-vn/train/japan.jp">JR Pass</a><br></br>

                    </div>
                </Col>
                <Col span={4}>
                    <h2 className="title">Khác</h2>
                    <div>
                        <a className="link" href="https://www.traveloka.com/vi-vn/affiliate">Traveloka Affiliate</a><br></br>
                        <a className="link" href="https://www.traveloka.com/vi-vn/explore">Traveloka Blog</a><br></br>
                        <a className="link" href="https://www.traveloka.com/vi-vn/privacypolicy">Chính sách quyền riêng tư</a><br></br>
                        <a className="link" href="https://www.traveloka.com/vi-vn/termsandconditions">Điều khoản và điều kiện</a><br></br>
                        <a className="link" href="https://www.traveloka.com/vi-vn/Regulation-for-Operation-VN">Quy chế hoạt động</a><br></br>
                        <a className="link" href="https://tera.traveloka.com/vi-vn/v2/landing">Đăng ký nơi nghỉ của bạn</a><br></br>
                        <a className="link" href="https://axes.traveloka.com/">Đăng ký doanh nghiệp hoạt động du lịch của bạn</a><br></br>
                        <a className="link" href="https://press.traveloka.com/">Khu vực báo chí</a><br></br>
                    </div>
                    <h2 className ="title">Tải ứng dụng Traveloka</h2>
                    <div>
                        <input type="image" src={GP} width="150" href="https://app.adjust.com/ie88tj"></input><br></br>
                        <input type="image" src={AS} width="150" href="https://app.adjust.com/hc9if0"></input>
                    </div>
                </Col>
                <Col span={4}></Col>
            </Row>
            <br></br>
            <hr></hr>
            <br></br>
            <p className="text1">Công ty TNHH Traveloka Việt Nam. Mã số DN: 0313581779. Tòa nhà An Phú, 117-119 Lý Chính Thắng, P. 7, Q. 3, TPHCM</p>
            <p className="text2">Copyright © 2021 Traveloka</p>
        </div>
    );
}

export default Footer;