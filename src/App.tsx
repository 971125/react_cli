import './App.css';
import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),

  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),

    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [redNum, setRedNum] = useState<number[]>([])
  const [blueNum, setBlueNum] = useState(0)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const test = () => {
    let result: number[] = []
    const id = setInterval(() => {
      const num = Math.floor(Math.random() * 33 + 1)
      console.log(num, '-------')
      if (result.indexOf(num) < 0) {
        result.push(num)
      }
      if (result.length === 6) {
        result.sort((a, b) => a - b)
        setRedNum(result)
        setTimeout(() => {
          const blueNum = Math.floor(Math.random() * 16 + 1)
          setBlueNum(blueNum)
        }, 1000);
        clearInterval(id)
      }
    }, 1000)
  }
  return (
    <div>
      <div className='nav'>
        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
        <Button
          onClick={test}
        >
          出号
        </Button>
        <div>
          红球测试:{redNum.map((item, index) => <h2 style={{ color: 'red' }} key={index}>{item}</h2>)}
          蓝球测试:
          <h2 style={{ color: 'blue' }}>{blueNum}</h2>
        </div>
      </div>
    </div>
  );
};

export default App;

