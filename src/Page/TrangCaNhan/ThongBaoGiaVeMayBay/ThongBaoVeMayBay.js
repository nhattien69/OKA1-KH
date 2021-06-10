import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import {FolderAddOutlined } from '@ant-design/icons'
import './ThongBaoVeMayBay.scss'
import {AiOutlineBell} from 'react-icons/ai'
import {BsExclamationCircle} from 'react-icons/bs'
import NavbarMenu from '../../../components/Navbar/navbar-top';
import NavbarMenu2 from '../../../components/Navbar/navbar-bot';
import Footer from '../../../components/footer/footer';
import NavbarLogin from '../../../components/HomeLogin/navbarLogin';
import TrangCaNhan from '../../../components/TrangCaNhan/TrangCaNhan';

const Thongbao = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button className='btn11' type="primary" onClick={showModal}>
          <div className='icons11'>
        <FolderAddOutlined style={{ fontSize: '16px', color: '#FFFFFF' }} /> Thêm thông báo
        </div>
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};


export default function ThongBaoVeMayBay() {
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
              <div className='muavebay'>
            <img className='imgmuavebay' src='https://ik.imagekit.io/tvlk/image/imageResource/2019/02/11/1549862570294-0bd43afb15a66986be63505ec4e5afe7.svg?tr=q-75'/>
            <div className='button11'>
                <h2 className='label11'>
                    Thông báo giá vé máy bay
                </h2>
                <Thongbao />
            </div>
            <div className='notification'>
            <div className='noti'>
                <div className='kbY4M'>
                    <div className='nho'></div>
                    <AiOutlineBell />
                    <h4 className='text1'>Bạn muốn nhận thông báo trên máy tính?</h4>
                    <div className='text2'>
                        <a href='#' className='label'>Cho phép gửi thông báo</a>
                    </div>

                </div>
            </div>

            </div>
            <div className='lowerlabel'>
                <div className='imgtrai'>
                <img className='sleepimg' src="https://ik.imagekit.io/tvlk/image/imageResource/2018/12/12/1544601935390-f9c8c05797a24b0d2984266125ae209d.png?tr=q-75" />
                </div>
                <div className='labelphai'>
                        <h4 className='us'>Không tìm thấy thông báo</h4>
                        <span className='spanlabel'>
                        Tạo thông báo mới để nhận cập nhật ngay khi có chuyến bay phù hợp với ngân sách của bạn!
                        </span>
                </div>
            </div>
            <a href='#' className='lastlabel'>
                <div className='lastword'>
                    <div className='chucaicuoi'>
                        <span className='kytu'> <BsExclamationCircle /> Giá có thể thay đổi</span>
                    </div>
                </div>
            </a>
        </div>
              </div>
          </div>

          {/* -- FOOTER -- */}
          <div>
              <Footer />
          </div>
      </div> 
    )
}
