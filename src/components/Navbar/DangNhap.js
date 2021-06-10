import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import "./DangNhap.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import DangKy from "./DangKy";
import { NavLink, useHistory, Link } from "react-router-dom";
import validator from 'validator'
let buttons;

function Demo() {
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Email hợp lệ !!! ')
    } else {
      setEmailError('Hãy Nhập Email Hợp Lệ !!')
    }
  }

  let history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios
        .post("https://oka1kh.azurewebsites.net/api/user/login", data)
        .then((res) => res.data)
        .catch((err) => err);
      const token = response?.data?.token;
      localStorage.setItem("TOKEN", token);
      console.log("response", response);

      if (response.status === "SUCCES") {
        history.push("/");
      } else {
        buttons = alert("Bạn Nhập Sai Thông Tin !!!");
      }
    } catch (error) {
      console.log("error.response.data.message", error.response.data.message);
    }
  };

  return (
    <body>
    
    <div className="formLogIn_content">
      <h2>Đăng nhập vào tài khoản</h2>
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <label className='labeldn'>Nhập Email Hoặc Số Điện Thoại</label> <br />
        <input
        className='inputDN'
          id="txtusername"
          {...register("email", { required: true })}
          onChange={(e) => validateEmail(e)}
        />{" "}
        <br />
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}
        </span> <br />
        <label className='labelmk' htmlFor="password">Mật khẩu</label> <br />
        <input className='inputPass' type="password" {...register("pass")} /> <br />
        <button className="loginsubmit" type="submit" onChange={{ buttons }}>
          {" "}
          Đăng Nhập{" "}
        </button>
        <div className="formLogIn_content_box">
          
          <div className="formLogIn_content_boxSignUp">
            <p className="formLogIn_content_boxSignUp_lb">
              Bạn chưa có tài khoản?
            </p>
            <Link to='/DangKy' className="formLogIn_content_boxSignUp_link">Đăng ký</Link>
          </div>
        </div>
      </form>
    </div>
    </body>
    
  );
}

export default Demo;