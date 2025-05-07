// layout.tsx
export const metadata = {
  title: "代码旅途",
  description: '用来分享一些代码/个人想法/经验/小说等内容的小店',
}

import React from "react";
import { Row, Col } from 'antd';
import { HomeIcon } from "./components/HomeIcon";
import { MainMenu } from "./components/MainMenu";
import ICPFooter from "./components/Footer";

const RootLayout = ({children}: React.PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <Row  style={{height: '100%', width: '100%', background: '#ffffff'}}>
          <Col span={10}>
            <HomeIcon />
          </Col>

          <Col span={14}>
            <MainMenu />
          </Col>
        </Row>
        {/* 渲染子内容 */}
        {children}
        
        <ICPFooter/>
        
      </body>
    </html>
  );
};

export default RootLayout;
