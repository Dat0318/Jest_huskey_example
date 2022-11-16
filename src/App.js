import React, { Suspense, useState, useEffect } from 'react';
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom';
import Auth from './routers/index.js';
import UnAuth from './routers/unAuth';
import { history } from './helpers/history.ts';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
// @ts-ignores
import ErrorBoundary from './pages/error-boundary/error-boundary.tsx';
// import { store, persistor } from './src/redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import './assets/common.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css';
export const reload = () => {
  window.location.reload();
};

const App = () => {
  const [name, setName] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    console.log('🚀 ~ file: App.js ~ line 22 ~ App ~ name', name);
    setName('');
  }, []);

  return (
    <ErrorBoundary onReset={reload}>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter navigator={history}>{token ? <Auth /> : <UnAuth />}</BrowserRouter>
          <ToastContainer />
        </Suspense>
        {/* </PersistGate> */}
      </Provider>
    </ErrorBoundary>
  );
};
export default App;
