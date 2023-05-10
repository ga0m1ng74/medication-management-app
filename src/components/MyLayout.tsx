import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AreaChartOutlined,
  MedicineBoxOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import DocLogo from '../assets/doctor-standing-logo.jpeg'

const { Header, Sider, Content } = Layout;

const MyLayout = ({children}:any) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{width:'100vw',height:'100vh'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img src={DocLogo} style={{width:'100%'}} alt="DocLogo-img" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <AreaChartOutlined />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <MedicineBoxOutlined />,
              label: 'Medicine',
              children:[{
                label: 'Categories',
                key: 'admin/medicine_categories'
              },{
                label: 'Infomation',
                key: 'admin/medicine_infomation'
              }
            ]
            },
            {
              key: '3',
              icon: <FileTextOutlined />,
              label: 'Medical',
              children:[
                {
                  label: 'Articles',
                  key:'admin/medical_articles'
                },{
                  label: 'Infomation',
                  key:'admin/article_infomation'
                }
              ]
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyLayout;