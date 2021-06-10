import React from 'react';
import './LienHe.scss';
import 'antd/dist/antd.css'
import { Tabs } from 'antd';

import { Select } from 'antd';

import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}


const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
};

function LienHe (){
    
    return (
        <div className="content-lienhe">
            <div className="contact">
                <div className="banner-contact">
                <h1 className="title-contact">Liên hệ chúng tôi</h1>
                <h3 className="title-note">Chúng tôi luôn sẵn sàng hỗ trợ, dù bạn ở bất cứ nơi đâu!</h3>

                
            </div>

                <div className="tab-contact">
                <Tabs defaultActiveKey="2" onChange={callback}>
                    <TabPane tab ="Hỗ trợ Khách hàng" key="aa" className="wrap_item_contact">
                        <div className="wrap_form_input">

                        <form className ="hotro" action="#type your action here" method="POST" enctype="multipart/form-data">
                            <h1 className="title-hotro">Mã đặt chỗ Traveloka</h1> 

                            <div className="title-datcho">
                                <input type ="checkbox" className="datcho"></input>
                                <h4  className="id-datcho">Tôi có Mã đặt chỗ Traveloka</h4>
                                
                            </div>  
                            <div className="condition-text">
                                <input type="text" className="text-datcho"></input>
                            </div>

                            <div className="product">
                                <h4 className="name-product">Sản phẩm</h4>
                                <Select className="select-option" style={{width: '100%'}} placeholder="Sản phẩm" onChange={handleChange} >
                                    <Option value="chuyenbayhangthuonggia">Chuyến bay hạng thương gia</Option>
                                    <Option value="chuyenbayhangphothong">Chuyến bay hạng phổ thông</Option>
                                    <Option value="khachsan">Khách sạn</Option>
                                    <Option value="flight+hotel">Flight + Hotel</Option>
                                    <Option value="train">Train</Option>
                                    <Option value="airporttrain">Airport Train</Option>
                                    <Option value="to up & data package">To Up & Data Package</Option>
                                    <Option value="roaming package">Roaming Package</Option>
                                    <Option value="int'l prepaid sim card">Int'l Prepaid SIM Card</Option>
                                    <Option value="wifi router rental">Wifi Router Rental</Option>
                                    <Option value="xperience">Xperience</Option>
                                    <Option value="bill & top-up">Bill & Top-Up</Option>
                                    <Option value="movies">Movies</Option>
                                    <Option value="dua don san bay">Đưa đón sân bay</Option>
                                    <Option value="travelokaPay">travelokaPay</Option>
                                    <Option value="bus">Bus</Option>
                                   
                                    <Option value="chung">Chung</Option>

                                    
                                </Select>
                                
                            </div>

                            <div className="my-info">
                                <div className="info-name">
                                    <h4 className="your-name">Tên của bạn</h4>
                                    <form name="myForm" action="#" onsubmit="return validateForm()" method="post">
                                        <input type="ten" className="text-ten"></input>
                                    </form>
                                   
                                </div>
                                <div className="info-email">
                                    <h4 className="your-name">Email của bạn</h4>
                                    <form name="myForm" action="#" onsubmit="return validateForm()" method="post">
                                        <input type="email" className="email"></input>
                                    </form>
                                   
                                </div>
                                <div className="info-feelings">
                                    <h4 className="your-name">Hãy chia sẻ lo lắng của bạn</h4>
                                    <form name="myForm" action="#" onsubmit="return validateForm()" method="post">
                                        <input type="text" className="text-fellings"></input>
                                    </form>
                                    <h4 className="detail-feelings">Thông tin càng cụ thể, chúng tôi sẽ hỗ trợ bạn<br></br> tốt hơn.</h4>
                                </div>
                            </div>

                            <div className="btn-upload">
                                <Upload {...props}>
                                    <Button className="upload-file" icon={<UploadOutlined />}>Click to Upload</Button>
                                    
                                </Upload>
                              
                                <Button className="send" type="primary" htmlType="submit">
                                    Gửi
                                </Button>
                            </div>
                           
                        </form>

                        <form className="other-channel">
                            <h2 className="title-channel">Các kênh khác</h2>
                            <h3 className="provide code">Vui lòng cung cấp Mã đặt chỗ Traveloka <br></br> khi
                            liên hệ với chúng tôi</h3>

                            <div className="tongdai">
                                <div className="info-tondai">
                                    <img className="icon-tongdai" src="https://d1785e74lyxkqq.cloudfront.net/webcx-desktop/_next/static/188abdc7fc85150e679c792210a76f17.svg"></img>
                                    <h3 className="tongdai-support">Tổng đài hỗ trợ</h3>
                                    <img className="icon-step" src ="https://d1785e74lyxkqq.cloudfront.net/webcx-desktop/_next/static/65e5f4ece2f7d0caaa4d5b07e5537879.svg"></img>
                                    
                                </div>
                               
                               <h3 className="tongdai-cuocphi">Áp dụng cước phí nhà mạng thông thường</h3>
                            </div>
                        </form>
                        </div>

                        <div className="note-contact">
                            <img className="pic-contact" src="https://ik.imagekit.io/tvlk/image/imageResource/2018/11/21/1542787475817-d60e6a11bee65c3e16aeb76bd6c7ae40.svg?tr=dpr-2,q-75,w-240"></img>
                            <h3 className="note-support">Để được hỗ trợ nhanh, vui lòng gửi yêu cầu của bạn qua biểu mẫu sau.</h3>
                        </div>
                    </TabPane>
                   
                    
                    <TabPane tab ="Tuyển dụng & Đối tác" key="bb" className="wrap_item_contact">
                        <div className="wrap_item_doitac">
                            <form className="tuyendung">
                                <div className="item-tuyendung">
                                    <img className="icon-tuyendung" src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/05/1512445994446-381ce92d9c184e79252437cae8a4e1f0.svg"></img>
                                    <h2 className="title-tuyendung">Tuyển dụng</h2>
                                    
                                </div>
                                <div className="note-tuyendung">
                                <p className="note-find-job">
                                        Để tìm hiểu thêm về cơ hội nghề nghiệp, vui lòng xem <a href="https://www.traveloka.com/vi-vn/careers" target="_blank">trang Tuyển dụng</a>
                                    </p>
                                </div>
                            </form>

                            <form className="truyenthong">
                                <div className="item-truyenthong">
                                    <img className= "icon-truyenthong" src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/05/1512448945295-211d4d04a08e7ced3354ac9f889f3685.svg"></img>
                                    <h2 className="title-truyenthong">Ấn phẩm & Truyền thông</h2>
                                    
                                </div>
                                <div className="note-truyenthong">
                                    <p className="note-media">
                                         Nếu bạn là nhân viên truyền thông, hãy gửi yêu cầu đến <a href="mailto:pr@traveloka.com" target="_bank" >pr@traveloka.com</a>. Chúng tôi sẽ không trả lời lại những email không phải là yêu cầu báo chí. 
                                    </p>
                                </div>
                            </form>

                            <form className="doitac">
                                <div className="item-doitac">
                                    <img className= "icon-doitac" src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/08/1512715735290-3808f475c68161ae118751a50ac5b29e.svg"></img>
                                    <h2 className="title-doitac">Đối tác</h2>
                                    
                                </div>
                                <div className="note-doitac">
                                    <p className="note-partner-1">
                                    Đối với các yêu cầu hoặc đề nghị hợp tác, vui lòng gửi email về cho chúng tôi tại <a href="mailto:partnership@traveloka.com" target="_bank">partnership@traveloka.com. </a>
                                    </p>
                                    <p className="note-partner-2">
                                    Đối với sản phẩm / dịch vụ tiếp thị số (ví dụ dịch vụ qua ứng dụng, nền tảng tối ưu hoá chiến lược kỹ thuật số v.v.) vui lòng gửi email đến <a href="mailto:digitalmarketing@traveloka.com" target="_bank">digitalmarketing@traveloka.com. </a>
                                    </p>
                                </div>
                            </form>

                            <form className="taitro">
                                <div className="item-taitro">
                                    <img className= "icon-taitro" src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/05/1512449293155-491b55a557204c57dde6da1ca65c2cdb.svg"></img>
                                    <h2 className="title-taitro">Tài trợ</h2>
                                    
                                </div>
                                <div className="note-taitro">
                                    <p className="note-sponsor">
                                    Đối với các sự kiện, chương trình, CSR, và các cơ hội tài trợ khác, vui lòng gửi đề nghị của bạn đến <a href="mailto:sponsorship@traveloka.com" target="_bank">sponsorship@traveloka.com.</a>
                                    </p>
                                </div>
                            </form>

                            <form className="quangcao">
                                <div className="item-quangcao">
                                    <img className= "icon-quangcao" src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/05/1512449293155-491b55a557204c57dde6da1ca65c2cdb.svg"></img>
                                    <h2 className="title-quangcao">Quảng cáo</h2>
                                    
                                </div>
                                <div className="note-quangcao">
                                    <p className="note-advertisement">
                                    Đối với trưng bày quảng cáo bên ngoài (ví dụ bảng quảng cáo ngoài trời, quảng cáo thương hiệu trên oto, các sự kiện khuyến mãi, v.v.), vui lòng gửi email đến<br></br> <a href="mailto:advertisement@traveloka.com" target="_bank">advertisement@traveloka.com.</a>
                                    </p>
                                </div>
                            </form>
                            
                        </div>
                    </TabPane>

                </Tabs>

                
            </div>

                {/* <div className="news-khuyenmai">
                    <div className="banner-khuyenmai">
                        <h3 className="title-khuyenmai">Đăng ký nhận tin khuyến mãi ngay để không bỏ lỡ các ưu đãi hấp dẫn mới nhất từ Traveloka!</h3>
                    </div>
                </div> */}
                        
            
            </div>
        </div>
    );
    
    
}

export default LienHe;