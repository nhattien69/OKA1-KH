import React, { Component } from 'react'
import { BrowserRouter, Route, Link, NavLink, Switch, Router } from "react-router-dom";
import trangchu from '../Page/TrangChu';
import Muavebay1 from '../components/DatVeMayBay/Muavemaybay';
import Form1 from '../components/DatVeMayBay/Form1';
import DCCTTatCaSanPham from '../Page/DatChoCuaToi/TatCaSanPham/TatCaSanPham';
import DCCTVeMayBay from '../Page/DatChoCuaToi/VeMayBay/VeMayBay';
import DCCTKhachSan from '../Page/DatChoCuaToi/KhachSan/KhachSan';
import DangKy from '../components/Navbar/DangKy';
// import TrangCaNhan from '../components/TrangCaNhan/TrangCaNhan';
import Trangchu from '../Page/TrangChu';
import LoginPage from '../components/Navbar/LoginPage';
import Home2 from '../components/HomeLogin/Home2';
import Profile from '../components/HomeLogin/Profile';
import AdminLogin from '../components/Navbar/AdminLogin'
import TaiKhoan from '../components/HomeLogin/ProfileUser/TaiKhoan';
import TroGiup from '../Page/TroGiup/TroGiup';
import LienHe from '../Page/LienHe/LienHe';
import TrangKhachHang from '../Page/TrangCaNhan/TaiKhoan/UserProfile';
import LichSuGD from '../Page/TrangCaNhan/DanhSachGiaoDich/LichSuGD';
import DiemThuong from '../Page/TrangCaNhan/DiemThuongCuaToi/DiemThuong';
import PassengerQP from '../Page/TrangCaNhan/PassengerQuickPick/PassengerQP';
import ThongBaoVeMayBay from '../Page/TrangCaNhan/ThongBaoGiaVeMayBay/ThongBaoVeMayBay';
import DangNhap from '../components/Navbar/DangNhap';
import PartnerDN from '../components/Navbar/PartnerDangNhap';
import PartnerDK from '../components/Navbar/PartnerDangKi';
import ListPartner from '../Page/Admin/Partner/ListPartner';
import ListUser from '../Page/Admin/User/ListUser';
import PartnerPage from '../Page/Admin/Partner/Partner';

const Routerapp = () => {
        return ( 
                <div>
                        <BrowserRouter>                  
                                <Route path="/TrangChu" component={trangchu} />
                                <Route path="/" exact component={trangchu} />
                                <Route path="/DatChoCuaToi/TatCaSanPham" component={DCCTTatCaSanPham} />
                                <Route path="/DatChoCuaToi/VeMayBay" component={DCCTVeMayBay} />
                                <Route path="/DatChoCuaToi/KhachSan" component={DCCTKhachSan} />
                                <Route path="/Muavebay1" component={Muavebay1} />  
                                <Route path="/DangKy" component={DangKy} />  
                                <Route path='/Admin' exact component={AdminLogin} />
                                <Route path='/DangNhap' exact component={DangNhap} />
                                <Route path='/Home' exact component={Home2} />
                                <Route path="/TaiKhoan" component={TrangKhachHang} />  
                                <Route path="/DanhSachGiaoDich" component={LichSuGD} />   
                                <Route path="/DiemThuongCuaToi" component={DiemThuong} />
                                <Route path="/PassengerQuickPick" component={PassengerQP} />
                                <Route path="/ThongBaoGiaVeMayBay" component={ThongBaoVeMayBay} /> 
                                <Route path="/Partner" exact component={PartnerDN} />
                                <Route path="/PartnerDK" exact component={PartnerDK} />
                                <Route path="/PartnerPage" exact component={PartnerPage} />
                                {/* <Route path="/PartnerIndex" exact component={Partner} /> */}
                                
                                <Route path='/TroGiup' exact component={TroGiup} />
                                <Route path='/LienHe' exact component={LienHe} />  
                                <Route path="/admin/listpartner" component={ListPartner}/>
                                <Route path="/admin/listuser" component={ListUser}/>
                                

                        </BrowserRouter>      
                </div>
        );
}

 
export default Routerapp;