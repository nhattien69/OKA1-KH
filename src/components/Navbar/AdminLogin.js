import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";



function AdminLogin() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/api/admin/login", data);
      console.log("response", response);
    } catch (error) {
      console.log("error.response.data.message", error.response.data.message);
    }
  };
  const handleGetUserProfileClick = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/admin/login");
      console.log(`response.data.profile`, response.data.profile);
    } catch (error) {
      console.log("error.response.data.message", error.response.data.message);
    }
  };


  return (
    <>
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">User</label>
        <input id="txtusername" {...register("username", { required: true })} />
        <span style={{ color: "red" }}>
          {errors.username === "required" && "User is required"}
        </span>

        <label htmlFor="password">Password</label>
        <input type="password" {...register("password")} />
        <button type="submit">Login</button>
      </form>

      <button onClick={handleGetUserProfileClick}>Get Users Profile</button>
    </>
  );
}
export default AdminLogin;
