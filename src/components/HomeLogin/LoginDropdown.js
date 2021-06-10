import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {BsPeopleCircle} from 'react-icons/bs'
import {RiArrowDropDownLine, RiBillLine,RiLogoutBoxRLine} from 'react-icons/ri'
import{FaMale,FaCoins, FaRegCreditCard, FaRegBell} from 'react-icons/fa'
import {FiBook, FiMail} from 'react-icons/fi'
import {IoIosPeople} from 'react-icons/io'
import {NavLink} from 'react-router-dom'
import './Home2.css'

export default function LoginDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button className='btnUser' style={{borderRadius: '10px'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <p><BsPeopleCircle style={{color: 'rgb(7, 112, 205)'}} /> Tiến  <RiArrowDropDownLine /></p>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <label>Tài Khoản</label>
        <MenuItem onClick={handleClose}><NavLink to='/TaiKhoan' ><FaMale /> Chỉnh Sửa Hồ Sơ</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to='/' ><FaCoins /> Điểm thưởng của tôi</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to='/' ><FaRegCreditCard /> Thẻ Của Tôi</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to='/' ><RiBillLine /> Danh sách giao dịch</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to='/' ><FiBook /> Đặt chỗ của tôi</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to='/' ><FaRegBell /> Thông báo giá vé máy bay</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to='/' ><IoIosPeople /> Passenger Quick Pick</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to='/' ><FiMail /> Khuyến mãi</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to='/' ><RiLogoutBoxRLine /> Đăng Xuất</NavLink></MenuItem>
      </Menu>
    </div>
  );
}
