import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";




  

function UserLogin() {
  // const resUserLogin = await axios.post({
  //   url:  "https://oka1kh.azurewebsites.net/api/user/login",
  //   method: 'POST'
  //   .then(res => res.data)
  //   .catch(err => err)
  // })
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://oka1kh.azurewebsites.net/api/user/login", data).then(res => res.data)
      .catch(err => err);
      console.log("response", response);
      
      console.log(response.status)
      
    } catch (error) {
      console.log("error.response.data.message", error.response.data.message);
    }
  };
  const handleGetUserProfileClick = async () => {
    try {
      const response = await axios.get("https://oka1kh.azurewebsites.net/api/user/login");
      console.log(`response.data.profile`, response.data.profile);
    } catch (error) {
      console.log("error.response.data.message", error.response.data.message);
    }
  };


  return (
    <>
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">User</label>
        <input id="txtusername" {...register("email", { required: true })} />
        <span style={{ color: "red" }}>
          {errors.email === "required" && "User is required"}
        </span>

        <label htmlFor="password">Password</label>
        <input type="password" {...register("pass")} />
        <button type="submit">Login</button>
      </form>

      <button onClick={handleGetUserProfileClick}>Get Users Profile</button>
    </>
  );
}
export default UserLogin;
