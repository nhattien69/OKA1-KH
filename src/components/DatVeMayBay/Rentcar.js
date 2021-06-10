import './Rentcar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Select ,DatePicker, Space,TimePicker, Button  } from 'antd';
import moment from 'moment';


const format = 'HH:mm';
const { Option } = Select;

export default function Rentcar() {
    function handleChange(value) {
        console.log(`selected ${value}`);
      }
      function onChange(date, dateString) {
        console.log(date, dateString);
      }
    return (
        <div className="container-fluid">
            <div className="driver">
                <div className="driver-ques">Có tài xế hay tự lái?</div>
                <Select  defaultValue="Tự lái" style={{ width: 120}} onChange={handleChange}>
                            
                <Option value="taixe" disabled>
                Có tài xế
                </Option>
                <Option value="tulai">Tự lái</Option>
                </Select>
            </div>
            <div className="rent-location">
                <div className="text-title">Địa điểm thuê xe của bạn</div>
                <Select  defaultValue="Điền thành phố, sân bay, hoặc khách sạn" style={{ width: '300px'}} onChange={handleChange}>
                            
                <Option value="taixe" disabled>
                Có tài xế
                </Option>
                <Option value="tulai">Tự lái</Option>
                </Select>
            </div>
            <div className="time">
                <div className="row">
                    <div className="col">
                        <div className="text-title">Ngày bắt đầu</div>
                        <Space direction="vertical">
                        <DatePicker onChange={onChange} />
                        </Space>
                    </div>
                    <div className="col">
                        <div className="text-title">Giờ bắt đầu</div>
                        <TimePicker defaultValue={moment('10:00', format)} format={format} />
                    </div>
                    <div className="col">
                        <div className="text-title">Ngày kết thúc</div>
                        <Space direction="vertical">
                        <DatePicker onChange={onChange} />
                        </Space>
                    </div>
                    <div className="col">
                        <div className="text-title">Giờ kết thúc</div>
                        <TimePicker defaultValue={moment('12:00', format)} format={format} />
                    </div>
                    
                </div >
                <div className="btn-search"><button type="button" class="btn-find">Tìm xe</button></div>
                
            </div>
            
        </div>
    )
}