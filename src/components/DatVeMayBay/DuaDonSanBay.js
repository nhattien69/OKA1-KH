import React from 'react'
import {Typography, DatePicker, Space, Select, TimePicker  } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';

const { Option } = Select;

function onChange(time, timeString) {
    console.log(time, timeString);
  }
  

function onChange1(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }
  
  function handleChange(value) {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  }
  
  const { RangePicker } = DatePicker;
  
  const dateFormat = 'YYYY/MM/DD';
  
  
  
  const { Text } = Typography;
  

export default function DuaDonSanBay1() {
    return (
        
        <div className='label1'>
          <div className='label2'>
          <Text strong>Từ (Sân Bay) </Text>
          <Text style={ {marginLeft : '70px'} } strong>Đến (khu vực, địa chỉ, tòa)</Text>
          <Text strong style={{marginLeft: "30px"}}>
                Ngày đón
            </Text>
            <Text strong style={{marginLeft: "70px"}}>
                Giờ đón
            </Text>
          </div>
          <div>
            <Select    
                        
                        showSearch
                        style={{ width: 150 }}
                        placeholder="Điểm Đi"
                        optionFilterProp="children"
                        onChange={onChange1}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }>
                        <Option value="HAN">Hà Nội</Option>
                        <Option value="SGN">Hồ chí Minh</Option>
                        <Option value="DAD">Đà Nẵng</Option>
            </Select>
            <Select
                        showSearch
                        style={{ width: 150 }}
                        placeholder="Điểm Đến"
                        optionFilterProp="children"
                        onChange={onChange1}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }>
                        <Option value="HAN">Hà Nội</Option>
                        <Option value="SGN">Hồ chí Minh</Option>
                        <Option value="DAD">Đà Nẵng</Option>
        
            </Select>
            
        <Space style={{marginLeft: '35px', width: '115px'}} direction="vertical" size={12}>
            <DatePicker defaultValue={moment('2021/04/01', dateFormat)} format={dateFormat} />
                        
         </Space>

         <TimePicker style={{marginLeft: '10px',width: '107px'}} onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
 
        
          </div>
        </div>
    )
}