import React from 'react';
import NavBarMenu from '../../../components/Navbar/navbar-top';
import NavBarMenu2 from '../../../components/Navbar/navbar-bot';
import DatChoCuaToi from '../../../components/DatChoCuaToi/DatChoCuaToi';
import './TatCaSanPham.scss';

function TatCaSanPham(){
    return(
        <div className="Body">
            <div>
                <NavBarMenu />
                <NavBarMenu2 />
            </div>
            <div className="Body_DCCT">
                <DatChoCuaToi />
                <div className="Body_DCCT_Right">
                    <div>
                        <div className="box_tccsp">
                            <img alt="img" src="https://ik.imagekit.io/tvlk/image/imageResource/2020/07/10/1594367281441-5ec1b573d106b7aec243b19efa02ac56.svg?tr=h-96,q-75,w-96" />
                            <div className="box_txt">
                                <h3>Không có giao dịch đang tiến hành</h3>
                                <div>Bạn không có giao dịch đang tiến hành nào từ phiên dịch trước. Những giao dịch chưa hoàn thành được lưu tại đây.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default TatCaSanPham;