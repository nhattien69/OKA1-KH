import React, { Component } from 'react'
import 'antd/dist/antd.css';
import './Form1.css'
import { Layout, Menu, Button  } from 'antd';
import {Link} from 'react-router-dom';
import Khachsan1 from './KhachSan';
import DuaDonSanBay1 from'./DuaDonSanBay'
import plane from './img/plane.png'
import hotel from './img/hotel.png'
import tietkiem from './img/tietkiem.png'
import transport from './img/transport.png'
import experience from './img/experience.png'
import rentcar from './img/rentcar.png'
import jrpass from './img/jrpass.png'
import {AiOutlineRight,AiOutlineLeft} from 'react-icons/ai';

import Muavebay1 from './Muavemaybay';

import Experience from './Experience'
import Rentcar from './Rentcar'
import JRPass from './JRPass'
const {  Content,  Sider } = Layout;


  
  


class Form1 extends Component {
    state = { 
        collapsed: false,
        layoutRight: null
     }
     toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
      clickMenu = data => {
          console.log(data.key)
          switch(data.key){
              case '1':
                return this.setState({
                    layoutRight: <Muavebay1 />
                })
                case '2':
                    return this.setState({
                        layoutRight: <Khachsan1 />
                    })
               
                

                case '4':
                        return this.setState({
                            layoutRight: <DuaDonSanBay1 />
                        })
                case '5':
                    return this.setState({
                     layoutRight: <Experience />
                })       
                case '6':
                    return this.setState({
                     layoutRight: <Rentcar />
                })       
                case '7':
                    return this.setState({
                     layoutRight: <JRPass />
                })    
                default:
                    return null;
                
                    
                        
          }

      }
    render() { 
        const { collapsed } = this.state;
        
        return ( 
            <div className="container-fluid">
                <div className='menu1'>
                    <Layout className='layout' >
                        
                        <Sider style={{backgroundColor:'#f6f6f6'}} className='sider1' collapsed={collapsed} onCollapse={this.onCollapse}>
                        
                        <Menu theme="gray" defaultSelectedKeys={['1']} mode="inline" onClick={this.clickMenu}>
                            <Menu.Item  key="1" icon={<img className="logo-items" src={plane} alt="plane" />} >
                                <span className="color-text">Vé máy bay</span> 
                            </Menu.Item>
                            <Menu.Item key="2" icon={<img className="logo-items" src={hotel} alt="hotel" />}>
                                <span className="color-text">Khách Sạn</span>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<img className="logo-items" src={tietkiem} alt="tietkiem" />} >
                                <span className="color-text">Combo Tiết Kiệm</span>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<img className="logo-items" src={transport} alt="transport" />}>
                                <span className="color-text">Đưa đón sân bay</span>
                            </Menu.Item>
                            <Menu.Item key="5" icon={<img className="logo-items" src={experience} alt="experience" />} >
                                <span className="color-text">Experience</span>
                            </Menu.Item>
                            <Menu.Item key="6" icon={<img className="logo-items" src={rentcar} alt="rentcar" />}>
                                <span className="color-text">Cho thuê xe</span>
                            </Menu.Item>
                            <Menu.Item key="7" icon={<img className="logo-items" src={jrpass} alt="jrpass" />} >
                               <span className="color-text">JR Pass</span>
                            </Menu.Item>
                            
                        </Menu>
                        
                        </Sider>
                        <Button className="btn-coll" onClick={this.toggleCollapsed} >
                         {React.createElement(this.state.collapsed ? AiOutlineRight : AiOutlineLeft)}
                        </Button>
                        {/* <div>
                            {this.state.layoutRight}
                        </div> */}
                        <Layout className="site-layout">
                            <Content style={{ margin: '0 16px',  }}>
                            <div>
                            {this.state.layoutRight}
                            {/* <Khachsan1 /> */}
                            </div>
                            </Content>
                        </Layout>
                        
                    </Layout>
                   
                    </div>
                </div>
            
         );

    }
}
 
export default Form1;