import React, { Component, useState, setState } from "react";
import Hamburger from "./hamburger";
import "./navbar-top.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import traveloka_logo from "../../Images/traveloka_logo.png";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FaPercent, FaHandshake, FaSave, FaReceipt } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { BsPeopleCircle } from "react-icons/bs";
import {
  RiArrowDropDownLine,
  RiBillLine,
  RiLogoutBoxRLine,
} from "react-icons/ri";
import { FaMale, FaCoins, FaRegCreditCard, FaRegBell } from "react-icons/fa";
import { FiBook, FiMail } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import "../HomeLogin/Home2.css";
import "./DangNhap.scss";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  btnRegister: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0770cd",
    padding: 10,
    "&:hover": {
      background: "#0770ca",
    },
  },
  btnRegister1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ff8432",
    padding: 10,
    "&:hover": {
      background: "#fffff",
    },
  },
  link: {
    color: "#fff",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="/#"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    return (
      <div
        ref={ref}
        style={style}
        aria-labelledby={labeledBy}
        className="formLogIn"
      >
        <ul className="list-unstyled">
          {/* <Demo /> */}
        </ul>
      </div>
    );
  }
);

//NAVBAR HEADER
// Trước đăng nhập
const NavbarMenu = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  window.addEventListener('load', async () => {
    try {
      const laythongtin = await axios
        .get("https://oka1kh.azurewebsites.net/api/profiles", {headers: {
          authorization: localStorage.getItem("TOKEN")
      }})
        .then((res) => res.data)
        .catch((err) => err);
      console.log(laythongtin.data.auth[0].fristName);

      if(JSON.stringify(localStorage.getItem("TOKEN")) === "null" || JSON.stringify(localStorage.getItem("TOKEN")) === "undefined"){
        document.getElementById("NavBeforeLogIn").style.display = "block";
        document.getElementById("NavAfterLogIn").style.display = "none";
      }
      else
      {
        document.getElementById("NavBeforeLogIn").style.display = "none";
        document.getElementById("NavAfterLogIn").style.display = "block";
        //document.getElementById("simple-menu").style.display = "block";
        document.getElementById("showFirstNameUser").innerHTML = laythongtin.data.auth[0].fristName;
        console.log("FirstName" + laythongtin.data.auth[0].fristName);
      }
      console.log("token: " , JSON.stringify(localStorage.getItem("TOKEN")));
    } catch (error) {
      //console.log("error.response.data.message", error.response.data.message);
    }
  });


  function LogOut() { 
    localStorage.clear();
    document.getElementById("NavBeforeLogIn").style.display = "block";
    document.getElementById("NavAfterLogIn").style.display = "none";
    //document.getElementById("simple-menu").style.display = "none";
  }

  return (
    <div className="bg-1">
      <AppBar position="static">
        <Toolbar className="navbar">
          <Hamburger />
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/">
              <img className="logo" src={traveloka_logo} alt="traveloka" />
            </NavLink>
          </Typography>
          <Button className="btn">
            <FaPercent className="percent logo-items" alt="percent" />
            <p>Khuyến mãi</p>
          </Button>
          <Button className="btn">
            <FaHandshake className="hand logo-items" alt="handshake" />
            <p>Hợp tác với chúng tôi</p>
          </Button>
          <Button className="btn">
            <FaSave className="save logo-items" alt="save" />
            <p>Đã lưu</p>
          </Button>
          <Button className="btn">
            <FaReceipt className="seat logo-items" alt="datcho" />
            <p>Đặt chỗ của tôi</p>
          </Button>

          {/* .......... */}
          <div className="double"  id="NavBeforeLogIn">
            {/* <Dropdown>
              <Dropdown.Toggle
                as={CustomToggle}
                id="dropdown-custom-components"
                className="toggle"
              >
                Đăng Nhập
              </Dropdown.Toggle>

              <Dropdown.Menu as={CustomMenu}>
                <Dropdown.Item eventKey="1">Red</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
             <Button style={{marginRight : '10px'}} type="submit" className={classes.btnRegister1}>
              <NavLink to="/DangNhap" className={classes.link}>
                Đăng <br /> Nhập
              </NavLink>
            </Button>
            <Button type="submit" className={classes.btnRegister}>
              <NavLink to="/DangKy" className={classes.link}>
                Đăng <br /> ký
              </NavLink>
            </Button>
          </div>


          <div className='dangnhapthanhcong' id="NavAfterLogIn" style={{display: 'none'}}>
            <Button
              className="btnUser"
              style={{ borderRadius: "10px" }}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >

              {/* //Chỗ Tên người dùng này phải sửa , không thể để tên cứng được */}
              <p>
                <BsPeopleCircle style={{ color: "rgb(7, 112, 205)" }} />
                {" "} <label id="showFirstNameUser"></label> {" "} 
                <RiArrowDropDownLine />
              </p>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <label>Tài Khoản</label>
              <MenuItem onClick={handleClose}>
                <NavLink to="/TaiKhoan">
                  <FaMale /> Chỉnh Sửa Hồ Sơ
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="/">
                  <FaCoins /> Điểm thưởng của tôi
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="/">
                  <FaRegCreditCard /> Thẻ Của Tôi
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="/">
                  <RiBillLine /> Danh sách giao dịch
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="/">
                  <FiBook /> Đặt chỗ của tôi
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="/">
                  <FaRegBell /> Thông báo giá vé máy bay
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="/">
                  <IoIosPeople /> Passenger Quick Pick
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="/">
                  <FiMail /> Khuyến mãi
                </NavLink>
              </MenuItem>
              <MenuItem onClick={LogOut} id="btnLogOut">
                <NavLink to="/">
                  <RiLogoutBoxRLine /> Đăng Xuất
                </NavLink>
              </MenuItem>
            </Menu>
          </div>


        </Toolbar>
      </AppBar>
    </div>
  );
};

//LOGIN
// let buttons;
// var firstNameUser = "";
// function Demo() {
//   let history = useHistory();

//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios
//         .post("https://oka1kh.azurewebsites.net/api/user/login", data)
//         .then((res) => res.data)
//         .catch((err) => err);
//       const token = response?.data?.token;
//       localStorage.setItem("TOKEN", token);
//       console.log("response", response);

//       const laythongtin = await axios
//         .get("https://oka1kh.azurewebsites.net/api/profiles", {headers: {
//           authorization: localStorage.getItem("TOKEN")
//       }})
//         .then((res) => res.data)
//         .catch((err) => err);
//       console.log(laythongtin.data.auth[0].fristName);

//       firstNameUser = laythongtin.data.auth[0].fristName;

//       if (response.status === "SUCCES") {
//         history.push("/");
//         document.getElementById("NavBeforeLogIn").style.display = "none";
//         document.getElementById("NavAfterLogIn").style.display = "block";
//         document.getElementById("showFirstNameUser").innerHTML = firstNameUser;
//         console.log("a: " + firstNameUser);
        
//       } else {
//         buttons = alert("Bạn Nhập Sai Thông Tin !!!");
//       }
//     } catch (error) {
//       //console.log("error.response.data.message", error.response.data.message);
//     }
//   };
  
//   return (
//     <div className="formLogIn_content">
//       <h2>Đăng nhập vào tài khoản</h2>
//       <form method="post" onSubmit={handleSubmit(onSubmit)}>
//         <label>Nhập Email Hoặc Số Điện Thoại</label> <br />
//         <input
//           id="txtusername"
//           {...register("email", { required: true })}
//         />{" "}
//         <br />
//         <span style={{ color: "red" }}>
//           {errors.email === "required" && "User is required"}
//         </span>
//         <label htmlFor="password">Mật khẩu</label> <br />
//         <input type="password" {...register("pass")} /> <br />
//         <button className="loginsubmit" type="submit" onChange={{buttons}}>
//           {" "}
//           Đăng Nhập{" "}
//         </button>
//         <div className="formLogIn_content_box">
//           <div className="formLogIn_content_boxBtnLogIn">
//             {/* <button id="btnSignUp" type='submit' onChange={{buttons}} >Đăng nhập</button> */}
//           </div>
//           <div className="formLogIn_content_boxSignUp">
//             <p className="formLogIn_content_boxSignUp_lb">
//               Bạn chưa có tài khoản?
//             </p>
//             <p className="formLogIn_content_boxSignUp_link">Đăng ký</p>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

export default NavbarMenu;


//PROFILE LÚC ĐĂNG NHẬP THÀNH CÔNG
// function LoginDropdown() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className='dangnhapthanhcong' id="NavAfterLogIn">
//       <Button
//         className="btnUser"
//         style={{ borderRadius: "10px" }}
//         aria-controls="simple-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//       >

//         {/* //Chỗ Tên người dùng này phải sửa , không thể để tên cứng được */}
//         <p>
//           <BsPeopleCircle style={{ color: "rgb(7, 112, 205)" }} /> Tiến{" "} 
//           <RiArrowDropDownLine />
//         </p>
//       </Button>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <label>Tài Khoản</label>
//         <MenuItem onClick={handleClose}>
//           <NavLink to="/TaiKhoan">
//             <FaMale /> Chỉnh Sửa Hồ Sơ
//           </NavLink>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <NavLink to="/">
//             <FaCoins /> Điểm thưởng của tôi
//           </NavLink>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <NavLink to="/">
//             <FaRegCreditCard /> Thẻ Của Tôi
//           </NavLink>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <NavLink to="/">
//             <RiBillLine /> Danh sách giao dịch
//           </NavLink>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <NavLink to="/">
//             <FiBook /> Đặt chỗ của tôi
//           </NavLink>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <NavLink to="/">
//             <FaRegBell /> Thông báo giá vé máy bay
//           </NavLink>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <NavLink to="/">
//             <IoIosPeople /> Passenger Quick Pick
//           </NavLink>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <NavLink to="/">
//             <FiMail /> Khuyến mãi
//           </NavLink>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <NavLink to="/">
//             <RiLogoutBoxRLine /> Đăng Xuất
//           </NavLink>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// }


