import React from 'react'
import 'antd/dist/antd.css';
import { Typography, Checkbox, DatePicker, Space, Button , Select, Radio } from 'antd';
import moment from 'moment';

// import {MdAirlineSeatReclineExtra} from 'react-icons/md';
import { SearchOutlined } from '@ant-design/icons';
import Layout from 'antd/lib/layout/layout';
import './Muavemaybay.css'
import {MdAirlineSeatReclineNormal} from 'react-icons/md'
import {FaPlaneDeparture, FaPlaneArrival} from 'react-icons/fa'


const { Option } = Select;

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

const Muavebay1 = () => {
    const [disabled, setDisabled] = React.useState(true);
    const toggle = () => {
        setDisabled(!disabled);
      };
    function onChange2(e) {
        console.log(`checked = ${e.target.checked}`);
      }

    const [value, setValue] = React.useState(1);
  
    const onChange = e => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
  
    return (
      
<div className="container-fluid" >
	<div className='formvebay'>
		<Radio.Group className='radio' onChange={onChange} value={value}>
			<Radio value={1}>
				<span className="color-text">Một chiều/ Khứ Hồi</span>
			</Radio>
			<Radio value={2}>
				<span className="color-text">Nhiều Thành Phố</span>
			</Radio>
		</Radio.Group>
		<br />
		<div className='label1'>
			<div className='row'>
				<div className="col-3">
					<Text strong>Điểm Khởi Hành</Text>
					<br />
					<Select     addonBefore = {<FaPlaneArrival />}
                        
                        showSearch
                        style={{ width: 150 }}
                        placeholder="Điểm Khởi Hành"
                        optionFilterProp="children"
                        onChange={onChange1}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }>
						<Option value="HAN">
							<span className="color-text">Hà Nội</span>
						</Option>
						<Option value="SGN">
							<span className="color-text">Hồ chí Minh</span>
						</Option>
						<Option value="DAD">
							<span className="color-text">Đà Nẵng</span>
						</Option>
					</Select>
				</div>
				<div className="col-3">
					<Text strong>Điểm Đến</Text>
					<br />
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
						<Option value="HAN">
							<span className="color-text">Hà Nội</span>
						</Option>
						<Option value="SGN">
							<span className="color-text">Hồ chí Minh</span>
						</Option>
						<Option value="DAD">
							<span className="color-text">Đà Nẵng</span>
						</Option>
					</Select>
				</div>
			</div>
			
		</div>
		<div className="row">
      <div className="col-3">
      <Text strong style={{marginTop: "10px"}}>
                Ngày đi
            </Text>
			<br />
			<Space direction="vertical" size={12}>
				<DatePicker defaultValue={moment('2021/04/01', dateFormat)} format={dateFormat} />
			</Space>
      
      </div>
			<div className="col-3">
			<Checkbox onClick={toggle} onChange={onChange2}>
				<span className="color-text">Khứ hồi </span>
			</Checkbox>
			<br />
			<RangePicker
        defaultValue={[moment('2021-04-06', dateFormat), moment('2021-04-09', dateFormat)]}
        disabled={disabled}/>
			
		</div>
    <div className="col-6">
      <Text strong>Hạng Ghế</Text>
			<br />
			<Select
          icon={<MdAirlineSeatReclineNormal/>}
          labelInValue
          defaultValue={{ value: 'Phothong' }}
          style={{ width: 250 }}
          onChange={handleChange}
        >
				<Option value="Phothong">
					<span className="color-text">Phổ Thông</span>
				</Option>
				<Option value="Phongthongdacbiet">
					<span className="color-text">Phổ Thông Đặc Biệt</span>
				</Option>
				<Option value="ThuongGia">
					<span className="color-text">Thương Gia</span>
				</Option>
				<Option value="HangNhat">
					<span className="color-text">Hạng Nhất</span>
				</Option>
			</Select>              
      </div>
		</div>
		<br />
		<div className='search'>
			<button className='btn-search'  >
                 Tìm kiếm
			</button>
		</div>
	</div>
</div>
    );
  };
 
export default Muavebay1;