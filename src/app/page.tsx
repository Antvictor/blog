"use client"

import { Avatar, Card, Col, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";
import {  EllipsisOutlined,  GithubOutlined, GoogleOutlined,  MenuFoldOutlined,  } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { useEffect, useRef, useState } from "react";
import { Content } from "antd/es/layout/layout";

const siderType: React.CSSProperties = {
  textAlign: "center",
  background: '#f0f2f5',
  marginLeft: '20px',
  marginTop: '100px',
  height: '100%'
  
  // minHeight: 120,
  // lineHeight: "120px"
}

const Main = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [cardHeight, setCardHeight] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (cardRef.current) {
        setCardHeight(cardRef.current.offsetHeight);
      }
    },[])
return(
    <Layout>
      <Col span={3}>
        <Sider style={siderType} width='300'>
            
            {!collapsed ? <Card ref={cardRef} style={{ width: '100%',paddingLeft:20 }}
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
              <div onMouseEnter={()=>setCollapsed(!collapsed)} style={{width: '20px', height: cardHeight, backgroundColor: '#ffffff'}}>
                
              </div>
              }
        </Sider>
        </Col>
        <Col span={17}>
        <Content style={{padding: '100px 0 ', }}>
          test
        </Content>
        </Col>
        <Col span={5}>
        right
        </Col>
    </Layout>)
};

export default Main;