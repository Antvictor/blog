'use client'
// MainMenu.tsx
import React, { useState } from "react";
import { Menu } from 'antd';
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";


export const MainMenu = () => {
  const router = useRouter();
  const [current, setCurrent] = useState('/');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    router.push(e.key);
  };

  const items = [
    { label: "首页", key: "/" },
    { label: "分类", key: "/category" },
  ];

  return (
    <Menu
      style={{ fontSize: "18px", height: "60px", lineHeight: '60px', marginBottom: 0 }}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
