import React from 'react';
import Layout from 'antd/lib/layout';
import { Route, Routes, useLocation } from 'react-router-dom';
import { unAuths } from './app.route.tsx';

const { Content } = Layout;

export const UnAuth = () => {
  // const location = useLocation();

  return (
    <Layout style={{ height: '100vh' }}>
      <Content
        style={{
          overflow: 'initial',
          padding: '20px 50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Routes>
          {unAuths.map((i) => {
            const Element = i.component;
            return <Route key={i.path} exact={i.exact} path={i.path} element={<Element />} />;
          })}
        </Routes>
      </Content>
    </Layout>
  );
};

export default UnAuth;
