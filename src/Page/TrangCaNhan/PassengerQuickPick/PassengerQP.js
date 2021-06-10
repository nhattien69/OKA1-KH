import  React , {useState} from 'react'
import PersonIcon from '@material-ui/icons/Person';
import { Button, Collapse} from 'react-bootstrap'
import './PassengerQP.scss'
import NavbarMenu from '../../../components/Navbar/navbar-top';
import NavbarMenu2 from '../../../components/Navbar/navbar-bot';
import Footer from '../../../components/footer/footer';
import NavbarLogin from '../../../components/HomeLogin/navbarLogin';
import TrangCaNhan from '../../../components/TrangCaNhan/TrangCaNhan';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PassengerQP() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [openMaster, setOpenMaster] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
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
                <div className="passQP">
            <div className="message">
                <h5>Danh sách hành khách</h5>
                <p>Bạn có thể lưu tối đa thông tin 20 hành khách</p>
            </div>

            <div className="user">
                <div className="form">
                    <PersonIcon /><span><h3>Tên User</h3></span>
                    <Button variant="link" id="btn-link">Gỡ bỏ</Button>
                    <Button onClick={() => setOpenMaster(!openMaster)} aria-controls="content-master" aria-expanded={openMaster}
                     variant="link" id="btn-link" > Chỉnh sửa</Button>                    
                </div>
                <Collapse in={openMaster}>
                <div className="edit-form" id="content-master">
                    <div className="1">
                        <div className="form-row">
                            <div className="col-2">
                                <div className="form-group">
                                    <label>Danh xưng</label>
                                    <input type="text" value="" />
                                </div>
                            </div>  
                            <div className="col">
                                <div className="form-group">
                                    <label>Tên</label> 
                                    <input type="text" value="" />
                                </div>
                            </div>      
                            <div className="col">
                                <div className="form-group">
                                    <label>Họ</label>
                                    <input type="text" value="" />
                                </div>
                            </div>                                
                        </div>                       
                    </div>
                    <div className="2">
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" value="" />
                                </div>
                            </div>  
                            <div className="col">
                                <div className="form-group">
                                    <label>Điện thoại</label>
                                    <input type="text" value="" />
                                </div>
                            </div>        
                        </div> 
                    </div>
                    <div className="3">
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group">
                                        <label>Quốc tịch</label>
                                        <input type="text" value="" />
                                </div>
                            </div>  
                            <div className="col">
                                <div className="form-group">                             
                                    <label>Ngày sinh</label>
                                    <div className="form-row">
                                        <input className="col-2" type="text" value="" />
                                        <input className="col-7" type="text" value="" />
                                        <input className="col-3" type="text" value="" />
                                    </div>
                                </div>
                            </div>        
                        </div> 
                    </div>
                    <hr></hr>
                    <div className="4">
                        <div className="">Hộ chiếu</div>
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group">
                                        <label>Số hộ chiếu</label>
                                        <input type="text" value="" />
                                </div>
                            </div>  
                            <div className="col">
                                <div className="form-group">
                                    <label>Thời gian hộ chiếu</label>
                                    <div className="form-row">
                                        <input className="col-2" type="text" value="" />
                                        <input className="col-7" type="text" value="" />
                                        <input className="col-3" type="text" value="" />
                                    </div>
                                </div>
                            </div>  
                            
                        </div> 
                     </div>
                     <div className="5">
                        <div className="form-group">
                            <label>Quốc gia cấp</label>
                            <input type="text" value="" />
                        </div>
                     </div>
                     <hr></hr>
                     <Button onClick={() => setOpen(!open)} aria-controls="content" aria-expanded={open}
                      variant="link" id="btn-option" >+CMND</Button>
                      <Collapse in={open}><div className="CMND option collapse" id="content">
                        <div className="title-option">
                            CMND
                            <Button variant="link"><i class="fa fa-close"></i></Button>
                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Số chứng minh nhân dân</label>
                                        <input type="text" value="" />
                                    </div>
                                </div>  
                                <div className="col">
                                    <div className="form-group">
                                        <label>Quốc gia cấp</label>
                                        <input type="text" value="" />
                                    </div>
                                </div>      
                            </div>
                            <div className="form-row">
                            <div className="col-5">
                                <div className="form-group">
                                    <label>Ngày cấp</label>
                                    <div className="form-row">
                                        <input className="col-2" type="text" value="" />
                                        <input className="col-7" type="text" value="" />
                                        <input className="col-3" type="text" value="" />
                                    </div>
                                </div>
                            </div>  
                            <div className="col-5 op-left">
                                 <div className="form-group">
                                    <label>Ngày hết hạn</label>
                                    <div className="form-row">
                                        <input className="col-2" type="text" value="" />
                                        <input className="col-7" type="text" value="" />
                                        <input className="col-3" type="text" value="" />
                                    </div>
                                </div>
                            </div>  
                            </div>
                        </div>
                     </div></Collapse>
                     
                     <hr></hr>
                     <Button  onClick={() => setOpen1(!open1)} aria-controls="content-2" aria-expanded={open1}
                     variant="link" id="btn-option">+Bằng lái xe</Button>
                     <Collapse in={open1}>
                     <div className="BLX option" id="content-2">
                        <div className="title-option">
                            Bằng lái xe
                            <Button variant="link"><i class="fa fa-close"></i></Button>
                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Số chứng minh nhân dân</label>
                                        <input type="text" value="" />
                                    </div>
                                </div>  
                                <div className="col">
                                    <div className="form-group">
                                        <label>Quốc gia cấp</label>
                                        <input type="text" value="" />
                                    </div>
                                </div>      
                            </div>
                            <div className="form-row">
                            <div className="col-5">
                                <div className="form-group">
                                    <label>Ngày cấp</label>
                                    <div className="form-row">
                                        <input className="col-2" type="text" value="" />
                                        <input className="col-7" type="text" value="" />
                                        <input className="col-3" type="text" value="" />
                                    </div>
                                </div>
                            </div>  
                            <div className="col-5 op-left">
                                <div className="form-group">
                                    <label>Ngày hết hạn</label>
                                    <div className="form-row">
                                        <input className="col-2" type="text" value="" />
                                        <input className="col-7" type="text" value="" />
                                        <input className="col-3" type="text" value="" />
                                    </div>
                                </div>
                            </div>  
                        </div>
                        </div>
                    </div>   
                     </Collapse>
                     
                    <div className="btn-action">
                    <Button variant="warning"id="btn-action">Lưu</Button>  
                    <Button onClick={() => setOpenMaster(!openMaster)} aria-controls="content-master" aria-expanded={openMaster}
                     variant="light" id="btn-action">Hủy</Button>
                           
                    </div>
                             
                </div>         
                </Collapse>
              </div>
            <div>
                <Button onClick={() => setOpenAdd(!openAdd)} aria-controls="content-add" aria-expanded={openAdd}
                 variant="primary" className="btn-add" size="lg" block>Thêm hành khách</Button>
                </div>
                <Collapse in={openAdd}>
                <div className="user">             
                <Collapse in={openAdd}>
                <div className="edit-form" id="content-add">
                    <div className="1">
                        <div className="form-row">
                            <div className="col-2">
                                <div className="form-group">
                                    <label>Danh xưng</label>
                                    <input type="text" value="" />
                                </div>
                            </div>  
                            <div className="col">
                                <div className="form-group">
                                    <label>Tên</label> 
                                    <input type="text" value="" />
                                </div>
                            </div>      
                            <div className="col">
                                <div className="form-group">
                                    <label>Họ</label>
                                    <input type="text" value="" />
                                </div>
                            </div>                                
                        </div>                       
                    </div>
                    <div className="2">
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" value="" />
                                </div>
                            </div>  
                            <div className="col">
                                <div className="form-group">
                                    <label>Điện thoại</label>
                                    <input type="text" value="" />
                                </div>
                            </div>        
                        </div> 
                    </div>
                    <div className="3">
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group">
                                        <label>Quốc tịch</label>
                                        <input type="text" value="" />
                                </div>
                            </div>  
                            <div className="col">
                                <div className="form-group">                             
                                    <label>Ngày sinh</label>
                                    <div className="form-row">
                                        <input className="col-2" type="text" value="" />
                                        <input className="col-7" type="text" value="" />
                                        <input className="col-3" type="text" value="" />
                                    </div>
                                </div>
                            </div>        
                        </div> 
                    </div>
                    <hr></hr>
                    <div className="4">
                        <div className="">Hộ chiếu</div>
                        <div className="form-row">
                            <div className="col">
                                <div className="form-group">
                                        <label>Số hộ chiếu</label>
                                        <input type="text" value="" />
                                </div>
                            </div>  
                            <div className="col">
                                <div className="form-group">
                                    <label>Thời gian hộ chiếu</label>
                                    <div className="form-row">
                                        <input className="col-2" type="text" value="" />
                                        <input className="col-7" type="text" value="" />
                                        <input className="col-3" type="text" value="" />
                                    </div>
                                </div>
                            </div>  
                            
                        </div> 
                     </div>
                     <div className="5">
                        <div className="form-group">
                            <label>Quốc gia cấp</label>
                            <input type="text" value="" />
                        </div>
                     </div>
                     <hr></hr>
                     <Button onClick={() => setOpen(!open)} aria-controls="content" aria-expanded={open}
                      variant="link" id="btn-option" >+CMND</Button>
                      <Collapse in={open}><div className="CMND option collapse" id="content">
                        <div className="title-option">
                            CMND
                            <Button variant="link"><i class="fa fa-close"></i></Button>
                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Số chứng minh nhân dân</label>
                                        <input type="text" value="" />
                                    </div>
                                </div>  
                                <div className="col">
                                    <div className="form-group">
                                        <label>Quốc gia cấp</label>
                                        <input type="text" value="" />
                                    </div>
                                </div>      
                            </div>
                            <div className="form-row">
                            <div className="col-5">
                                <div className="form-group">
                                    <label>Ngày cấp</label>
                                    <div className="form-row">
                                        <input className="col-2" type="text" value="" />
                                        <input className="col-7" type="text" value="" />
                                        <input className="col-3" type="text" value="" />
                                    </div>
                                </div>
                            </div>  
                            <div className="col-5 op-left">
                                 <div className="form-group">
                                    <label>Ngày hết hạn</label>
                                    <div className="form-row">
                                        <input className="col-2" type="text" value="" />
                                        <input className="col-7" type="text" value="" />
                                        <input className="col-3" type="text" value="" />
                                    </div>
                                </div>
                            </div>  
                            </div>
                        </div>
                     </div></Collapse>
                     
                     <hr></hr>
                     <Button  onClick={() => setOpen1(!open1)} aria-controls="content-2" aria-expanded={open1}
                     variant="link" id="btn-option">+Bằng lái xe</Button>
                     <Collapse in={open1}>
                     <div className="BLX option" id="content-2">
                        <div className="title-option">
                            Bằng lái xe
                            <Button variant="link"><i class="fa fa-close"></i></Button>
                            <div className="form-row">
                                <div className="col">
                                    <div className="form-group">
                                        <label>Số chứng minh nhân dân</label>
                                        <input type="text" value="" />
                                    </div>
                                </div>  
                                <div className="col">
                                    <div className="form-group">
                                        <label>Quốc gia cấp</label>
                                        <input type="text" value="" />
                                    </div>
                                </div>      
                            </div>
                            <div className="form-row">
                            <div className="col-5">
                                <div className="form-group">
                                    <label>Ngày cấp</label>
                                    <div className="form-row">
                                        <input className="col-2" type="text" value="" />
                                        <input className="col-7" type="text" value="" />
                                        <input className="col-3" type="text" value="" />
                                    </div>
                                </div>
                            </div>  
                            <div className="col-5 op-left">
                                <div className="form-group">
                                    <label>Ngày hết hạn</label>
                                    <div className="form-row">
                                        <input className="col-2" type="text" value="" />
                                        <input className="col-7" type="text" value="" />
                                        <input className="col-3" type="text" value="" />
                                    </div>
                                </div>
                            </div>  
                        </div>
                        </div>
                    </div>   
                     </Collapse>
                     
                    <div className="btn-action">
                    <Button variant="warning"id="btn-action">Lưu</Button>  
                    <Button onClick={() => setOpenAdd(!openAdd)} aria-controls="content-add" aria-expanded={openMaster}
                     variant="light" id="btn-action">Hủy</Button>
                           
                    </div>
                             
                </div>         
                </Collapse>
              </div>
                </Collapse>
        </div>
                </div>
            </div>

            {/* -- FOOTER -- */}
            <div>
                <Footer />
            </div>
        </div> 
    )
}