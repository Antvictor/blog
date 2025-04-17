"use client"

import { Avatar, Card, Col, Divider, Layout, Row } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";
import {  EllipsisOutlined,  GithubOutlined, GoogleOutlined,  MenuFoldOutlined,  } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useRef, useState } from "react";
import { Content } from "antd/es/layout/layout";
import LastComments from "./main/last_commont";
import page from "./page.module.css"
import MarkdownView from "./article/info/markdown_view";
import AritleBlock from "./main/article_block";

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
        console.log(cardRef.current)
        setCardHeight(cardRef.current.offsetHeight);
      }
    },[])
return(
    <Layout >
      <Row style={{minHeight: '100vh'}}>
      <Col span={3}>
        {/* <Sider style={siderType} width='300'> */}
            
            {!collapsed ? <Card ref={cardRef} style={{ width: '100%',paddingLeft:20, marginTop: 100 }} 
                extra={
                        <MenuFoldOutlined onClick={(e) => { e.stopPropagation();console.log(collapsed);setCollapsed(!collapsed)}}/>
                    
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
        {/* </Sider> */}
        </Col>
        <Col span={17} >
        <Content >
          <div style={{paddingLeft: '20%', paddingRight: '20%',  background: "#ffffff"}}>
            <AritleBlock id="123" author="ant" createTime="2025-04-17" tags={['a','b']} previewTime={6}
            title="Nacos安装"
            content={`## 安装
123123123123123123123123
123123123123123123123123
123123123123123123123123
123123123123123123123123
遮挡遮挡遮挡`} />
<Divider orientation="left"/>
          </div>
          <Divider/>
          
        </Content>
        </Col>
        <Col span={4} className={page.main_style}>
              <LastComments  style={{background: '#ffffff'}}/>
        </Col>
        </Row>
    </Layout>)
};

export default Main;