import React from 'react';
import {Link} from 'react-router-dom';
import './UserProfile.scss';
import NavbarMenu from '../../../components/Navbar/navbar-top';
import NavbarMenu2 from '../../../components/Navbar/navbar-bot';
import Footer from '../../../components/footer/footer';
import {UserOutlined} from '@ant-design/icons';
import {EditTwoTone} from '@ant-design/icons';
import {SettingOutlined} from '@ant-design/icons';
import {PhoneOutlined} from '@ant-design/icons';
import {PlusCircleOutlined} from '@ant-design/icons';
import {MailOutlined} from '@ant-design/icons';
import NavbarLogin from '../../../components/HomeLogin/navbarLogin';
import TrangCaNhan from '../../../components/TrangCaNhan/TrangCaNhan';
import axios from "axios";
import { useForm } from "react-hook-form";

function TrangKhachHang(){
    // Form Edit Name
    function turnOnFormEditName(){
        document.getElementById("edit_name").style.display = "block";     
    }
    function turnOffFormEditName(){
        document.getElementById("edit_name").style.display = "none";          
    }

    // Form Edit Pass
    function turnOnFormEditPass(){
        document.getElementById("edit_pass").style.display = "block";     
    }
    function turnOffFormEditPass(){
        document.getElementById("edit_pass").style.display = "none";          
    }

    // Form Confirm Pass
    function showFormConfirmPass(){
        document.getElementById("confirm_pass").style.display = "block";    
        document.getElementById("add_number_phone").style.display = "none";      
        document.getElementById("add_email").style.display = "none";        
    }
    function hideFormConfirmPass(){
        document.getElementById("confirm_pass").style.display = "none";          
    }

    // Form Add Number Phone
    function showFormAddNumberPhone(){
        document.getElementById("add_number_phone").style.display = "block";          
    }
    function hideFormAddNumberPhone(){
        document.getElementById("add_number_phone").style.display = "none";          
    }

    // Form Add Email
    function showFormAddEmail(){
        document.getElementById("add_email").style.display = "block";          
    }
    function hideFormAddEmail(){
        document.getElementById("add_email").style.display = "none";          
    }

    // const {
    //     update,
    //     formState: { errors },
    //     handleSubmit,
    //   } = useForm();
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    

    // Hiển thị họ tên
    window.addEventListener('load', async () => {
        try {
            const laythongtin = await axios
            .get("https://oka1kh.azurewebsites.net/api/profiles", {headers: {
                authorization: localStorage.getItem("TOKEN")
            }})
            .then((res) => res.data)
            .catch((err) => err);
            console.log(laythongtin.data.auth[0].fristName);
            console.log(laythongtin.data.auth[0].lastName);
        document.getElementById("_userFullName").innerHTML = laythongtin.data.auth[0].fristName + " " + laythongtin.data.auth[0].lastName;
            if(JSON.stringify(localStorage.getItem("TOKEN")) !== "null" || JSON.stringify(localStorage.getItem("TOKEN")) !== "undefined"){
                document.getElementById("_userFullName").innerHTML = laythongtin.data.auth[0].fristName + " " + laythongtin.data.auth[0].lastName;
                document.getElementById("showUserEmail").innerHTML = laythongtin.data.auth[0].email;
                document.getElementById("showUserNumberPhone").innerHTML = laythongtin.data.auth[0].phone;
            }
            console.log("token: " , JSON.stringify(localStorage.getItem("TOKEN")));
        } catch (error) {
            console.log("error");
        }
    });

    // Đổi số điện thoại
    const updateNumberPhone = async (data) => {
        try{
            const laythongtin = await axios
            .get("https://oka1kh.azurewebsites.net/api/profiles", {headers: {
            authorization: localStorage.getItem("TOKEN")
        }})
            .then((res) => res.data)
            .catch((err) => err);

        //     const response = await axios
        //     .post("https://oka1kh.azurewebsites.net/api/user/login", data)
        //     .then((res) => res.data)
        //     .catch((err) => err);
        //   const token = response?.data?.refreshToken;
        //   console.log("refresh token: ", token);
            
            const userId = laythongtin.data.auth[0].userId;

            const updateNumberPhone = await axios
            .patch(`https://oka1kh.azurewebsites.net/api/user/change_phone/${userId}`, {phone: document.getElementById("txtNumberPhone").value})
            .then((res) => res.data)
            .catch((err) => err);

            if(document.getElementById("txtConfirmPass").value === laythongtin.data.auth[0].pass){
                console.log("Update số điện thoại thành công");
                console.log("SĐT: ", document.getElementById("txtNumberPhone").value);
                console.log("SĐT: ", laythongtin.data.auth[0].phone);
                // localStorage.clear();
                // localStorage.setItem("TOKEN", token);
                console.log("SĐT: ", laythongtin.data.auth[0].phone);
                alert("Đã thay đổi số điện thoại thành công");
                document.getElementById("txtNumberPhone").value = "";
                document.getElementById("txtConfirmPass").value = "";
                document.getElementById("showUserNumberPhone").value = document.getElementById("txtNumberPhone").value;               
            }else{
                console.log("Sai mật khẩu");
                window.alert("Sai mật khẩu");
            }
        }
        catch(error){
            //console.log("error.response.data.message", error.laythongtin.data.message);
        }
    }

    // Đổi tên
    const updateName = async (data) => {
        try{
            const laythongtin = await axios
            .get("https://oka1kh.azurewebsites.net/api/profiles", {headers: {
            authorization: localStorage.getItem("TOKEN")
        }})
            .then((res) => res.data)
            .catch((err) => err);
            
            const userId = laythongtin.data.auth[0].userId;

            const updateName = await axios
            .patch(`https://oka1kh.azurewebsites.net/api/user/change_name/${userId}`, {lastName: document.getElementById("txtLastName").value, fristName: document.getElementById("txtFirstName").value})
            .then((res) => res.data)
            .catch((err) => err);

            document.getElementById("_userFullName").innerHTML = document.getElementById("txtFirstName").value + " " + document.getElementById("txtLastName").value;

            if(document.getElementById("txtConfirmPass").value === laythongtin.data.auth[0].pass){
                document.getElementById("_userFullName").innerHTML = document.getElementById("txtFirstName").value + " " + document.getElementById("txtLastName").value;
                alert("Thay đổi tên thành công!");
                document.getElementById("txtLastName").value = "";
                document.getElementById("txtFirstName").value = "";
                document.getElementById("txtConfirmPass").value = "";
                
            }else{
                console.log("Sai mật khẩu");
                window.alert("Sai mật khẩu");
            }
        }
        catch(error){
        }
    }

    // Đổi password
    const changePass = async (data) => {
        try{
            const laythongtin = await axios
            .get("https://oka1kh.azurewebsites.net/api/profiles", {headers: {
            authorization: localStorage.getItem("TOKEN")
        }})
            .then((res) => res.data)
            .catch((err) => err);
            
            const userId = laythongtin.data.auth[0].userId;
            
            // So sánh mật khẩu cũ
            if(document.getElementById("txtOldPass").value === laythongtin.data.auth[0].pass){

                // So sánh mật khẩu cũ với mật khẩu mới
                if(document.getElementById("txtNewPass").value === laythongtin.data.auth[0].pass){
                    alert("Không được dùng mật khẩu cũ để đặt cho mật khẩu mới");
                }
                else{

                    // So sánh mật khẩu mới và mật khẩu nhập lại
                    if(document.getElementById("txtNewPass").value === document.getElementById("txtConfirmNewPass").value){

                        const updatePass = await axios
                            .patch(`https://oka1kh.azurewebsites.net/api/user/change_pass/${userId}`, {pass: document.getElementById("txtNewPass").value, repass: document.getElementById("txtConfirmNewPass").value})
                            .then((res) => res.data)
                            .catch((err) => err); 
    
                        console.log("new pass: ", document.getElementById("txtNewPass").value);
                        alert("Thay đổi mật khẩu thành công!");
                        document.getElementById("txtOldPass").value = "";
                        document.getElementById("txtNewPass").value = "";
                        document.getElementById("txtConfirmNewPass").value = "";
                    }
                    else{
                        alert("Mật khẩu nhập lại không trùng khớp");
                    }               
                } 
            }
            else{
                console.log("Sai mật khẩu đăng nhập");
                window.alert("Sai mật khẩu đăng nhập");
            }
        }
        catch(error){
            //console.log("error.response.data.message", error.laythongtin.data.message);
        }
    }

    function btnSubmit(){
        if(document.getElementById("txtLastName").value !== "" && document.getElementById("txtFirstName").value !== ""){
            updateName();
        }
        else if (document.getElementById("txtNumberPhone").value !== ""){
            updateNumberPhone();
        }
        else{
            alert("Không thể lưu!");
        }
    }

    return(    
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
                    {/* BOX_NAME */}
                    <div className="box_name">
                        <div className="box_name_title">
                            <div className="box_name_title_icon"><UserOutlined id="fix_layout" /></div>
                            <div  id="_userFullName">
                               
                            </div>
                            <div>
                                <button id="editName" onClick={turnOnFormEditName}><EditTwoTone id="fix_layout-1" />&nbsp;Cập nhật hồ sơ</button>
                                <button id="editPass" onClick={turnOnFormEditPass}>Thay đổi mật khẩu</button>
                            </div>
                        </div>
                        {/* EDIT NAME */}
                        <div className="box_name_editName" id="edit_name" style={{display: 'none'}}>
                            <hr />
                            <div className="box_name_editName_boxName">
                                <div>Họ</div>
                                <input type="text" id="txtLastName"/>
                                <div>Tên</div>
                                <input type="text" id="txtFirstName"/>
                            </div>
                            <div className="box_name_editName_btn">
                                <input type="button" value="Hủy" id="cancelEditName" onClick={turnOffFormEditName}/>
                                <input type="submit" value="Lưu" id="saveEditName" onClick={showFormConfirmPass}/>
                            </div>
                        </div>                        
                        {/* EDIT PASSWORD */}
                        <div className="box_name_editPass" id="edit_pass" style={{display: 'none'}}>
                            <hr />
                            <div>Mật khẩu cũ</div>
                            <input type="password" id="txtOldPass"/>
                            <div>Mật khẩu mới</div>
                            <input type="password" id="txtNewPass"/>
                            <div>Xác nhận mật khẩu mới</div>
                            <input type="password" id="txtConfirmNewPass"/>
                            <div className="box_name_editPass_lbnote">Vui lòng nhập một mật khẩu bạn chưa từng sử dụng ở bất kỳ trang web nào</div>
                            <div className="box_name_editPass_btn">
                                <input type="button" value="Hủy" id="cancelEditPass" onClick={turnOffFormEditPass}/>
                                <input type="submit" value="Lưu" id="saveEditPass" onClick={changePass}/>
                            </div>
                        </div>
                    </div>

                    {/* BOX_ENABLE */}
                    <div className="box_enable">
                        <div className="box_enable_title">
                            <div className="box_enable_title_icon"><SettingOutlined id="fix_layout" /></div>
                            <div>Kích hoạt mã xác thực khi đăng nhập</div>
                        </div>
                        <hr />
                        <div className="box_enable_bottom">
                            <input type="checkbox" id="checkBoxEnable"/>
                            <label>Gửi mã xác thực mỗi khi tôi đăng nhập trên thiết bị mới</label>
                        </div>
                    </div>

                    {/* BOX_PHONE */}
                    <div className="box_phone">
                        <div className="box_phone_title">
                            <div className="box_phone_title_icon"><PhoneOutlined id="fix_layout" /></div>
                            <div>Điện thoại</div>
                            <div>
                                <button id="addNumberPhone" onClick={showFormAddNumberPhone}><PlusCircleOutlined id="fix_layout-1" />&nbsp;Điện thoại</button>
                            </div>
                        </div>
                        <p>Số di động để nhận tin báo liên quan đến tài khoản.</p>      
                        <label>Số điện thoại của bạn:</label> {" "} 
                        <label id="showUserNumberPhone"></label>            
                    </div>

                    {/* BOX_EMAIL */}
                    <div className="box_email">
                        <div className="box_email_title">
                            <div className="box_email_title_icon"><MailOutlined id="fix_layout" /></div>
                            <div>Email</div>
                            {/* <div>
                                <button id="addNumberPhone" onClick={showFormAddEmail}><PlusCircleOutlined id="fix_layout-1" />&nbsp;Email</button>
                            </div> */}
                        </div>
                        <p>Địa chỉ email để nhận tin báo liên quan đến tài khoản.</p>
                        <label>Email của bạn:</label> {" "} 
                        <label id="showUserEmail"></label>  
                    </div>
                </div> 
            </div> 

            {/*FORM XÁC NHẬN MẬT KHẨU */}
            <div className="formConfirm" id="confirm_pass">
                <div className="formConfirm_content"  >
                    <h2>Xác nhận tài khoản của bạn</h2>
                    <p>Bạn phải nhập lại mật khẩu để cập nhật truy cập</p>
                    <div className="formConfirm_content_txtPass">
                        <input type="password" id="txtConfirmPass"/>
                    </div>
                    <div className="formConfirm_content_btnSubmit">
                        <input type="submit" value="Đồng ý" id="btnSubmit" onClick={btnSubmit}/>
                    </div>
                    <div>
                        <input type="button" value="Hủy" id="btnCancel" onClick={hideFormConfirmPass}/>
                    </div>            
                </div> 
            </div>

            {/* FORM NHẬP SỐ ĐIỆN THOẠI */}
            <div className="formAddNumberPhone" id="add_number_phone">
                <div className="formAddNumberPhone_content">
                    <h2 className="formAddNumberPhone_content_titleNP">Thêm tài khoản đăng nhập</h2>
                    <p className="formAddNumberPhone_content_lbNP">Điện thoại</p>
                    <div method="post" onSubmit={handleSubmit(updateNumberPhone)}>
                        <input type="number" id="txtNumberPhone" {...register("phone")}/>
                    </div>
                    <div>
                        <input type="button" value="Hủy" id="cancelAddNumberPhone" onClick={hideFormAddNumberPhone}/>
                        <input type="submit" value="Lưu" id="saveNumberPhone" onClick={showFormConfirmPass}/>
                    </div>
                </div>
            </div>
            {/* FORM NHẬP EMAIL */}
            <div className="formAddEmail" id="add_email">
                <div className="formAddEmail_content">
                    <h2 className="formAddEmail_content_titleEmail">Thêm tài khoản đăng nhập</h2>
                    <p className="formAddEmail_content_lbEmail">Điện thoại</p>
                    <div>
                        <input type="text" id="txtEmail"/>
                    </div>
                    <div>
                        <input type="button" value="Hủy" id="cancelAddEmail" onClick={hideFormAddEmail}/>
                        <input type="submit" value="Lưu" id="saveEmail" onClick={showFormConfirmPass}/>
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

export default TrangKhachHang;