import React from 'react';
import { Tabs } from 'antd';
import './DiemThuong.scss';
import NavbarMenu from '../../../components/Navbar/navbar-top';
import NavbarMenu2 from '../../../components/Navbar/navbar-bot';
import Footer from '../../../components/footer/footer';
import NavbarLogin from '../../../components/HomeLogin/navbarLogin';
import TrangCaNhan from '../../../components/TrangCaNhan/TrangCaNhan';

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}

function DiemThuong (){
    return (
        <div className="Page_TCN"  id="page_tcn">
        {/* -- HEADER-- */}
            <div>
                <NavbarLogin />
                {/* <NavbarMenu /> */}
                <NavbarMenu2 />
            </div>

            {/* -- BODY -- */}
            <div className="Body_TCN">
                {/* LEFT */}
                <div className="Body_TCN_Left">
                    <TrangCaNhan />
                </div>


                {/* RIGHT */}
                <div className="Body_TCN_Right">
                <div className="point">     
            <div className="point__container">
                <div className="title-point">
                    <h1 className="my-point">Điểm thưởng của tôi</h1>
                    <a href ="https://www.traveloka.com/vi-vn/loyalty-points">Tìm hiểu thêm</a>
                </div>
           
                <div className="diemthuong">
                     <div className="diemthuong__container">
                        <div className="form-point">
                            <label className="availability-points">ĐIỂM KHẢ DỤNG</label>
                            <div className="number-point">0</div>  
                            <div className="value-point">(Trị giá VND0)</div>
                            <div className="pending-point">+0 Pending Points</div>
                        </div>
                        <div className="form-process">
                            <div className="form-process-point">
                                <label className="process-point">TIẾN TRÌNH TÍCH ĐIỂM</label>
                                <a className ="detail-point" href="">Chi tiết</a>
                            </div>
                   
                             <div className="number-process">
                                <div className="item-process">
                                    <div className="wrap_icon">
                                        <img className="icon-point" src="https://ik.imagekit.io/tvlk/image/imageResource/2017/11/23/1511416821839-8752dc371576af3bdebdbbb09ffdc7a6.png?tr=q-75"></img>
                                    </div>
                                    <label>1500 to go</label>
                                </div>
                                <div className="item-process">
                                     <div className="wrap_icon">
                                        <img className="icon-point" src="https://ik.imagekit.io/tvlk/image/imageResource/2019/04/29/1556513556492-24e6ab3befed82339645252ca51d4805.png?tr=q-75"></img>
                                     </div>
                                    <label>1500 to go</label>
                                </div>
                                <div className="item-process">
                                    <div className="wrap_icon">
                                        <img className="icon-point" src="https://ik.imagekit.io/tvlk/image/imageResource/2017/11/23/1511416825930-fae0f0b3b42305f47e30ada2fbc7c74f.png?tr=q-75"></img>
                                    </div>
                                    <label>2500 to go</label>
                                </div>
                                <div className="item-process">
                                    <div className="wrap_icon">
                                        <img className="icon-point" src="https://ik.imagekit.io/tvlk/image/imageResource/2017/11/23/1511416848403-0f73dda9b166e07508c3b4557569b43b.png?tr=q-75"></img>
                                    </div>
                                    <label>2500 to go</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tab-point">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab ="Tất cả Rewards" key="a" className="wrap_item_point"></TabPane>
                        <TabPane tab ="Khách sạn Rewards" key="b" className="wrap_item_point"></TabPane>
                        <TabPane tab ="Experience Rewards" key="c" className="wrap_item_point"></TabPane>
                        <TabPane tab ="Chuyến bay Rewards" key="d" className="wrap_item_point"></TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
                </div>
            </div>

            {/* -- FOOTER -- */}
            <div>
                <Footer />
            </div>
        </div> 
    );
}
export default DiemThuong;

