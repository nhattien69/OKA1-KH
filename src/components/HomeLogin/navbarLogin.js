import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FaPercent, FaHandshake, FaSave, FaReceipt } from "react-icons/fa";
import "./Bar.css";
import traveloka_logo from "../../Images/traveloka_logo.png";
import Hamburger from "../Navbar/hamburger";
import { NavLink } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
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

const layID = async () => {
 
};

const NavbarLogin =  () => {
 
  const classes = useStyles();
  const [show, setShow] = useState(false);

  return (
    <div className={classes.root}>
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
          
        </Toolbar>
      </AppBar>
      
    </div>
  );
};
export default NavbarLogin ;
