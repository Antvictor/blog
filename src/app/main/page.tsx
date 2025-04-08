"use client"

import { Avatar, Card, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";
import { EditOutlined, EllipsisOutlined,  GithubOutlined, GoogleOutlined, MailTwoTone, MenuFoldOutlined, MenuUnfoldOutlined, } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { useState } from "react";

const siderType: React.CSSProperties = {
  textAlign: "center",
  background: '#f0f2f5',
  marginLeft: '20px',
  marginTop: '100px'
  // minHeight: 120,
  // lineHeight: "120px"
}

const Main = () => {
    const [collapsed, setCollapsed] = useState(false);
return(
    <Layout>
        <Sider style={siderType} >
            
            {!collapsed ? <Card  style={{ width: 300,paddingLeft:20 }}
                extra={
                        <MenuFoldOutlined onClick={(e) => { e.stopPropagation();setCollapsed(!collapsed)}}/>
                    
                } 
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[
                <Link key="setting" href="https://github.com/Antvictor" target="blank" passHref onClick={(e) => {e.stopPropagation()}}>
                      <GithubOutlined  />
                  </Link>,
                <Link key="google" target="blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=antvictorplus@gmail.com"  onClick={(e) => {e.stopPropagation()}}>
                    <GoogleOutlined /> 
                </Link>,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
              <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                title="Card title"
                description="This is the description"
              />
                
                
              </Card> :
              <div onMouseEnter={()=>setCollapsed(!collapsed)} style={{width: '20px', height: '400px', backgroundColor: '#ffffff'}}>
                
              </div>
              }
        </Sider>
    </Layout>)
};

export default Main;