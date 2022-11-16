import { Navigate } from 'react-router-dom';
import React, { lazy } from 'react';
import NotFound from '../pages/404/index.js';
import { Login, SignUp } from '../pages';
// @ts-ignore
const OrderList = lazy(() => import('../pages/order/index.tsx'));
// @ts-ignore
const OrderDetail = lazy(() => import('../pages/order/detail.tsx'));

export const routes = [
  {
    path: '/',
    component() {
      return <Navigate to={'/login'} />;
    },
    exact: true,
  },
  {
    path: '/order/:id',
    component: OrderDetail,
    exact: true,
  },
  {
    path: '/order',
    component: OrderList,
    exact: true,
  },
  {
    path: '*',
    component: NotFound,
    exact: true,
  },
];

export const unAuths = [
  {
    path: '/',
    component: Login,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/sign-up',
    component: SignUp,
    exact: true,
  },
];

export default routes;
