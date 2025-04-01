"use client"
import React, {useState} from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Menu, Row, Col } from 'antd';
import type { MenuProps } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const styles: React.CSSProperties = {
  width: 20,
}
const RootLayout = ({children}: React.PropsWithChildren) => {
  const [current, setCurrent] = useState('main');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };


  const item: MenuItemType =[
    {
      label: "首页",
      key: "main",
      style: {styles}
    },
    {
      label: "分类",
      key: "catogery",
      style: {styles}
    }
  ].filter(Boolean)

  return(
  <html lang="en">
    <body>
      <AntdRegistry>
        <Row>
          <Col span={10}>
            <HomeOutlined style={{fontSize: "24px", height:"60px", paddingLeft: "20px"}}/>
          </Col>
          <Col span={14}>
          <Menu  style={{ fontSize: "18px", height: "60px" }} 
             onClick={onClick} selectedKeys={[current]} mode="horizontal" items={item}></Menu>
          </Col>
        
        </Row>
        {children}
      </AntdRegistry>  
    </body>
  </html>)
};
export default RootLayout;
