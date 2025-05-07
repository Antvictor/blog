'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu,  Col } from 'antd';
import type { MenuProps } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import type { MenuItemType } from "antd/es/menu/interface";
// import { AntdRegistry } from "@ant-design/nextjs-registry"; // 需要再确认是否用了 SSR AntD

const styles: React.CSSProperties = {
  width: 20,
};

const LayoutShell = () => {
  const router = useRouter();
  const [current, setCurrent] = useState("/");

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    router.push(e.key);
  };

  const item: MenuItemType[] = [
    {
      label: "首页",
      key: "/",
      style: styles
    },
    {
      label: "分类",
      key: "/category",
      style: styles
    }
  ];

  return (
    // {/*<AntdRegistry>*/}
    <>
      
        <Col span={10}>
          <HomeOutlined
            style={{ fontSize: "24px", height: "60px", paddingLeft: "20px", cursor: "pointer" }}
            onClick={() => router.push("/")}
          />
        </Col>
        <Col span={14} flex="auto">
          <Menu
            style={{ fontSize: "18px", height: "60px", 
                lineHeight: '60px',  // 保证菜单项居中
                marginBottom: 0,}}
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={item}
          />
        </Col>
      {/* <main>{children}</main> */}
    </>
//  {/* </AntdRegistry> */}
  );
};

export default LayoutShell;
