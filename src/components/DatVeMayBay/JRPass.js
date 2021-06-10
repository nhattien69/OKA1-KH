import './JRPass.css'
import { AiFillCheckCircle } from "react-icons/ai";
import { Select , Button  } from 'antd';
export default function JRPass() {
    const { Option } = Select;
    function handleChange(value) {
        console.log(`selected ${value}`);
      }
    return (
        
        <div className="container-fluid">
            <div className="jrpass-title">Thẻ tàu JR Pass</div>
            <div className="row">
                <div className="col-4">
                    <div className="text-jrpass">< AiFillCheckCircle /> Đi lại nội thành và giữa các thành phố</div>
                </div>
                <div className="col-4">
                    <div className="text-jrpass">< AiFillCheckCircle/> Không giới hạn số lần đi trong nhiều ngày</div>
                </div>
                <div className="col-4">
                    <div className="text-jrpass">< AiFillCheckCircle /> Sử dụng bất cứ lúc nào trong ngày</div>
                </div>
            </div>
            <div>
                <div>Chọn địa điểm của bạn</div>
                <Select  defaultValue="Điền thành phố, khu vực hoặc địa điẻm" style={{ width: '300px'}} onChange={handleChange}>
                            
                            <Option value="Kansai" >Kansai</Option>
                            <Option value="osaka">Osaka-shi</Option>
                            <Option value="kyoto" >Kyoto-shi</Option>
                            </Select>
                            <div className="btn-search"><button type="button" class="btn-find">Tìm vé tàu</button></div>
            </div>
        </div>
    )
}