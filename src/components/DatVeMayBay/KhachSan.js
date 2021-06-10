import React from 'react';
import { Select, Button, List, Typography, Menu, Dropdown, message, Space,DatePicker, InputNumber,Checkbox  } from 'antd';
import {RiHistoryFill, RiMoneyDollarCircleLine} from 'react-icons/ri'
import {GoLocation} from 'react-icons/go'
import { SearchOutlined } from '@ant-design/icons';
import './KhachSan.css'
const { Text } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;
function onChange1(e) {
  console.log(`checked = ${e.target.checked}`);
}


function handleButtonClick(e) {
  message.info('Vui lòng chọn thành phố.');
  console.log('click left button', e);
}

function handleMenuClick(data) {
  message.info('đã chọn thành công.');
  console.log('click', data);
}

function onChange(value) {
  console.log('changed', value);
}

const data = [
  {
    title: 'Đà Nẵng',
    Nation: 'Việt Nam',
  },
  {
    title: 'Đà Lạt',
    Nation: 'Việt Nam',
  },
  {
    title: 'Thành Phố Vũng Tàu',
    Nation: 'Việt Nam',
  },
  {
    title: 'Nha Trang',
    Nation: 'Việt Nam',
  },
  {
    title: 'Bangkok',
    Nation: 'Thái Lan',
  },
  {
    title: 'Singapore',
  },
  {
    title: 'Kuala Lumpur',
    Nation: 'Malaysia',
  },
  {
    title: 'Pattaya',
    Nation: 'Thái Lan',
  },
];





export default function Khachsan1() {

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item style={{width: '700px'}} key="1" icon={<GoLocation />}>
      <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        
                        title={<a href="https://www.traveloka.com/vi-vn/">{item.title}</a>}
                        description={item.Nation}
                      />
                    </List.Item>
                  )}/>
      </Menu.Item>
      
    </Menu>
  );
  
  
  return (
    <div className="container-fluid">
      <div className="bground ">
      <Button id='button1' icon={<RiHistoryFill />} type="link">
      <span className="color-hotel">Xem Khách Sạn Gần Đây</span>
      </Button> <br />
      </div>
      <div  style={{width:'300px'}}>
        <div><span className="color-text">Thành phố, địa điểm hoặc tên khách sạn:</span></div>
      <Space>
      <Dropdown.Button onClick={handleButtonClick} overlay={menu} id='dropdown'>
      Thành Phố, Khách Sạn, Điểm Đến                
      </Dropdown.Button>
      </Space>
      </div>
      <div>
      <div>
        <br />
          <Text strong style={{marginTop: "20px"}}>
                Nhận Phòng
            </Text><br />
            <Space style={{marginTop: '10px'}} direction="vertical" size={12}>
              <RangePicker />
            </Space>
        </div>
        <br />
        <div>
        <Text strong style={{marginTop: "20px"}}>
                Khách
        </Text>
        <Text strong style={{marginLeft: "50px"}}>
                Phòng
        </Text><br />
        <InputNumber min={1} max={15} defaultValue={1} onChange={onChange} />
        <InputNumber min={1} max={12} defaultValue={1} onChange={onChange} />
        <Button style={{ marginLeft: '20px',backgroundColor: '#f96d01', width:'150px' }} type="dashed" icon={<SearchOutlined />}>
          Search
          </Button>

        </div><br />
        <div>
          <Checkbox onChange={onChange1}><span className="color-text">Tôi đi công tác</span></Checkbox>
        </div>
        <div className="bground" >
      <Button id='button1' icon={<RiMoneyDollarCircleLine />} type="link">
      <span className="color-hotel">Thanh toán khi nhận phòng</span>
      </Button> <br />
      </div>
      </div>
    </div>
  )
}