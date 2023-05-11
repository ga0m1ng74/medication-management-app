import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AreaChartOutlined,
  MedicineBoxOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons';

import { GiMedicines } from 'react-icons/gi'
import { Layout, Menu, Button, theme, Dropdown, Space, Breadcrumb } from 'antd';
import type { MenuProps } from 'antd';
import { logoImg } from '../utils/Img'

const { Header, Sider, Content } = Layout;
//top right menu list data
const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" href="https://www.gaoming.tech">
        MyCenter
      </a>
    ),
  },
  {
    key: '2',
    danger: true,
    label: (
      <a href="/">
        Logout
      </a>
    )
  },
]
//side menu list data
const sideMenuList = [
  {
    key: '/admin/dashboard',
    icon: <AreaChartOutlined />,
    label: 'Dashboard',
  },
  {
    key: '/admin/medicine',
    icon: <GiMedicines />,
    label: 'Medicine',
    children: [{
      label: 'Categories',
      key: '/admin/medicine/categories'
    }, {
      label: 'Infomation',
      key: '/admin/medicine/infomation'
    }
    ]
  },
  {
    key: '/admin/medical',
    icon: <MedicineBoxOutlined />,
    label: 'Medical',
    children: [
      {
        label: 'Articles',
        key: '/admin/medical/articles'
      }, {
        label: 'Infomation',
        key: '/admin/medical/infomation'
      }
    ]
  },
  {
    key: '/admin/user',
    icon: <UserOutlined />,
    label: 'User',
  }
]
/**
 * side menu when refresh page will lost highlight
 * @param key from router get current pathname
 * @returns  from sideMenuList find the right path for MyLayout component: defaultOpenKeys & defaultSelectedKeys
 */
const refreshPagePath = (key: string) => {
  const result: string[] = []

  const findPath = (arr: any) => {
    arr.forEach((element: any) => {
      if (key.includes(element.key)) {
        result.push(element.key)
        if (element.children) findPath(element.children)
      }
    });
  }
  findPath(sideMenuList)
  return result;
}

const MyLayout = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()
  //get pathname from router
  const { pathname } = useLocation()
  const RefreshPath = refreshPagePath(pathname)
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img src={logoImg} style={{ width: '100%' }} alt="DocLogo-img" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultOpenKeys={RefreshPath}
          defaultSelectedKeys={RefreshPath}
          onClick={({ key }) => {
            // console.log(key);
            navigate(key)
          }}
          items={sideMenuList}
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
          <span className='system-title'>Medication Management System</span>

          <Dropdown menu={{ items }} className='drop-down-menu'>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Admin
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
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