"use client"
import React, { useState} from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Menu, Row, Col } from 'antd';
import type { MenuProps } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { MenuItemType } from "antd/es/menu/interface";
import { useRouter } from "next/navigation";


const styles: React.CSSProperties = {
  width: 20,
}

const RootLayout = ({children}: React.PropsWithChildren) => {
  const router = useRouter();
  const [current, setCurrent] = useState('main');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    router.push(e.key);
  };


  const item: MenuItemType =[
    {
      label: "首页",
      key: "/",
      itemStyle: {styles}
    },
    {
      label: "分类",
      key: "category",
      itemStyle: {styles}
    }
  ].filter(Boolean)

  return(
  <html lang="en">
    <body>
      {/* <AntdRegistry> */}
        <Row style={{height: '100%', width: '100%', background: '#ffffff'}}>
          <Col span={10}>
            <HomeOutlined style={{fontSize: "24px", height:"60px", paddingLeft: "20px"}}
              onClick={() => {
                router.push("/");
              }}
            />
          </Col>
          <Col span={14}>
          <Menu  style={{ fontSize: "18px", height: "60px" }} 
             onClick={onClick} selectedKeys={[current]} mode="horizontal" items={item}></Menu>
          </Col>
        </Row>
        {children}
      {/* </AntdRegistry>    */}
    </body>
  </html>)
};
export default RootLayout;
