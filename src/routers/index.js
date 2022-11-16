import React, { useCallback, useMemo } from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import OrderedListOutlined from '@ant-design/icons/OrderedListOutlined';
import {
  CodepenCircleOutlined,
  InsertRowAboveOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { routes } from './app.route.tsx';

const { Header, Content, Sider } = Layout;

export const Auth = () => {
  const location = useLocation();
  const selectedKey = useMemo(() => {
    const pathWithoutFirstSlash = location?.pathname?.replace('/', '');
    return pathWithoutFirstSlash.split('/') || [];
  }, [location.pathname]);

  const renderRoute = useCallback(() => {
    return routes.map((i) => {
      const Element = i.component;
      return <Route key={i.path} exact={i.exact} path={i.path} element={<Element />} />;
    });
  }, []);

  const menus = [
    {
      key: 'products',
      icon: <InsertRowAboveOutlined />,
      label: <Link to={'/order'}>Products</Link>,
    },
    {
      key: 'orders',
      icon: <OrderedListOutlined />,
      label: <Link to={'/order'}>Orders</Link>,
    },
    {
      key: 'users',
      icon: <UserOutlined />,
      label: <Link to={'/order'}>User</Link>,
    },
    {
      key: 'config',
      icon: <SettingOutlined />,
      label: <Link to={'/order'}>Config</Link>,
    },
  ];

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div
          className="logo d-flex justify-content-center align-items-center"
          style={{ width: '100%', height: '50px' }}
        >
          <CodepenCircleOutlined style={{ fontSize: '32px', color: '#fff' }} />
        </div>
        <Menu items={menus} theme="dark" mode="inline" selectedKeys={selectedKey} />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content
          style={{
            overflow: 'initial',
            padding: '20px 50px',
          }}
        >
          <Routes>{renderRoute()}</Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Auth;
