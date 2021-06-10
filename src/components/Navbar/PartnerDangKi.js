import React, { useState } from "react";
import "./PartnerDangNhap.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { NavLink, useHistory, Link } from "react-router-dom";
import validator from 'validator'
let buttons;


function PartnerDK() {



  let history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios
        .post("https://oka1kh.azurewebsites.net/api/partner", data)
        .then((res) => res.data)
        .catch((err) => err);
      const token = response?.data?.token;
      localStorage.setItem("TOKEN", token);
      console.log("response", response);

      if (response.status === "SUCCES") {
        buttons = alert("Đăng Kí Thành Công !!!");
        history.push("/Partner");
      } else {
        buttons = alert("Tài Khoản Đã Được Sử Dụng !!");
      }
    } catch (error) {
      console.log("error.response.data.message", error.response.data.message);
    }
  };

  return (
    <div className="formLogIn_content">
      <h2>Đăng kí tài khoản Partner</h2>
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <label>Nhập tên tài khoản</label> <br />
        <input
          id="txtusername"
          {...register("partnerUsername", { required: true })}
        />{" "}
        <br />
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}> 
        </span> <br />
        <label>Nhập vai trò</label> <br />
        <input
          id="txtrole"
          {...register("partnerRole", { required: true })}
        />{" "}
        <br />
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}> 
        </span> <br />
        <label htmlFor="password">Mật khẩu</label> <br />
        <input type="password" {...register("partnerPass")} /> <br />
        <button className="loginsubmit" type="submit" onChange={buttons}>
          {" "}
          Đăng Kí Tài Khoản{" "}
        </button>
        <div className="formLogIn_content_box">
          <div className="formLogIn_content_boxBtnLogIn">
            {/* <button id="btnSignUp" type='submit' onChange={{buttons}} >Đăng nhập</button> */}
          </div>
          <div className="formLogIn_content_boxSignUp">
            <p className="formLogIn_content_boxSignUp_lb">
              Bạn đã có tài khoản?
            </p>
            <Link to='/Partner' className="formLogIn_content_boxSignUp_link">Đăng nhập</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PartnerDK;
