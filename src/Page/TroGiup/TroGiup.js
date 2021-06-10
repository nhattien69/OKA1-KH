import SearchIcon from '@material-ui/icons/Search';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Button} from 'react-bootstrap'
import './TroGiup.css'
export default function TroGiup() {
    return (
        <div className="container-fluid">
            <div className="first">
                <div className="  position">
                    <div className=" main-title">
                        <h2>Trung tâm Hỗ trợ Taveloka</h2> 
                        <h5>Mọi câu trả lời dành cho bạn</h5>
                        </div>
                        
                        <div className="form">
                            <i className="icon-search"><SearchIcon color="action" /></i>
                        <input class="form-control form-control-lg " type="text" placeholder=" Nhập chủ đề ở đây" aria-label=".form-control-lg example" />
                    </div>
                </div>
            </div>  

            <div className="container">
                <div className="second">
                    <div className="row ">
                        <div className="col-6 row-1">
                            <div className="title-option">Chủ đề phổ biến</div>
                            <div className="list-option">
                                <div id="info">
                                <a href="https://www.traveloka.com/vi-vn/help/flight/flight-info/flight-general-information/airline-policy-updates-regarding-coronavirus">Cập nhật chính sách Hàng không liên quan đến virus Corona
                                <ArrowForwardIosIcon className="icon-arrow" />   </a>  
                                </div>                               
                            </div>
                            <div className="list-option">
                            <div id="info">
                                <a href="https://www.traveloka.com/vi-vn/help/general-info/general-information-payment/general-payment-info/getting-a-tax-receipt-vn">Lấy hóa đơn GTGT
                                <ArrowForwardIosIcon className="icon-arrow" />   </a>  
                                </div>
                            </div>
                            <div className="list-option">
                            <div id="info">
                                <a href="https://www.traveloka.com/vi-vn/help/flight/flight-info/flight-cancellation/how-do-i-reschedule-my-flight">Cách đổi vé máy bay của tôi
                                 <ArrowForwardIosIcon className="icon-arrow" />   </a>    
                                      
                            </div>
                            </div>
                            <div className="list-option">
                                <div id="info">
                                <a href="https://www.traveloka.com/vi-vn/help/flight/flight-info/flight-cancellation/can-i-cancel-my-booking-and-get-a-refund">Cách hủy vé và hoàn tiền cho đặt chỗ máy bay
                                <ArrowForwardIosIcon className="icon-arrow" />   </a>  
                                </div>
                            </div>

                            <div className="need-help">
                                <div className="need-help-1">Bạn cần giúp đỡ</div>
                                <div className="need-help-2">Dù bạn đang ở đâu, chúng tôi sẽ có mặt chỉ với một cú nhấp chuột!</div>
                                <Button className="btn-need-help">Liên hệ chúng tôi</Button>
                            </div>
                        </div>
                        <div className="col-5 ">
                            <div className="title-option">Phân loại theo sản phẩm</div>
                            <div className="option">
                                <div className="option-layout">
                                    <a href="">
                                        <div className="option-border">
                                        <img src="https://cntres-assets-ap-southeast-1-250226768838-cf675839782fd369.s3.amazonaws.com/imageResource/2019/05/02/1556780430184-dfa2ee02cb6af31a7361d828f72bd1a0.png" />
                                        </div>
                                       <p>Thông tin chung</p>
                                    </a>                                                  
                            </div>
                            </div>
                            <div className="option">
                                <div className="option-layout">
                                    <a href="">
                                        <div className="option-border">
                                        <img src="https://cntres-assets-ap-southeast-1-250226768838-cf675839782fd369.s3.amazonaws.com/imageResource/2019/05/02/1556780689413-10d0d24963382ff89291b0c4303dfb16.png" />
                                        </div>
                                       <p>travelokaPay </p>
                                    </a>
                                    </div>              
                            </div>
                            <div className="option">
                                <div className="option-layout">
                                    <a href="">
                                        <div className="option-border">
                                        <img src="https://cntres-assets-ap-southeast-1-250226768838-cf675839782fd369.s3.amazonaws.com/imageResource/2019/05/02/1556780512357-6a2e605f6156ff9a7001fd5ae56287be.png" />
                                        </div>
                                       <p>Vé máy bay </p>
                                    </a>
                                    </div>                   
                            </div>
                            <div className="option">
                                <div className="option-layout">
                                    <a href="">
                                        <div className="option-border">
                                        <img src="https://cntres-assets-ap-southeast-1-250226768838-cf675839782fd369.s3.amazonaws.com/imageResource/2019/05/02/1556780532828-d0b44de371c5692ce76b42293260b6d2.png" />
                                        </div>
                                       <p>Khách sạn</p>
                                    </a>
                                    </div>               
                            </div>
                          
                            <div className="option">
                                <div className="option-layout">
                                    <a href="">
                                        <div className="option-border">
                                        <img src="https://cntres-assets-ap-southeast-1-250226768838-cf675839782fd369.s3.amazonaws.com/imageResource/2019/05/02/1556780610880-46dda3524d74764c138f474c7f00254f.png" />
                                        </div>
                                       <p>Vé máy bay + Khách sạn</p>
                                    </a>                                                  
                            </div>
                            </div>
                            <div className="option">
                                <div className="option-layout">
                                    <a href="">
                                        <div className="option-border">
                                        <img src="https://cntres-assets-ap-southeast-1-250226768838-cf675839782fd369.s3.amazonaws.com/imageResource/2020/06/16/1592273700303-c1ba6b67ec64c33138d4fcbaf686e30c.png" />
                                        </div>
                                       <p>Xperience </p>
                                    </a>
                                    </div>              
                            </div>
                            <div className="option">
                                <div className="option-layout">
                                    <a href="">
                                        <div className="option-border">
                                        <img src="https://cntres-assets-ap-southeast-1-250226768838-cf675839782fd369.s3.amazonaws.com/imageResource/2019/05/02/1556780641651-04ee2f558961c668480631db43ba56c8.png" />
                                        </div>
                                       <p>Đưa đón sân bay </p>
                                    </a>
                                    </div>                   
                            </div>
                            <div className="option">
                                <div className="option-layout">
                                    <a href="">
                                        <div className="option-border">
                                        <img src="https://cntres-assets-ap-southeast-1-250226768838-cf675839782fd369.s3.amazonaws.com/imageResource/2020/06/24/1592976818783-92cbb8512b01c044f4857abbb53a8828.png" />
                                        </div>
                                       <p>Điểm thưởng traveloka</p>
                                    </a>
                                    </div>               
                            </div>
                        </div>
                        </div>
                    </div>                                          
                    </div>
                </div>                
               
    )
}