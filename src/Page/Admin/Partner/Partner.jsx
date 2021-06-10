import React from 'react';
import './Partner.scss';
import axios from 'axios';

function Partner(){
    // window.addEventListener('load', async () => {
    //     try {
    //       const laythongtin = await axios
    //         .get("https://oka1kh.azurewebsites.net/api/profiles", {headers: {
    //           authorization: localStorage.getItem("TOKEN")
    //       }})
    //         .then((res) => res.data)
    //         .catch((err) => err);
    //       console.log(laythongtin.data.auth[0].fristName);
    
    //       if(JSON.stringify(localStorage.getItem("TOKEN")) === "null" || JSON.stringify(localStorage.getItem("TOKEN")) === "undefined"){
    //         document.getElementById("NavBeforeLogIn").style.display = "block";
    //         document.getElementById("NavAfterLogIn").style.display = "none";
    //       }
    //       else
    //       {
    //         document.getElementById("NavBeforeLogIn").style.display = "none";
    //         document.getElementById("NavAfterLogIn").style.display = "block";
    //         //document.getElementById("simple-menu").style.display = "block";
    //         document.getElementById("showFirstNameUser").innerHTML = laythongtin.data.auth[0].fristName;
    //         console.log("FirstName" + laythongtin.data.auth[0].fristName);
    //       }
    //       console.log("token: " , JSON.stringify(localStorage.getItem("TOKEN")));
    //     } catch (error) {
    //       //console.log("error.response.data.message", error.response.data.message);
    //     }
    //   });

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

            document.getElementById("LSGD_Partner_tr").innerHTML = "";

            if(LSDatXe.status === "SUCCESS"){ 
                document.getElementById("LSDG_Partner_title").innerHTML = "Lịch sử đặt xe";
                document.getElementById("LSGD_Partner_tr").innerHTML = 
                "<tr>" +
                    "<td>STT</td>"  +
                    "<td>Mã phiếu đặt</td>"  +
                    "<td>Địa chỉ</td>"  +
                    "<td>Tên xe</td>"  +
                    "<td>Vị trí</td>"  +
                    "<td>Mã người cho thuê</td>"  +
                    "<td>Mã người dùng</td>"  +
                    "<td>Ngày bắt đầu</td>"  +
                    "<td>Ngày kết thúc</td>"  +
                    "<td>Tổng tiền</td>"  +
                "</tr>" ;
                for(let i = 0; i < LSDatXe.result.length; i++)
                {
                    document.getElementById("LSGD_Partner_tr").innerHTML +=
                    "<tr>" +
                        "<td>" + (i+1) + ". </td>" +
                        "<td>" + LSDatXe.result[i].id + "</td>" +
                        "<td>" + LSDatXe.result[i].address + "</td>" +
                        "<td>" + LSDatXe.result[i].name + "</td>" +
                        "<td>" + LSDatXe.result[i].quantity + "</td>" +
                        "<td>" + LSDatXe.result[i].id_saler + "</td>" +
                        "<td>" + LSDatXe.result[i].idUser + "</td>" +
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

            const email = laythongtin.data.auth[0].email;
            console.log("thong tin: ", email);

            const BietThu = await axios
            .get(`http://cnpmnc-noiluutru.herokuapp.com/api/data/booking?userId=${email}`)
            .then((res) => res.data)
            .catch((err) => err);

            console.log("BietThu: ", BietThu);
            document.getElementById("LSGD_Partner_tr").innerHTML = "";

            document.getElementById("LSDG_Partner_title").innerHTML = "Lịch sử thuê biệt thự";
            document.getElementById("LSGD_Partner_tr").innerHTML = 
                "<tr>" +
                    "<td>STT</td>" +
                    "<td>Địa điểm</td>" +
                    "<td>Loại lưu trữ</td>" +
                    "<td>Nơi lưu trữ</td>" +
                    "<td>Địa chỉ</td>" +
                    "<td>Tên phòng</td>" +
                    "<td>Giá phòng</td>" +
                    "<td>Mã user</td>" +
                    "<td>Ngày đến</td>" +
                    "<td>Ngày đi</td>" +
                    "<td>Tổng tiền</td>" +
                "</tr>" ;
            for(let i = 0; i < BietThu.length; i++)
            {
                document.getElementById("LSGD_Partner_tr").innerHTML +=
                "<tr>" +
                    "<td>" + (i+1) + ". </td>" +
                    "<td>" + BietThu[i].ten_diadiem + "</td>" +
                    "<td>" + BietThu[i].ten_loailuutru + "</td>" +
                    "<td>" + BietThu[i].ten_noiluutru + "</td>" +
                    "<td>" + BietThu[i].diachi_noiluutru + "</td>" +
                    "<td>" + BietThu[i].ten_phong + "</td>" +
                    "<td>" + BietThu[i].gia_phong + "</td>" +
                    "<td>" + BietThu[i].user_id + "</td>" +
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

    return(
        <div>
            <div style={{height: '115px', backgroundColor: 'rgb(41, 119, 223)'}}>
                <div style={{textAlign: 'center'}}>
                    <h1 style={{color: 'white'}}>Oka - Tera</h1>
                </div>
                <div>
                    <input type="button" value="Partner Đặt Xe" id="partnerDatXe" onClick={LSDatXe}/>
                    <input type="button" value="Partner Biệt Thự" id="partnerBietThu" onClick={BietThu}/>
                </div>
                
            </div>

            <div style={{margin: '20px'}}>
                <h2 id="LSDG_Partner_title"></h2>
                <table id="LSGD_Partner_tr">

                </table>
            </div>
        </div>
    );
}

export default Partner;