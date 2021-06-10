import './LichSuGD.scss';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import React from 'react';
import NavbarMenu from '../../../components/Navbar/navbar-top';
import NavbarMenu2 from '../../../components/Navbar/navbar-bot';
import Footer from '../../../components/footer/footer';
import NavbarLogin from '../../../components/HomeLogin/navbarLogin';
import TrangCaNhan from '../../../components/TrangCaNhan/TrangCaNhan';
import axios from 'axios';

function LichSuGD() {  
    // window.addEventListener('load', async () => {
    //     try{
    //         const laythongtin = await axios
    //         .get("https://oka1kh.azurewebsites.net/api/profiles", {headers: {
    //             authorization: localStorage.getItem("TOKEN")
    //         }})
    //         .then((res) => res.data)
    //         .catch((err) => err);

    //         const userId = laythongtin.data.auth[0].userId;
    //         console.log("thong tin: ", userId);

    //         const LSDatXe = await axios
    //         .get(`http://108.160.134.9:3301/bill/customer/${userId}`)
    //         .then((res) => res.data)
    //         .catch((err) => err);

    //         document.getElementById("LSDatXe_tr").innerHTML = "";
    //         console.log("LSDatXe ", LSDatXe);

    //         if(LSDatXe.status === "SUCCESS"){
    //             for(let i = 0; i < LSDatXe.result.length; i++)
    //             {             
    //                 document.getElementById("LSDatXe_tr").innerHTML +=
    //                 "<tr>" +
    //                     "<td>" + (i+1) + ". </td>" +
    //                     "<td>" + LSDatXe.result[i].id + "</td>" +
    //                     "<td>" + LSDatXe.result[i].address + "</td>" +
    //                     "<td>" + LSDatXe.result[i].name + "</td>" +
    //                     "<td>" + LSDatXe.result[i].quantity + "</td>" +
    //                     "<td>" + LSDatXe.result[i].id_saler + "</td>" +
    //                     "<td>" + LSDatXe.result[i].startDate + "</td>" +
    //                     "<td>" + LSDatXe.result[i].endDate + "</td>" +
    //                     "<td>" + LSDatXe.result[i].total + "</td>" +
    //                 "</tr>";
    //             }
    //         }
            
    //         // LSDatXe.result.forEach(element => {
    //         //     document.getElementById("LSDG_tr").innerHTML +=
    //         //     "<tr>" +
    //         //     "<td>" + element.id + "</td>" +
    //         //     "<td>" + element.idUser + "</td>" +
    //         //     "<td>" + element.id_saler + "</td>" +
    //         //     "<td>" + element.status + "</td>" +
    //         //     "<td>" + element.total + "</td>" +
    //         //     "</tr>";
    //         // });    
    //     }
    //     catch(error){
    //         //console.log("error.response.data.message", error.laythongtin.data.message);
    //     }
    // })
    const LSDatXe = async(data) => {
        try{
            const laythongtin = await axios
            .get("https://oka1kh.azurewebsites.net/api/profiles", {headers: {
                authorization: localStorage.getItem("TOKEN")
            }})
            .then((res) => res.data)
            .catch((err) => err);

            const userId = laythongtin.data.auth[0].userId;
            console.log("thong tin: ", userId);

            const LSDatXe = await axios
            .get(`//108.160.134.9:3301/bill/customer/${userId}`)
            .then((res) => res.data)
            .catch((err) => err);

            console.log("LSDatXe: ", LSDatXe);
            console.log("1: ", LSDatXe.result[0]);

            document.getElementById("LSGD_tr").innerHTML = "";

            if(LSDatXe.status === "SUCCESS"){ 
                document.getElementById("LSDG_title").innerHTML = "Lịch sử đặt xe";
                document.getElementById("LSGD_tr").innerHTML = 
                "<tr>" +
                    "<td>STT</td>"  +
                    "<td>Mã phiếu đặt</td>"  +
                    "<td>Địa chỉ</td>"  +
                    "<td>Tên xe</td>"  +
                    "<td>Vị trí</td>"  +
                    "<td>Mã người cho thuê</td>"  +
                    "<td>Ngày bắt đầu</td>"  +
                    "<td>Ngày kết thúc</td>"  +
                    "<td>Tổng tiền</td>"  +
                "</tr>" ;
                for(let i = 0; i < LSDatXe.result.length; i++)
                {
                    document.getElementById("LSGD_tr").innerHTML +=
                    "<tr>" +
                        "<td>" + (i+1) + ". </td>" +
                        "<td>" + LSDatXe.result[i].id + "</td>" +
                        "<td>" + LSDatXe.result[i].address + "</td>" +
                        "<td>" + LSDatXe.result[i].name + "</td>" +
                        "<td>" + LSDatXe.result[i].quantity + "</td>" +
                        "<td>" + LSDatXe.result[i].id_saler + "</td>" +
                        "<td>" + LSDatXe.result[i].startDate + "</td>" +
                        "<td>" + LSDatXe.result[i].endDate + "</td>" +
                        "<td>" + LSDatXe.result[i].total + "</td>" +
                    "</tr>";
                }
            }
            
            // LSDatXe.result.forEach(element => {
            //     document.getElementById("LSDG_tr").innerHTML +=
            //     "<tr>" +
            //     "<td>" + element.id + "</td>" +
            //     "<td>" + element.idUser + "</td>" +
            //     "<td>" + element.id_saler + "</td>" +
            //     "<td>" + element.status + "</td>" +
            //     "<td>" + element.total + "</td>" +
            //     "</tr>";
            // });
    
        }
        catch(error){
            //console.log("error.response.data.message", error.laythongtin.data.message);
        }
    }

    const BietThu = async(data) => {
        try{
            const laythongtin = await axios
            .get("https://oka1kh.azurewebsites.net/api/profiles", {headers: {
                authorization: localStorage.getItem("TOKEN")
            }})
            .then((res) => res.data)
            .catch((err) => err);

            const userId = laythongtin.data.auth[0].userId;
            console.log("thong tin: ", userId);

            const BietThu = await axios
            .get(`http://cnpmnc-noiluutru.herokuapp.com/api/data/booking?userId=${userId}`)
            .then((res) => res.data)
            .catch((err) => err);

            console.log("BietThu: ", BietThu);
            document.getElementById("LSGD_tr").innerHTML = "";

            document.getElementById("LSDG_title").innerHTML = "Lịch sử thuê biệt thự";
            document.getElementById("LSGD_tr").innerHTML = 
                "<tr>" +
                    "<td>STT</td>" +
                    "<td>Địa điểm</td>" +
                    "<td>Loại lưu trữ</td>" +
                    "<td>Nơi lưu trữ</td>" +
                    "<td>Địa chỉ</td>" +
                    "<td>Tên phòng</td>" +
                    "<td>Giá phòng</td>" +
                    "<td>Ngày đến</td>" +
                    "<td>Ngày đi</td>" +
                    "<td>Tổng tiền</td>" +
                "</tr>" ;
            for(let i = 0; i < BietThu.length; i++)
            {
                document.getElementById("LSGD_tr").innerHTML +=
                "<tr>" +
                    "<td>" + (i+1) + ". </td>" +
                    "<td>" + BietThu[i].ten_diadiem + "</td>" +
                    "<td>" + BietThu[i].ten_loailuutru + "</td>" +
                    "<td>" + BietThu[i].ten_noiluutru + "</td>" +
                    "<td>" + BietThu[i].diachi_noiluutru + "</td>" +
                    "<td>" + BietThu[i].ten_phong + "</td>" +
                    "<td>" + BietThu[i].gia_phong + "</td>" +
                    "<td>" + BietThu[i].ngayden_datphong + "</td>" +
                    "<td>" + BietThu[i].ngaydi_datphong + "</td>" +
                    "<td>" + BietThu[i].tongtien_datphong + "</td>" +
                "</tr>";
            }    
        }
        catch(error){
            //console.log("error.response.data.message", error.laythongtin.data.message);
        }
    }

    const Voucher = async(data) => {
        try{
            const laythongtin = await axios
            .get("https://oka1kh.azurewebsites.net/api/profiles", {headers: {
                authorization: localStorage.getItem("TOKEN")
            }})
            .then((res) => res.data)
            .catch((err) => err);

            const userId = laythongtin.data.auth[0].userId;

            const Voucher = await axios
            .get(`52.36.113.238:3000/api/GetVouchersByTaiKhoan?TaiKhoan=${userId}`)
            .then((res) => res.data)
            .catch((err) => err);

            console.log("Voucher: ", Voucher);
            document.getElementById("LSGD_tr").innerHTML = "";

            document.getElementById("LSDG_title").innerHTML = "Voucher sở hữu";
            // document.getElementById("LSGD_tr").innerHTML = 
            //     "<tr>" +
            //         "<td>STT</td>" +
            //         "<td>Địa điểm</td>" +
            //         "<td>Loại lưu trữ</td>" +
            //         "<td>Nơi lưu trữ</td>" +
            //         "<td>Địa chỉ</td>" +
            //         "<td>Tên phòng</td>" +
            //         "<td>Giá phòng</td>" +
            //         "<td>Ngày đến</td>" +
            //         "<td>Ngày đi</td>" +
            //         "<td>Tổng tiền</td>" +
            //     "</tr>" ;
            // for(let i = 0; i < BietThu.length; i++)
            //     {
            //         document.getElementById("LSGD_tr").innerHTML +=
            //         "<tr>" +
            //             "<td>" + (i+1) + ". </td>" +
            //             "<td>" + BietThu[i].ten_diadiem + "</td>" +
            //             "<td>" + BietThu[i].ten_loailuutru + "</td>" +
            //             "<td>" + BietThu[i].ten_noiluutru + "</td>" +
            //             "<td>" + BietThu[i].diachi_noiluutru + "</td>" +
            //             "<td>" + BietThu[i].ten_phong + "</td>" +
            //             "<td>" + BietThu[i].gia_phong + "</td>" +
            //             "<td>" + BietThu[i].ngayden_datphong + "</td>" +
            //             "<td>" + BietThu[i].ngaydi_datphong + "</td>" +
            //             "<td>" + BietThu[i].tongtien_datphong + "</td>" +
            //         "</tr>";
            //     }    
        }
        catch(error){
            //console.log("error.response.data.message", error.laythongtin.data.message);
        }
    }

    const DuaDonSanBay = async(data) => {
        try{
            const laythongtin = await axios
            .get("https://oka1kh.azurewebsites.net/api/profiles", {headers: {
                authorization: localStorage.getItem("TOKEN")
            }})
            .then((res) => res.data)
            .catch((err) => err);

            const email = laythongtin.data.auth[0].email;
            console.log("thong tin: ", email);

            const DuaDonSanBay = await axios
            .get(`http://13.229.200.21:3000/api/booking/tickets/guest?email=${email}`)
            .then((res) => res.data)
            .catch((err) => err);

            console.log("DuaDonSanbay: ", DuaDonSanBay);
            console.log("DuaDonSanbay: ", DuaDonSanBay.ticketsFullInformation[0].ticket.classId);
            
            document.getElementById("LSGD_tr").innerHTML = "";

            document.getElementById("LSDG_title").innerHTML = "Lịch sử đưa đón sân bay";
            document.getElementById("LSGD_tr").innerHTML = 
                "<tr>" +
                    "<td>STT</td>" +
                    "<td>Mã phiếu</td>" +
                    "<td>Ngày khởi hành</td>" +
                    "<td>Họ tên</td>" +
                    "<td>Title</td>" +
                    "<td>Giá vé</td>" +
                "</tr>" ;
            for(let i = 0; i < DuaDonSanBay.ticketsFullInformation.length; i++)
            {
                document.getElementById("LSGD_tr").innerHTML +=
                "<tr>" +
                    "<td>" + (i+1) + ". </td>" +
                    "<td>" + DuaDonSanBay.ticketsFullInformation[i].ticket.classId + "</td>" +
                    "<td>" + DuaDonSanBay.ticketsFullInformation[i].date + "</td>" +
                    "<td>" + DuaDonSanBay.ticketsFullInformation[i].ticket.fullName + "</td>" +
                    "<td>" + DuaDonSanBay.ticketsFullInformation[i].ticket.title + "</td>" +
                    "<td>" + DuaDonSanBay.ticketsFullInformation[i].ticket.ticketPrice + "</td>" +
                "</tr>";
            }    
        }
        catch(error){
            //console.log("error.response.data.message", error.laythongtin.data.message);
        }
    }
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
                    <div className="transaction">
                        <div className="redirect">
                            <p>Xem tất cả vé máy bay và phiếu thanh toán trong <a className="dcct" href="https://www.traveloka.com/vi-vn/user/mybooking">Đặt chỗ của tôi</a></p>
                        </div>
                        <div className="date">
                            <button className="btn" type="button" onClick={LSDatXe}> Lịch sử đặt xe </button>{" "}
                            <button className="btn" type="button" onClick={BietThu}> Biệt thự </button>{" "}
                            <button className="btn" type="button" onClick={Voucher}> Gift-Voucher </button>{" "}
                            <button className="btn" type="button" onClick={DuaDonSanBay}> Đưa đón sân bây </button>{" "}
                            {/* <DropdownButton title="Bộ lọc">
                                <form className="form">
                            <a>Hiển thị những giao dịch này</a><br></br>
                            <a className="title">Loại sản phẩm</a><br></br>
                            <hr class="dashed"></hr>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value=""/>Vé máy bay
                                </label>
                                <label class="checkbox-inline" className="cb02">
                                    <input type="checkbox" value=""/>Đưa đón sân bay
                                </label><br></br>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value=""/>Extra Baggage
                                </label>
                                <label class="checkbox-inline" className="cb02">
                                    <input type="checkbox" value=""/>Combo tiết kiệm
                                </label><br></br>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value=""/>Khách sạn
                                </label>
                                <label class="checkbox-inline" className="cb02">
                                    <input type="checkbox" value=""/>Xperience
                                </label><br></br>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value=""/>Cho thuê xe
                                </label>
                                <label class="checkbox-inline" className="cb02">
                                    <input type="checkbox" value=""/>Bảo hiểm du lịch
                                </label><br></br>
                            <a className="title">Phương thức thanh toán</a><br></br>
                            <hr class="dashed"></hr>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value=""/>Thẻ tín dụng
                                </label>
                                <label class="checkbox-inline" className="cb02">
                                    <input type="checkbox" value=""/>Tại cửa hàng
                                </label><br></br>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value=""/>Chuyển khoản ngân hàng
                                </label>
                                <label class="checkbox-inline" className="cb02">
                                    <input type="checkbox" value=""/>Bưu điện
                                </label><br></br>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value=""/>Thẻ ATM nội địa
                                </label></form>
                            </DropdownButton> */}
                            <div className="trans">
                                <p>Tất cả giao dịch sẽ được hiển thị tại đây.</p>
                            </div>
                        </div>
                    </div>

                    <h2 id="LSDG_title"></h2>
                    <table id="LSGD_tr">

                    </table>
                </div>
            </div>

            {/* -- FOOTER -- */}
            <div>
                <Footer />
            </div>
        </div> 
    );
}

export default LichSuGD;